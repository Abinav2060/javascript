// using arrays for each part of the story
const part1Options = ["A brave", "A curious", "A funny", "A lazy"];
const part2Options = ["cat", "dog", "alien", "pirate"];
const part3Options = ["found", "lost", "built", "chased"];
const part4Options = ["a treasure", "a spaceship", "a rainbow", "a map"];
const part5Options = ["in the forest.", "on the moon.", "under the sea.", "in the city."];

// Keeping track of current index for each part
let indices = [0, 0, 0, 0, 0];
let choices = ["", "", "", "", ""];

// function to cycle through options
function cycleOption(partNum, options) {
    indices[partNum] = (indices[partNum] + 1) % options.length;
    choices[partNum] = options[indices[partNum]];
    document.getElementById(`part${partNum + 1}`).textContent = choices[partNum];
}

// adding event listeners
document.getElementById("part1").addEventListener("click", () => cycleOption(0, part1Options));
document.getElementById("part2").addEventListener("click", () => cycleOption(1, part2Options));
document.getElementById("part3").addEventListener("click", () => cycleOption(2, part3Options));
document.getElementById("part4").addEventListener("click", () => cycleOption(3, part4Options));
document.getElementById("part5").addEventListener("click", () => cycleOption(4, part5Options));

// showing the full story

document.getElementById("showStory").addEventListener("click", () => {
    const story = choices.join(" ");
    document.getElementById("storyOutput").textContent = story;
    speakStory(story); // <-- audio added here
});

// Random story for displaying and speaking
document.getElementById("randomStory").addEventListener("click", () => {
    choices[0] = part1Options[Math.floor(Math.random() * part1Options.length)];
    choices[1] = part2Options[Math.floor(Math.random() * part2Options.length)];
    choices[2] = part3Options[Math.floor(Math.random() * part3Options.length)];
    choices[3] = part4Options[Math.floor(Math.random() * part4Options.length)];
    choices[4] = part5Options[Math.floor(Math.random() * part5Options.length)];

    for (let i = 0; i < 5; i++) {
        document.getElementById(`part${i + 1}`).textContent = choices[i];
    }

    const story = choices.join(" ");
    document.getElementById("storyOutput").textContent = story;
    speakStory(story); // <-- audio added here
});

// reset story
document.getElementById("reset").addEventListener("click", () => {
    choices = ["", "", "", "", ""];
    indices = [0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) {
        document.getElementById(`part${i + 1}`).textContent = `Part ${i + 1}`;
    }
    document.getElementById("storyOutput").textContent = "";
});
// function to speak the story aloud using browser's SpeechSynthesis API
function speakStory(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // set language
    utterance.rate = 1;       // normal speaking speed
    utterance.pitch = 1;      // normal pitch
    window.speechSynthesis.speak(utterance);
}
