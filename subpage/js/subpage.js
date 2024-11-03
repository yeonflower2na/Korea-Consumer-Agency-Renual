let currentStep = 1;

function openPopup() {
  document.getElementById('popup').style.display = "block";
  document.getElementById('popupBackground').style.display = "block"; // 배경 표시
  goToStep(1); // 팝업이 열릴 때 1단계로 초기화
}

function closePopup() {
  document.getElementById('popup').style.display = "none";
  document.getElementById('popupBackground').style.display = "none"; // 배경 숨김
  resetSteps(); // 팝업 닫을 때 단계 초기화
}

function selectAnswer(step, answer) {
  const messageElement = document.getElementById(`message${step}`);
  const nextBtn = document.getElementById(`nextBtn${step}`);
  const checkAnswerBtn = document.querySelector(`#step${step} .controls button:nth-child(2)`); // 답변확인 버튼
  const yesButton = document.querySelector(`#step${step} .answer button:nth-child(1)`);
  const noButton = document.querySelector(`#step${step} .answer button:nth-child(2)`);

  // 모든 버튼 스타일 초기화
  yesButton.classList.remove('selected');
  noButton.classList.remove('selected');

  // Yes와 No 조건에 따라 메시지와 버튼 상태 설정
  if (answer === 'yes') {
    yesButton.classList.add('selected');
    messageElement.innerText = 
      step === 1 ? "이미 타 기관에서 진행중인 경우 피해구제 절차가 어렵습니다." :
      step === 2 ? "계약 해지 및 환급이 어려울 수 있으며, 타 채널 접수된 경우 해당 절차에 따라 진행하세요." :
      "금융감독원 신고 업체는 금융감독원에, 미등록 사업자는 수사기관에 신고하세요.";
    nextBtn.disabled = true;  // 다음 단계로 이동 제한
    nextBtn.classList.remove('active'); // 다음단계 버튼 비활성화
    checkAnswerBtn.classList.add('active'); // 답변확인 버튼에 active 추가
  } else {
    noButton.classList.add('selected');
    messageElement.innerText = 
      step === 1 || step === 2 ? "다음단계를 눌러주세요" : "피해구제 신청 가능. 온라인, 방문, 우편으로 신청하세요.";
    nextBtn.disabled = false; // 다음 단계로 이동 가능
    nextBtn.classList.add('active'); // 다음단계 버튼 활성화
    checkAnswerBtn.classList.remove('active'); // No일 때 답변확인 버튼의 active 제거
  }
}

function goToStep(step) {
  currentStep = step;
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`step${i}`).style.display = i === step ? "block" : "none";
  }
}

function goNextStep() {
  if (currentStep < 3) {
    currentStep += 1; // 현재 단계 증가
    goToStep(currentStep); // 증가된 단계로 이동
  }
}

function goPreviousStep() {
  if (currentStep > 1) {
    currentStep -= 1; // 현재 단계 감소
    goToStep(currentStep); // 감소된 단계로 이동
  }
}

function resetSteps() {
  currentStep = 1;
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`step${i}`).style.display = i === 1 ? "block" : "none";
    document.getElementById(`nextBtn${i}`).disabled = true; 
    document.getElementById(`nextBtn${i}`).classList.remove('active'); 
    document.getElementById(`message${i}`).innerText = ""; 

    // 답변확인 버튼의 active 클래스 초기화
    const checkAnswerBtn = document.querySelector(`#step${i} .controls button:nth-child(2)`);
    checkAnswerBtn.classList.remove('active');
  }
}
