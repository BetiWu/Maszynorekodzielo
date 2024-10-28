document.addEventListener('DOMContentLoaded', () => {
    const mainTitle = document.getElementById('main-title');
    const hoverText = document.querySelector('.hover-text');
    const options = document.getElementById('options');

    // Funkcja do przełączania widoczności opcji
    const toggleOptions = () => {
        if (options.classList.contains('hidden')) {
            // Kiedy opcje są ukryte, pokazujemy je
            options.classList.remove('hidden'); // Pokaż opcje
            options.classList.add('show'); 
            mainTitle.style.fontSize = '5em'; 
            mainTitle.classList.add('shining'); // Dodaj efekt błyskania
            hoverText.style.display = 'none'; // Ukryj napis "Kliknij"
        } else {
            // Kiedy opcje są widoczne, chowamy je
            options.classList.remove('show'); 
            setTimeout(() => {
                options.classList.add('hidden'); // Ukryj opcje
                mainTitle.classList.remove('shining'); // Usuń efekt błyskania po schowaniu opcji
                hoverText.style.display = 'block'; // Pokaż napis "Kliknij" z powrotem
            }, 300); 
            mainTitle.style.fontSize = '3em'; 
        }
    }

    // Dodaj nasłuchiwanie na kliknięcie
    mainTitle.addEventListener('click', toggleOptions);
    hoverText.addEventListener('click', toggleOptions);
});