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
let dragItem = slider.querySelector('#drag1');
let shiftX;
let newLeft;
let rightEdge;
function onmousedown(event) {
  event.preventDefault();
  if (event.type === "touchstart") {
    shiftX = event.touches[0].clientX - dragItem.getBoundingClientRect().left;
  } else {
    shiftX = event.clientX - dragItem.getBoundingClientRect().left;
  }
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('ontouchmove', onMouseMove);
  document.addEventListener('ontouchend', onMouseUp);

  function onMouseMove(event) {
    if (event.type === "touchmove") {
      newLeft = event.touches[0].clientX - shiftX - slider.getBoundingClientRect().left;
    } else {
      newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
    }
    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newLeft < 0) { newLeft = 0; }
    rightEdge = slider.offsetWidth - dragItem.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    dragItem.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('ontouchend', onMouseUp);
    document.removeEventListener('ontouchmove', onMouseMove);
  }

};

dragItem.ondragstart = function () {
  return false;
};

dragItem.addEventListener("mousedown", onmousedown);
dragItem.addEventListener("touchstart", onmousedown);
