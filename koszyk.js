let cart = JSON.parse(localStorage.getItem('cart')) || [];
const shippingCost = 9.99;

// Funkcja do wyświetlania zawartości koszyka
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return; // Sprawdzenie, czy kontener koszyka istnieje
    cartItemsContainer.innerHTML = ''; // Czyści kontener na produkty w koszyku

    let total = 0; // Zmienna do przechowywania kosztu produktów

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Koszyk jest pusty.</p>'; // Wiadomość o pustym koszyku
        const totalPriceElement = document.getElementById('total-price');
        if (totalPriceElement) totalPriceElement.style.display = 'none'; // Ukrywa całkowitą kwotę

        // Pokaż przycisk do dodawania produktów
        const orderButton = document.getElementById('order-button');
        if (orderButton) {
            orderButton.innerText = 'Dodaj produkty';
            orderButton.onclick = () => window.location.href = 'produkty.html'; // Przenosi do strony z produktami
        }
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');

            // Dodawanie elementów do koszyka
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

        // Ustawianie całkowitej kwoty do zapłaty (suma produktów + koszt przesyłki)
        const totalAmountElement = document.getElementById('total-amount');
        if (totalAmountElement) {
            const totalWithShipping = (total + shippingCost).toFixed(2).replace('.', ',') + ' zł';
            totalAmountElement.innerText = totalWithShipping; // Ustawia kwotę z przesyłką w formacie z przecinkiem

            // Pokazuje całkowitą kwotę
            const totalPriceElement = document.getElementById('total-price');
            if (totalPriceElement) totalPriceElement.style.display = 'block'; // Wyświetla całkowitą kwotę

            // Pokaż przycisk do wypełnienia formularza
            const orderButton = document.getElementById('order-button');
            if (orderButton) {
                orderButton.innerText = 'Wypełnij formularz zamówienia';
                orderButton.onclick = function() {
                    const orderForm = document.getElementById('order-form');
                    if (orderForm) {
                        orderForm.style.display = orderForm.style.display === 'none' ? 'block' : 'none'; // Przełączanie widoczności formularza
                    }
                };
           }
        }
    }
}

// Funkcja do usuwania produktu z koszyka
function removeItem(index) {
    cart.splice(index, 1); // Usuwa produkt z koszyka
    localStorage.setItem('cart', JSON.stringify(cart)); // Aktualizuje localStorage
    displayCart(); // Odświeżamy wyświetlanie koszyka
}

// Obsługa wysyłania formularza zamówienia
document.getElementById('order-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiega domyślnej akcji formularza

    // Wypełnij ukryte pola
    const details = cart.map((item, index) => ({
        name: item.name,
        price: item.price,
        customization: document.getElementById(`customText-${index}`)?.value || '' // Pobierz personalizację, jeśli istnieje
    }));

    const orderDetailsElement = document.getElementById('order-details');
    if (orderDetailsElement) {
        orderDetailsElement.value = JSON.stringify(details); // Przechowuje szczegóły zamówienia
    }
    
    const totalAmount = (cart.reduce((total, item) => total + item.price, 0) + shippingCost).toFixed(2).replace('.', ',') + ' zł';
    const totalAmountHidden = document.getElementById('total-amount-hidden');
    if (totalAmountHidden) {
        totalAmountHidden.value = totalAmount; // Ustawia ukrytą całkowitą kwotę
    }

    // Można tutaj dodać kod do wysyłania danych na serwer np. Netlify
    alert("Twoje zamówienie zostało złożone, potwierdzenie przyjdzie na podany przez Ciebie adres email.");

    // Czyszczenie koszyka i formularza
    cart = []; // Czyści koszyk
    localStorage.removeItem('cart'); // Usuwa koszyk z localStorage

    // Resetowanie formularza
    this.reset(); // Resetuje wartości formularza

    // Zwijanie formularza
    this.style.display = 'none'; // Ustawia formularz na niewidoczny

    displayCart(); // Odświeżamy wyświetlanie koszyka
});

// Wyświetlanie koszyka po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    displayCart(); // Wyświetl koszyk
});