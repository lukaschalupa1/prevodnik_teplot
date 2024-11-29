// Po načtení DOM
document.addEventListener('DOMContentLoaded', function () {
    // Přidání události na tlačítko
    document.getElementById('convertButton').addEventListener('click', function () {
        const celsius = document.getElementById('celsius').value;

        // Ověření vstupu
        if (celsius === '') {
            document.getElementById('result').innerText = '❌ Prosím zadejte teplotu!';
            document.getElementById('result').style.color = '#d32f2f'; // Červená pro chybu
            return;
        }

        // Převod na Fahrenheita
        const fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
        document.getElementById('result').innerText = `🌡️ ${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
        document.getElementById('result').style.color = '#00796b'; // Zelená pro výsledek
    });
});