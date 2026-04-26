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
  loopedSlides: 7,
  centeredSlides: false,
  roundLengths: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".consumer-next", // ?ㅼ쓬 ?щ씪?대뱶濡??대룞?섎뒗 踰꾪듉???대옒?ㅻ챸
    prevEl: ".consumer-prev", // ?댁쟾 ?щ씪?대뱶濡??대룞?섎뒗 踰꾪듉???대옒?ㅻ챸
  },
  slidesPerGroup: 1,
  initialSlide: 5,
  slideToClickedSlide: true,
  on: {
    init: function() { 
      updateConsumerCenterSlide();
      changeImageUrl();
    },
    slideChangeTransitionEnd: function () {
      updateConsumerCenterSlide();
      changeImageUrl(); 
    },
    slideChangeTransitionStart: function () {
      revertAllImages();
    }
  }
});

function updateConsumerCenterSlide() {
  const consumerBox = document.querySelector('.consumerBox');
  const slides = document.querySelectorAll('.consumerBoxIn .swiper-slide');
  const boxRect = consumerBox ? consumerBox.getBoundingClientRect() : null;
  let centerSlide = document.querySelector('.consumerBox .swiper-slide-active');

  if (boxRect) {
    const boxCenterX = boxRect.left + (boxRect.width / 2);
    const visibleSlides = Array.from(slides)
      .filter(function (slide) {
        const rect = slide.getBoundingClientRect();
        return rect.right > boxRect.left && rect.left < boxRect.right;
      })
      .map(function (slide) {
        const rect = slide.getBoundingClientRect();
        const slideCenterX = rect.left + (rect.width / 2);
        return {
          slide: slide,
          distance: Math.abs(slideCenterX - boxCenterX),
        };
      });
    
    if (visibleSlides.length > 0) {
      visibleSlides.sort(function (a, b) {
        return a.distance - b.distance;
      });
      centerSlide = visibleSlides[0].slide;
    }
  }

  slides.forEach(function (slide) {
    slide.classList.remove('consumer-visual-active');

    if (slide === centerSlide) {
      slide.classList.add('consumer-visual-active');
      slide.style.zIndex = '999';
    } else {
      slide.style.zIndex = '1';
    }
  });
}

function getConsumerImageName(src) {
  const match = src.match(/consumerNews(\d+)(-1)?\.png$/);
  if (!match) {
    return null;
  }

  return {
    index: match[1],
    isDefault: match[2] === '-1',
  };
}

function changeImageUrl() {
  const activeSlide = document.querySelector('.consumerBox .consumer-visual-active .consumerimg');
  if (activeSlide) {
    const imageName = getConsumerImageName(activeSlide.src);
    if (imageName && imageName.isDefault) {
      activeSlide.src = section3Asset(`consumerNews${imageName.index}.png`);
    }
  }
}

function revertAllImages() {
  const slides = document.querySelectorAll('.consumerBox .swiper-slide .consumerimg');
  slides.forEach(function(img) {
    const imageName = getConsumerImageName(img.src);
    if (imageName && !imageName.isDefault) {
      img.src = section3Asset(`consumerNews${imageName.index}-1.png`);
    }
  });
}
