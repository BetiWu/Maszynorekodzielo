// Dane o produktach
const products = {
    'subcat1-1': [ // Bombki
        {
            name: "1-warstwowe",
            description: "Dowolne wzory",
            price: "10 zł",
            imgSrc: [
                "bo1.jpg",
                "bo2.jpg", // zdjęcie 2
                "bo3.jpg",
                "bo4.jpg", // zdjęcie 2
                "bo5.jpg"  // zdjęcie 3
            ]
        },
        {
            name: "Choinka Srebrna",
            description: "Elegancka, srebrna choinka.",
            price: "120 zł",
            imgSrc: [
                "bo2.jpg",
                "bo2.jpg", // zdjęcie 2
                "bo3.jpg"  // zdjęcie 3
            ]
        },
        {
            name: "Bla",
            description: "Elegancka, srebrna choinka.",
            price: "120 zł",
            imgSrc: [
                "bo3.jpg",
                "bo2.jpg", // zdjęcie 2
                "bo3.jpg"  // zdjęcie 3
            ]
        },
        {
            name: "Blababa",
            description: "Elegancka, srebrna choinka.",
            price: "120 zł",
            imgSrc: [
                "https://via.placeholder.com/150"
            ] 
        },
        {
            name: "drugalinijka",
            description: "Elegancka, srebrna choinka.",
            price: "120 zł",
            imgSrc: [
                "https://via.placeholder.com/150"
            ] 
        }
    ],
    'subcat1-2': [ // Ozdoby
        {
            name: "Ozdoba Srebrna",
            description: "Elegancka ozdoba na choinkę.",
            price: "20 zł",
            imgSrc: [
                "https://via.placeholder.com/150"
            ] 
        },
        {
            name: "Ozdoba Złota",
            description: "Lśniąca ozdoba.",
            price: "25 zł",
            imgSrc: [
                "https://via.placeholder.com/150"
            ]
        }
    ],
    'subcat1-3': [ // Prezentowanie
        {
            name: "Prezent 1",
            description: "Podarunek idealny.",
            price: "80 zł",
            imgSrc: [
                "https://via.placeholder.com/150"
            ]
        }
    ],
    'subcat1-4': [ // Światełka
        {
            name: "Światełka LED",
            description: "Magiczne światełka na święta.",
            price: "30 zł",
            imgSrc: [
                "https://via.placeholder.com/150"
            ]
        }
    ],
    'subcat1-5': [ // Dekoracje
        {
            name: "Dekoracja Stołu",
            description: "Stylowa dekoracja na stół.",
            price: "50 zł",
            imgSrc: [
                "https://via.placeholder.com/150"
            ]
        }
    ],
    // Ślub
    'subcat2-1': [ // Zaproszenia
        {
            name: "Zaproszenie na ślub",
            description: "Piękne zaproszenie na Twój ślub.",
            price: "5 zł",
            imgSrc: [
                "https://via.placeholder.com/150"
            ]
        }
    ],
    'subcat2-2': [ // Dekoracje
        {
            name: "Dekoracja na stół",
            description: "Stylowa dekoracja na stół.",
            price: "20 zł",
            imgSrc: [
                "https://via.placeholder.com/150"
            ]
        }
    ],
    // Dodaj inne produkty dla pozostałych podkategorii...
};

let currentIndex;
let currentImages;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const shippingCost = 9.99;



function openImage(product) {
    currentImages = product.imgSrc; // Wybierz tablicę obrazów z produktu
    currentIndex = 0; // Zaczynamy od pierwszego obrazka
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = currentImages[currentIndex]; // Ustaw zdjęcie
    modal.style.display = "block"; // Pokaż modal
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none"; // Ukryj modal
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1; // Przechodzi do ostatniego zdjęcia
    } else if (currentIndex >= currentImages.length) {
        currentIndex = 0; // Przechodzi do pierwszego zdjęcia
    }
    document.getElementById('modalImage').src = currentImages[currentIndex]; // Zmień zdjęcie
}

// Funkcja do pokazywania/ukrywania subkategorii
function toggleSubcategories(id, categoryElement) {
    const allSubcategories = document.querySelectorAll('.subcategory-list');
    const currentSubcategory = document.getElementById(id);
    const isCurrentlyVisible = currentSubcategory.style.display === "block";

    // Ukryj wszystkie inne subkategorie
    allSubcategories.forEach(subcategory => {
        subcategory.style.display = "none";
    });

    // Zwiń lub rozwinięcie podkategorii
    currentSubcategory.style.display = isCurrentlyVisible ? "none" : "block";
}

// Funkcja do konwersji ceny z formatu tekstowego na liczbę
function getPrice(priceString) {
    return parseFloat(priceString.replace(' zł', '').replace(',', '.'));
}

// Funkcja do wyświetlania produktów
function displayProducts(subcategoryId) {
    const productDisplay = document.getElementById("product-display");
    productDisplay.innerHTML = ""; // Czyści wcześniejsze produkty
    const relevantProducts = products[subcategoryId];

    // Sprawdzenie czy są dostępne produkty
    if (relevantProducts && relevantProducts.length > 0) {
        relevantProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.imgSrc[0]}" alt="${product.name}" onclick='openImage(${JSON.stringify(product)})' style="width: 100%; height: auto;">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Cena: ${product.price}</p>
                <button onclick="addToCart('${product.name}', '${product.price}')">Dodaj do koszyka</button>
            `;
            productDisplay.appendChild(productDiv);
        });
    } else {
        // Informacja, że nie ma produktów
        productDisplay.innerHTML = "<p>Brak dostępnych produktów w tej podkategorii.</p>";
    }
}

// Funkcja do dodawania produktów do koszyka
function addToCart(productName, price, category) {
    const productPrice = getPrice(price); // Pobierz cenę w formacie liczbowym
    const quantity = parseInt(prompt(`Ile sztuk ${productName} chcesz dodać do koszyka?`));

    if (isNaN(quantity) || quantity <= 0) {
        alert("Proszę wpisać prawidłową liczbę sztuk.");
        return; 
    }

    for (let i = 0; i < quantity; i++) {
        cart.push({ 
            name: productName, 
            price: productPrice, 
            category: category // Dodaj kategorię
        }); 
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Zapisz do localStorage
    updateCart(); // Zaktualizuj wyświetlane elementy koszyka
    updateCartCount(); // Zaktualizuj licznik koszyka
    alert(`${quantity} sztuk ${productName} zostało dodanych do koszyka!`); // Komunikat informujący o dodaniu do koszyka
}

// Funkcja do aktualizacji koszyka
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - ${item.price.toFixed(2)} zł`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.innerText = (total + shippingCost).toFixed(2);
}

// Funkcja do ładowania koszyka przy załadowaniu strony
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart(); // Aktualizuje wyświetlane elementy koszyka
        updateCartCount(); // Upewnij się, że licznik jest aktualny przy załadowaniu
    } else {
        cart = []; // Ustaw pusty koszyk, jeśli nic nie jest zapisane
        updateCartCount(); // Upewnij się, że licznik jest aktualny przy załadowaniu
    }
}

// Funkcja do aktualizacji licznika koszyka
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.innerText = cart.length > 0 ? `${cart.length}` : '0'; // Zaktualizuj wyświetlaną liczbę produktów
}

// Funkcja do czyszczenia koszyka
function clearCart() {
    if (confirm("Czy na pewno chcesz wyczyścić koszyk?")) {
        cart = []; // Resetuje tablicę koszyka do pustej
        localStorage.removeItem('cart'); // Usuwa dane koszyka z localStorage
        updateCart(); // Aktualizuje wyświetlane elementy koszyka
        updateCartCount(); // Aktualizuje licznik koszyka
        alert("Koszyk został wyczyszczony!");
    }
}

// Ustawienia DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    loadCart(); // Załaduj koszyk
    updateCartCount(); // Upewnij się, że licznik jest aktualny
});