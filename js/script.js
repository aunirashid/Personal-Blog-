/* =========================
   HOMEPAGE OPEN ANIMATION
========================= */

function openDiary() {
  const diaryCard = document.getElementById("diaryCard");

  if (diaryCard) {
    diaryCard.classList.add("open");
  }

  setTimeout(function () {
    document.body.classList.add("fade-out");
  }, 500);

  setTimeout(function () {
    window.location.href = "about.html";
  }, 1000);
}


/* =========================
   SOFT MUSIC PLAYER
========================= */

const music = document.getElementById("bgMusic");
const musicPlayer = document.querySelector(".music-player");
const musicText = document.getElementById("musicText");

function toggleMusic() {
  if (!music || !musicPlayer || !musicText) {
    alert("Music player is not available on this page.");
    return;
  }

  if (music.paused) {
    music.play()
      .then(function () {
        musicPlayer.classList.add("playing");
        musicText.innerHTML = "♫ Playing";
      })
      .catch(function (error) {
        console.log("Music error:", error);
        alert("Music cannot play. Please check your song.mp3 file.");
      });
  } else {
    music.pause();
    musicPlayer.classList.remove("playing");
    musicText.innerHTML = "🎧 Soft Music";
  }
}


/* =========================
   BLOG PAGE BUTTON
========================= */

function showMessage() {
  alert("This is a sample blog post preview.");
}


/* =========================
   CONTACT FORM BUTTON
========================= */

function sendMessage() {
  alert("Thank you! Your message has been received.");
}