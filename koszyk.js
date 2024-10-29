let cart = JSON.parse(localStorage.getItem('cart')) || [];
const shippingCost = 9.99;

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Czyści kontener na produkty w koszyku

    let total = 0; // Zmienna do przechowywania całkowitych kosztów

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Koszyk jest pusty.</p>'; // Wiadomość o pustym koszyku
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');

            // Dodawanie elementów do koszyka
            itemElement.innerHTML = `
                <span>${index + 1}. ${item.name} - ${item.price.toFixed(2)} zł</span>
                <div>
                    <label for="customText-${index}">Personalizacja:</label>
                    <input type="text" id="customText-${index}" placeholder="np. Wzór: choinka, Imię: Kamil" />
                    <button onclick="removeItem(${index})">Usuń</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement); // Dodaje element do DOM
            total += item.price; // Aktualizuje całkowity koszt
        });
    }

    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.innerText = (total + shippingCost).toFixed(2); // Aktualizuje wyświetloną łączną kwotę
}

function removeItem(index) {
    cart.splice(index, 1); // Usuwamy produkt z koszyka
    localStorage.setItem('cart', JSON.stringify(cart)); // Aktualizujemy localStorage
    displayCart(); // Odświeżamy wyświetlanie koszyka
}

// Dodawanie nasłuchiwaczy dotyczących przycisków
document.getElementById('order-button').addEventListener('click', function() {
    const orderForm = document.getElementById('order-form');
    orderForm.style.display = orderForm.style.display === 'none' ? 'block' : 'none'; // Przełączanie widoczności formularza
});

// Wyświetlanie koszyka po załadowaniu strony
document.addEventListener('DOMContentLoaded', displayCart);