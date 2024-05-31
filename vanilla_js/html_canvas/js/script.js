const container = document.getElementById("container");
const screen = document.getElementById("screen");
const btn = document.getElementById("btn-full-screen");

function toggleFullScreen() {
  const exitFsMessage = "Exit Full Screen";
  const fsMessage = "Full Screen";
  container.classList.toggle("container_full-screen");
  screen.classList.toggle("screen_full-screen");
  btn.classList.toggle("btn-full-screen_full-screen");

  btn.innerHTML = btn.innerHTML == fsMessage ? exitFsMessage : fsMessage;
}
