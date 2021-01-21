const prevbutton = document.querySelector('.left');
const nextbutton = document.querySelector('.right');
var slider = document.querySelectorAll('.main');

let counter = 0;

function index() {
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = "none"
  }
  slider[counter].style.display = "flex"
}

nextbutton.addEventListener('click', function () {
  counter++;
  if (counter > slider.length - 1) {
    counter = 0;
  }
  index();
})

prevbutton.addEventListener("click", function () {
  counter++;

  if (counter > slider.length - 1) {
    counter = 0;
  }
  index();
})


$(document).ready(function () {
  $('.burger').click(function () {
    $(this).toggleClass('open');
    $('body').toggleClass('menuopen');
  });
});