
//geting references to the sliders
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

//geting reference to the HTML element (the background is styled there)
const htmlElement = document.documentElement;

//creating a function to update the background color
function updateBackgroundColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  // the key line that updates the color
  htmlElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// adding event listeners for when slider values change
redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);

// setting an initial color when the page loads
updateBackgroundColor();
