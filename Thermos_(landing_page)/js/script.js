// Reload page on top

$(document).ready(function () {
  $('html, body').scrollTop(0);

  $(window).on('load', function () {
    setTimeout(function () {
      $('html, body').scrollTop(0);
    }, 0);
  });
});


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

// Scroll-animation GSAP

const rem = (px, base = 16) => {
  return (1 / base) * px + 'rem'
}

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({ defaults: { duration: 1, ease: CustomEase.create("custom", "M0,0 C0,0.21 0.66,0.99 1,1 ") } })

tl.to(".main-bottle", { y: rem(107) })
  .to(".main-bottle-half-stopper, .main-bottle-stopper", { y: rem(-291), delay: -1 })
  .to(".main-circle", { width: rem(515), height: rem(515), "margin-top": rem(15), "margin-bottom": rem(259), delay: -1 })
  .to(".btn-main, .main-title-text, .main-text", { opacity: 1, delay: 0 });


let tlMainbottle = gsap.timeline({
  scrollTrigger: {
    start: ".5% top",
    end: "12% center",
    scrub: 0.5,
    toggleActions: "play none none none",
  }
})

tlMainbottle.to(".main-bottle", { y: rem(-290), duration: 20, })
  .to(".main-title-text, .btn-main", { opacity: 0, duration: 10 })


tlMainbottle.to(".main-bottle, .main-bottle-half-stopper, .main-bottle-stopper", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".use-block",
    start: "bottom bottom",
    end: "bottom top",
    scrub: 1,
    toggleActions: "restart none none none",
  }
});

/* About-block */

let tlAboutText = gsap.timeline({
  defaults: { x: 0, opacity: 1, ease: "power4.out" },
  scrollTrigger: {
    trigger: ".about",
    start: "50px center",
    end: "45% center",
    scrub: true,
    toggleActions: "restart none none none",
  }
});

tlAboutText.to(".about-text-quality", { duration: 10 })
  .to(".about-text-tightness", { duration: 10, delay: 1 })
  .to(".about-text-temperature", { duration: 10, delay: 2 });

/* Use-block */

let tlUseText = gsap.timeline({
  defaults: { x: 0, opacity: 1, ease: "power4.out" },
  scrollTrigger: {
    trigger: ".use-block",
    start: "50px center",
    end: "45% center",
    scrub: 1,
    toggleActions: "restart none none none",
  }
});

tlUseText.to(".use-text-nature", { duration: 10 })
  .to(".use-text-gym", { duration: 10, delay: 1 })
  .to(".use-text-color", { duration: 10, delay: 2 });

/* Color-bottle-block */

let tlColorBottle = gsap.timeline({
  defaults: { x: 0, opacity: 1 },
  scrollTrigger: {
    trigger: ".color-bottle-block",
    start: "top center",
    end: "45% center",
    scrub: true,
    toggleActions: "restart none none none",
  }
});

tlColorBottle.to(".color-bottle-title", { duration: 100, ease: "power4.out" })
  .to(".color-bottle-text", { duration: 5, ease: "power4.out" });

/* Pocket-content-block */

let tlPocket = gsap.timeline({
  scrollTrigger: {
    trigger: ".pocket-content-block",
    start: "50% center",
    end: "80% center",
    scrub: 8,
    toggleActions: "restart none none none",
  }
});

tlPocket.to(".pocket-backgroung-video-box", { height: rem(840), duration: 1, delay: 0 })
  .to(".pocket-block-title", { opacity: 1, "font-size": rem(52), "line-height": rem(63), duration: 1, delay: 0 })
  .to(".pocket-block-btn", { opacity: 1, duration: 1, delay: 0 })
  .to(".pocket-woman-img, .pocket-yellow-bottle-img", { opacity: 1, duration: 1, delay: -2 })


/* Effects-block */

let tlEffectsBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".effects-block",
    start: "50% center",
    end: "80% center",
    scrub: 8,
    toggleActions: "restart none none none",
  }
});

tlEffectsBlock
  .to(".effects-title", { "font-size": rem(40), "line-height": rem(48), opacity: 1, duration: 2 })
  .to(".effects-comment", { "font-size": rem(14), "line-height": rem(17), opacity: 1, color: "#d01717", duration: 2, delay: -2 })
  .to(".effect-text", { "font-size": rem(15), "line-height": rem(19), opacity: 1, duration: 2, delay: -2 })
  .to(".effect-right-block", { width: rem(495), height: rem(820), opacity: 1, duration: 2, delay: -2 })

/* Slider-block */

let tlSliderBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".slider-block",
    start: "40% center",
    end: "80% center",
    scrub: 8,
    toggleActions: "restart none none none",
  }
});

tlSliderBlock
  .to(".slider-block-text", { "font-size": rem(18), duration: 2 })
  .to(".slider-block-title", { "font-size": rem(50), duration: 2, delay: -2 });


/* Drink-bottle-block */

let tlDrinkbottleBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".drink-main-info",
    start: "30% center",
    end: "135% center",
    scrub: 5,
    toggleActions: "restart none none none",
  }
});

tlDrinkbottleBlock
  .to(".drink-block-waterfull", { opacity: 1, duration: 3, delay: 3 })
  .to(".drink-block-question, .drink-block-text", { "font-size": rem(18), "line-height": rem(22), opacity: 1, duration: 3 })
  .to(".drink-block-title", { "font-size": rem(60), "line-height": rem(73), opacity: 1, duration: 3, delay: -3 })
  .to(".btn-buy", { "max-width": rem(200), "min-width": rem(200), "padding-top": rem(13), "padding-right": rem(58), "padding-bottom": rem(13), "padding-left": rem(58), "font-size": rem(20), "line-height": rem(24), "border-radius": rem(30), opacity: 1, duration: 3 })
  .to(".btn-what", { "min-width": rem(271), "padding-top": rem(13), "padding-right": rem(35), "padding-bottom": rem(13), "padding-left": rem(35), "font-size": rem(20), "line-height": rem(24), "border-radius": rem(30), opacity: 1, duration: 3, delay: -3 });


/* Fairytale-block */

let tlFairyTaleBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".fairytale-block",
    start: "55% center",
    end: "95% center",
    scrub: 5,
    toggleActions: "restart none none none",
  }
});

tlFairyTaleBlock.to(".fairytale-block-text", { opacity: 1, duration: 3 })
  .to(".fairytale-block-title", { "font-size": rem(40), "line-height": rem(55), opacity: 1, duration: 3, delay: -3 })

/* Crazycap-block */

let tlCrazyCapBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".crazycap-block",
    start: "60% center",
    end: "115% center",
    scrub: 5,
    toggleActions: "restart none none none",
  }
});

tlCrazyCapBlock.to(".crazycap-img", { width: rem(68), height: rem(89), "margin-top": rem(277), opacity: 1, duration: 3 })
  .to(".crazycap-block-title", { "font-size": rem(40), "line-height": rem(48), "margin-top": rem(70), "margin-right": "auto", "margin-bottom": rem(28), "margin-left": "auto", opacity: 1, duration: 3, delay: -3 })
  .to(".crazycap-block-text", { "font-size": rem(18), "line-height": rem(22), "margin-bottom": rem(90), opacity: 1, duration: 3, delay: -3 })
  .to(".crazycap-block-btn", { "min-width": rem(282), "padding-top": rem(13), "padding-right": rem(39), "padding-bottom": rem(13), "padding-left": rem(39), "font-size": rem(20), "line-height": rem(24), "border-radius": rem(30), opacity: 1, duration: 3, delay: -3 })

/* Reviews-block */

let tlReviewsBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".reviews-block",
    start: "55% center",
    end: "75% center",
    scrub: 5,
    toggleActions: "restart none none none",
  }
});

tlReviewsBlock
  .to(".reviews-block-title", { y: 20, opacity: 1, duration: 1, ease: "power4.out" })
  .to(".reviews-block-content-margaret", { x: 400, y: -200, opacity: 1, duration: 1 })
  .to(".reviews-block-content-peter", { x: 0, y: -200, opacity: 1, duration: 1, delay: -1 })
  .to(".reviews-block-content-oisha", { x: -400, y: -200, opacity: 1, duration: 1, delay: -1 })


/* Social-block*/

let tlSochialBlock = gsap.timeline({
  scrollTrigger: {
    trigger: ".social-block",
    start: "40% center",
    end: "100% center",
    scrub: 5,
    toggleActions: "restart none none none",
  }
});

tlSochialBlock.to(".social-block-title", { opacity: 1, duration: 1 })
  .to(".social-block-text", { opacity: 1, duration: 1, delay: -1 })
  .to(".social-block-image", { "scaleX": 1, "scaleY": 1, duration: 1, delay: -1 })









