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

            // Ustawienia dla pola personalizacji
            const label = 'Personalizacja:';
            const placeholder = 'np. Wzór: choinka, Imię: Kamil';

            // Dodawanie elementów do koszyka
            itemElement.innerHTML = `
                <span>${index + 1}. ${item.name} - ${item.price.toFixed(2)} zł</span>
                <div>
                    <label for="customText-${index}">${label}</label>
                    <input type="text" id="customText-${index}" placeholder="${placeholder}" onfocus="this.placeholder=''" onblur="this.placeholder='${placeholder}'" />
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

function toggleOrderForm() {
    const orderForm = document.getElementById('order-form');
    orderForm.style.display = orderForm.style.display === 'none' ? 'block' : 'none'; // Przełączanie widoczności formularza
}

function submitOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const comments = document.getElementById('comments').value; // Pobieranie komentarza

    const orderDetails = {
        name: name,
        email: email,
        address: address,
        comments: comments, // Dodawanie komentarza do szczegółów zamówienia
        items: cart,
        total: (parseFloat(document.getElementById('total-amount').innerText)).toFixed(2) // Kwota do zapłaty
    };

    fetch('YOUR_BACKEND_ENDPOINT', { // Zmien 'YOUR_BACKEND_ENDPOINT' na prawidłowy URL backendu
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
    })
    .then(response => {
        if (response.ok) {
            alert("Zamówienie zostało wysłane!");
            cart = []; // Czyścimy koszyk po złożeniu zamówienia
            localStorage.removeItem('cart'); // Usuwamy koszyk z localStorage
            displayCart(); // Odświeżamy wyświetlanie koszyka
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('address').value = '';
            document.getElementById('comments').value = ''; // Czyścimy pole komentarza
        } else {
            alert("Wystąpił błąd w trakcie wysyłania zamówienia.");
        }
    })
    .catch(error => {
        console.error("Błąd:", error);
    });
}

// Dodawanie nasłuchiwaczy dotyczących przycisków
document.getElementById('order-button').addEventListener('click', toggleOrderForm);
document.getElementById('submit-order').addEventListener('click', submitOrder);

// Wyświetlanie koszyka po załadowaniu strony
document.addEventListener('DOMContentLoaded', displayCart);