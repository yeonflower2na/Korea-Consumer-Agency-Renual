let siteMapBtn = document.querySelector('.sitemap_btn');
let siteMap = document.querySelector('.sitemap');
let siteMapClose = document.querySelector('.sitemap_close');

siteMapBtn.addEventListener('click', function() {
  // .open 클래스를 추가/제거하여 애니메이션 효과 적용
  if (!siteMap.classList.contains('open')) {
    siteMap.classList.add('open');
  } else {
    siteMap.classList.remove('open');
  }
});

siteMapClose.addEventListener('click', function() {
  siteMap.classList.remove('open'); // 닫을 때도 부드럽게
});


let mobilesiteMapBtn = document.querySelector('.mobile_sitemap');

mobilesiteMapBtn.addEventListener('click', function() {
  // .open 클래스를 추가/제거하여 애니메이션 효과 적용
  if (!siteMap.classList.contains('open')) {
    siteMap.classList.add('open');
  } else {
    siteMap.classList.remove('open');
  }
});

siteMapClose.addEventListener('click', function() {
  siteMap.classList.remove('open'); // 닫을 때도 부드럽게
});