let sliderone = document.getElementById("slider1");
let slidertwo = document.getElementById("slider2");
let sliderthree = document.getElementById("slider3");
let sliderfour = document.getElementById("slider4");
let prevone = document.querySelector(".prev1");
let prevtwo = document.querySelector(".prev2");
let prevthree = document.querySelector(".prev3");
let prevfour = document.querySelector(".prev4");
let nextone = document.querySelector(".next1");
let nexttwo = document.querySelector(".next2");
let nextthree = document.querySelector(".next3");
let nextfour = document.querySelector(".next4");
let navlist = document.querySelector(".navlist");
let menuicon = document.getElementById("menuicon");



prevone.addEventListener("click",()=>{
    sliderone.scrollBy({left:-300,behavior:'smooth'})
})
prevtwo.addEventListener("click",()=>{
    slidertwo.scrollBy({left:-300,behavior:'smooth'})
})
prevthree.addEventListener("click",()=>{
    sliderthree.scrollBy({left:-300,behavior:'smooth'})
})
prevfour.addEventListener("click",()=>{
    sliderfour.scrollBy({left:-300,behavior:'smooth'})
})

nextone.addEventListener("click",()=>{
    sliderone.scrollBy({left:300,behavior:"smooth"})
})
nexttwo.addEventListener("click",()=>{
    slidertwo.scrollBy({left:300,behavior:"smooth"})
})
nextthree.addEventListener("click",()=>{
    sliderthree.scrollBy({left:300,behavior:"smooth"})
})
nextfour.addEventListener("click",()=>{
    sliderfour.scrollBy({left:300,behavior:"smooth"})
})

// function menuicon

menuicon.addEventListener("click",()=>{
    navlist.classList.toggle("active")
    
})




const scrollProgress = document.getElementById("scroll-progress");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});



$(document).ready(function(){
    $('.slider').slick({
        rtl:true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  });


