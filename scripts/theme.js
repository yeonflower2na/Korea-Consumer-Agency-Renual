// ?좏깮
let themeToggleButton = document.getElementById('darkimg');
let bodyElement = document.body;
let themeIcon = document.querySelector('#darkimg img'); // 踰꾪듉 ?덉쓽 img ?붿냼 ?좏깮
let themeText = document.querySelector('#darkimg .theme_text'); // 踰꾪듉 ?덉쓽 span ?붿냼 ?좏깮
let kcaDesc = document.querySelector('#kcabtn img');
let footerLogo = document.querySelector('.footer_logo img');
const assetBase = bodyElement.dataset.assetBase || 'assets/images';

function assetPath(file) {
  return `${assetBase}/${file}`;
}

// 珥덇린 踰꾪듉 ?띿뒪??諛??꾩씠肄??ㅼ젙
themeIcon.src = assetPath('darkmode.png');
themeText.textContent = 'Dark Theme';
kcaDesc.src = assetPath('kcabtn1.png');
footerLogo.src = assetPath('logo_gray.png')

// 踰꾪듉 ?대┃???뚮쭏 蹂寃??⑥닔
themeToggleButton.addEventListener('click', function() {
  // ?쇱씠???뚮쭏媛 ?곸슜?섏뼱 ?덈떎硫?
  if (bodyElement.classList.contains("light_theme")) {
    // ?ㅽ겕 ?뚮쭏濡?蹂寃?
    bodyElement.classList.remove("light_theme");
    bodyElement.classList.add("dark_theme");

    // ?꾩씠肄?諛??띿뒪??蹂寃?
    themeIcon.src = assetPath('lightmode.png');
    themeText.textContent = 'Light Theme';
    // section2 ?대?吏 蹂寃?
    kcaDesc.src = assetPath('kcabtn1-2.png');
    footerLogo.src = assetPath('footer-logo_white.png')
  } else {
    // ?쇱씠???뚮쭏濡?蹂寃?
    bodyElement.classList.remove("dark_theme");
    bodyElement.classList.add("light_theme");

    // ?꾩씠肄?諛??띿뒪??蹂寃?
    themeIcon.src = assetPath('darkmode.png');
    themeText.textContent = 'Dark Theme';
    // section2 ?대?吏 蹂寃?
    kcaDesc.src = assetPath('kcabtn1.png');
    footerLogo.src = assetPath('logo_gray.png')
  }
});

