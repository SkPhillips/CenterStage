

const slides = document.getElementsByClassName("carousel-item");

let slidePosition = 0;

const totalSlides = slides.length;

const next = document.getElementById("carousel-button-next")
const previous = document.getElementById("carousel-button-prev")

const widget = document.getElementsByClassName('widget')

console.log(widget)



// carousel navigation //

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

// btn-right //
next.addEventListener("click", function moveToNextSlide(){

        hideAllSlides();
        
        if (slidePosition === totalSlides - 1) {
            slidePosition = 0;
            
        } else {
            slidePosition++;
            
        }
        
        slides[slidePosition].classList.add("carousel-item-visible");
    });

// btn-left //

previous.addEventListener("click", function moveToPrevSlide(){

    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");


});


