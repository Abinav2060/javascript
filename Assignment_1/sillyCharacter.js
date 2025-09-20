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