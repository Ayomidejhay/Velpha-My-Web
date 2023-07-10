let slideIndex = 0
showSlides()

function showSlides() {
 let i;
 let slides = document.getElementsByClassName("mySlides")
 let dots = document.getElementsByClassName("dot")
 for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none"
 }
 slideIndex++
 if (slideIndex > slides.length) {slideIndex =1}
 for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block"
 dots[slideIndex-1].className += " active"
 setTimeout(showSlides, 5000)
}
const navSlide = () => {
 const burger = document.querySelector(".burger")
 const nav = document.querySelector(".nav-links")
 const navLinks = document.querySelectorAll(".nav-links li")

 
 burger.addEventListener('click', () => {
  //Toggle nav
  nav.classList.toggle('nav-active')

  //Animate links
  navLinks.forEach((link, index) => {
   if (link.style.animation){
    link.style.animation = ''
   } else {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
   }
  })

  //burger Animation
  burger.classList.toggle("toggle")
 })

 
}

navSlide()