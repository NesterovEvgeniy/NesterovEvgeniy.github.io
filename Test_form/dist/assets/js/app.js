!function(){document.querySelector(".form__person-name").addEventListener("input",(function(e){const t=e.target.value.replace(/[^a-zA-Z]/g,"");e.target.value=t}));const e=document.querySelector('input[type="tel"]');Inputmask({mask:"+7 (9 9 9) 9 9 9 - 9 9 - 9 9",showMaskOnHover:!0}).mask(e);const t=document.querySelector(".form__person-email");Inputmask({mask:"*{1,20}[.*{1,20}]@*{1,20}.*{2,4}",greedy:!1,clearIncomplete:!0,onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z-_]",casing:"lower"}}}).mask(t);const o=document.querySelector(".application-btn"),n=(document.querySelector(".application-form"),getComputedStyle(document.documentElement).getPropertyValue("--color-decor"));form.onchange=function(){const e=document.body.getElementsByClassName("application-btn")[0];e.disabled?(e.disabled=!1,o.style.background=n,o.style.border="none",o.classList.add("application-btn--active")):(e.disabled=!0,o.style.background="#2a2a2a",o.style.scale="99%",o.classList.remove("application-btn--active"))}}(),function(){const e=document.querySelector(".footer__address"),t=document.querySelector(".popup__map");e.addEventListener("click",(function(){t.style.display="block"})),t.addEventListener("click",(function(){t.style.display="none"}))}(),$(document).ready((function(){$("#form").submit((function(){return""==document.forms.namedItem.value||""==document.forms.value?(valid=!1,valid):($.ajax({type:"POST",url:"../../index.php",data:$(this).serialize()}).done((function(){$(this).find("input").val(""),$("#form").trigger("reset")})),!1)}))})),function(){const e=document.querySelector(".menu__btn"),t=document.querySelector(".menu-mobile__list");e.addEventListener("click",(function(){t.classList.toggle("menu-mobile__list--active")})),document.addEventListener("click",(function(o){t.contains(o.target)||e.contains(o.target)||t.classList.remove("menu-mobile__list--active")}))}(),function(){const e=document.querySelectorAll(".work__cases-popup-btn"),t=document.querySelectorAll(".popup__cases-wrapper"),o=document.querySelectorAll(".case-popup-link");e.forEach(((e,o)=>{e.addEventListener("click",(e=>{e.stopPropagation(),t[o].style.display="block"}))})),o.forEach(((e,o)=>{e.addEventListener("click",(e=>{e.stopPropagation(),t[o].style.display="block"}))})),t.forEach((e=>{e.querySelector(".close-btn").addEventListener("click",(()=>{e.style.display="none"}));const t=e.querySelector(".js-form");document.addEventListener("click",(o=>{t.contains(o.target)||(e.style.display="none")}))}))}(),function(){const e=document.querySelectorAll(".project__popup-btn"),t=document.querySelectorAll(".project__img-link"),o=document.querySelectorAll(".popup__projects-wrapper");e.forEach(((e,t)=>{e.addEventListener("click",(e=>{e.stopPropagation(),o[t].style.display="block"}))})),t.forEach(((e,t)=>{e.addEventListener("click",(e=>{e.stopPropagation(),o[t].style.display="block"}))})),o.forEach((e=>{e.querySelector(".close-btn").addEventListener("click",(()=>{e.style.display="none"}));const t=e.querySelector(".js-form");document.addEventListener("click",(o=>{t.contains(o.target)||(e.style.display="none")}))}))}(),function(){const e=document.querySelectorAll(".work__area-popup-btn"),t=document.querySelectorAll(".popup__area-wrapper");e.forEach(((e,o)=>{e.addEventListener("click",(e=>{e.stopPropagation(),t[o].style.display="block"}))})),t.forEach((e=>{e.querySelector(".close-btn").addEventListener("click",(()=>{e.style.display="none"}));const t=e.querySelector(".js-form");document.addEventListener("click",(o=>{t.contains(o.target)||(e.style.display="none")}))}))}(),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".tab");e.forEach((function(t){t.addEventListener("click",(function(o){o.preventDefault(),e.forEach((function(e){e.classList.remove("tab--active")})),document.querySelectorAll(".tabs-content").forEach((function(e){e.classList.remove("tabs-content--active")})),t.classList.add("tab--active"),document.querySelector(t.getAttribute("href")).classList.add("tabs-content--active")}))}))})),$((function(){var e=$(".reviews__slider");$(window).on("load resize",(function(){$(window).width()<1100?e.slick({infinite:!0,initialSlide:2,slidesToShow:2,slidesToScroll:1,variableWidth:!0,arrows:!0,dots:!1,prevArrow:'<button class="slider-reviews__slider-btn slider-reviews__slider-btnprev"><img src="./assets/img/slider-arrow-left.svg" alt=""></button>',nextArrow:'<button class="slider-reviews__slider-btn slider-reviews__slider-btnnext"><img src="./assets/img/slider-arrow-right.svg" alt=""></button>',responsive:[{breakpoint:540,settings:{slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1}}]}):e.slick("unslick")}))}));