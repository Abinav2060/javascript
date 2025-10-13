// Arrays for each part of the story
const part1Options = ["A brave", "A curious", "A funny", "A lazy"];
const part2Options = ["cat", "dog", "alien", "pirate"];
const part3Options = ["found", "lost", "built", "chased"];
const part4Options = ["a treasure", "a spaceship", "a rainbow", "a map"];
const part5Options = ["in the forest.", "on the moon.", "under the sea.", "in the city."];

// Keep track of current index for each part
let indices = [0, 0, 0, 0, 0];
let choices = ["", "", "", "", ""];

// Function to cycle through options
function cycleOption(partNum, options) {
    indices[partNum] = (indices[partNum] + 1) % options.length;
    choices[partNum] = options[indices[partNum]];
    document.getElementById(`part${partNum + 1}`).textContent = choices[partNum];
}

// Add event listeners
document.getElementById("part1").addEventListener("click", () => cycleOption(0, part1Options));
document.getElementById("part2").addEventListener("click", () => cycleOption(1, part2Options));
document.getElementById("part3").addEventListener("click", () => cycleOption(2, part3Options));
document.getElementById("part4").addEventListener("click", () => cycleOption(3, part4Options));
document.getElementById("part5").addEventListener("click", () => cycleOption(4, part5Options));
