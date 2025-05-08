const slides = document.querySelectorAll(".mySlide");
const dots = document.querySelectorAll(".dot");

let slideIndex = 1;


const plusSlide = (n) => {
    showSlide((slideIndex +=n));
};

const currentSlide = (n) => {
    showSlide((slideIndex = n));
};

const showSlide = (n) => {
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("showSlide");
        dots[i].className = dots[i].className.replace(" active", "");
       
    }
   
    
    slides[slideIndex-1].classList.add("showSlide");
    dots[slideIndex-1].className += " active";

};

showSlide(slideIndex);