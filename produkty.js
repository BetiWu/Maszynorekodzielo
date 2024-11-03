// Dane o produktach
const products = {
    'subcat1-1': [ // Bombki
        {
            name: "1-warstwowe",
            description: "Dowolny wzór",
            price: "9.99 zł",
            imgSrc: [
                "bo1.jpg",
                "bo2.jpg",
                "bo3.jpg",
                "bo4.jpg",
                "bo5.jpg",
				"bo6.jpg",
				"bo7.jpg",
				"bo8.jpg",
				"bo10.jpg"
			
            ]
        },
		
		     {
            name: "Dzwoniferki",
            description: "4 rodzaje",
            price: "9.99 zł",
            imgSrc: [
                "dzwoni1.jpg",
                "dzwoni2.jpg",
				"dzwoni3.jpg",
				"dzwoni4.jpg",
				"dzwoni5.jpg",
                "dzwoni6.jpg",
				"dzwoni7.jpg",
				"dzwoni8.jpg",
				"dzwoni9.jpg",
				"dzwoni10.jpg"
            ]
        },
		
        {
            name: "2-warstwowe",
            description: "Dowolny wzór",
            price: "14.99 zł",
            imgSrc: [
                "2.6.jpg",
				"2.1.jpg",
				"2.2.jpg",
				"2.3.jpg",
				"2.4.jpg",
				"2.5.jpg",
				"2.7.jpg",
				"2.8.jpg",
				"2.9.jpg",
				"2.10.jpg"
                
            ]
        },
   
        {
            name: "Inne",
            description: "Różne kształty",
            price: "19.99 zł",
            imgSrc: [
                "3.1.jpg",
				"3.2.jpg",
				"3.3.jpg",
			
            ] 
        },
       
    ],
	
    'subcat1-2': [ // Choinki
        {
            name: "POMPinka",
            description: "28cm(59zł) 38cm(69zł).",
            price: "69 zł",
            imgSrc: [
                "po1.png",
				"po2.png",
				"po3.png",
				"po4.jpg"
				
				
            ] 
        },
		
        {
            name: "Drewniana malowana",
            description: "Personalizowana",
            price: "39 zł",
            imgSrc: [
                 "ch1.jpg",
				"ch2.jpg",
				"ch3.jpg",
				"ch4.jpg",
				"ch5.jpg",
				"ch6.jpg",
				"ch7.jpg",
				"ch8.jpg"
            ]
        }
    ],
	
	
	
	
    'subcat1-3': [ // Na stół
        {
            name: "Etui sztućce",
            description: "Gruby filc, 2 kolory, dowolny napis",
            price: "9.99 zł",
            imgSrc: [
                "e1.jpg",
				"e2.jpg",
				"e3.jpg"
            ]
        },
		
		 {
            name: "Mały talerzyk",
            description: "Pod opłatek, trwały niezmywalny grawer",
            price: "39 zł",
            imgSrc: [
                "t1.jpg"
			
            ]
        }
		
		
		
		
    ],
    'subcat1-4': [ // Na pieniążek
        {
            name: "Filcowe etui na pieniążek",
            description: "Filcowe, Dowolny kształt, Dowolny napis",
            price: "13 zł",
            imgSrc: [
                "poc1.jpg",
				"poc2.jpg",
				"poc3.jpg",
				"poc4.jpg",
				"poc4.jpg"
				
            ]
        },
		
		   {
            name: "Drewniane etui na pieniążek",
            description: "Drewniane, Dowolny kształt, Dowolny napis",
            price: "19 zł",
            imgSrc: [
                "poc1.jpg",
				"poc2.jpg",
				"poc3.jpg",
				"poc4.jpg",
				"poc4.jpg"
				
            ]
        }
		
		
		
		
		
    ],
    'subcat1-5': [ // Wianki na drzwi
        {
            name: "Wianek Stajenka",
            description: "Pomponowy wianek ok 40 cm",
            price: "119 zł",
            imgSrc: [
                 "w1.png",
				"w2.png",
				"w3.png"
            ]
        },
		
		  {
            name: "Wianek Gwiazdka",
            description: "Pomponowa gwiazda na drzwi ok 40 cm",
            price: "119 zł",
            imgSrc: [
                "g1.png",
				"g2.png",
				"g3.png"
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