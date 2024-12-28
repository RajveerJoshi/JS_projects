document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});

// const carouselSlide = document.getElementById('carousel-slide');
// const images = document.querySelectorAll('.carousel-slide img');
// let counter = 0;

// function autoSlide() {
//     counter++;
//     if (counter >= images.length) {
//         counter = 0;
//     }
//     const size = images[counter].clientWidth;
//     // carouselSlide.style.transform = translateX(${-size * counter}px);
// }

// setInterval(autoSlide, 2000);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}