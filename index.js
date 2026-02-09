const noBtn = document.getElementById("noBtn");

let noCount = 0;

noBtn.onclick = () => {
  noCount++;

  if (noCount === 1) {
    noBtn.innerText = "Are you sure? 😏";
  } else if (noCount === 2) {
    noBtn.innerText = "Think again 😌";
  } else if (noCount === 3) {
    noBtn.innerText = "You don’t mean that 🙄";
  } else {
    noBtn.innerText = "Okay okay… YES 💖";
    noBtn.onclick = () => document.getElementById("yesBtn").click();
  }
};

const yesBtn = document.getElementById("yesBtn");

yesBtn.onclick = () => {
  document.getElementById("question").style.display = "none";
  document.getElementById("yesResponse").style.display = "block";
};