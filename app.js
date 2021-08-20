const screen = document.getElementById("screen");
function insertNum(num) {
  screen.innerHTML += num;
}
function equalTo() {
  screen.innerHTML
    ? (screen.innerHTML = eval(screen.innerHTML).toFixed(3))
    : false;
}
function eraseNum() {
  screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
}
function clearInput() {
  screen.innerHTML = "";
}
