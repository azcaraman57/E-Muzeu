var slideIndex=0;
Showslides();
setInterval(Showslides,3000)
function Showslides() {
    var slides = document.getElementsByClassName("slide");
    for (var i=0; i< slides.length;i++){
        slides[i].style.display="none";
    }
    
    slides[slideIndex].style.display =  "block";
    slideIndex++;

    if (slideIndex >= slides.length){
        slideIndex=0;
    }
}