// 변수 설정
let tabButtons = document.querySelectorAll(".user_tab");
let tabContents = document.querySelectorAll(".user_menu_list");

// 각 탭 버튼에 클릭 이벤트 추가
tabButtons.forEach(function(button){
  // 클릭할 때마다 실행될 함수
  button.addEventListener('click', function(){
    // 클릭된 버튼에서 data-tab 속성 값을 가져옴
    // data-tab : 탭 번호
    let tabNumber = button.getAttribute("data-menu");
    
    // 모든 탭 버튼에서 active 제거
    tabButtons.forEach(function(btn){
      btn.classList.remove("active");
    });

    // 클릭한 버튼에만 active 추가
    button.classList.add("active");

    // 모든 탭 콘텐츠에서 active 제거하여 숨김
    tabContents.forEach(function(tabcon){
      tabcon.classList.remove("active");
    });
    
    // 클릭한 탭 번호에 해당하는 콘텐츠를 찾아서 active 추가하여 화면에 표시
    // 이 때 HTML 해당 탭 콘텐츠의 ID는 tab - 탭번호 형식으로 되어 있어야 함
    document.getElementById(`menu-${tabNumber}`).classList.add("active");
  });
});

/*
  swiper 라이브러리를 사용하여 슬라이드 사용
  각 탭에 따라 슬라이드가 다르게 작동
  swiper는 화면에 여러 개의 슬라이드 요소를 보여주고, 좌우로 넘길 수 있게 함
*/

// 첫 번째 슬라이드
var footerswiper1 = new Swiper(".footer-menu-1", {
  slidesPerView : 6,
  spaceBetween: 10, 
  loop : true,  
  navigation: {
    nextEl: ".user_menu_next",
    prevEl: ".user_menu_prev",
  },
  // 한 번에 몇 개의 슬라이드를 넘길지 결정
  slidesPerGroup: 6,
});
// console.log(swiper1);

// 두 번째 슬라이드
var footerswiper2 = new Swiper(".footer-menu-2", {
  slidesPerView : 6,
  spaceBetween: 10, 
  loop : true,  
  navigation: {
    nextEl: ".user_menu_next",
    prevEl: ".user_menu_prev",
  },
  slidesPerGroup: 6,
});

// 세 번째 슬라이드
var footerswiper3 = new Swiper(".footer-menu-3", {
  slidesPerView : 6,
  spaceBetween: 10, 
  loop : true,  
  navigation: {
    nextEl: ".user_menu_next",
    prevEl: ".user_menu_prev",
  },
  slidesPerGroup: 6,
});


let siteButton = document.querySelectorAll(".siteBtn");
let listBox = document.querySelectorAll(".site_list");
// console.log(siteButton, listBox);


// 올라오는 메뉴
const familyBtn = document.querySelector('.familybtn');
const familyContent = document.querySelector('#family_content'); 
let toggleArrow = document.getElementById('arrow');

familyBtn.addEventListener('click', function() {
  // 드롭다운 콘텐츠의 최대 높이 설정 (스크롤은 max-height를 넘으면 생김)
  if (familyContent.style.maxHeight === '0px' || !familyContent.style.maxHeight) {
    familyContent.style.maxHeight = '260px'; 
    familyContent.style.overflowY = 'auto'; 
    toggleArrow.classList.add('rotate'); //dropdown에 높이가 생기면 rotate
  }
  else {
    familyContent.style.maxHeight = '0px'; 
    familyContent.style.overflowY = 'hidden'; 
    toggleArrow.classList.remove('rotate'); //dropdown에 높이가 사라지면 원래대로
  }
});

// 올라오는 메뉴
const siteaBtn = document.querySelector('.siteabtn');
const siteaContent = document.querySelector('#sitea_content'); 
let toggleArrow2 = document.getElementById('arrow2');


siteaBtn.addEventListener('click', function() {
  // 드롭다운 콘텐츠의 최대 높이 설정 (스크롤은 max-height를 넘으면 생김)
  if (siteaContent.style.maxHeight === '0px' || !siteaContent.style.maxHeight) {
    siteaContent.style.maxHeight = '260px'; 
    siteaContent.style.overflowY = 'auto'; 
    toggleArrow2.classList.add('rotate'); //dropdown에 높이가 생기면 rotate
  }
  else {
    siteaContent.style.maxHeight = '0px'; 
    siteaContent.style.overflowY = 'hidden'; 
    toggleArrow2.classList.remove('rotate'); //dropdown에 높이가 사라지면 원래대로
  }
});