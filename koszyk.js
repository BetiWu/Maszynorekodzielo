let cart = JSON.parse(localStorage.getItem('cart')) || [];
const shippingCost = 9.99;

// Funkcja do wyświetlania zawartości koszyka
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Czyści kontener na produkty w koszyku

    let total = 0; // Zmienna do przechowywania kosztu produktów

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Koszyk jest pusty.</p>'; // Wiadomość o pustym koszyku
        document.getElementById('total-price').style.display = 'none'; // Ukrywa całkowitą kwotę
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

        // Ustawienia przycisku zamówienia
        const orderButton = document.getElementById('order-button');
        orderButton.onclick = function() {
            const orderForm = document.getElementById('order-form');
            orderForm.style.display = orderForm.style.display === 'none' ? 'block' : 'none'; // Przełączanie widoczności formularza
        };
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
    event.preventDefault(); // Zapobiega domyślnej akcji formularza

    const details = cart.map((item, index) => ({
        name: item.name,
        price: item.price,
        customization: document.getElementById(`customText-${index}`)?.value || '' // Pobiera personalizację, jeśli istnieje
    }));

    // Przypisz szczegóły zamówienia do ukrytego pola
    document.getElementById('order-details').value = JSON.stringify(details);
    
    // Przypisz całkowitą kwotę do ukrytego pola
    const totalAmount = (cart.reduce((total, item) => total + item.price, 0) + shippingCost).toFixed(2).replace('.', ',') + ' zł';
    document.getElementById('total-amount-hidden').value = totalAmount;

    // Informujący komunikat o wysłaniu formularza
    alert("Twoje zamówienie zostało złożone!");

    // Czyszczenie koszyka
    cart = [];
    localStorage.removeItem('cart');
    displayCart(); // Odświeżamy wyświetlanie koszyka
    this.reset(); // Resetuje formularz
});

// Naładowanie koszyka po załadowaniu strony
document.addEventListener('DOMContentLoaded', displayCart);