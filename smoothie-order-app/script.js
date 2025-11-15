class Smoothie {
  constructor(name, base, fruits, size, extras) {
    this.name = name;
    this.base = base;
    this.fruits = fruits;
    this.size = size;
    this.extras = extras;
    this.time = new Date();
  }

  description() {
    const fruitText = this.fruits.length ? this.fruits.join(", ") : "no fruits";
    const extraText = this.extras.length ? this.extras.join(", ") : "no extras";

    return `${this.name} ordered a ${this.size} smoothie with ${this.base}, ${fruitText}, and ${extraText}.`;
  }
}

const $ = (x) => document.querySelector(x);

function gatherData() {
  const name = $("#customerName").value;
  const base = document.querySelector("input[name='base']:checked").value;

  const fruits = [...document.querySelectorAll("input[name='fruits']:checked")]
    .map(x => x.value);

  const extras = [...document.querySelectorAll("input[name='extras']:checked")]
    .map(x => x.value);

  const size = $("#size").value;

  return { name, base, fruits, size, extras };
}

function showOutput(text) {
  $("#output").innerHTML = `<div class="card">${text}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  $("#orderBtn").addEventListener("click", () => {
    const d = gatherData();
    const smoothie = new Smoothie(d.name, d.base, d.fruits, d.size, d.extras);

    showOutput(smoothie.description());
    console.log(smoothie);
  });
});
