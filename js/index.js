/*index html preloader functions*/
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



/*Receive Coordinates based on the position of the mouse*/
function showCoordsX(event) {
  let random = Math.random();
  let x = event.clientX;
  let outputX = Math.floor(Math.random(x) * (-3000000000000000));
  let coor = `${outputX} : X`;
  document.getElementById("x").innerHTML = coor;
}

function showCoordsY(event) {
  let random = Math.random();
  let y = event.clientY;
  let outputY = Math.random(x) * (2);
  let coor = `${outputY.toFixed(17)} : Y`;
  document.getElementById("y").innerHTML = coor;
}
function showCoordsZ(event) {
  let random = Math.random();
  let z = event.clientX;
  let outputZ = Math.random(z) * (123123123321);
  let coor = `${outputZ.toFixed(3)} : Z`;
  document.getElementById("z").innerHTML = coor;
}

/*Full Screen Function*/
var fullscreen = document.documentElement;
function openFullscreen() {
  if (fullscreen.requestFullscreen) {
    fullscreen.requestFullscreen();
  } else if (fullscreen.webkitRequestFullscreen) { /* Safari */
    fullscreen.webkitRequestFullscreen();
  } else if (fullscreen.msRequestFullscreen) { /* IE11 */
    fullscreen.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

/*test*/

/*hidden/side menu*/
  function toggleNav() {
  let nav = document.querySelector(".sidenav__first__block");
    nav.style.width = window.getComputedStyle(nav).width === "0px" ? "calc(653px + (1632 - 653) * ((100vw - 768px) / (1920 - 768)))" : "0px";
    let close = document.querySelector(".menu__title__opener");
    close.innerHTML = window.getComputedStyle(nav).width === "0px" ? "close" : "menu";
  }
document.querySelector('.menu__title__opener').onclick = toggleNav;