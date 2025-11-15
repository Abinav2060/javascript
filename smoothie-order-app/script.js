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
    const fruitText = this.fruits.join(", ") || "no fruits";
    const extraText = this.extras.join(", ") || "no extras";
  
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

    showOutput(`${smoothie.description()} <br><strong>Total: $${smoothie.calculatePrice()}</strong>`);

    console.log(smoothie);
  });
});
priceList = {
  size: { small: 4.0, medium: 5.5, large: 7.0 },
  fruits: { banana: 0.5, strawberry: 0.7, mango: 0.8, blueberry: 0.9 },
  extras: { protein: 1.5, honey: 0.5, chia: 0.7 }
};

calculatePrice();{
  let total = this.priceList.size[this.size];

  this.fruits.forEach(f => {
    total += this.priceList.fruits[f] || 0;
  });

  this.extras.forEach(e => {
    total += this.priceList.extras[e] || 0;
  });

  return total.toFixed(2);
}