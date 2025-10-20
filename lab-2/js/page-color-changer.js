 // getting references to DOM elements 
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");
const body = document.querySelector("html");

// using function to update background color 
function updateBackgroundColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  // applying the color to the page background
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}