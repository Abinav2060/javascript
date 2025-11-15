let characterName = "Captain Waffles";
let age = Math.floor(Math.random() * 60) + 10; // random age between 10–70
let isSuperhero = true;
let specialPowers = ["flying", "invisibility", "super strength", "teleportation"];
let favoriteFood = "Pizza";      

function generateDescription() {
    let randomPower = specialPowers[Math.floor(Math.random() * specialPowers.length)];
    let heroStatus;
if (isSuperhero) {
    heroStatus = "a superhero";
} else {
    heroStatus = "just a regular person";
}
    return `Meet ${characterName}, a ${age}-year-old ${heroStatus} 
            who loves ${favoriteFood} and can ${randomPower}!`;
}
function displayDescription() {
    document.getElementById("characterDescription").textContent = generateDescription();
}
document.getElementById("generateButton").addEventListener("click", displayDescription);

function increaseAge() {
    age++;
    displayDescription();
}

function decreaseAge() {
    if (age > 0) age--;
    displayDescription();
}

document.getElementById("increaseAgeButton").addEventListener("click", increaseAge);
document.getElementById("decreaseAgeButton").addEventListener("click", decreaseAge);

// function to update age from input
function updateName() {
    let newName = document.getElementById("nameInput").value;
    if (newName.trim() !== "") {
        characterName = newName;
        displayDescription();
    }
}

function updateAge() {
    let newAge = parseInt(document.getElementById("ageInput").value);
    if (!isNaN(newAge) && newAge > 0) {
        age = newAge;
        displayDescription();
    }
}
document.getElementById("updateNameButton").addEventListener("click", updateName);
document.getElementById("updateAgeButton").addEventListener("click", updateAge);

// showing initial character 
displayDescription();
