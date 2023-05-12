console.log('Привет');





// Scroll-animation GSAP

const rem = (px, base = 16) => {
  return (1 / base) * px + 'rem'
}

gsap.registerPlugin(ScrollTrigger);

/* animateOnClick */

window.addEventListener("scroll", animateOnClick);
window.addEventListener("click", animateOnClick);

function animateOnClick() {

  gsap.to(".main-bottel", { y: 107, duration: 2, ease: CustomEase.create("custom", "M0,0 C0,0.21 0.66,0.99 1,1 ") });

  gsap.to(".main-bottel-half-stopper, .main-bottel-stopper", {
    y: rem(-291),
    duration: 2
  });

  gsap.to(".main-circle", { width: rem(515), height: rem(515), "margin-top": rem(15), "margin-bottom": rem(259), duration: 2 });

  gsap.to(".btn-main, .main-title-text, .main-text", { opacity: 1, duration: 2.4, delay: 1 });
}

let tlMainBottel = gsap.timeline({
  scrollTrigger: {
    start: "top top",
    end: "12% center",
    scrub: 0.5,
    toggleActions: "play none none none",
    /*     markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem"
        } */
  }
})

tlMainBottel.to(".main-bottel", { y: rem(-290), duration: 20, })
  .to(".main-title-text, .btn-main", { opacity: 0, duration: 2 })


tlMainBottel.to(".main-bottel, .main-bottel-half-stopper, .main-bottel-stopper", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".use-block",
    start: "bottom bottom",
    end: "bottom top",
    scrub: true,
    toggleActions: "restart none none none",
    /*     markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem"
        } */
  }
});

/* let tlMainElem = gsap.timeline({
  scrollTrigger: {
    trigger: ".use-block",
    start: "top bottom",
    end: "center center",
    scrub: true,
    toggleActions: "restart none none none", */
/*     markers: {
      startColor: "purple",
      endColor: "fuchsia",
      fontSize: "1rem"
    } */
/*   }
}); */



/* tlMainElem.to(".btn-main", { opacity: 1, duration: 1, delay: 0.5 })
  .to(".main - title - text", { opacity: 1, duration: 1 }) */

/* gsap.to(".about-text-quality", { x: 0, opacity: 1, duration: 1.2 });
gsap.to(".about-text-tightness", { x: 0, opacity: 1, duration: 1.4 });
gsap.to(".about-text-temperature", { x: 0, opacity: 1, duration: 1.6 }); */

/* About-block */

let tlAboutText = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top bottom",
    end: "center center",
    scrub: true,
    toggleActions: "restart none none none",
    /*     markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem"
        } */
  }
});

tlAboutText.to(".about-text-quality", { x: 0, opacity: 1, duration: 1, delay: 0.5 })
  .to(".about-text-tightness", { x: 0, opacity: 1, duration: 1 })
  .to(".about-text-temperature", { x: 0, opacity: 1, duration: 1 });

/* Use-block */

let tlUseText = gsap.timeline({
  scrollTrigger: {
    trigger: ".use-block",
    start: "top bottom",
    end: "center center",
    scrub: true,
    toggleActions: "restart none none none",
    /*     markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem"
        } */
  }
});

tlUseText.to(".use-text-nature", { x: 0, opacity: 1, duration: 1, delay: 0.5 })
  .to(".use-text-gym", { x: 0, opacity: 1, duration: 1 })
  .to(".use-text-color", { x: 0, opacity: 1, duration: 1 });

/* Color-bottle-block */

let tlColorBottle = gsap.timeline({
  scrollTrigger: {
    trigger: ".color-bottel-block",
    start: "top center",
    end: "center center",
    scrub: true,
    toggleActions: "restart none none none",
    /*     markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem"
        } */
  }
});

tlColorBottle.to(".color-bottel-title", { x: 0, opacity: 1, duration: 100 })
  .to(".color-bottel-text", { x: 0, opacity: 1, duration: 100 });

/* Pocket-content-block */

let tlPocket = gsap.timeline({
  scrollTrigger: {
    trigger: ".pocket-content-block",
    start: "50% center",
    end: "80% center",
    scrub: 8,
    toggleActions: "restart none none none",
    /*     markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem"
        } */
  }
});

tlPocket.to(".pocket-backgroung-video-box", { height: rem(840), duration: 10, delay: 3 })
  .to(".pocket-block-btn", { opacity: 1, duration: 10, delay: 8 })
  .to(".pocket-block-title", { opacity: 1, "font-size": rem(52), "line-height": rem(63), duration: 10, delay: 10 })
  .to(".pocket-woman-img, .pocket-yellow-bottel-img", { opacity: 1, duration: 2, delay: 1 })


/* effects-block */

let tlEffectsBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".effects-block",
    start: "60% center",
    end: "80% center",
    scrub: 8,
    toggleActions: "restart none none none",
    /*     markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem"
        } */
  }
});

tlEffectsBlock
  .to(".effects-title", { "font-size": rem(40), "line-height": rem(48), opacity: 1, duration: 2 })
  .to(".effects-comment", { "font-size": rem(14), "line-height": rem(17), opacity: 1, color: "#d01717", duration: 2 })
  .to(".effect-text", { "font-size": rem(15), "line-height": rem(19), opacity: 1, duration: 2 })
  .to(".effect-right-block", { width: rem(495), height: rem(820), opacity: 1, duration: 1 })

/* Slider-block */

let tlSliderBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".slider-block",
    start: "50% center",
    end: "100% center",
    scrub: 8,
    toggleActions: "restart none none none",
    /*     markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem"
        } */
  }
});

tlSliderBlock
  .to(".slider-block-text", { "font-size": rem(18), duration: 2 })
  .to(".slider-block-title", { "font-size": rem(50), duration: 2 });


/* Drink-bottle-block */

let tlDrinkBottelBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".drink-main-info",
    start: "60% center",
    end: "135% center",
    scrub: 5,
    toggleActions: "restart none none none",
    /*     markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem"
        } */
  }
});

tlDrinkBottelBlock
  .to(".drink-block-waterfull", { opacity: 1, duration: 2.8, delay: 5.2 })
  .to(".drink-block-question, .drink-block-text", { "font-size": rem(18), "line-height": rem(22), opacity: 1, duration: 2.8 })
  .to(".drink-block-title", { "font-size": rem(60), "line-height": rem(73), opacity: 1, duration: 2.8 })
  .to(".btn-buy", { "max-width": rem(200), "min-width": rem(200), "padding-top": rem(13), "padding-right": rem(58), "padding-bottom": rem(13), "padding-left": rem(58), "font-size": rem(20), "line-height": rem(24), "border-radius": rem(30), opacity: 1, duration: 2.8 })
  .to(".btn-what", { "min-width": rem(271), "padding-top": rem(13), "padding-right": rem(35), "padding-bottom": rem(13), "padding-left": rem(35), "font-size": rem(20), "line-height": rem(24), "border-radius": rem(30), opacity: 1, duration: 2.8 });


/* fairytale-block */

/* let tlFairyTaleBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".drink-main-info",
    start: "60% center",
    end: "135% center",
    scrub: 5,
    toggleActions: "restart none none none",
    markers: {
      startColor: "purple",
      endColor: "fuchsia",
      fontSize: "1rem"
    }
  }
});

tlFairyTaleBlock.to(".drink-block-waterfull", { opacity: 1, duration: 2.8, delat: 5.2 })
  .to(".drink-block-question, .drink-block-text", { "font-size": rem(18), "line-height": rem(22), opacity: 1, duration: 2.8 })
  .to(".drink-block-title", { "font-size": rem(60), "line-height": rem(73), opacity: 1, duration: 2.8 })
  .to(".btn-buy", { "max-width": rem(200), "min-width": rem(200), "padding-top": rem(13), "padding-right": rem(58), "padding-bottom": rem(13), "padding-left": rem(58), "font-size": rem(20), "line-height": rem(24), "border-radius": rem(30), opacity: 1, duration: 2.8 })
  .to(".btn-what", { "min-width": rem(271), "padding-top": rem(13), "padding-right": rem(35), "padding-bottom": rem(13), "padding-left": rem(35), "font-size": rem(20), "line-height": rem(24), "border-radius": rem(30), opacity: 1, duration: 2.8 }); */

/* CRAZYCAP-BLOCK */

let tlCrazyCapBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".crazycap-block",
    start: "60% center",
    end: "115% center",
    scrub: 5,
    toggleActions: "restart none none none",
    /*     markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem"
        } */
  }
});

tlCrazyCapBlock.to(".crazycap-img", { width: rem(68), height: rem(89), "margin-top": rem(277), opacity: 1, duration: 2.8 })
  .to(".crazycap-block-title", { "font-size": rem(40), "line-height": rem(48), "margin-top": rem(70), "margin-right": "auto", "margin-bottom": rem(28), "margin-left": "auto", opacity: 1, duration: 2.8 })
  .to(".crazycap-block-text", { "font-size": rem(18), "line-height": rem(22), "margin-bottom": rem(90), opacity: 1, duration: 2.8 })
  .to(".crazycap-block-btn", { "min-width": rem(282), "padding-top": rem(13), "padding-right": rem(39), "padding-bottom": rem(13), "padding-left": rem(39), "font-size": rem(20), "line-height": rem(24), "border-radius": rem(30), opacity: 1, duration: 2.8 })

/* REVIEWS-BLOCK */

let tlReviewsBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".reviews-block",
    start: "115% center",
    end: "145% center",
    scrub: 5,
    toggleActions: "restart none none none",
    /*     markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem"
        } */
  }
});

tlReviewsBlock
  .to(".reviews-block-title", { y: 0, opacity: 0.5, duration: 1 })
  .to(".reviews-block-title", { y: 20, opacity: 1, duration: 1 })
  .to(".reviews-block-content-margaret", { x: 20, y: -20, opacity: 0.5, duration: 1 })
  .to(".reviews-block-content-margaret", { x: 0, y: 0, opacity: 1, duration: 1 })
  .to(".reviews-block-content-peter", { y: -20, opacity: 0.5, duration: 1 })
  .to(".reviews-block-content-peter", { x: 0, y: 0, opacity: 1, duration: 1 })
  .to(".reviews-block-content-oisha", { x: -20, y: -20, opacity: 0.5, duration: 1 })
  .to(".reviews-block-content-oisha", { x: 0, y: 0, opacity: 1, duration: 1 })


/* SOCIAL-BLOCK */

let tlSochialBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".social-block",
    start: "30% center",
    end: "60% center",
    scrub: 5,
    toggleActions: "restart none none none",
    /*     markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem"
        } */
  }
});

tlSochialBlock.to(".social-block-title", { "font-size": rem(40), "line-height": rem(48), opacity: 1, duration: 2.8 })
  .to(".social-block-text", { "font-size": rem(18), "line-height": rem(22), opacity: 1, duration: 2.8 })
  .to(".social-block-image", { "scaleX": 1, "scaleY": 1, duration: 1 })








// Slick-slider

$(document).ready(function () {
  $('.slider-carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true
  });
});
























// Аnimation by scroll

/* function anim() {
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

anim(); */