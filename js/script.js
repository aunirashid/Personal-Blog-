function openDiary() {
  const diaryCard = document.getElementById("diaryCard");

  diaryCard.classList.add("open");

  setTimeout(function () {
    document.body.classList.add("fade-out");
  }, 500);

  setTimeout(function () {
    window.location.href = "about.html";
  }, 1000);
}

const music = document.getElementById("bgMusic");
const musicPlayer = document.querySelector(".music-player");
const musicText = document.getElementById("musicText");

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicPlayer.classList.add("playing");
    musicText.textContent = "♫ Playing";
  } else {
    music.pause();
    musicPlayer.classList.remove("playing");
    musicText.textContent = "🎧 Soft Music";
  }
}

function showMessage() {
  alert("This is a sample blog post preview.");
}

function sendMessage() {
  alert("Thank you! Your message has been received.");
}