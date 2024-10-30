// Dane o produktach
const products = {
    'subcat1-1': [ // Bombki
        {
            name: "1-warstwowe",
            description: "Dowolne wzory",
            price: "10 zł",
            imgSrc: [
                "bo1.jpg",
                "bo2.jpg",
                "bo3.jpg",
                "bo4.jpg",
                "bo5.jpg"
            ]
        },
        {
            name: "Choinka Srebrna",
            description: "Elegancka, srebrna choinka.",
            price: "120 zł",
            imgSrc: [
                "bo2.jpg",
                "bo3.jpg"
            ]
        },
        {
            name: "Bla",
            description: "Elegancka, srebrna choinka.",
            price: "120 zł",
            imgSrc: [
                "bo3.jpg",
                "bo2.jpg"
            ]
        },
        {
            name: "Blababa",
            description: "Elegancka choinka w nowoczesnym stylu.",
            price: "120 zł",
            imgSrc: [
                "https://via.placeholder.com/150"
            ] 
        },
        {
            name: "Drugalinijka",
            description: "Stylowa ozdoba choinkowa.",
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
            description: "Lśniąca, złota ozdoba.",
            price: "25 zł",
            imgSrc: [
                "https://via.placeholder.com/150"
            ]
        }
    ],
    'subcat1-3': [ // Prezentowanie
        {
            name: "Prezent 1",
            description: "Podarunek idealny dla bliskiej osoby.",
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
};

let currentIndex;
let currentImages;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const shippingCost = 9.99;

// Funkcje do obsługi modalnego okna ze zdjęciami
function openImage(product) {
    currentImages = product.imgSrc;
    currentIndex = 0;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = currentImages[currentIndex];
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + currentImages.length) % currentImages.length;
    document.getElementById('modalImage').src = currentImages[currentIndex];
}

// Funkcja do pokazywania/ukrywania subkategorii
function toggleSubcategories(id) {
    const allSubcategories = document.querySelectorAll('.subcategory-list');
    const currentSubcategory = document.getElementById(id);
    const isCurrentlyVisible = currentSubcategory.style.display === "block";

    allSubcategories.forEach(subcategory => {
        subcategory.style.display = "none";
    });

    currentSubcategory.style.display = isCurrentlyVisible ? "none" : "block";
}

// Funkcja do konwersji ceny z formatu tekstowego na liczbę
function getPrice(priceString) {
    return parseFloat(priceString.replace(' zł', '').replace(',', '.'));
}

// Funkcja do wyświetlania produktów
function displayProducts(subcategoryId) {
    const productDisplay = document.getElementById("product-display");
    productDisplay.innerHTML = "";
    const relevantProducts = products[subcategoryId];

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
        productDisplay.innerHTML = "<p>Brak dostępnych produktów w tej podkategorii.</p>";
    }
}

// Funkcja do dodawania produktów do koszyka
function addToCart(productName, price) {
    const productPrice = getPrice(price);
    const quantity = parseInt(prompt(`Ile sztuk ${productName} chcesz dodać do koszyka?`));

    if (isNaN(quantity) || quantity <= 0) {
        alert("Proszę wpisać prawidłową liczbę sztuk.");
        return;
    }

    for (let i = 0; i < quantity; i++) {
        cart.push({
            name: productName,
            price: productPrice
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    updateCartCount();
    alert(`${quantity} sztuk ${productName} zostało dodanych do koszyka!`);
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
    cart = savedCart ? JSON.parse(savedCart) : [];
    updateCart();
    updateCartCount();
}

// Funkcja do aktualizacji licznika koszyka
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.innerText = cart.length > 0 ? `${cart.length}` : '0';
}

// Funkcja do czyszczenia koszyka
function clearCart() {
    if (confirm("Czy na pewno chcesz wyczyścić koszyk?")) {
        cart.length = 0;
        localStorage.removeItem('cart');
        updateCart();
        updateCartCount();
        alert("Koszyk został wyczyszczony!");
    }
}

// Ustawienia DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    updateCartCount();
});