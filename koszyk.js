let cart = JSON.parse(localStorage.getItem('cart')) || [];
const shippingCost = 9.99;

// Funkcja do aktualizacji ukrytych pól formularza
function updateHiddenFields() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartContent').value = JSON.stringify(cart);
    document.getElementById('totalAmount').value = (total + shippingCost).toFixed(2);
}

// Funkcja do wyświetlania zawartości koszyka
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; 
    let total = 0; 
    const orderButtonContainer = document.getElementById('order-button-container');
    orderButtonContainer.innerHTML = ''; 

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

        updateHiddenFields();

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
    event.preventDefault(); 

    const confirmed = confirm("Czy na pewno chcesz złożyć zamówienie?");
    if (!confirmed) {
        return; 
    }

    const formData = new URLSearchParams(new FormData(this));
    
    // Dodaj personalizacje
    cart.forEach((_, index) => {
        const customText = document.getElementById(`customText-${index}`)?.value || '';
        formData.append(`customText-${index}`, customText);
    });

    updateHiddenFields();

    console.log('Dane formularza przed wysłaniem:');
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json', // Dodaj nagłówek akceptacji, aby uzyskać odpowiedź w JSON
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw new Error(err.message) });
        }
        return response.json();
    })
    .then(data => {
        if (data.data && data.data.submit) { // Dostosowane do struktury Netlify Forms
            alert('Zamówienie zostało złożone pomyślnie!');
            this.reset();
            cart = [];
            localStorage.removeItem('cart');
            displayCart();
        } else {
            alert('Wystąpił błąd podczas składania zamówienia.');
        }
    })
    .catch(error => {
        console.error('Błąd podczas wysyłania formularza:', error);
        alert('Wystąpił problem z połączeniem. Spróbuj ponownie później.');
    });
});

// Po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
}); 