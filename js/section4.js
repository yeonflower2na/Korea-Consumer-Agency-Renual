var talkswiper = new Swiper(".talkBox", {
  slidesPerView: 4, // 기본으로 데스크탑에서 4개의 슬라이드
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: { 
      slidesPerView: 4, 
      spaceBetween: 30,
    },
    768: { 
      slidesPerView: 2, 
      grid: {
        rows: 2, 
      },
      spaceBetween: 20,
    }, 
    0: { 
      slidesPerView: 2,
      grid: {
        rows: 2, 
      },
      spaceBetween: 20,
    },
  },
});

var eventswiper = new Swiper(".eventBox", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

var bannerswiper = new Swiper(".bannerBox", {
  slidesPerView : 6,
  spaceBetween: 12, 
  loop : true,  
  slidesPerGroup: 2,
  navigation: {
    nextEl: ".right",
    prevEl: ".left",
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false,}
});
//재생 정지버튼 이벤트
document.querySelector('.bannerBoxIn').addEventListener('click', function(){
  swiper1.autoplay.stop();
  swiper2.autoplay.stop();
  swiper3.autoplay.stop();
  swiper4.autoplay.stop();
});