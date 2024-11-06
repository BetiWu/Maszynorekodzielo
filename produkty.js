// Dane o produktach
const products = {
    'subcat1-1': [ // Bombki
        {
            name: "Bombki 1-warstwowe",
            description: "Kliknij na zdjęcie i obejrzyj propozycje, dowolne wzory/postaci",
            price: "9.99 zł",
            imgSrc: [
                "images/bomb/bombki/bo1.jpg",
                "images/bomb/bombki/bo2.jpg",
                "images/bomb/bombki/bo3.jpg",
                "images/bomb/bombki/bo4.jpg",
                "images/bomb/bombki/bo5.jpg",
				"images/bomb/bombki/bo6.jpg",
				"images/bomb/bombki/bo7.jpg",
				"images/bomb/bombki/bo8.jpg",
				"images/bomb/bombki/bo10.jpg"
			
            ]
        },
		
		     {
            name: "Bombki Dzwoniferki",
            description: "Rodzina (mama/babcia/ciocia, tata/dziadek/wujek, syn, córka)",
            price: "9.99 zł",
            imgSrc: [
                "images/bomb/dzwoni/dzwoni1.jpg",
                "images/bomb/dzwoni/dzwoni2.jpg",
				"images/bomb/dzwoni/dzwoni3.jpg",
				"images/bomb/dzwoni/dzwoni4.jpg",
				"images/bomb/dzwoni/dzwoni5.jpg",
                "images/bomb/dzwoni/dzwoni6.jpg",
				"images/bomb/dzwoni/dzwoni7.jpg",
				"images/bomb/dzwoni/dzwoni8.jpg",
				"images/bomb/dzwoni/dzwoni9.jpg",
				"images/bomb/dzwoni/dzwoni10.jpg"
            ]
        },
		
        {
            name: "Bombki 2-warstwowe",
            description: "Kliknij na zdjęcie i obejrzyj propozycje, dowolne wzory/postaci",
            price: "14.99 zł",
            imgSrc: [
                "images/bomb/2warst/2.6.jpg",
				"images/bomb/2warst/2.1.jpg",
				"images/bomb/2warst/2.2.jpg",
				"images/bomb/2warst/2.3.jpg",
				"images/bomb/2warst/2.4.jpg",
				"images/bomb/2warst/2.5.jpg",
				"images/bomb/2warst/2.7.jpg",
				"images/bomb/2warst/2.8.jpg",
				"images/bomb/2warst/2.9.jpg",
				"images/bomb/2warst/2.10.jpg"
                
            ]
        },
   
        {
            name: "Bombki Inne",
            description: "Kliknij na zdjęcie i obejrzyj propozycje, 2-warstowowe różne kształty",
            price: "19.99 zł",
            imgSrc: [
                "images/bomb/BoInne/3.1.jpg",
				"images/bomb/BoInne/3.2.jpg",
				"images/bomb/BoInne/3.3.jpg",
			
            ] 
        },
		
	
       
    ],
	
    'subcat1-2': [ // Choinki
        {
            name: "Choinka Pompinka",
            description: "Choinka z własnoręcznie plecionymi pomponami, personalizowana, wysokość ok 40cm ",
            price: "69 zł",
            imgSrc: [
                "images/choinki/po1.jpg",
				"images/choinki/po2.jpg",
				"images/choinki/po3.jpg",
				"images/choinki/po4.jpg"
				
				
            ] 
        },
		
        {
            name: "Choinka drewniana malowana",
            description: "Choinka drewniana własnoręcznie malowana, personalizowana, wysokość ok 25cm",
            price: "39 zł",
            imgSrc: [
                "images/choinki/ch1.jpg",
				"images/choinki/ch2.jpg"
            ]
        }
    ],
	
	
	
	
    'subcat1-3': [ // Na stół
        {
            name: "Etui na sztućce",
            description: "Gruby filc, różne kolory, dowolny napis, możliwy też inny kształt",
            price: "9.99 zł",
            imgSrc: [
                "images/stol/e1.jpg",
				"images/stol/e2.jpg",
				"images/stol/e3.jpg"
            ]
        },
		
		 {
            name: "Mały talerzyk",
            description: "Pod opłatek, trwały niezmywalny grawer, różne wzory",
            price: "39 zł",
            imgSrc: [
                "images/stol/t1.jpg"
			
            ]
        },
		
			 {
            name: "Świecznik",
            description: "Ku pamięci tych, których już nie ma, personalizowany",
            price: "29 zł",
            imgSrc: [
                "images/swiecznik/s1.jpg",
				"images/swiecznik/s2.jpg"
			
            ]
        }
		
		
		
		
    ],
    'subcat1-4': [ // Na pieniążek
        {
            name: "Filcowe etui na pieniążek",
            description: "Filcowe, dowolny kształt/wzór/postać/napis",
            price: "13 zł",
            imgSrc: [
                "images/pieniadz/poc1.jpg",
				"images/pieniadz/poc2.jpg",
				"images/pieniadz/poc3.jpg",
				"images/pieniadz/poc4.jpg",
				"images/pieniadz/poc4.jpg"
				
            ]
        },
		
		   {
            name: "Drewniane etui na pieniążek",
            description: "Drewniane, dowolny wzór/postać/napis",
            price: "17 zł",
            imgSrc: [
                "images/pieniadz/bon3.jpg",
				"images/pieniadz/bon1.jpg",
				"images/pieniadz/bon2.jpg",
				"images/pieniadz/bon4.jpg",
				"images/pieniadz/bon5.jpg",
				"images/pieniadz/bon6.jpg",
				"images/pieniadz/bon7.jpg",
				"images/pieniadz/bon8.jpg",
				"images/pieniadz/bon9.jpg",
				"images/pieniadz/bon10.jpg"
				
            ]
        }
		
		
		
		
		
    ],
    'subcat1-5': [ // Wianki na drzwi
        {
            name: "Wianek Stajenka",
            description: "Pomponowy wianek 38 cm",
            price: "119 zł",
            imgSrc: [
                 "images/drzwi/w1.jpg",
				"images/drzwi/w2.jpg",
				"images/drzwi/w3.jpg"
            ]
        },
		
		  {
            name: "Wianek Gwiazdka",
            description: "Pomponowa gwiazda na drzwi 38 cm",
            price: "99 zł",
            imgSrc: [
                "images/drzwi/g1.1.jpg",
				"images/drzwi/g2.jpg"
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
			"images/jajka/ozd1.jpg", 
			"images/jajka/ozd2.jpg", 
			"images/jajka/ozd3.jpg", 
			"images/jajka/ozd4.jpg"
			
					
			]
        },
			
		
		
        {
            name: "Jajko imienne",
            description: "Rodzina (mama/babcia/ciocia, tata/dziadek/wujek, syn, córka)",
            price: "15 zł",
            imgSrc: [
			"images/jajka/imienne1.jpg", 
			"images/jajka/imienne2.jpg",
			"images/jajka/imienne3.jpg", 
			"images/jajka/imienne4.jpg",
			"images/jajka/imienne5.jpg", 
			"images/jajka/imienne6.jpg",
			"images/jajka/imienne7.jpg", 
			"images/jajka/imienne8.jpg",
			"images/jajka/imienne9.jpg"
			
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
			"images/zajaczek/zaj1.jpg", 
			"images/zajaczek/zaj2.jpg",
			"images/zajaczek/zaj3.jpg",
			"images/zajaczek/zaj4.jpg"
			
			]
        },
		
		
        {
            name: "Zajączek witrażowy",
            description: "2-warstwowy, dostępne różne wzory,dowolny kolor tła, możliwość graweru na podstawce",
            price: "29 zł",
            imgSrc: [
			"images/zajaczek/stroik1.jpg",
			"images/zajaczek/stroik2.jpg"
			
			
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
			"images/bon/wbon1.jpg",
			"images/bon/wbon2.jpg",
			"images/bon/wbon3.jpg",
			"images/bon/wbon4.jpg"
			
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
			"images/wian/wian1.jpg",
			"images/wian/wian2.jpg",
			"images/wian/wian3.jpg"
			
			]
        }
    ],
	
	
	
	
    // Ślub - Zaproszenia
    'subcat2-1': [
        {
            name: "Zaproszenie ślubne",
            description: "Kliknij w zdjęcie obejrzyj wzory, w pełni personalizowane( przy większej ilośći zniżka), mogę zaprojektować pod konkretny pomysł",
            price: "17 zł",
            imgSrc: [
			"images/slub/zapro1.jpg",
			"images/slub/zapro2.jpg",
			"images/slub/zapro3.jpg",
			"images/slub/zapro4.jpg"
			
			]
          }
    ],
	
    // Ślub - Statuetka
    'subcat2-2': [
            {
            name: "Statuetka ślubna",
            description: "Personalizowana, elegancki dodatek do koperty ",
            price: "69 zł",
            imgSrc: [
			"images/slub/par1.jpg",
			"images/slub/par2.jpg",
			"images/slub/par3.jpg",
			"images/slub/par4.jpg"
			
			
			]
        }
    ],
	
    // Ślub - Kartka
    'subcat2-3': [
        {
            name: "Kartka XXL",
            description: "Płyta 3mm grawerowana, Kartka z balonami XXL, w pełni personalizowana",
            price: "99 zł",
            imgSrc: [
			"images/slub/slxx3.jpg",
			"images/slub/slxx1.jpg",
			"images/slub/slxx2.jpg",
			"images/slub/slxx4.jpg",
			"images/slub/slxx5.jpg"
			
			]
        }
    ],


    // Komunia 
	//ramki
   'subcat4-1': [
        {
            name: "Ramki aniołki",
            description: "Urocze stojące ramki, pamiątka I Komunii Świętej, z personalizowanym grawerem z tyłu",
            price: "59 zł",
            imgSrc: [
			"images/komunia/komunia1.jpg",
			"images/komunia/komunia2.jpg",
			"images/komunia/komunia3.jpg"
			
			
			]
        }
    ],
	
	//zaproszenia
	
	    'subcat4-2': [
        {
            name: "Zaproszenie na komunię",
            description: "Drewniane zaproszenie na komunię",
            price: "17 zł",
            imgSrc: [
			"images/komunia/komuniazapro.jpg",
			"images/komunia/komuniazapro1.jpg"
			
			
			]
        }
    ],
	
	//kartki
	
	 'subcat4-3': [
        {
            name: "Kartki drewniane",
            description: "Eleganckie etui na pieniądze z życzeniami",
            price: "5 zł",
            imgSrc: [
			"images/komunia/k1.jpg",
			"images/komunia/k2.jpg",
			"images/komunia/k3.jpg",
			
			]
        }
    ],
	
		//podziekowania
	
	 'subcat4-4': [
        {
            name: "Różaniec",
            description: "Różaniec",
            price: "13 zł",
            imgSrc: [
			"images/komunia/roz2.jpg",
			"images/komunia/roz1.jpg"
			
			]
        },
		
		
	
        {
            name: "Aniołek",
            description: "Personalizowany aniołek",
            price: "13 zł",
            imgSrc: [
			"images/komunia/anio1.jpg"
			
			]
        }
		
		
		
		
		
    ],
	
	
	
	
    // Chrzest ramki
    'subcat5-1': [
        {
            name: "Ramki aniołki",
            description: "Urocze stojące ramki, pamiątka Chrztu Świętego, z personalizowanym grawerem z tyłu",
            price: "59 zł",
            imgSrc: [
			"images/chrzest/chrzest1.jpg",
			"images/chrzest/chrzest2.jpg",
			"images/chrzest/chrzest3.jpg"
			
			
			]
        }
    ],
	
	/*
	
	//zaproszenia
	
	    'subcat5-2': [
        {
            name: "Zaproszenie na chrzest",
            description: "Drewniane zaproszenie na chrzest",
            price: "17 zł",
            imgSrc: [
			"images/chrzest/zaprochrzest1.jpg"
			
			
			]
        },
		
		   
        {
            name: "Pytanie do Chrzestnych",
            description: "Kartka dla chrzestnych z pytaniem czy zostaną Matką/Ojcem Chrzestnym",
            price: "17 zł",
            imgSrc: [
			"images/chrzest/zaprochrzest1.jpg"
			
			
			]
        }
		
		
	
		
		
		
    ],
	
	//kartki
	
	 'subcat5-3': [
        {
            name: "Kartki drewniane",
            description: "Eleganckie etui na pieniądze z życzeniami",
            price: "5 zł",
            imgSrc: [
			"images/komunia/k1.jpg",
			"images/komunia/k2.jpg",
			"images/komunia/k3.jpg",
			
			
			]
        }
    ],
	
		*/
	
	
    // Urodziny 
    'subcat16-1': [
        {
            name: "Kartka urodzinowa stojąca",
            description: "Drewniana kartka urodzinowa na podstawce, możliwy grawer życzeń z tyłu",
            price: "39 zł",
            imgSrc:  [
			"images/urodziny/kart1.jpg",
			"images/urodziny/kart2.jpg",
			"images/urodziny/kart3.jpg",
			"images/urodziny/kart4.jpg",
			
			]
        },
		
		      {
            name: "Kartka drewniana otwierana",
            description: "2 warstwowa drewniana kartka urodzinowa z życzeniami w środku",
            price: "49 zł",
            imgSrc:  [
			"images/urodziny/kart2warstw1.jpg",
			"images/urodziny/kart2warstw0.jpg",
			"images/urodziny/kart2warstw2.jpg",
			"images/urodziny/kart2warstw3.jpg",
			"images/urodziny/kart2warstw4.jpg",
			
			]
        }
    ],
	
	
	
	
	
	
	
	    'subcat16-2': [
        {
            name: "Aniołek w ramce",
            description: "Aniołek stróż w ramce, stojący, życzenia urodzinowe grawerowane z tyłu",
            price: "59 zł",
            imgSrc: [
			"images/urodziny/aniol1.jpg",
			"images/urodziny/aniol2.jpg",
			"images/urodziny/aniol3.jpg",
			"images/urodziny/aniol4.jpg"
			
			]
        }
    ],
	
	    'subcat16-3': [
        {
            name: "Statuetki urodzinowe",
            description: "Kliknij w zdjęcie obejrzyj wzory, dowolna: postać, grawer",
            price: "89 zł",
            imgSrc: [
			"images/urodziny/s1.jpg",
			"images/urodziny/s2.jpg",
			"images/urodziny/s3.jpg",
			"images/urodziny/s4.jpg",
			"images/urodziny/s5.jpg",
			"images/urodziny/s6.jpg"
			
			]
        }
    ],
	
	    'subcat16-4': [
        {
            name: "Skrzynki urodzinowe",
            description: "Grawerowana skrzynka urodzinowa, na zewnatrz i w środku życzenia",
            price: "49 zł",
              imgSrc: [
			
			"images/urodziny/sk1.jpg",
			"images/urodziny/sk2.jpg",
			"images/urodziny/sk3.jpg",
			"images/urodziny/sk4.jpg"
			
			]
        },
		
		        {
            name: "3D Skrzynka urodzinowa kolorowa",
            description: "Napisy, postać literki 3d, klejone, malowane ręcznie, życzenia w środku",
            price: "69 zł",
              imgSrc: [
			"images/urodziny/sk3d0.jpg",
			"images/urodziny/sk3d1.jpg",
			"images/urodziny/sk3d2.jpg"
			
			]
        }
		
		
		
    ],
	
	    'subcat16-5': [
        {
            name: "Tabliczka garażowa",
            description: "Zabawna tabliczka garażowa, w pełni personalizowana, dowolna grafika",
            price: "49 zł",
            imgSrc: [
			"images/urodziny/garaz4.jpg",
			"images/urodziny/garaz2.jpg",
			"images/urodziny/garaz3.jpg",
			"images/urodziny/garaz1.jpg"
			
			]
        },
		
	
		
	 {
            name: "Koszulka dla fana piłki nożnej",
            description: "Drewniana koszulka klejona do ściany, kliknij zdjęcie obejrzyj inne wzory",
            price: "49 zł",
            imgSrc: [
			"images/urodziny/koszulka1.jpg",
			"images/urodziny/koszulka2.jpg",
			"images/urodziny/koszulka3.jpg",
			"images/urodziny/koszulka4.jpg",
			"images/urodziny/koszulka5.jpg",
			"images/urodziny/koszulka6.jpg"
			
			]
        },
		
			 {
            name: "Winny stoliczek",
            description: "Świetny prezent dla smakosza wina, stoliczek z dowolnym grawerem,",
            price: "119 zł",
            imgSrc: [
			"images/urodziny/i1.jpg",
			
			]
        },
		
			      {
            name: "Podkładki",
            description: "Cieńkie podkładki,dowolna personalizacacja, grawer, grafika",
            price: "9 zł",
             imgSrc: [
			"images/podkladki/p1.jpg",
			"images/podkladki/p2.jpg",
			"images/podkladki/p3.jpg",
			"images/podkladki/p4.jpg",
			"images/podkladki/p5.jpg",
			"images/podkladki/p6.jpg",
			"images/podkladki/p7.jpg",
			"images/podkladki/p8.jpg",
			"images/podkladki/p9.jpg"
			
			]
        },
		
		
		
    ],
	
	
	
	
	    // Dzień Babci
    'subcat6-1': [
        {
            name: "Statuetka dla Babci/Dziadka",
            description: "Do postawienia na komodzie przypominająca o wyjątkowości roli Babci/Dziadka",
            price: "49 zł",
                 imgSrc: [
			"images/babdziad/st1.jpg",
			"images/babdziad/st2.jpg",
			"images/babdziad/st2.jpg"
			]
        }
    ],
	
	  'subcat6-2': [
        {
            name: "Drzewko rodzinne",
            description: "Kliknij na zdjęcie i obejrzyj wzory, drzewko z imionami filcowym/drewnianymi serduszkami",
            price: "89 zł",
                      imgSrc: [
			"images/babdziad/drz1.jpg",
			"images/babdziad/drz2.jpg",
			"images/babdziad/drz3.jpg",
			"images/babdziad/drz4.jpg"
			]
        },
		
		 {
            name: "Tablicza dla Babci/Dziadka",
            description: "Kliknij na zdjęcie i obejrzyj wzory, tabliczka z serduszkami/imionami wnuków, możliwość dowolnej personalizacji",
            price: "49 zł",
                       imgSrc: [
			"images/babdziad/1.jpg",
			"images/babdziad/2.jpg",
			"images/babdziad/3.jpg",
			"images/babdziad/4.jpg",
			"images/babdziad/5.jpg",
			"images/babdziad/6.jpg",
			"images/babdziad/7.jpg"
			]
		 }
		
    ],
	
	
	
	
	
	
	
    // Dzień Mamy i Taty statuetka
    'subcat7-1': [
        {
            name: "Statuetka dla Taty/Mamy",
            description: "W pełni personalizowane, różne wzory",
            price: "39 zł",
            imgSrc: [
			"images/mamytaty/1/tat5.jpg",
			"images/mamytaty/1/tat2.jpg",
			"images/mamytaty/1/tat3.jpg",
			"images/mamytaty/1/tat4.jpg",
			"images/mamytaty/1/tat1.jpg"
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
	
	
	
	
	
	
	
	
	
	
	
    /* Dzień Kobiet - Kwiaty
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
    ],*/
	
	
	
	
	
    // Dzień Nauczyciela - Obrazy
 'subcat13-1': [
        {
            name: "Chrobotek Lalka, ramka duża",
            description: "Idealne na podziękowanie, w pełni personalizowane. Możliwość dopasowania na różne okazje: Dzień Mamy/Taty/Babci/Dziadka etc",
            price: "159 zł",
            imgSrc: [
			"images/chrobotek/panichr1.jpg",
			"images/chrobotek/panichr2.jpg",
			"images/chrobotek/panichr3.jpg",
			"images/chrobotek/panichr4.jpg",
			"images/chrobotek/panichr5.jpg"
			
			]
        },
		
		   {
            name: "Chrobotek Lalka, ramka mała",
            description: "Idealne na podziękowanie, w pełni personalizowane. Możliwość dopasowania na różne okazje: Dzień Mamy/Taty/Babci/Dziadka etc",
            price: "69 zł",
            imgSrc: [
			"images/chrobotek/lalkachr.jpg",
			"images/chrobotek/lalkachr0.jpg",
			"images/chrobotek/lalkachr1.jpg",
			"images/chrobotek/lalkachr2.jpg",
			"images/chrobotek/lalkachr3.jpg"
			
			]
        },
		
		
		
		
		
    ],
	
	
	
	
	
	
    // Walentynki 
    'subcat17-1': [
        {
            name: "Kartka serduszko",
            description: "Personalizowana z wierszem w środku, ażurowe wieczko, 2 warstwowa",
            price: "49 zł",
             imgSrc: [
			"images/walentynki/kar3.jpg",
			"images/walentynki/kar2.jpg",
			"images/walentynki/kar4.jpg",
			"images/walentynki/kar1.jpg",
			]
        }
    ],
	
	
	    'subcat17-2': [
        {
            name: "Taca pełna miłości",
            description: "Drewniana seduszkowa taca na słodkości, upominek, kwiat i coś % lub sok ",
            price: "69 zł",
                imgSrc: [
			"images/walentynki/taca1.jpg",
			"images/walentynki/taca2.jpg",
			"images/walentynki/taca3.jpg"
			]
        }
    ],
	
	    'subcat17-3': [
        {
            name: "Statuetki",
            description: "Statuetka każdego dnia przypominająca o Waszej miłości",
            price: "89 zł",
            imgSrc: [
			"images/walentynki/para1.jpg",
			"images/walentynki/para2.jpg",
			"images/walentynki/para3.jpg",
			"images/walentynki/para4.jpg"
			]
        }
    ],
	
		    'subcat17-4': [
        {
            name: "Miłosne puzzle",
            description: "Oryginalnie przypomnij o  miłości, każdy puzzel personalizowany, z tyłu z puzzlami, Wasze imiona ",
            price: "89 zł",
            imgSrc: [
			"images/walentynki/puzz1.jpg",
			"images/walentynki/puzz2.jpg",
			"images/walentynki/puzz3.jpg",
			"images/walentynki/puzz4.jpg",
			"images/walentynki/puzz4.jpg"
			]
        }
    ],
	
			    'subcat17-5': [
        {
            name: "Świecznik",
            description: "Oryginalnie przypomnij o  miłości, każdy puzzel personalizowany, z tyłu z puzzlami, Wasze imiona ",
            price: "89 zł",
            imgSrc: [
			"images/walentynki/sw3.jpg",
			"images/walentynki/sw2.jpg",
			"images/walentynki/sw1.jpg"
			]
        }
    ],
	
			    'subcat17-6': [
        {
            name: "Kotek",
            description: "Uroczy drobiazg, grawerowany kotek wyznający miłość, personalizowany",
            price: "19 zł",
            imgSrc: [
			"images/walentynki/kot1.jpg",
			"images/walentynki/kot2.jpg"
			]
        },
		
		       {
            name: "Etui na pieniążek",
            description: "Bardziej elegancka i romatyczna forma przekazania prezentu niż przelew",
            price: "15 zł",
            imgSrc: [
			"images/walentynki/pien1.jpg",
			"images/walentynki/pien2.jpg"
			]
        }
    ],
	
	
	
	
	
	
    // Breloki
    'subcat10-1': [
        {
            name: "Brelok imienny",
            description: "Kliknij i obejrzyj zdjęcia, breloki: drewniane, filc, skóra, dowolny kształt, postać, grawer",
            price: "120 zł",
            imgSrc: [
			"images/breloki/br0.jpg",
			"images/breloki/br1.jpg",
			"images/breloki/br2.jpg",
			"images/breloki/br3.jpg",
			"images/breloki/br4.jpg",
			"images/breloki/br5.jpg",
			"images/breloki/br6.jpg",
			"images/breloki/br7.jpg",
			"images/breloki/br8.jpg",
			"images/breloki/br9.jpg",
			"images/breloki/br10.jpg"
			
			
			
			]
        },
		
		 {
            name: "Magnes na lodówkę",
            description: "Magnes na lodówkę z dowolną postacią lub napisem",
            price: "15 zł",
              imgSrc: [
			"images/magnesy/m1.jpg",
			"images/magnesy/m2.jpg",
			"images/magnesy/m3.jpg",
			"images/magnesy/m4.jpg",
			"images/magnesy/m5.jpg",
			"images/magnesy/m6.jpg",
			"images/magnesy/m7.jpg",
			"images/magnesy/m8.jpg",
			"images/magnesy/m9.jpg",
			"images/magnesy/m10.jpg",
			"images/magnesy/m11.jpg"
			
			
			]
			
			
        }
    ],
	
	
	
	
	
	
    // Magnesy
    'subcat18-1': [
        {
            name: "Wizerunki duchowe",
            description: "Kliknij w zdjęcie wybierz wzór, wysokość ok 40 cm",
            price: "99 zł",
              imgSrc: [
			"images/religijne/o2.jpg",
			"images/religijne/o1.jpg",
			"images/religijne/o3.jpg",
			"images/religijne/o4.jpg"
			]
			
			
        }
    ],
	
	
	
	
	
	
    // Zwierzęta 
    'subcat11-1': [
        {
            name: "Magnesy",
            description: "Magnes na lodówkę z dowolną postacią lub napisem",
            price: "15 zł",
              imgSrc: [
			"images/magnesy/m1.jpg",
			"images/magnesy/m2.jpg",
			"images/magnesy/m3.jpg",
			"images/magnesy/m4.jpg",
			"images/magnesy/m5.jpg",
			"images/magnesy/m6.jpg",
			"images/magnesy/m7.jpg",
			"images/magnesy/m8.jpg",
			"images/magnesy/m9.jpg",
			"images/magnesy/m10.jpg"
			]
        }
    ],
	
	    'subcat11-2': [
        {
            name: "Obrazy",
            description: "Klejony do ściany, rozmiar 40 cm, dowolne wzory, możliwa też opcja 2 warstwowa z plecami/tyłem",
            price: "89 zł",
              imgSrc: [
			"images/zwierzeta/kon1.jpg",
			"images/zwierzeta/kot1.jpg",
			"images/zwierzeta/wilk1.jpg",
			"images/zwierzeta/lew1.jpg"
			
			]
        }
    ],
	
	 'subcat11-3': [
        {
            name: "Adresówka",
            description: "Identyfikator z imieniem pupila, z tyłu nr telefonu, materiał filc lub drewno, wzór dowolny",
            price: "15 zł",
              imgSrc: [
			"images/zwierzeta/zw3.jpg",
			"images/zwierzeta/zw2.jpg",
			"images/zwierzeta/zw4.jpg",
			"images/zwierzeta/zw5.jpg"
			
			]
        }
    ],
	
	
	
	
	// Dzieci xxl
    'subcat19-1': [
        {
            name: "Kartka XXL",
            description: "Metryczka, płyta 3mm grawerowana, Kartka z balonami XXL, w pełni personalizowana",
            price: "120 zł",
            imgSrc: [
			"images/dzieci/urxxl1.jpg",
			"images/dzieci/urxxl2.jpg"
			
			
			]
        }
    ],
	
    // Dzieci na ścianę
	//mis
    'subcat19-2': [
        {
            name: "Miś Staś",
            description: "Duży, klejony do ściany, idealny np na urodziny, dowolna cyferka, dowolna postać z bajki, imię dziecka ",
            price: "89 zł",
            imgSrc: [
			"images/dzieci/mis1.jpg",
			"images/dzieci/mis2.jpg"
			
			
			]
        },
		
		   {
            name: "Lampka nocna",
            description: "Daje delikatne światło, idealna np na urodzinki, dowolna kolorystyka i grafika ",
            price: "89 zł",
           imgSrc: [
			"images/lampki/l1.jpg",
			"images/lampki/l2.jpg",
			"images/lampki/l3.jpg",
			"images/lampki/l4.jpg",
			"images/lampki/l5.jpg",
			"images/lampki/l6.jpg",
			"images/lampki/l7.jpg",
			
			]
        },		
		   {
            name: "Imię 3d",
            description: "Napis długość 40 cm, ze sklejki 3mm, w warstwy,klejone dościany, dowolne kolory",
            price: "39 zł",
            imgSrc: [
			"images/dzieci/napis0.jpg",
			"images/dzieci/napis1.jpg",
			"images/dzieci/napis2.jpg",
			"images/dzieci/napis3.jpg"
			
			]
        }
		
		 ],
		
		
		    // Dzieci - psi patrul
    'subcat19-3': [
        {
            name: "Psi Patrol",
            description: "Idealny np na urodziny, dowolna cyferka, dowolna postać z bajki, imię dziecka ",
            price: "49 zł",
            imgSrc: [
			"images/dzieci/patrol2.jpg",
			"images/dzieci/patrol1.jpg"
			
			
			]
        }
    ],
		
		

	
	
	
    // Rodzina 
    'subcat20-1': [
        {
            name: "Misie",
            description: "Ramka z misiową rodziną, klejona do ściany, dowolna konfiguracja",
            price: "79 zł",
            imgSrc: [
			"images/rodzina/ro1.jpg"
			
			]
        }
    ],
	
	
	    'subcat20-2': [
        {
            name: "Serca",
            description: "Ozdoba: serce z imionami członków rodziny, klejona do ściany, ok 40cm",
            price: "89 zł",
              imgSrc: [
			"images/rodzina/serca1.jpg",
			"images/rodzina/serca2.jpg",
			"images/rodzina/serca3.jpg",
			"images/rodzina/serca4.jpg",
			"images/rodzina/serca5.jpg"
			
			
			]
        }
    ],
	
	    'subcat20-3': [
        {
            name: "Drzewo rodzinne",
            description: "Drzewo genealogiczne z imionami członków rodziny",
            price: "89 zł",
              imgSrc: [
		
			"images/rodzina/drz2.jpg"
			
			
			]
        }
    ],
	
	
	/*
	
	
	    'subcat20-4': [
        {
            name: "Obraz",
            description: "Zestaw gier dla całej rodziny.",
            price: "150 zł",
              imgSrc: [
			"images/rodzina/patrol2.jpg",
			"images/rodzina/patrol1.jpg"
			
			
			]
        }
    ],
	
	*/
	
	
	
	
    // Wall ART - Obrazy
    'subcat21-1': [
        {
            name: "Obraz do salonu",
            description: "Piękny obraz do powieszenia w salonie.",
            price: "250 zł",
                 imgSrc: [
			"images/rodzina/patrol2.jpg",
			"images/rodzina/patrol1.jpg"
			
			
			]
        }
    ],
	
	
	
	
    // Lampki i zegary
    'subcat22-1': [
        {
            name: "Lampka nocna",
            description: "Daje delikatne światło, idealna np na urodzinki, dowolna kolorystyka i grafika",
            price: "69 zł",
            imgSrc: [
			"images/lampki/l1.jpg",
			"images/lampki/l2.jpg",
			"images/lampki/l3.jpg",
			"images/lampki/l4.jpg",
			"images/lampki/l5.jpg",
			"images/lampki/l6.jpg",
			"images/lampki/l7.jpg",
			
			]
        },
		
		
	  ],	
		
		
		'subcat22-2': [
		  {
            name: "Zegary",
            description: "Zegar dowolnie personalizowany, dowolna grafika",
            price: "69 zł",
            imgSrc: [
			"images/lampki/z1.jpg",
			"images/lampki/z2.jpg",
			"images/lampki/z3.jpg",
			"images/lampki/z4.jpg"
			
			]
        }
		
			
    ],
	
	
	
	
	    // Chrobotek
    'subcat9-1': [
        {
            name: "Obraz z  chrobotkiem",
            description: "Dowolna konfiguracja rodzinna/sylwetki, zaprojektuję każdy Twój pomysł",
            price: "119 zł",
            imgSrc: [
			"images/chrobotek/ch1.jpg",
			"images/chrobotek/ch2.jpg",
			"images/chrobotek/ch3.jpg"
			
			]
        }
		
    ],
	
		    // Ramki
    'subcat9-2': [
        {
            name: "Chrobotek Lalka, ramka duża",
            description: "Idealne na podziękowanie, w pełni personalizowane. Możliwość dopasowania na różne okazje: Dzień Mamy/Taty/Babci/Dziadka etc",
            price: "159 zł",
            imgSrc: [
			"images/chrobotek/panichr1.jpg",
			"images/chrobotek/panichr2.jpg",
			"images/chrobotek/panichr3.jpg",
			"images/chrobotek/panichr4.jpg",
			"images/chrobotek/panichr5.jpg"
			
			]
        },
		
		   {
            name: "Chrobotek Lalka, ramka mała",
            description: "Idealne na podziękowanie, w pełni personalizowane. Możliwość dopasowania na różne okazje: Dzień Mamy/Taty/Babci/Dziadka etc",
            price: "69 zł",
            imgSrc: [
			"images/chrobotek/lalkachr.jpg",
			"images/chrobotek/lalkachr0.jpg",
			"images/chrobotek/lalkachr1.jpg",
			"images/chrobotek/lalkachr2.jpg",
			"images/chrobotek/lalkachr3.jpg"
			
			]
        },
		
		
		
		
		
    ],
	
	
	
	
   //Inne - Handmade
  'subcat14-1': [
        {
            name: "Podkładki",
            description: "Cieńkie podkładki,dowolna personalizacacja, grawer, grafika",
            price: "9 zł",
             imgSrc: [
			"images/podkladki/p1.jpg",
			"images/podkladki/p2.jpg",
			"images/podkladki/p3.jpg",
			"images/podkladki/p4.jpg",
			"images/podkladki/p5.jpg",
			"images/podkladki/p6.jpg",
			"images/podkladki/p7.jpg",
			"images/podkladki/p8.jpg",
			"images/podkladki/p9.jpg"
			
			]
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