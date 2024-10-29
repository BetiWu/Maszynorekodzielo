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
        
        // Pokaż przycisk do dodawania produktów
        document.getElementById('order-button').innerText = 'Dodaj produkty';
        document.getElementById('order-button').onclick = function() {
            window.location.href = 'produkty.html'; // Przenosi do strony z produktami
        };
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
        const totalWithShipping = (total + shippingCost).toFixed(2).replace('.', ',') + ' zł';
        totalAmountElement.innerText = totalWithShipping; // Ustawia kwotę z przesyłką w formacie z przecinkiem
        
        // Pokazuje całkowitą kwotę
        document.getElementById('total-price').style.display = 'block'; // Wyświetla całkowitą kwotę
        
        // Pokaż przycisk do wypełnienia formularza
        document.getElementById('order-button').innerText = 'Wypełnij formularz zamówienia';
        document.getElementById('order-button').onclick = function() {
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
    event.preventDefault(); // Zapobiegaj domyślnej akcji formularza

    // Wypełnij ukryte pola
    document.getElementById('order-details').value = JSON.stringify(cart); // Przechowuje szczegóły zamówienia
    const totalAmount = (cart.reduce((total, item) => total + item.price, 0) + shippingCost).toFixed(2).replace('.', ',') + ' zł';
    document.getElementById('total-amount-hidden').value = totalAmount; // Ustawia ukrytą całkowitą kwotę

    // Wyświetlanie wiadomości potwierdzającej
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