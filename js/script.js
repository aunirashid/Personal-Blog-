/* =========================
   PAGE TRANSITION
========================= */

function openDiary(){
  document.body.classList.add("fade-out");

  setTimeout(function(){
    window.location.href = "about.html";
  }, 800);
}


/* =========================
   SOFT MUSIC PLAYER
========================= */

const music = document.getElementById("bgMusic");
const musicPlayer = document.querySelector(".music-player");
const musicText = document.getElementById("musicText");

function toggleMusic(){
  if(!music || !musicPlayer || !musicText){
    return;
  }

  if(music.paused){
    music.play()
      .then(function(){
        musicPlayer.classList.add("playing");
        musicText.innerHTML = "♫ Playing";
      })
      .catch(function(){
        alert("Please check your music/song.mp3 file.");
      });
  }
  else{
    music.pause();
    musicPlayer.classList.remove("playing");
    musicText.innerHTML = "🎧 Soft Music";
  }
}


/* =========================
   CONTACT FORM
========================= */

function sendMessage(){
  alert("Thank you! Your message has been received.");
}