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

/*hidden/side menu*/
  function toggleNav() {
    let nav = document.querySelector(".sidenav__main__block");
    let shadow = document.querySelector(".shadow");
    let social__media = document.querySelector(".social__media");
    let close = document.querySelector(".menu__title__opener");
    if(window.innerWidth >= 768){
    nav.style.width = window.getComputedStyle(nav).width === "0px" ? "calc(768px + (1632 - 768) * ((100vw - 768px) / (1920 - 768)))" : "0px";
    shadow.style.backgroundColor = window.getComputedStyle(nav).width === "0px" ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)";
    shadow.style.zIndex = window.getComputedStyle(nav).width === "0px" ? "1" : "0";
}  else {
    nav.style.width = window.getComputedStyle(nav).width === "0px" ? "100vw" : "0px";
    social__media.style.display = window.getComputedStyle(nav).width === "0px" ? "flex" : "none";
} 
    close.innerHTML = window.getComputedStyle(nav).width === "0px" ? "close" : "menu";
  }
document.querySelector('.menu__title__opener').onclick = toggleNav;
document.querySelector('.menu__title__blocks').addEventListener("touchstart", toggleNav);


/*TEST*/
function openMenu(evt, tabname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").onmouseover(openMenu(event, 'about'));
// function for the mobile menu
function openNav() {
  let sidenav__third__block, j;
  sidenav__third__block = document.querySelectorAll(".sidenav__third__block");
  if (window.innerWidth <= 768) {
    for (j = 0; j < sidenav__third__block.length; j++) {
      sidenav__third__block[j].style.width = "100%";
    }
  }
}
function closeNav() {
  let sidenav__third__block, j;
  sidenav__third__block = document.querySelectorAll(".sidenav__third__block");
  if (window.innerWidth <= 768) {
    for (j = 0; j < sidenav__third__block.length; j++) {
      sidenav__third__block[j].style.width = "0";
    }
  }
}

/*Main section aside__menu function*/
function openAsideMenu(evt,aside__link){
  let i, aside__menu__links, aside__menu__content__blocks;
  aside__menu__links = document.querySelectorAll(".aside__menu__links");
  for( i = 0; i < aside__menu__links.length; i++){
    aside__menu__links[i].style.visibility = "hidden";
  }
  aside__menu__content__blocks = document.querySelectorAll(".aside__menu__content__blocks");
  for (i = 0; i < aside__menu__content__blocks.length; i++) {
    aside__menu__content__blocks[i].className = aside__menu__content__blocks[i].className.replace(" active", "");
  }
  document.getElementById(aside__link).style.visibility = "visible";
  evt.currentTarget.className += " active";
}




function mainSlider(event) {
  let answer = event.deltaY;
  let test = document.querySelectorAll(".test");
  if (answer < 0) {
    for(let i = 0; i < test.length; i++){
      test[0].style.opacity = "0";

    }
    } else {
            
}

}






/*
function mainSlider(event) {
  let answer = event.deltaY;
  let test = document.querySelectorAll(".test");
  test.slice = [].slice;
    for(let i = 0; i < test.length; i++){
      if (answer < 0) {
    let result = test.slice(i,i + 2);
    for(let j = 0; j < result.length; j++){
      let result2 = result.slice(j, j + 1);
      result2[j].style.opacity = "0";
      let result3 = result.slice(j + 1);
      result3[j].style.opacity = "1"; 
    }

      } else {

      }
    }
}*/

