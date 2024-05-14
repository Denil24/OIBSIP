const form = document.getElementById('temperatureform');
const input = document.getElementById('temperatureinput');
const unit = document.getElementById('temperatureunit');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const temp = parseFloat(input.value);
  if (isNaN(temp)) {
    result.textContent = 'Please enter a valid temperature.';
    return;
  }
  let convertedTemp;
  switch (unit.value) {
    case 'celsius':
      convertedTemp = (temp * 9 / 5) + 32;
      result.textContent = `${temp}°C is equal to ${convertedTemp.toFixed(2)}°F`;
      break;
    case 'fahrenheit':
      convertedTemp = (temp - 32) * 5 / 9;
      result.textContent = `${temp}°F is equal to ${convertedTemp.toFixed(2)}°C`;
      break;
  }
});