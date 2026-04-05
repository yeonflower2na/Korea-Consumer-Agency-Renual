const gnbMenuItems = [
  {
    label: '\uC18C\uBE44\uC790 \uC548\uC804',
    href: '#none',
    menuId: 'menu01',
  },
  {
    label: '\uD53C\uD574 \uAD6C\uC81C',
    href: 'pages/subpage.html',
    menuId: 'menu02',
  },
  {
    label: '\uBD84\uC7C1 \uC870\uC815',
    href: '#none',
    menuId: 'menu03',
  },
  {
    label: '\uC2A4\uB9C8\uD2B8 \uCEE8\uC288\uBA38',
    href: '#none',
    menuId: 'menu04',
  },
  {
    label: '\uC18C\uBE44\uC790 \uB274\uC2A4 \uBC0F \uC815\uBCF4',
    href: 'pages/notice.html',
    menuId: 'menu05',
  },
];

function renderGnbMenu() {
  const gnbList = document.querySelector('#gnb > ul');
  const sitemapButton = gnbList?.querySelector('.sitemap_btn');

  if (!gnbList || !sitemapButton || gnbList.querySelector('.gnb_item')) {
    return;
  }

  const menuMarkup = gnbMenuItems.map(function(item) {
    return `
      <li class="gnb_item" data-menu="${item.menuId}">
        <a href="${item.href}">
          <h5>${item.label}</h5>
        </a>
      </li>
    `;
  }).join('');

  sitemapButton.insertAdjacentHTML('beforebegin', menuMarkup);
}

renderGnbMenu();

const gnbNav = document.getElementById('gnb');
const gnbWrap = document.querySelector('.gnb_wrap');
const gnbItems = document.querySelectorAll('.gnb_item');
const gnbSubMenus = document.querySelectorAll('.gnb_submenu');

let closeTimeout;

function clearCloseTimer() {
  clearTimeout(closeTimeout);
}

function openSubmenu(menu) {
  clearCloseTimer();

  gnbSubMenus.forEach(function(submenu) {
    submenu.classList.remove('open');
  });

  if (menu) {
    menu.classList.add('open');
  }
}

function closeSubmenu() {
  clearCloseTimer();
  closeTimeout = setTimeout(function() {
    gnbSubMenus.forEach(function(submenu) {
      submenu.classList.remove('open');
    });
  }, 150);
}

function isInsideHeaderMenu(target) {
  if (!target) {
    return false;
  }

  return Boolean(target.closest('#gnb, .gnb_wrap'));
}

gnbItems.forEach(function(gnbItem) {
  gnbItem.addEventListener('mouseenter', function() {
    const targetMenu = document.getElementById(gnbItem.dataset.menu);
    openSubmenu(targetMenu);
  });

  gnbItem.addEventListener('mouseleave', function(event) {
    if (!isInsideHeaderMenu(event.relatedTarget)) {
      closeSubmenu();
    }
  });
});

gnbSubMenus.forEach(function(submenu) {
  submenu.addEventListener('mouseenter', function() {
    clearCloseTimer();
    openSubmenu(submenu);
  });

  submenu.addEventListener('mouseleave', function() {
    closeSubmenu();
  });
});

if (gnbNav) {
  gnbNav.addEventListener('mouseleave', function(event) {
    if (!isInsideHeaderMenu(event.relatedTarget)) {
      closeSubmenu();
    }
  });
}

if (gnbWrap) {
  gnbWrap.addEventListener('mouseleave', function(event) {
    if (!isInsideHeaderMenu(event.relatedTarget)) {
      closeSubmenu();
    }
  });
}
