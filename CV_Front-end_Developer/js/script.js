
/* burger menu */
const menuEl = document.querySelector('.burger-menu');
const menuButtonEl = document.querySelector('.header-burger-menu-btn');

let countMenu = 0;

menuButtonEl.addEventListener("click", function (e) {
  countMenu = ++countMenu;
  (countMenu % 2 === 1) ? (menuEl.style.display = "block") : (menuEl.style.display = "none");
});


/* more projects button */
const projectNew = document.querySelector('.keto');
const moreProjectBtn = document.querySelector('.more-project-btn');

moreProjectBtn.addEventListener('click', function (e) {
  projectNew.style.display = 'block';
});

/* hard-skills modal */
const modal = document.querySelector('.modal');
const skillBox = document.querySelectorAll('[skill-box-modal]');
const modalClose = document.querySelectorAll('.modal-close');
const skillDiscription = document.querySelectorAll('.description-element-block');

skillBox.forEach(item => {
  item.addEventListener('click', event => {
    let $this = event.currentTarget;
    let skillBoxId = $this.getAttribute('skill-box-modal');
    let skillDiscription = document.getElementById(skillBoxId);

    modal.style.display = "block";
    skillDiscription.classList.add('show');

    modalClose.forEach(item => {
      item.addEventListener('click', event => {
        modal.style.display = "none";
        skillDiscription.classList.remove('show');
      });
    });
  })
})


/* slider */
const leftBtn = document.querySelector('#right');
const rightBtn = document.querySelector('#left');

leftBtn.addEventListener('click', slide);
rightBtn.addEventListener('click', slide);

function slide(e) {
  e.target.id === 'left' ? scroll(-290) : scroll(290);
}

function scroll(val) {
  document.querySelector('.facts-slider-box').scrollBy({
    left: val,
    behavior: 'smooth'
  });
}

/* progress bar */
let progress = document.querySelectorAll('.soft-skills-color-line');

progress.forEach(function (item) {
  item.style.width = item.getAttribute('data-done') + '%';
  item.style.opacity = 1;
  item.style.transition = "transform 5s ease 0.3s";
})

/* scroll animation */
function anim() {
  var anims = document.querySelectorAll(".anim");
  for (var i = 0; i < anims.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = anims[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      anims[i].classList.add("active");
    } else {
      anims[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", anim);

anim();










