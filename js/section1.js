// 모든 섹션과 버튼을 선택
const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('.snb_wrap button');

// 스크롤 이벤트 핸들러
window.addEventListener('scroll', () => {
  let clickSection = '';

  // 현재 스크롤 위치에 해당하는 섹션 찾기
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 50) { // 약간의 마진(50px)을 줘서 자연스럽게 전환
      clickSection = section.getAttribute('id');
    }
  });

  // 버튼에서 active 클래스 추가 및 제거
  buttons.forEach(button => {
    const anchor = button.querySelector('a');
    const square = button.querySelector('.square');
    const text = button.querySelector('p');
    
    if (anchor.getAttribute('href') === `#${clickSection}`) {
      square.classList.add('active'); // square에 active 클래스 추가
      text.classList.add('active'); // 텍스트도 활성화
    } else {
      square.classList.remove('active');
      text.classList.remove('active');
    }
  });
});


// 검색창
// input keyword 선택
let searchInput = document.querySelector('.search_keyword');
let searchPopup = document.querySelector('.search_box_popup');

// 검색창에 포커스가 갈 때 팝업 열기
searchInput.addEventListener('focus', function() {
  searchPopup.style.maxHeight = '320px'; // 팝업 높이 설정
  searchPopup.style.opacity = '1'; // 투명도 설정
});

// 팝업 외의 영역을 클릭했을 때 팝업 닫기
document.addEventListener('click', function(event) {
  if (!searchInput.contains(event.target) && !searchPopup.contains(event.target)) {
    searchPopup.style.maxHeight = '0'; // 팝업 높이 0으로
    searchPopup.style.opacity = '0'; // 투명도 0으로
  }
});

// 팝업이나 검색창을 클릭할 때는 닫히지 않도록 이벤트 중지
searchPopup.addEventListener('click', function(event) {
  event.stopPropagation();
});
