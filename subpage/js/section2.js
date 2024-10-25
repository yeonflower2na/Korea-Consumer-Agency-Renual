let aniElement = document.querySelectorAll('.sideBtn');

window.addEventListener('scroll', function(){
  let scrollPos = document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  aniElement.forEach(aniElement => {
    let elemPos = aniElement.offsetTop;
    if(scrollPos > elemPos - windowHeight + 1080){
      aniElement.classList.add('animate');
    }else{
      aniElement.classList.remove('animate');
    }
  });
});

let chatCounseling = document.querySelector('.chattCounseling');
let chatImage = document.querySelector('.chatting_cs');
let chatText = document.querySelector('.chattCounseling > i');

// 이미지 텍스트 번갈아보이게 설정
setInterval(function() {
  // 이미지가 보이는 상태면 텍스트를 보여주고 이미지를 숨김
  if (chatImage.style.display !== 'none') {
    chatImage.style.display = 'none';
    chatText.style.display = 'block';
  } 
  // 텍스트가 보이는 상태면 이미지를 보여주고 텍스트를 숨김
  else {
    chatImage.style.display = 'block';
    chatText.style.display = 'none';
  }
}, 3000);




let aniElement2 = document.querySelectorAll('.sideBtn2');

window.addEventListener('scroll', function(){
  let scrollPos = document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  aniElement2.forEach(aniElement2 => {
    let elemPos = aniElement2.offsetTop;
    if(scrollPos > elemPos - windowHeight + 1080){
      aniElement2.classList.add('animate2');
    }else{
      aniElement2.classList.remove('animate2');
    }
  });
});



// 소비자원메뉴
let consumerMenu = document.querySelectorAll('.consumer_menu');
let consumerLists = document.querySelectorAll('.consumer_list'); 

consumerMenu.forEach(function(conmenu) {
  conmenu.addEventListener('click', function() {
    // 모든 메뉴 항목에서 active 클래스 제거
    consumerMenu.forEach(function(t) {
      t.classList.remove('active');
    });

    // 클릭한 메뉴 항목에 active 클래스 추가
    this.classList.add('active');

    // 모든 consumer_list에서 active 클래스 제거
    consumerLists.forEach(function(conlist) {
      conlist.classList.remove('active');
    });

    // 클릭한 메뉴에 해당하는 consumer_list에 active 클래스 추가
    let listToShow = this.querySelector('.consumer_list');
    if (listToShow) {
      listToShow.classList.add('active');
    }
    
    let listToShow2 = document.querySelector(`#${this.dataset.target}`);
    if (listToShow2) {
      listToShow2.classList.add('active'); // 0번째만 보이게 설정
    }
  });
});

//새소식
var newsswiper1 = new Swiper(".news-tab-1", {
  slidesPerView : 3,
  spaceBetween: 30, 
  loop : true,  
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".news_next",
    prevEl: ".news_prev",
  },
});
var newsswiper2 = new Swiper(".news-tab-2", {
  slidesPerView : 3,
  spaceBetween: 30, 
  slidesPerGroup: 1,
  loop : true,  
  navigation: {
    nextEl: ".news_next",
    prevEl: ".news_prev",
  },
});

// 클릭시 이벤트 처리
//탭 클릭시 탭 콘텐츠가 보이게
let newsTabs = document.querySelectorAll('.newstab');
let newsTabContents = document.querySelectorAll('.news-tab-content');
let newsTabSlides = document.querySelectorAll('.news-slide');

newsTabs.forEach(function(newtab){
  //클릭이벤트 
  newtab.addEventListener('click', function(){
    //모든 탭에서 active제거 
    newsTabs.forEach(function(newtab){
      newtab.classList.remove('active');
    })
    //클릭된 탭만 active클래스 추가
    //this 이벤트가 작동된 그것
    this.classList.add('active');
    //모든 콘텐츠를 숨기고
    newsTabContents.forEach(function(content){
      content.classList.remove('active');
    });
    //클릭된 탭에 해당하는 콘텐츠가 표시
    let tabId = this.dataset.tab;
    document.getElementById(`tab-${tabId}`).classList.add('active');

    newsTabSlides.forEach(function(slide) {
      slide.classList.remove('active'); // 모든 슬라이드에서 active 제거
    });

    // 첫 번째 슬라이드에 active 클래스 추가
    if (newsTabSlides.length > 0) {
      newsTabSlides[0].classList.add('active'); // 첫 번째 슬라이드에 active 추가
    }

    // 해당 탭의 swiper 슬라이드 항상 0번째가 먼저 보이게
    if (tabId === '1') {
      newsswiper1.slideTo(0, 0); // 첫 슬라이드로 이동 
      newsswiper1.update();
    }
    if (tabId === '2') {
      newsswiper2.slideTo(0, 0); 
      newsswiper2.update();
    }
  });
});