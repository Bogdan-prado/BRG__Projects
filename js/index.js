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

function onmousedown(event) {
  event.preventDefault();

  let shiftX = event.clientX - dragItem.getBoundingClientRect().left;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newLeft < 0) { newLeft = 0; }
    let rightEdge = slider.offsetWidth - dragItem.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    dragItem.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

};

dragItem.ondragstart = function () {
  return false;
};

dragItem.addEventListener("mousedown", onmousedown);
