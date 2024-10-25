const rowsPerPage = 11; // 한 페이지에 보여줄 항목 수
const rows = document.querySelectorAll('#noticesite_table tbody tr'); // 목록 항목들
const rowsCount = rows.length; // 전체 항목 개수
const pageCount = Math.ceil(rowsCount / rowsPerPage); // 총 페이지 수
const numbers = document.querySelector('#numbers'); // 페이지 번호를 담을 ol
const maxPagesToShow = 10; // 한 번에 보여줄 페이지 번호 수
let currentPageGroup = 0; // 현재 페이지 그룹을 추적 (0이 첫 그룹)

// 페이지네이션 버튼 추가
function displayPageNumbers(startPage) {
  numbers.innerHTML = ''; // 기존 페이지 번호 초기화
  let endPage = Math.min(startPage + maxPagesToShow - 1, pageCount); 
  // 현재 그룹의 마지막 페이지 계산

  for (let i = startPage; i <= endPage; i++) {
    numbers.innerHTML += `<li><a href="#">${i}</a></li>`;
  }

  // 페이지 버튼 클릭 이벤트 추가
  const numberBtn = numbers.querySelectorAll('a');
  numberBtn.forEach(function (item, idx) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      // 모든 버튼에서 active 클래스 제거
      numberBtn.forEach(nb => nb.classList.remove('active'));
      // 클릭된 버튼에 active 클래스 추가
      this.classList.add('active');
      
      // 선택된 페이지에 맞는 항목 표시
      displayRow(startPage + idx - 1); // startPage부터 시작해서 idx 추가
    });
  });

  // 첫 번째 페이지를 기본으로 활성화
  numberBtn[0].classList.add('active');
  displayRow(startPage - 1); // 첫 페이지 항목 표시
}

// 항목을 페이지에 맞게 표시
function displayRow(pageIndex) {
  let start = pageIndex * rowsPerPage;
  let end = start + rowsPerPage;

  // 모든 행 숨기기
  rows.forEach(row => row.style.display = 'none');

  // 현재 페이지에 해당하는 행만 표시
  Array.from(rows).slice(start, end).forEach(row => row.style.display = '');
}

// 이전/다음 페이지 그룹 버튼
const prevPageBtn = document.querySelector('.pagination_left img');
const nextPageBtn = document.querySelector('.pagination_right img');

// 이전 페이지 그룹으로 이동
prevPageBtn.addEventListener('click', function () {
  if (currentPageGroup > 0) {
    currentPageGroup--;
    displayPageNumbers(currentPageGroup * maxPagesToShow + 1);
  }
});

// 다음 페이지 그룹으로 이동
nextPageBtn.addEventListener('click', function () {
  if ((currentPageGroup + 1) * maxPagesToShow < pageCount) {
    currentPageGroup++;
    displayPageNumbers(currentPageGroup * maxPagesToShow + 1);
  }
});

// 초기 페이지네이션 및 첫 페이지 항목 표시
document.addEventListener('DOMContentLoaded', function () {
  displayPageNumbers(1); // 첫 번째 페이지 그룹을 보여줌
});
