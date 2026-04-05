const section3AssetBase = document.body.dataset.assetBase || 'assets/images';

function section3Asset(file) {
  return `${section3AssetBase}/${file}`;
}

// 怨듭??ы빆
let noticeButton = document.querySelectorAll(".notice_tab");
let noticeContent = document.querySelectorAll(".notice_menu_list");
const noticePrevButton = document.querySelector(".notice_prev");
const noticeNextButton = document.querySelector(".notice_next");
const noticeStopButton = document.querySelector(".notice_stop");

noticeButton.forEach(function(noticeBtn){
  noticeBtn.addEventListener('click', function(){
    let noticeTabNumber = noticeBtn.getAttribute("data-target");
    noticeButton.forEach(function(noticeTabBtn){
      noticeTabBtn.classList.remove("active");
    });
    noticeBtn.classList.add("active");
    noticeContent.forEach(function(noticeCon){
      noticeCon.classList.remove("active");
    });
    document.getElementById(`target-${noticeTabNumber}`).classList.add("active");
  });
});
var noticeswiper1 = new Swiper(".notice-swiper-target-1", {
  direction: "vertical",
  slidesPerView: 4,
  spaceBetween: 0,
  mousewheel: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  slidesPerGroup: 1,
});
var noticeswiper2 = new Swiper(".notice-swiper-target-2", {
  direction: "vertical",
  slidesPerView: 4,
  spaceBetween: 0,
  mousewheel: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  slidesPerGroup: 1,
});

function getActiveNoticeSwiper() {
  const activeNoticeMenu = document.querySelector(".notice_menu_list.active");
  if (!activeNoticeMenu) {
    return noticeswiper1;
  }

  return activeNoticeMenu.id === "target-2" ? noticeswiper2 : noticeswiper1;
}

if (noticePrevButton) {
  noticePrevButton.addEventListener("click", function () {
    getActiveNoticeSwiper().slidePrev();
  });
}

if (noticeNextButton) {
  noticeNextButton.addEventListener("click", function () {
    getActiveNoticeSwiper().slideNext();
  });
}

if (noticeStopButton) {
  noticeStopButton.addEventListener("click", function () {
    const activeNoticeSwiper = getActiveNoticeSwiper();
    const isRunning = activeNoticeSwiper.autoplay && activeNoticeSwiper.autoplay.running;

    if (isRunning) {
      noticeswiper1.autoplay.stop();
      noticeswiper2.autoplay.stop();
      noticeStopButton.setAttribute("aria-pressed", "true");
      return;
    }

    noticeswiper1.autoplay.start();
    noticeswiper2.autoplay.start();
    noticeStopButton.setAttribute("aria-pressed", "false");
  });
}

// 諛섏쓳??湲곕뒫 硫덉땄 ?ㅼ젙
function updateSwiperSettings() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    noticeswiper1.autoplay.stop();
    noticeswiper1.params.mousewheel = false;
    noticeswiper2.autoplay.stop();
    noticeswiper2.params.mousewheel = false;
  } else {
    noticeswiper1.autoplay.start();
    noticeswiper1.params.mousewheel = true;
    noticeswiper2.autoplay.start();
    noticeswiper2.params.mousewheel = true;
  }
}

// ?붾㈃ ?ш린 蹂寃??쒕쭏???ㅼ젙 ?낅뜲?댄듃
window.addEventListener('resize', updateSwiperSettings);

// 泥섏쓬 ?섏씠吏 濡쒕뱶 ?쒖뿉???뺤씤
updateSwiperSettings();


// 移대뱶?댁뒪
var cardswiper = new Swiper(".cardBox", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  slidesPerGroup: 1,
});


// ?뚮퉬???쒕?
var consumerswiper = new Swiper('.consumerBox', { 
  slidesPerView: 5,
  spaceBetween: 15,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".consumer-next", // ?ㅼ쓬 ?щ씪?대뱶濡??대룞?섎뒗 踰꾪듉???대옒?ㅻ챸
    prevEl: ".consumer-prev", // ?댁쟾 ?щ씪?대뱶濡??대룞?섎뒗 踰꾪듉???대옒?ㅻ챸
  },
  slidesPerGroup: 1,
  initialSlide: 0,
  slideToClickedSlide: true,
  on: {
    init: function() { 
      changeImageUrl();
      adjustCenterSlide();
    },
    slideChangeTransitionEnd: function () {
      changeImageUrl(); 
      adjustCenterSlide();
    },
    slideChangeTransitionStart: function () {
      revertAllImages();
      adjustCenterSlide();
    }
  }
});

function adjustCenterSlide() {
  const slides = document.querySelectorAll('.consumerBoxIn .swiper-slide');
  slides.forEach(function (slide) {
    if (slide.classList.contains('swiper-slide-active')) {
      slide.style.zIndex = '999';
      slide.style.transform = 'scale(1.1)';
      slide.style.transition = 'transform 0.6s ease, z-index 0.6s ease'; 
    } else {
      slide.style.zIndex = '1'; 
      slide.style.transform = 'scale(1)'; 
      slide.style.transition = 'transform 0.6s ease, z-index 0.6s ease'; 
    }
  });
}

function changeImageUrl() {
  const activeSlide = document.querySelector('.swiper-slide-active .consumerimg');
  if (activeSlide) {
    const originalSrc = activeSlide.src;
    if (originalSrc.includes('section3/consumerNews1-1.png')) {
      activeSlide.src = section3Asset('consumerNews1.png');
    } else if (originalSrc.includes('section3/consumerNews2-1.png')) {
      activeSlide.src = section3Asset('consumerNews2.png');
    } else if (originalSrc.includes('section3/consumerNews3-1.png')) {
      activeSlide.src = section3Asset('consumerNews3.png');
    } else if (originalSrc.includes('section3/consumerNews4-1.png')) {
      activeSlide.src = section3Asset('consumerNews4.png');
    } else if (originalSrc.includes('section3/consumerNews5-1.png')) {
      activeSlide.src = section3Asset('consumerNews5.png');
    } else if (originalSrc.includes('section3/consumerNews6-1.png')) {
      activeSlide.src = section3Asset('consumerNews6.png');
    } else if (originalSrc.includes('section3/consumerNews7-1.png')) {
      activeSlide.src = section3Asset('consumerNews7.png');
    }
  }
}

function revertAllImages() {
  const slides = document.querySelectorAll('.swiper-slide .consumerimg');
  slides.forEach(function(img) {
    const currentSrc = img.src;
    if (currentSrc.includes('section3/consumerNews1.png')) {
      img.src = section3Asset('consumerNews1-1.png');
    } else if (currentSrc.includes('section3/consumerNews2.png')) {
      img.src = section3Asset('consumerNews2-1.png');
    } else if (currentSrc.includes('section3/consumerNews3.png')) {
      img.src = section3Asset('consumerNews3-1.png');
    } else if (currentSrc.includes('section3/consumerNews4.png')) {
      img.src = section3Asset('consumerNews4-1.png');
    } else if (currentSrc.includes('section3/consumerNews5.png')) {
      img.src = section3Asset('consumerNews5-1.png');
    } else if (currentSrc.includes('section3/consumerNews6.png')) {
      img.src = section3Asset('consumerNews6-1.png');
    } else if (currentSrc.includes('section3/consumerNews7.png')) {
      img.src = section3Asset('consumerNews7-1.png');
    }
  });
}
