function convertTemperature(fromUnit) {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitInput = document.getElementById("fahrenheitInput");

    let celsius, fahrenheit;

    if (fromUnit === "Celsius") {
        celsius = parseFloat(celsiusInput.value) || 0;
        fahrenheit = (celsius * 9/5) + 32;
    } else if (fromUnit === "Fahrenheit") {
        fahrenheit = parseFloat(fahrenheitInput.value) || 0;
        celsius = (fahrenheit - 32) * 5/9;
    }

    if (fromUnit !== "Celsius") celsiusInput.value = celsius.toFixed(2);
    if (fromUnit !== "Fahrenheit") fahrenheitInput.value = fahrenheit.toFixed(2);
}

function convertFromFahrenheit() {
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const celsiusInput = document.getElementById("celsiusInput");
    let fahrenheit = parseFloat(fahrenheitInput.value) || 0;
    let celsius = (fahrenheit - 32) * 5/9;

    celsiusInput.value = celsius.toFixed(2);
}

function resetFields() {
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
}

document.getElementById("resetButton").addEventListener("click", resetFields);
