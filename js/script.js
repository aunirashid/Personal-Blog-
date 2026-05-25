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