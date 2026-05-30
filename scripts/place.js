
     // 1. Set current year in the footer
    const currentYearElement = document.getElementById("year");
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = `© ${currentYear} 😊    Marcelo Correa   😊   Argentina`;
    }

    // 2. Set last modified date in the footer
    const lastModifiedElement = document.getElementById("last-modified-date");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }

const tempCelsius = 9;
const windSpeedKmH = 5;



// (Fórmula Métrica)
const calculateWindChill = (temp, wind) => 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));

// 3. Ejecución automática al cargar el documento
window.addEventListener("DOMContentLoaded", () => {
    let windChillDisplay = "N/A";

   // STRICT EVALUATION: The function is not called unless the metric conditions are met
    if (tempCelsius <= 10 && windSpeedKmH > 4.8) {
        // The function is ONLY called here if it passes the filters
        const calculatedValue = calculateWindChill(tempCelsius, windSpeedKmH);
        windChillDisplay = `${calculatedValue.toFixed(1)}°C`;
    }

    // 4. Injection of the final result ("N/A" or the calculation) into the HTML using the ID
    const windChillElement = document.getElementById("wind-chill");
    if (windChillElement) {
        windChillElement.textContent = windChillDisplay;
    }

   });