function hide() {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
  setInterval(function () {
    preloader.classList.add('preloader-hidden');
  }, 3000);
}
let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("preloader__progress");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
window.addEventListener("load", hide);
window.addEventListener("load", move);

/*Drag__Drop*/
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(zhopa) {
  zhopa.dataTransfer.setData("text", zhopa.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}