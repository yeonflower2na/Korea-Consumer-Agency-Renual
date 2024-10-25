let mobileMenuswiper = new Swiper(".mobile_nav", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,  
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".mobile_menu_next",
  },
});

const slides = document.querySelectorAll('.swiper-slide');

slides.forEach(function(slide) {
  slide.addEventListener('click', function() {
    slides.forEach(function(s) {
      s.classList.remove('active');
    });
    this.classList.add('active');
  });
});




// 화면 크기에 따라 초기 display 설정 함수
function setDisplayWidth() {
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.map-list').forEach(function(content) {
      content.style.display = 'none';
    });
  } else {
    document.querySelectorAll('.map-list').forEach(function(content) {
      content.style.display = ''; // 기본 상태로 되돌리기
    });
  }
}

// 페이지 로드 시 화면 크기 체크
setDisplayWidth();

// 화면 크기 변경될 때 체크
window.addEventListener('resize', setDisplayWidth);

// 클릭 이벤트 (768px 이하일 때만 동작)
document.querySelectorAll('.map-title').forEach(function(trigger) {
  trigger.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      let content = trigger.nextElementSibling;
      let isExpanded = trigger.classList.contains('active');

      // 아코디언 메뉴가 이미 열려있으면 닫기
      if (isExpanded) {
        content.style.display = 'none';
        trigger.classList.remove('active');
      } else {
        // 다른 메뉴 닫기
        document.querySelectorAll('.map-list').forEach(function(content) {
          content.style.display = 'none';
        });
        document.querySelectorAll('.map-title').forEach(function(btn) {
          btn.classList.remove('active');
        });

        content.style.display = 'block';
        trigger.classList.add('active');
      }
    }
  });
});
