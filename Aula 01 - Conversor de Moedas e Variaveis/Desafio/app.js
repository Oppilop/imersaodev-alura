var tCelsius = parseFloat(prompt("Digite a temperatura atual:"))

var tFahrenheit = tCelsius * 1.8 + 32
var tKelvin = tCelsius + 273.15

document.write(`Temperatura em Celsius: ${tCelsius}°C<br>`)
document.write(`Temperatura em Fahrenheit: ${tFahrenheit}°F<br>`)
document.write(`Temperatura em Kelvin: ${tKelvin}`)

