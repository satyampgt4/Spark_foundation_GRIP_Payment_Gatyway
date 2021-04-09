var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    if(i==slideIndex)
    slides[i].style.display = "block";
    else 
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex == slides.length) {slideIndex = 0}    

  setTimeout(showSlides, 2000);
}

