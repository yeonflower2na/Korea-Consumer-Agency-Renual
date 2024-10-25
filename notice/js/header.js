// main-menu의 li 모두 선택
let gnbItems = document.querySelectorAll('.gnb_item');
// sub-menu 선택
let gnbSubMenus = document.querySelectorAll('.gnb_submenu');

let closeTimeout; // 서브메뉴 닫기 타이머

// 서브메뉴 열기 함수
function openSubmenu(menu) {
  clearTimeout(closeTimeout); // 서브메뉴 닫기 타이머 취소
  gnbSubMenus.forEach(function(submenu) {
    submenu.classList.remove('open'); // 다른 서브메뉴 닫기
  });
  if (menu) {
    menu.classList.add('open'); // 해당 서브메뉴 열기
  }
}

// 서브메뉴 닫기 함수
function closeSubmenu() {
  closeTimeout = setTimeout(function() {
    gnbSubMenus.forEach(function(submenu) {
      submenu.classList.remove('open'); // 서브메뉴 닫기
    });
  }, 300); // 3초 후 서브메뉴 닫기
}

// 각 gnbItem에 마우스오버 시 서브메뉴 열기
gnbItems.forEach(function(gnbitem) {
  gnbitem.addEventListener('mouseenter', function() {
    let menu = document.getElementById(gnbitem.dataset.menu);
    openSubmenu(menu); // 서브메뉴 열기
  });
});

// 서브메뉴에서 마우스가 나가면 서브메뉴 닫기
gnbSubMenus.forEach(function(submenu) {
  submenu.addEventListener('mouseleave', function() {
    closeSubmenu(); // 서브메뉴 닫기 타이머 실행
  });

  submenu.addEventListener('mouseenter', function() {
    clearTimeout(closeTimeout); // 서브메뉴 위에 마우스가 있으면 닫기 취소
  });
});
