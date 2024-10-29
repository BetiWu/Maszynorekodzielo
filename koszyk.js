let cart = JSON.parse(localStorage.getItem('cart')) || [];
const shippingCost = 9.99;

// Funkcja do wyświetlania zawartości koszyka
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Czyści kontener na produkty w koszyku

    let total = 0; // Zmienna do przechowywania kosztu produktów
    const orderButtonContainer = document.getElementById('order-button-container');
    orderButtonContainer.innerHTML = ''; // Czyści kontener z przyciskami

    if (cart.length === 0) {
        // Wyświetlenie komunikatu, gdy koszyk jest pusty
        cartItemsContainer.innerHTML = '<p>Koszyk jest pusty</p>';
        document.getElementById('total-price').style.display = 'none'; // Ukrywa całkowitą kwotę
        
        const fillFormButton = document.createElement('button');
        fillFormButton.id = 'fill-form-button';
        fillFormButton.innerText = 'Dodaj produkty';
        fillFormButton.onclick = function () {
            window.location.href = 'produkty.html'; // Przenosi do strony z produktami
        };
        orderButtonContainer.appendChild(fillFormButton); // Dodaje przycisk do kontenera
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <span>${index + 1}. ${item.name} - ${item.price.toFixed(2).replace('.', ',')} zł</span>
                <div>
                    <label for="customText-${index}">Personalizacja:</label>
                    <input type="text" id="customText-${index}" placeholder="np. Wzór: choinka, Imię: Kamil" />
                    <button onclick="removeItem(${index})">Usuń</button>
                </div>
            `;

            cartItemsContainer.appendChild(itemElement); // Dodaje element do DOM
            total += item.price; // Aktualizuje całkowity koszt produktów
        });

        const totalAmount = (total + shippingCost).toFixed(2).replace('.', ',') + ' zł';
        document.getElementById('total-amount').innerText = totalAmount; // Ustawia kwotę w formacie z przecinkiem
        document.getElementById('total-price').style.display = 'block'; // Wyświetla całkowitą kwotę

        // Przygotowanie przycisku do wypełnienia formularza zamówienia
        const fillFormButton = document.createElement('button');
        fillFormButton.id = 'fill-form-button';
        fillFormButton.innerText = 'Wypełnij formularz zamówienia';
        fillFormButton.onclick = function() {
            const orderForm = document.getElementById('order-form');
            orderForm.style.display = orderForm.style.display === 'none' ? 'block' : 'none'; // Przełącza widoczność formularza
        };
        orderButtonContainer.appendChild(fillFormButton); // Dodaje przycisk do kontenera
    }
}

// Funkcja do usuwania produktu z koszyka
function removeItem(index) {
    cart.splice(index, 1); // Usuwa produkt z koszyka
    localStorage.setItem('cart', JSON.stringify(cart)); // Aktualizuje localStorage
    displayCart(); // Odświeżamy wyświetlanie koszyka
}

// Obsługa wysyłania formularza zamówienia
document.getElementById('order-form').addEventListener('submit', function(event) {
    
    alert('Zamówienie zostało złożone!'); // Zamiast przesyłania do Netlify
    cart = [];
    localStorage.removeItem('cart');
    displayCart(); // Odświeżamy wyświetlanie koszyka
    this.reset(); // Resetuje formularz
    this.style.display = 'none'; // Ukrywa formularz po złożeniu zamówienia
});

// Naładowanie koszyka po załadowaniu strony
document.addEventListener('DOMContentLoaded', displayCart);