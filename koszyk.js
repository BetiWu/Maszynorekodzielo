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
        cartItemsContainer.innerHTML = '<p>Koszyk jest pusty</p>';
        document.getElementById('total-price').style.display = 'none';

        const fillFormButton = document.createElement('button');
        fillFormButton.id = 'fill-form-button';
        fillFormButton.innerText = 'Dodaj produkty';
        fillFormButton.onclick = function () {
            window.location.href = 'produkty.html';
        };
        orderButtonContainer.appendChild(fillFormButton);
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <span>${index + 1}. ${item.name} - ${item.price.toFixed(2).replace('.', ',')} zł</span>
                <div>
                    <label for="customText-${index}">Personalizacja:</label>
                    <input type="text" name="customText-${index}" id="customText-${index}" placeholder="np. Wzór: choinka, Imię: Kamil" />
                    <button type="button" onclick="removeItem(${index})">Usuń</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price;
        });

        const totalAmount = (total + shippingCost).toFixed(2).replace('.', ',') + ' zł';
        document.getElementById('total-amount').innerText = totalAmount;
        document.getElementById('total-price').style.display = 'block';

        // Przygotowanie przycisku do wypełnienia formularza zamówienia
        const fillFormButton = document.createElement('button');
        fillFormButton.id = 'fill-form-button';
        fillFormButton.innerText = 'Wypełnij formularz zamówienia';
        fillFormButton.onclick = function() {
            const orderForm = document.getElementById('order-form');
            orderForm.style.display = orderForm.style.display === 'none' ? 'block' : 'none';
        };
        orderButtonContainer.appendChild(fillFormButton);
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Obsługuje wysyłanie formularza zamówienia
document.getElementById('order-form').addEventListener('submit', function(event) {
    // Potwierdzenie użytkownika o wysyłce formularza
    const confirmed = confirm("Czy na pewno chcesz złożyć zamówienie?");
    if (!confirmed) {
        return; // Nie kontynuuj, jeśli użytkownik odrzuci
    }

    // Zbieranie personalizacji
    const personalizedTexts = cart.map((_, index) => {
        return document.getElementById(`customText-${index}`)?.value || '';
    });

    // Zbieranie danych formularza
    const formData = new FormData(this);
    formData.append('personalizations', JSON.stringify(personalizedTexts));

    // Po złożeniu zamówienia
    this.reset(); // Resetuje formularz
    this.style.display = 'none'; // Ukrywa formularz po złożeniu zamówienia
    
    cart = [];
    localStorage.removeItem('cart');
    displayCart();
});

// Po załadowaniu strony
document.addEventListener('DOMContentLoaded', displayCart);