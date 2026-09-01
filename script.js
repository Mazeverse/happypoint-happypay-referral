// 추천코드를 바꾸려면 아래 값만 수정하면 됩니다.
const REFERRAL_CODE = "N380NP5Z";

const referralCode = document.getElementById("referralCode");
const copyButton = document.getElementById("copyButton");
const copyText = document.getElementById("copyText");
const toast = document.getElementById("toast");

referralCode.textContent = REFERRAL_CODE;

function showToast() {
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

async function copyReferralCode() {
  try {
    await navigator.clipboard.writeText(REFERRAL_CODE);
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = REFERRAL_CODE;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  copyText.textContent = "복사완료";
  showToast();

  setTimeout(() => {
    copyText.textContent = "복사하기";
  }, 1800);
}

copyButton.addEventListener("click", copyReferralCode);
