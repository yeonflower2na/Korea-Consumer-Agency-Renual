// 공지사항
let noticeButton = document.querySelectorAll(".notice_tab");
let noticeContent = document.querySelectorAll(".notice_menu_list");

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
  loop : true,  
  navigation: {
    nextEl: ".notice_next",
    prevEl: ".notice_prev",
  },
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
  loop : true,  
  navigation: {
    nextEl: ".notice_next",
    prevEl: ".notice_prev",
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  slidesPerGroup: 1,
});
document.querySelector('.notice_stop').addEventListener('click', function(){
  noticeswiper1.autoplay.stop();
  noticeswiper2.autoplay.stop();
});

document.querySelector('.notice_stop').addEventListener('click', function(){
  noticeswiper1.autoplay.stop();
  noticeswiper2.autoplay.stop();
});

// 반응형 기능 멈춤 설정
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

// 화면 크기 변경 시마다 설정 업데이트
window.addEventListener('resize', updateSwiperSettings);

// 처음 페이지 로드 시에도 확인
updateSwiperSettings();


// 카드뉴스
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


// 소비자 시대
var consumerswiper = new Swiper('.consumerBox', { 
  slidesPerView: 5,
  spaceBetween: 15,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".consumer-next", // 다음 슬라이드로 이동하는 버튼의 클래스명
    prevEl: ".consumer-prev", // 이전 슬라이드로 이동하는 버튼의 클래스명
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
      activeSlide.src = 'section3/consumerNews1.png';
    } else if (originalSrc.includes('section3/consumerNews2-1.png')) {
      activeSlide.src = 'section3/consumerNews2.png';
    } else if (originalSrc.includes('section3/consumerNews3-1.png')) {
      activeSlide.src = 'section3/consumerNews3.png';
    } else if (originalSrc.includes('section3/consumerNews4-1.png')) {
      activeSlide.src = 'section3/consumerNews4.png';
    } else if (originalSrc.includes('section3/consumerNews5-1.png')) {
      activeSlide.src = 'section3/consumerNews5.png';
    } else if (originalSrc.includes('section3/consumerNews6-1.png')) {
      activeSlide.src = 'section3/consumerNews6.png';
    } else if (originalSrc.includes('section3/consumerNews7-1.png')) {
      activeSlide.src = 'section3/consumerNews7.png';
    }
  }
}

function revertAllImages() {
  const slides = document.querySelectorAll('.swiper-slide .consumerimg');
  slides.forEach(function(img) {
    const currentSrc = img.src;
    if (currentSrc.includes('section3/consumerNews1.png')) {
      img.src = 'section3/consumerNews1-1.png';
    } else if (currentSrc.includes('section3/consumerNews2.png')) {
      img.src = 'section3/consumerNews2-1.png';
    } else if (currentSrc.includes('section3/consumerNews3.png')) {
      img.src = 'section3/consumerNews3-1.png';
    } else if (currentSrc.includes('section3/consumerNews4.png')) {
      img.src = 'section3/consumerNews4-1.png';
    } else if (currentSrc.includes('section3/consumerNews5.png')) {
      img.src = 'section3/consumerNews5-1.png';
    } else if (currentSrc.includes('section3/consumerNews6.png')) {
      img.src = 'section3/consumerNews6-1.png';
    } else if (currentSrc.includes('section3/consumerNews7.png')) {
      img.src = 'section3/consumerNews7-1.png';
    }
  });
}
