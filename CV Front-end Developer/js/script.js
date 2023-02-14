
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


/* sliler */
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
})

/* function increase() {
  let SPEED = 10;
  let limit = parseInt(document.querySelector('.soft-skills-persent').innerHTML, 10);
  console.log(limit);

  for (let i = 0; i <= limit; i++) {
    setTimeout(function () {
      document.querySelector('.soft-skills-persent').innerHTML = i + "%";
    }, SPEED * i);
  }
}

increase(); */



/* scroll amimation */

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









