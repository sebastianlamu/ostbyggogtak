// Get the modal
var modal = document.getElementById("myModal2");

// Get the button that opens the modal

var bttn1 = document.getElementById("modalBttn1");
var bttn2 = document.getElementById("modalBttn2");
var bttn3 = document.getElementById("modalBttn3");
var bttn4 = document.getElementById("modalBttn4");
var bttn5 = document.getElementById("modalBttn5");
var bttn6 = document.getElementById("modalBttn6");
var bttn7 = document.getElementById("modalBttn7");
var bttn8 = document.getElementById("modalBttn8");
var bttn9 = document.getElementById("modalBttn9");
var bttn10 = document.getElementById("modalBttn10");
var bttn11 = document.getElementById("modalBttn11");


var modalDiv = document.getElementById("modalDiv");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
bttn1.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

bttn2.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

bttn3.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

bttn4.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

bttn5.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

bttn6.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

bttn7.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

bttn8.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

bttn9.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

bttn10.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

bttn11.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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
  if (slideIndex > slides.length) {slideIndex = 1};
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" aktiv", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " aktiv";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
