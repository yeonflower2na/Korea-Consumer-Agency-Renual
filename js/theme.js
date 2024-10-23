// 선택
let themeToggleButton = document.getElementById('darkimg');
let bodyElement = document.body;
let themeIcon = document.querySelector('#darkimg img'); // 버튼 안의 img 요소 선택
let themeText = document.querySelector('#darkimg .theme_text'); // 버튼 안의 span 요소 선택
let kcaDesc = document.querySelector('#kcabtn img');
let footerLogo = document.querySelector('.footer_logo img');

// 초기 버튼 텍스트 및 아이콘 설정
themeIcon.src = 'header/darkmode.png';
themeText.textContent = 'Dark Theme';
kcaDesc.src = 'section2/kcabtn1.png';
footerLogo.src = 'footer/logo_gray.png'

// 버튼 클릭시 테마 변경 함수
themeToggleButton.addEventListener('click', function() {
  // 라이트 테마가 적용되어 있다면
  if (bodyElement.classList.contains("light_theme")) {
    // 다크 테마로 변경
    bodyElement.classList.remove("light_theme");
    bodyElement.classList.add("dark_theme");

    // 아이콘 및 텍스트 변경
    themeIcon.src = 'header/lightmode.png';
    themeText.textContent = 'Light Theme';
    // section2 이미지 변경
    kcaDesc.src = 'section2/kcabtn1-2.png';
    footerLogo.src = 'footer/logo_white.png'
  } else {
    // 라이트 테마로 변경
    bodyElement.classList.remove("dark_theme");
    bodyElement.classList.add("light_theme");

    // 아이콘 및 텍스트 변경
    themeIcon.src = 'header/darkmode.png';
    themeText.textContent = 'Dark Theme';
    // section2 이미지 변경
    kcaDesc.src = 'section2/kcabtn1.png';
    footerLogo.src = 'footer/logo_gray.png'
  }
});
