// Get the modal
var modal = document.getElementById("myModal2");

// Get the button that opens the modal

var btn1 = document.getElementById("modalBtn1");
var btn2 = document.getElementById("modalBtn2");
var btn3 = document.getElementById("modalBtn3");
var btn4 = document.getElementById("modalBtn4");
var btn5 = document.getElementById("modalBtn5");
var btn6 = document.getElementById("modalBtn6");
var btn7 = document.getElementById("modalBtn7");
var btn8 = document.getElementById("modalBtn8");
var btn9 = document.getElementById("modalBtn9");
var btn10 = document.getElementById("modalBtn10");
var btn11 = document.getElementById("modalBtn11");


var modalDiv = document.getElementById("modalDiv");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

btn2.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

btn3.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

btn4.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

btn5.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

btn6.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

btn7.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

btn8.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

btn9.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

btn10.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

btn11.onclick = function() {
  modal.style.display = "block";
  modalDiv.innerHTML = this.innerHTML;
};

/*
// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal.style.display = "block";
  modalImg.src="https://image.vartoslo.no/411999.jpg?imageId=411999&x=0&y=0&cropw=100&croph=100&width=751&height=657";
};

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal.style.display = "block";
  modalImg.src="https://image.vartoslo.no/412246.jpg?imageId=412246&x=0&y=0&cropw=100&croph=100&width=751&height=657";
};

// When the user clicks on the button, open the modal
btn4.onclick = function() {
  modal.style.display = "block";
  modalImg.src="https://image.vartoslo.no/412247.jpg?imageId=412247&x=0&y=0&cropw=100&croph=100&width=751&height=657";
};
*/

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
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeDot";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
