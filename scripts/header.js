const isSubPage = window.location.pathname.includes('/pages/');

function routePath(routeName) {
  const routes = isSubPage
    ? {
        home: '../index.html',
        subpage: 'subpage.html',
        notice: 'notice.html',
      }
    : {
        home: 'index.html',
        subpage: 'pages/subpage.html',
        notice: 'pages/notice.html',
      };

  return routes[routeName] || '#none';
}

const gnbMenuItems = [
  {
    label: '\uC18C\uBE44\uC790 \uC548\uC804',
    href: '#none',
    menuId: 'menu01',
  },
  {
    label: '\uD53C\uD574 \uAD6C\uC81C',
    href: routePath('subpage'),
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
    href: routePath('notice'),
    menuId: 'menu05',
  },
];

function updateSharedNavigationLinks() {
  const homeLink = routePath('home');
  const subpageLink = routePath('subpage');
  const noticeLink = routePath('notice');

  document.querySelectorAll('.sitemap_logo a, .logo_area a, .logo_sig a').forEach(function(link) {
    link.setAttribute('href', homeLink);
  });

  document.querySelectorAll('.mobile_menu').forEach(function(menu) {
    const slides = menu.querySelectorAll('.swiper-slide a');

    if (slides[1]) {
      slides[1].setAttribute('href', subpageLink);
    }

    if (slides[5]) {
      slides[5].setAttribute('href', noticeLink);
    }
  });
}

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
updateSharedNavigationLinks();

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
