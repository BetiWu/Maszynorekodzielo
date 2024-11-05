// Dane o produktach
const products = {
    'subcat1-1': [ // Bombki
        {
            name: "Bombki 1-warstwowe",
            description: "Kliknij na zdjęcie i obejrzyj propozycje, dowolne wzory/postaci",
            price: "9.99 zł",
            imgSrc: [
                "images/1/bombki/bo1.jpg",
                "images/1/bombki/bo2.jpg",
                "images/1/bombki/bo3.jpg",
                "images/1/bombki/bo4.jpg",
                "images/1/bombki/bo5.jpg",
				"images/1/bombki/bo6.jpg",
				"images/1/bombki/bo7.jpg",
				"images/1/bombki/bo8.jpg",
				"images/1/bombki/bo10.jpg"
			
            ]
        },
		
		     {
            name: "Bombki Dzwoniferki",
            description: "Rodzina (mama/babcia/ciocia, tata/dziadek/wujek, syn, córka)",
            price: "9.99 zł",
            imgSrc: [
                "images/1/dzwoni/dzwoni1.jpg",
                "images/1/dzwoni/dzwoni2.jpg",
				"images/1/dzwoni/dzwoni3.jpg",
				"images/1/dzwoni/dzwoni4.jpg",
				"images/1/dzwoni/dzwoni5.jpg",
                "images/1/dzwoni/dzwoni6.jpg",
				"images/1/dzwoni/dzwoni7.jpg",
				"images/1/dzwoni/dzwoni8.jpg",
				"images/1/dzwoni/dzwoni9.jpg",
				"images/1/dzwoni/dzwoni10.jpg"
            ]
        },
		
        {
            name: "Bombki 2-warstwowe",
            description: "Kliknij na zdjęcie i obejrzyj propozycje, dowolne wzory/postaci",
            price: "14.99 zł",
            imgSrc: [
                "images/1/2warst/2.6.jpg",
				"images/1/2warst/2.1.jpg",
				"images/1/2warst/2.2.jpg",
				"images/1/2warst/2.3.jpg",
				"images/1/2warst/2.4.jpg",
				"images/1/2warst/2.5.jpg",
				"images/1/2warst/2.7.jpg",
				"images/1/2warst/2.8.jpg",
				"images/1/2warst/2.9.jpg",
				"images/1/2warst/2.10.jpg"
                
            ]
        },
   
        {
            name: "Bombki Inne",
            description: "Kliknij na zdjęcie i obejrzyj propozycje, 2-warstowowe różne kształty",
            price: "19.99 zł",
            imgSrc: [
                "images/1/BoInne/3.1.jpg",
				"images/1/BoInne/3.2.jpg",
				"images/1/BoInne/3.3.jpg",
			
            ] 
        },
		
	
       
    ],
	
    'subcat1-2': [ // Choinki
        {
            name: "Choinka Pompinka",
            description: "Choinka z własnoręcznie plecionymi pomponami, personalizowana, wysokość ok 40cm ",
            price: "69 zł",
            imgSrc: [
                "images/2/choinki/po1.jpg",
				"images/2/choinki/po2.jpg",
				"images/2/choinki/po3.jpg",
				"images/2/choinki/po4.jpg"
				
				
            ] 
        },
		
        {
            name: "Choinka drewniana malowana",
            description: "Choinka drewniana własnoręcznie malowana, personalizowana, wysokość ok 25cm",
            price: "39 zł",
            imgSrc: [
                "images/2/choinki/ch1.jpg",
				"images/2/choinki/ch2.jpg"
            ]
        }
    ],
	
	
	
	
    'subcat1-3': [ // Na stół
        {
            name: "Etui na sztućce",
            description: "Gruby filc, różne kolory, dowolny napis, możliwy też inny kształt",
            price: "9.99 zł",
            imgSrc: [
                "images/3/stol/e1.jpg",
				"images/3/stol/e2.jpg",
				"images/3/stol/e3.jpg"
            ]
        },
		
		 {
            name: "Mały talerzyk",
            description: "Pod opłatek, trwały niezmywalny grawer, różne wzory",
            price: "39 zł",
            imgSrc: [
                "images/3/stol/t1.jpg"
			
            ]
        }
		
		
		
		
    ],
    'subcat1-4': [ // Na pieniążek
        {
            name: "Filcowe etui na pieniążek",
            description: "Filcowe, dowolny kształt/wzór/postać/napis",
            price: "13 zł",
            imgSrc: [
                "images/4/pieniadz/poc1.jpg",
				"images/4/pieniadz/poc2.jpg",
				"images/4/pieniadz/poc3.jpg",
				"images/4/pieniadz/poc4.jpg",
				"images/4/pieniadz/poc4.jpg"
				
            ]
        },
		
		   {
            name: "Drewniane etui na pieniążek",
            description: "Drewniane, dowolny wzór/postać/napis",
            price: "17 zł",
            imgSrc: [
                "images/4/pieniadz/bon3.jpg",
				"images/4/pieniadz/bon1.jpg",
				"images/4/pieniadz/bon2.jpg",
				"images/4/pieniadz/bon4.jpg",
				"images/4/pieniadz/bon5.jpg",
				"images/4/pieniadz/bon6.jpg",
				"images/4/pieniadz/bon7.jpg",
				"images/4/pieniadz/bon8.jpg",
				"images/4/pieniadz/bon9.jpg",
				"images/4/pieniadz/bon10.jpg"
				
            ]
        }
		
		
		
		
		
    ],
    'subcat1-5': [ // Wianki na drzwi
        {
            name: "Wianek Stajenka",
            description: "Pomponowy wianek 38 cm",
            price: "119 zł",
            imgSrc: [
                 "images/5/drzwi/w1.jpg",
				"images/5/drzwi/w2.jpg",
				"images/5/drzwi/w3.jpg"
            ]
        },
		
		  {
            name: "Wianek Gwiazdka",
            description: "Pomponowa gwiazda na drzwi 38 cm",
            price: "99 zł",
            imgSrc: [
                "images/5/drzwi/g1.1.jpg",
				"images/5/drzwi/g2.jpg"
            ]
        }
		
		
		
		
		
    ],
   // Wielkanoc - Jajka
    'subcat3-1': [
        {
            name: "Cekinowe jajko",
            description: "Ręcznie ozdobione cekinami, na tronie, możliwa personalizacja/grawer",
            price: "39 zł",
            imgSrc: [
			"images/6/jajka/ozd1.jpg", 
			"images/6/jajka/ozd2.jpg", 
			"images/6/jajka/ozd3.jpg", 
			"images/6/jajka/ozd4.jpg"
			
					
			]
        },
			
		
		
        {
            name: "Jajko imienne",
            description: "Rodzina (mama/babcia/ciocia, tata/dziadek/wujek, syn, córka)",
            price: "15 zł",
            imgSrc: [
			"images/6/jajka/imienne1.jpg", 
			"images/6/jajka/imienne2.jpg",
			"images/6/jajka/imienne3.jpg", 
			"images/6/jajka/imienne4.jpg",
			"images/6/jajka/imienne5.jpg", 
			"images/6/jajka/imienne6.jpg",
			"images/6/jajka/imienne7.jpg", 
			"images/6/jajka/imienne8.jpg",
			"images/6/jajka/imienne9.jpg"
			
			]
        }
		
    ],
    // Wielkanoc - Zajączek
    'subcat3-2': [
        {
            name: "Zajączkowe etui na sztućce",
            description: "Filcowe, dowolny kształt/wzór/napis. Dostępne 2 kolory wielkanocne: żółty i zielony",
            price: "9 zł",
            imgSrc: [
			"images/7/zajaczek/zaj1.jpg", 
			"images/7/zajaczek/zaj2.jpg",
			"images/7/zajaczek/zaj3.jpg",
			"images/7/zajaczek/zaj4.jpg"
			
			]
        },
		
		
        {
            name: "Zajączek witrażowy",
            description: "2-warstwowy, dostępne różne wzory,dowolny kolor tła, możliwość graweru na podstawce",
            price: "29 zł",
            imgSrc: [
			"images/7/zajaczek/stroik1.jpg",
			"images/7/zajaczek/stroik2.jpg"
			
			
			]
        }
    ],
	
	
    // Wielkanoc bon
    'subcat3-3': [
        {
            name: "Bon Wielkanocny",
            description: "Personalizowany bon wielkanocny, kliknij w zdjęcie, dostępne różne wzory",
            price: "15 zł",
            imgSrc: [
			"images/8/bon/wbon1.jpg",
			"images/8/bon/wbon2.jpg",
			"images/8/bon/wbon3.jpg",
			"images/8/bon/wbon4.jpg"
			
			]
        }
    ],
	
	
	// wianek
    'subcat3-4': [
        {
            name: "Wianek Wielkanocny",
            description: "Personalizowany wianek na drzwi, z ręcznie wykonanymi kwiatami i sznurkiem makramy",
            price: "49 zł",
            imgSrc: [
			"images/9/wian/wian1.jpg",
			"images/9/wian/wian2.jpg",
			"images/9/wian/wian3.jpg"
			
			]
        }
    ],
	
	
	
	
    // Ślub - Zaproszenia
    'subcat2-1': [
        {
            name: "Zaproszenie na ślub",
            description: "W pełni personalizowane, dowolne kształty, grafika i życzenia",
            price: "5 zł",
            imgSrc: ["zaproszenie1.jpg"]
        }
    ],
    // Ślub - Dekoracje
    'subcat2-2': [
        {
            name: "Dekoracja na stół",
            description: "Stylowa dekoracja na stół.",
            price: "20 zł",
            imgSrc: ["dekoracja1.jpg"]
        }
    ],
    // Ślub - Upominki
    'subcat2-3': [
        {
            name: "Stylowy upominek",
            description: "Unikalny upominek na ślub.",
            price: "30 zł",
            imgSrc: ["upominek1.jpg"]
        }
    ],
    // Ślub - Kwiaty
    'subcat2-4': [
        {
            name: "Bukiet ślubny",
            description: "Piękny bukiet na Twoje wesele.",
            price: "150 zł",
            imgSrc: ["bukiet1.jpg"]
        }
    ],
    // Komunia - Zaproszenia
    'subcat4-1': [
        {
            name: "Zaproszenie na komunię",
            description: "Eleganckie zaproszenie na komunię.",
            price: "7 zł",
            imgSrc: ["zaproszenie_komunia.jpg"]
        }
    ],
    // Komunia - Dekoracje
    'subcat4-2': [
        {
            name: "Dekoracja stołu",
            description: "Stylowe dekoracje na komunię.",
            price: "50 zł",
            imgSrc: ["dekoracja_komunia.jpg"]
        }
    ],
    // Chrzest - Zaproszenia
    'subcat5-1': [
        {
            name: "Zaproszenie na chrzest",
            description: "Eleganckie zaproszenie na chrzest.",
            price: "5 zł",
            imgSrc: ["zaproszenie_chrzest.jpg"]
        }
    ],
    // Dzień Babci - Portfel
    'subcat6-1': [
        {
            name: "Portfel dla babci",
            description: "Elegancki portfel.",
            price: "99 zł",
            imgSrc: ["portfel_babcia.jpg"]
        }
    ],
    // Dzień Mamy i Taty statuetka
    'subcat7-1': [
        {
            name: "Statuetka dla Taty/Mamy",
            description: "W pełni personalizowane, różne wzory",
            price: "39 zł",
            imgSrc: [
			"images/mamytaty/1/tat1.jpg",
			"images/mamytaty/1/tat2.jpg",
			"images/mamytaty/1/tat3.jpg",
			"images/mamytaty/1/tat4.jpg",
			"images/mamytaty/1/tat5.jpg"
			]
        },
   
	//brelok
        {
            name: "Brelok super Taty lub Mamy",
            description: "W pełni personalizowane, różne wzory",
            price: "15 zł",
            imgSrc: [
			"images/mamytaty/1/bre1.jpg",
			"images/mamytaty/1/bre2.jpg"
		]
        }
    ],
	
	
	
	
	
	    // Dzień Mamy i Taty
    'subcat7-2': [
        {
            name: "Kartka XXL z balonami",
            description: "Płyta 3mm grawerowana, Kartka z balonami XXL, dla Mamy/Taty, w pełni personalizowana",
            price: "99 zł",
             imgSrc: [
			"images/mamytaty/1/mxxl1.jpg",
			"images/mamytaty/1/mxxl2.jpg",
			"images/mamytaty/1/mxxl3.jpg",
			"images/mamytaty/1/mxxl4.jpg",
			"images/mamytaty/1/mxxl5.jpg"
			]
        }
    ],
	
		    // Dzień Mamy i Taty
    'subcat7-3': [
        {
            name: "Laurka z filcowymi kwiatami",
            description: "Larka na sklejce 3mm, z filcowymi kwiatami i życzeniami z tyłu, w pełni personalizowana",
            price: "69 zł",
            imgSrc: [
			"images/mamytaty/1/l1.jpg",
			"images/mamytaty/1/l2.jpg",
			"images/mamytaty/1/l3.jpg",
			"images/mamytaty/1/l4.jpg",
			"images/mamytaty/1/l5.jpg",
			"images/mamytaty/1/l6.jpg",
			"images/mamytaty/1/l7.jpg"
			]
        }
    ],
	
	
	
	
	
	
	
	
	
	
	
    // Dzień Kobiet - Kwiaty
    'subcat8-1': [
        {
            name: "Kwiaty na Dzień Kobiet",
            description: "Uroczy bukiet z okazji Dnia Kobiet.",
            price: "120 zł",
            imgSrc: ["kwiaty_dzien_kobiet.jpg"]
        }
    ],
    // Dzień Mężczyzn - Krawat
    'subcat15-1': [
        {
            name: "Krawat",
            description: "Elegancki krawat na każdą okazję.",
            price: "45 zł",
            imgSrc: ["krawat.jpg"]
        }
    ],
    // Dzień Nauczyciela - Obrazy
    'subcat13-1': [
        {
            name: "Obraz na Dzień Nauczyciela",
            description: "Piękny obraz do powieszenia.",
            price: "200 zł",
            imgSrc: ["obraz_nauczyciel.jpg"]
        }
    ],
    // Urodziny - Torty
    'subcat16-2': [
        {
            name: "Tort urodzinowy",
            description: "Pyszny tort na Twoje urodziny.",
            price: "150 zł",
            imgSrc: ["tort_urodziny.jpg"]
        }
    ],
    // Walentynki - Kwiaty
    'subcat17-1': [
        {
            name: "Bukiet na Walentynki",
            description: "Uroczy bukiet dla Twojej drugiej połówki.",
            price: "120 zł",
            imgSrc: ["bukiet_walentynki.jpg"]
        }
    ],
    // Breloki
    'subcat10-1': [
        {
            name: "Brelok skórzany",
            description: "Elegancki brelok skórzany.",
            price: "120 zł",
            imgSrc: ["brelok_skórzany.jpg"]
        }
    ],
    // Magnesy
    'subcat18-1': [
        {
            name: "Magnes na lodówkę",
            description: "Zabawny magnes na lodówkę.",
            price: "15 zł",
            imgSrc: ["magnes.jpg"]
        }
    ],
    // Zwierzęta - Karma dla psów
    'subcat11-1': [
        {
            name: "Karma dla psów",
            description: "Zdrowa karma dla psów.",
            price: "120 zł",
            imgSrc: ["karma_dla_psów.jpg"]
        }
    ],
    // Dzieci - Książki
    'subcat19-2': [
        {
            name: "Książki dla dzieci",
            description: "Zestaw książek dla dzieci.",
            price: "200 zł",
            imgSrc: ["ksiazki_dzieci.jpg"]
        }
    ],
    // Rodzina - Gry rozwojowe
    'subcat20-3': [
        {
            name: "Gry rozwojowe",
            description: "Zestaw gier dla całej rodziny.",
            price: "150 zł",
            imgSrc: ["gry_rodzinna.jpg"]
        }
    ],
    // Wall ART - Obrazy
    'subcat21-1': [
        {
            name: "Obraz do salonu",
            description: "Piękny obraz do powieszenia w salonie.",
            price: "250 zł",
            imgSrc: ["obraz_salon.jpg"]
        }
    ],
    // Lampki
    'subcat22-1': [
        {
            name: "Lampka nocna",
            description: "Urocza lampka nocna do pokoju.",
            price: "80 zł",
            imgSrc: ["lampka_nocna.jpg"]
        }
    ],
	
	    // Chrobotek
    'subcat9-1': [
        {
            name: "Chrobotek",
            description: "Urocza lampka nocna do pokoju.",
            price: "80 zł",
            imgSrc: ["lampka_nocna.jpg"]
        }
    ],
	
	
    // Inne - Handmade
    'subcat14-1': [
        {
            name: "Handmade Biżuteria",
            description: "Ręcznie robiona biżuteria.",
            price: "25 zł",
            imgSrc: ["bizuteria_handmade.jpg"]
        }
    ]
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
        productDisplay.innerHTML = "<p>Szczegóły wkrótce..</p>";
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