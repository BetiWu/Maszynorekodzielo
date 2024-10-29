// Obsługuje wysyłanie formularza zamówienia
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Uaktualnij wartości ukrytych pól przed wysłaniem formularza
    const hiddenCartContent = document.getElementById('cartContent');
    const totalAmountField = document.getElementById('totalAmount');

    // Ustawienia zawartości koszyka i kwoty
    hiddenCartContent.value = JSON.stringify(cart);
    totalAmountField.value = (cart.reduce((acc, item) => acc + item.price, 0) + shippingCost).toFixed(2).replace('.', ',');

    const confirmed = confirm("Czy na pewno chcesz złożyć zamówienie?");
    if (!confirmed) {
        return; 
    }

    const formData = new FormData(this);

    // Zbieranie personalizacji
    cart.forEach((_, index) => {
        const customText = document.getElementById(`customText-${index}`)?.value || '';
        formData.append(`customText-${index}`, customText); 
    });

    // Logowanie zawartości FormData przed wysłaniem
    console.log('Zawartość FormData przed wysłaniem:');
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Sprawdzenie, czy cartContent i totalAmount są dodane
    console.log('Cart Content (przed wysłaniem):', hiddenCartContent.value);
    console.log('Total Amount (przed wysłaniem):', totalAmountField.value);

    // Wysyłanie formularza do Netlify
    fetch(this.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        console.log('Odpowiedź serwera:', response);
        if (response.ok) {
            alert('Zamówienie zostało złożone pomyślnie!');
            this.reset(); 
            this.style.display = 'none'; 
            cart = [];
            localStorage.removeItem('cart');
            displayCart();
        } else {
            return response.text().then(text => {
                console.error('Błąd odpowiedzi:', text);
                alert('Wystąpił błąd podczas składania zamówienia: ' + text);
            });
        }
    })
    .catch(error => {
        console.error('Błąd podczas wysyłania formularza:', error);
        alert('Wystąpił problem z połączeniem. Spróbuj ponownie później.');
    });
});
