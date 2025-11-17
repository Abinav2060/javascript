function ToyCar(model, scale, color, manufacturer, price, batteryPowered) {
  this.model = model;
  this.scale = scale;
  this.color = color;
  this.manufacturer = manufacturer;
  this.price = price;
  this.batteryPowered = batteryPowered;
}
function displayCar(car) {
  const container = document.getElementById('carContainer');
  const div = document.createElement('div');
  div.className = 'car-card';
  div.innerHTML = `
    <p><strong>Model:</strong> ${car.model}</p>
    <p><strong>Scale:</strong> ${car.scale}</p>
    <p><strong>Color:</strong> ${car.color}</p>
    <p><strong>Manufacturer:</strong> ${car.manufacturer}</p>
    <p><strong>Price:</strong> $${car.price}</p>
    <p><strong>Battery Powered:</strong> ${car.batteryPowered ? 'Yes' : 'No'}</p>
  `;
  container.appendChild(div);
}
document.getElementById('addCarBtn').addEventListener('click', function() {
  const toyCar = new ToyCar(
    'Ferrari SF90 Stradale',
    '1:18',
    'Red',
    'Hot Wheels',
    199.99,
    false
  );
  displayCar(toyCar);
});
