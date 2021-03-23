//json-data

const itemList = [
    {
        "id": 1,
        "name": "idly (2)",
        "spice-level": "low",
        "price": 30,
        "description": "Idli is a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India",
        "veg": true,
        "type": "breakfast",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Idli and chutney",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "Light on breakfast",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/idli-1.jpg",
            "assets/idli-2.jpg"
        ]
    },
    {
        "id": 2,
        "name": "masala dosa",
        "spice-level": "low",
        "price": 60,
        "description": "Dosa is a type of savoury rice pan cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India",
        "veg": true,
        "type": "breakfast",
        "rating": 5,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Dosa and chutney",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "Light on breakfast",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/mdosa-1.jpg",
            "assets/mdosa-2.jpg"
        ]
    },
    {
        "id": 3,
        "name": "kara bath",
        "spice-level": "medium",
        "price": 30,
        "description": "Kara Bath is a type of savoury cooked as a thick porridge from dry-roasted semolina, originating from the Indian subcontinent, popular as breakfast foods in Southern India",
        "veg": true,
        "type": "breakfast",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent kara bath and chutney",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "Light on breakfast",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/karabath-1.jpg",
            "assets/karabath-2.jpg"
        ]
    },
    {
        "id": 4,
        "name": "chow chow bath",
        "spice-level": "medium",
        "price": 50,
        "description": "Chow Chow Bath is a type of savoury from dry-roasted semolina served with 2dish, originating from the Indian subcontinent, popular as breakfast foods in Southern India",
        "veg": true,
        "type": "breakfast",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent chow chow bath and chutney",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "Light on breakfast",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/ccbath-1.jpg",
            "assets/ccbath-2.jpg"
        ]
    },
    {
        "id": 5,
        "name": "rava idly",
        "spice-level": "medium",
        "price": 30,
        "description": "Rava Idly is a type of savoury cooked as a thick porridge from dry-roasted semolina , originating from the Indian subcontinent, popular as breakfast foods in Southern India",
        "veg": true,
        "type": "breakfast",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent rava idli and chutney",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "Light on lunch",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/ravaidli-1.jpg",
            "assets/ravaidli-2.jpg"
        ]
    },
    {
        "id": 6,
        "name": "plain dosa",
        "spice-level": "medium",
        "price": 40,
        "description": "Dosa is a type of savoury rice pan cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India",
        "veg": true,
        "type": "breakfast",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Plain Dosa and sambar",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "Light on breakfast",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/pdosa-1.jpg",
            "assets/pdosa-2.jpg"
        ]
    },
    {
        "id": 7,
        "name": "panner tikka dry",
        "spice-level": "medium",
        "price": 130,
        "description": "Paneer tikka is an Indian appetizer where paneer chunks are marinated in spiced yogurt & grilled in a tandoor, a traditional clay oven.",
        "veg": true,
        "type": "starters",
        "type-category": "Indian",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent panner tikka dry",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best panner tikka dry I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/ptd-1.jpg",
            "assets/ptd-2.jpg"
        ]
    },
    {
        "id": 8,
        "name": "panner grill",
        "spice-level": "high",
        "price": 120,
        "description": " Paneer Grill is an Indian appetizer where paneer chunks are marinated in spiced yogurt & grilled in a tandoor, a traditional clay oven.",
        "veg": true,
        "type": "starters",
        "type-category": "Indian",
        "rating": 5,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent panner grill",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best panner grill dry I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/pg-1.jpg",
            "assets/pg-2.jpg"
        ]
    },
    {
        "id": 9,
        "name": "aloo tikki",
        "spice-level": "medium",
        "price": 100,
        "description": "So these are potato patties made the Indian way – spiced, herby and delicious",
        "veg": true,
        "type": "starters",
        "type-category": "Indian",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent aloo tikki",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best aloo tikka I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/at-1.jpg",
            "assets/at-2.jpg"
        ]
    },
    {
        "id": 10,
        "name": "panner cheese ball",
        "spice-level": "high",
        "price": 150,
        "description": "Panner cheese ball is a deep fried Indain Starter made from panner, processed cheese, onions and spices",
        "veg": true,
        "type": "starters",
        "type-category": "Indian",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent panner cheese ball.",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best panner cheese ball I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/pcb-1.jpg",
            "assets/pcb-2.jpg"
        ]
    },
    {
        "id": 11,
        "name": "corn spinach cutlet",
        "spice-level": "medium",
        "price": 90,
        "description": "Corn Spinach Cutlet is a shallow fried Indian Starter made for potato,oinions and spices",
        "veg": true,
        "type": "starters",
        "type-category": "Indian",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent corn spinach cutlet",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best corn spinach cutlet I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/csc-1.jpg",
            "assets/csc-2.jpg"
        ]
    },
    {
        "id": 12,
        "name": "mushroom manchurian",
        "spice-level": "medium",
        "price": 150,
        "description": "This is a popular Indian-Chinese vegetarian snack recipe crispy fried mushroom tossed in a spicy, sweet & umami sauce.",
        "veg": true,
        "type": "starters",
        "type-category": "Chinese",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Mushroom Manchurian",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Mushroom Manchurian I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/mm-1.jpg",
            "assets/mm-2.jpg"
        ]
    },
    {
        "id": 13,
        "name": "gobi manchurian",
        "spice-level": "medium",
        "price": 140,
        "description": "This is a popular Indian-Chinese vegetarian snack recipe crispy fried cauliflower florets tossed in a spicy, sweet & umami sauce.",
        "veg": true,
        "type": "starters",
        "type-category": "Chinese",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent gobi manchurian",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best gobi manchurian I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/gm-1.jpg",
            "assets/gm-2.jpg"
        ]
    },
    {
        "id": 14,
        "name": "chilli panner",
        "spice-level": "high",
        "price": 120,
        "description": "Chilli Paneer is one of the popular recipe from the Indian Chinese cuisine. ",
        "veg": true,
        "type": "starters",
        "type-category": "Chinese",
        "rating": 5,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent chilli panner.",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best chilli panner I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/cp-1.jpg",
            "assets/cp-2.jpg"
        ]
    },
    {
        "id": 15,
        "name": "gobi pepper dry",
        "spice-level": "medium",
        "price": 120,
        "description": "Gobbi Pepper dry is an Indian appetizer where gobi are marinated in spiced flour & deep fried.",
        "veg": true,
        "type": "starters",
        "type-category": "Indian",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent gobi pepper dry.",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best gobi pepper dry I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/gpd-1.jpg",
            "assets/gpd-2.jpg"
        ]
    },
    {
        "id": 16,
        "name": "baby corn manchurian",
        "spice-level": "high",
        "price": 140,
        "description": "This is a popular Indian-Chinese vegetarian snack recipe crispy fried baby corn tossed in a spicy, sweet & umami sauce.",
        "veg": true,
        "type": "starters",
        "type-category": "Chinese",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Baby corn Manchurian",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Baby corn Manchurian I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/gpd-1.jpg",
            "assets/gpd-2.jpg"
        ]
    },
    {
        "id": 17,
        "name": "baby corn chilli",
        "spice-level": "high",
        "price": 150,
        "description": "This is a popular Indian-Chinese vegetarian snack recipe crispy fried baby corn tossed in a spicy,  green chillies & umami sauce.",
        "veg": true,
        "type": "starters",
        "type-category": "Chinese",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Baby corn chilli",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Baby corn chilli  I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/bcc-1.jpg",
            "assets/bcc-2.jpg"
        ]
    },
    {
        "id": 18,
        "name": "mushroom chilli",
        "spice-level": "high",
        "price": 170,
        "description": "This is a popular Indian-Chinese vegetarian snack recipe crispy fried mushroom tossed in a spicy, green chillies & umami sauce.",
        "veg": true,
        "type": "starters",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Mushroom Chilli",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Mushroom Chilli I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/mc-1.jpg",
            "assets/mc-2.jpg"
        ]
    },
    {
        "id": 19,
        "name": "chana masala",
        "spice-level": "high",
        "price": 140,
        "description": "Indian curry made by cooking chickpeas in a spicy onion tomato masala gravy.",
        "veg": true,
        "type": "maincourse",
        "type-category": "veg-main-course",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Chana Masala",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Chana Masala I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/cm-1.jpg",
            "assets/cm-2.jpg"
        ]
    },
    {
        "id": 20,
        "name": "chana panner masala",
        "spice-level": "high",
        "price": 120,
        "description": "Indian curry made by cooking chickpeas and panner in a spicy onion tomato masala gravy. ",
        "veg": true,
        "type": "maincourse",
        "type-category": "veg-main-course",
        "rating": 5,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Chana Panner Masala",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Chana Panner Masala I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/cpm-1.jpg",
            "assets/cpm-2.jpg"
        ]
    },
    {
        "id": 21,
        "name": "plain palak",
        "spice-level": "medium",
        "price": 150,
        "description": " Palak Paneer is a popular Indian dish of Indian cottage cheese cubes in a mild, spiced smooth spinach sauce.",
        "veg": true,
        "type": "maincourse",
        "type-category": "veg-main-course",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Plain Palak",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Plain Palak I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/pp-1.jpg",
            "assets/pp-2.jpg"
        ]
    },
    {
        "id": 22,
        "name": "paneer Butter masala",
        "spice-level": "medium",
        "price": 160,
        "description": "Also known as butter paneer, it is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.",
        "veg": true,
        "type": "maincourse",
        "type-category": "veg-main-course",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Paneer Butter Masala",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Paneer Butter Masala I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/pbm-1.jpg",
            "assetspbm-2.jpg"
        ]
    },
    {
        "id": 23,
        "name": "panner tikka masala",
        "spice-level": "medium",
        "price": 150,
        "description": "Also known as butter panner, it is a rich & creamy curry made with panner, spices, onions, tomatoes, cashews and butter.",
        "veg": true,
        "type": "maincourse",
        "type-category": "veg-main-course",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Paneer tikka Masala",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Paneer tikka Masala I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/ptm-1.jpg",
            "assetsptm-2.jpg"
        ]
    },
    {
        "id": 24,
        "name": "capsicum masala",
        "spice-level": "high",
        "price": 170,
        "description": "a simple, easy and rich gravy based curry made with peanuts, dry coconut and capsicum.",
        "veg": true,
        "type": "maincourse",
        "type-category": "veg-main-course",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Capsicum Masala",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Capsicum Masala I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/capm-1.jpg",
            "assets/capm-2.jpg"
        ]
    },
    {
        "id": 25,
        "name": "chicken 65",
        "spice-level": "high",
        "price": 250,
        "description": "a simple, easy starter made with chicken, dry coconut and capsicum.",
        "veg": false,
        "type": "nonvegstarters",
        "type-category": "starters",
        "rating": 3,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Chicken 65",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Chicken 65 I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/c65-1.jpg",
            "assets/c65-2.jpg"
        ]
    },
    {
        "id": 26,
        "name": "chicken majetic",
        "spice-level": "high",
        "price": 270,
        "description": "a simple, easy starter made with chicken, dry chilli and capsicum.",
        "veg": false,
        "type": "nonvegstarters",
        "type-category": "starters",
        "rating": 5,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Chicken majestic",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Chicken majestic I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/cmajestic-1.jpg",
            "assets/cmajestic-2.jpg"
        ]
    },
    {
        "id": 27,
        "name": "chilli chicken",
        "spice-level": "high",
        "price": 270,
        "description": "a simple, easy and rich startes  made with chicken, chilli and capsicum.",
        "veg": false,
        "type": "nonvegstarters",
        "type-category": "starters",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Chicken chicken",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best Chicken chicken I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/cchicken-1.jpg",
            "assets/cchicken-2.jpg"
        ]
    },
    {
        "id": 28,
        "name": "butter chicken",
        "spice-level": "medium",
        "price": 240,
        "description": "Straight from a Punjabi kitchen, butter chicken has been an instant hit through the years. Enjoy the classic creaminess of the dish with this recipe.",
        "veg": false,
        "type": "nonvegmaincourse",
        "type-category": "maincourse",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent butter chicken",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best butter chicken I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/cchicken-1.jpg",
            "assets/cchicken-2.jpg"
        ]
    },
    {
        "id": 29,
        "name": "amritsari chicken masala",
        "spice-level": "high",
        "price": 240,
        "description": "Boneless chunks of chicken lathered with a rich, buttery gravy of cream, tomatoes and spices.",
        "veg": false,
        "type": "nonvegmaincourse",
        "type-category": "maincourse",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent amritsari chicken masala",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best amritsari chicken masala I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/acm-1.jpg",
            "assets/acm-2.jpg"
        ]
    },
    {
        "id": 30,
        "name": "chicken dum biriyani",
        "spice-level": "high",
        "price": 220,
        "description": "A sumptuous chicken biryani cooked with such precision that none of the flavors are allowed to change color. 'Dum' is a slow cooking method brought in by the Mughals.",
        "veg": false,
        "type": "nonvegmaincourse",
        "type-category": "maincourse",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent chicken dum biriyani",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best chicken dum biriyani I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/cb-1.jpg",
            "assets/cb-2.jpg"
        ]
    },
    {
        "id": 31,
        "name": "gulab jamun",
        "spice-level": "sweet",
        "price": 120,
        "description": "The good old delight made with khoya, fried golden and finally dipped in saffron induced sugar syrup.",
        "veg": true,
        "type": "desserts",
        "type-category": "desserts",
        "rating": 5,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent Gulab Jamun",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best hot gulab jamun I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/gj-1.jpg",
            "assets/gj-2.jpg"
        ]
    },
    {
        "id": 32,
        "name": "gajar ka halwa",
        "spice-level": "sweet",
        "price": 180,
        "description": "Warm your winter with this recipe that is sure to delight even the pickiest of dessert eaters! ",
        "veg": true,
        "type": "desserts",
        "type-category": "desserts",
        "rating": 5,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent gajar ka halwa",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best gajar ka halwa I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/gkh-1.jpg",
            "assets/gkh-2.jpg"
        ]
    },
    {
        "id": 33,
        "name": "phirni",
        "spice-level": "sweet",
        "price": 150,
        "description": "Another variety of a milk pudding prepared during festive occasions especially Eid and Ramzan. Best served in 'mitti ke kasore' or mud pots.",
        "veg": true,
        "type": "desserts",
        "type-category": "desserts",
        "rating": 5,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent phirni",
                "reviewedDate": "10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "best phirni I ever had",
                "reviewedDate": "11/03/2020"
            }
        ],
        "img-path": [
            "assets/phirni-1.jpg",
            "assets/phirni-2.jpg"
        ]
    }

];

//Add dynamic card in listing page
var cars = document.getElementById("cars");
var cardUp = document.getElementById("cardUp");
var cardUD = document.getElementById("cardUD");
var cardDown = document.getElementById("cardDown");
var cardDownUp = document.getElementById("cardDownUp");
var cardUpDown = document.getElementById("cardUpDown");
var cardSideUp = document.getElementById("cardSideUp");
var cardSideDown = document.getElementById("cardSideDown");
var cardSideUpDown = document.getElementById("cardSideUpDown");
// console.log(cardUp);
cardUp.innerHTML = `
        ${itemList.map(foodTemplate).join('')}
`;


var check;

function foodTemplate(food) {


    return `
            <div class="col-sm-5 col-lg-4 offset-md-1 offset-lg-0 card p-3  mb-5">
                <img src="${food["img-path"][0]}" class="card-img-top food-image-path shadow pt-2" height="200px" widht="100px" alt="...">
                <div class="card-body p-2">
                <div class="row card-title-com d-flex align-content-center">
                    <h6 class="card-title col-10 ">${food.name}</h6>
                    <div class="col-2  pr-0 veg ${food.veg ? "text-success" : "text-danger"} d-flex justify-content-end" id="cat" >${food.veg ? '<img src="https://img.icons8.com/color/36/000000/vegetarian-food-symbol.png"/  height="35px" width="45px">' : '<img src="https://img.icons8.com/color/36/000000/non-vegetarian-food-symbol.png"/>'}</div>
                </div>    
                    <div class="row d-flex flex-row flex-wrap ">
                    <div class="col-1 food-rating"><p class="card-text"><span class="type">${food.rating}</span></p></div>
                    <div class="col-2 star-img pl-0"><img src="./assets/rating-star-icon-11-256.png" style="margin-bottom:5px" height="25px" width="25px"></div>
                    </div>
                    <h6 class="card-text pt-1"><span class="type">${food.type}</span></h6>
                    <h6 class="card-text pb-1">spice-level: <span class="level ${food["spice-level"] === "high" ? "text-danger" : "text-success"}">${food["spice-level"]}</span></h6>
                    <button type="submit" class="btn btn-success" onclick="valueSender(${food.id})">Quick View</button>
                </div>
            </div>
            `
}


//QueryParams
function valueSender(id) {
    window.document.location = './landing-page.html' + '?id=' + id;
}


// filters backendLogic

const filter = document.getElementsByClassName('check');
for (let j = 0; j < filter.length; j++) {
    filter[j].addEventListener('change', function (e) {
        // console.log(e.target.checked);

        if (filter[j].checked) {

            if (localStorage.getItem('fill') == null) {
                let fil = [];
                let size = fil.length;
                fil[size] = filter[j].value;
                localStorage.setItem("fill", JSON.stringify(fil));
            }
            else {
                let fil = localStorage.getItem("fill");
                //console.log(JSON.parse(cart));
                let m = JSON.parse(fil);
                let p = m.length;
                m[p] = filter[j].value;
                localStorage.setItem("fill", JSON.stringify(m));
            }
            filling();
        }
        else {
            let arr = localStorage.getItem("fill");
            let array = JSON.parse(arr);

            let f = array.indexOf(filter[j].value)

            array.splice(f, 1);

            localStorage.setItem("fill", JSON.stringify(array));
            unfilling();
        }

    })
}

// console.log(typeof itemList[0].type);



// let filt = localStorage.getItem("fill");



//oncheck function call
function filling() {
    let filt = localStorage.getItem("fill");
    let m = JSON.parse(filt);
    // console.log(typeof m);
    let p = m.length;
    if (p != 0) {
        cardUp.replaceWith("cardUD");

        // var cardDown = document.getElementById("cardDown");
        // var flag = false;
        for (let j = 0; j < itemList.length; j++) {
            for (let k = 0; k < p; k++) {

                if (itemList[j].type === m[k]) {


                    // var filler = [];
                    let idis = document.getElementById(`${itemList[j].id}`);
                    console.log(idis);
                    if (idis !== null) {
                        let idiss = document.getElementById(`${itemList[j].id}`);
                        //  filler.push(idiss)
                        idiss.remove();
                    }
                    //  console.log(filler)
                    let mainDiv = document.getElementById("cardUD");
                    let cmntdiv = document.createElement("div");
                    cmntdiv.classList.add("col-sm-5", "col-lg-4", "offset-md-1", "offset-lg-0", "card", "mb-5")
                    cmntdiv.setAttribute('id', `${itemList[j].id}`)
                    let cmnt = `
                        
                        <img src="${itemList[j]["img-path"][0]}" " class="card-img-top food-image-path shadow pt-2" height="200px" widht="100px" alt="...">
                        <div class="card-body p-2 ">
                        <div class="row card-title-com d-flex align-content-center">
                            <h6 class="card-title col-10 ">${itemList[j].name}</h6>
                            <div class="col-2  pr-0 veg ${itemList[j].veg ? "text-success" : "text-danger"} d-flex justify-content-end" id="cat" >${itemList[j].veg ? '<img src="https://img.icons8.com/color/36/000000/vegetarian-food-symbol.png"/  height="35px" width="45px">' : '<img src="https://img.icons8.com/color/36/000000/non-vegetarian-food-symbol.png"/>'}</div>
                        </div>    
                            <div class="row d-flex flex-row flex-wrap ">
                            <div class="col-1 food-rating"><p class="card-text"><span class="type">${itemList[j].rating}</span></p></div>
                            <div class="col-2 star-img pl-0"><img src="./assets/rating-star-icon-11-256.png" style="margin-bottom:5px" height="25px" width="25px"></div>
                            </div>
                            <h6 class="card-text pt-1"><span class="type">${itemList[j].type}</span></h6>
                            <h6 class="card-text pb-1">spice-level: <span class="level ${itemList[j]["spice-level"] === "high" ? "text-danger" : "text-success"}">${itemList[j]["spice-level"]}</span></h6>
                            <button type="submit" class="btn btn-success" onclick="valueSender(${itemList[j].id})">Quick View</button>
                        </div>
                        `
                    cmntdiv.innerHTML += cmnt;
                    mainDiv.appendChild(cmntdiv);
                    // console.log(cmntdiv);
                }
                // console.log(cardDown.children.length)
                // console.log(cardDown.children)


            }
        }

    }
    else {
        if (p == 0) {
            localStorage.removeItem("fill");
            location.reload();
        }
        let idis = document.getElementById(`${itemList[j].id}`);
        console.log(idis);
        if (idis !== null) {
            let idiss = document.getElementById(`${itemList[j].id}`);
            idiss.remove();
        }

    }


};


//onuncheck function call
function unfilling() {
    let filt = localStorage.getItem("fill");
    let m = JSON.parse(filt);
    // console.log(typeof m);
    cardUD.remove();
    let p = m.length;
    console.log(p);
    if (p != 0) {
        var maindiv
        if (p == 5) {
            cardDown.replaceWith("cardDownUp");
            maindiv = document.getElementById("cardDownUp");
        } else if (p == 4) {
            cardDownUp.replaceWith("cardUpDown");
            maindiv = document.getElementById("cardUpDown");
        } else if (p == 3) {
            cardUpDown.replaceWith("cardSideUp");
            maindiv = document.getElementById("cardSideUp");
        } else if (p == 2) {
            // cardDown.replaceWith("cardSideDown");
            cardDown.remove();
            cardSideUp.replaceWith("cardSideDown");
            maindiv = document.getElementById("cardSideDown");
        } else if (p == 1) {
            // cardDown.replaceWith("cardSideDown");
            
            cardSideDown.replaceWith("cardSideUpDown");
            maindiv = document.getElementById("cardSideUpDown");
        }
        // var cardDown = document.getElementById("cardDown");
        // var flag = false;
        for (let j = 0; j < itemList.length; j++) {
            for (let k = 0; k < p; k++) {

                if (itemList[j].type === m[k]) {


                    // var filler = [];
                    let idis = document.getElementById(`${itemList[j].id}`);
                    console.log(idis);
                    if (idis !== null) {
                        let idiss = document.getElementById(`${itemList[j].id}`);
                        //  filler.push(idiss)
                        idiss.remove();
                    }
                    //  console.log(filler)
                    let cmntdiv = document.createElement("div");
                    cmntdiv.classList.add("col-sm-5", "col-lg-4", "offset-md-1", "offset-lg-0", "card", "mb-5")
                    cmntdiv.setAttribute('id', `${itemList[j].id}`)
                    let cmnt = `
                        
                        <img src="${itemList[j]["img-path"][0]}" " class="card-img-top food-image-path shadow pt-2" height="200px" widht="100px" alt="...">
                        <div class="card-body p-2 ">
                        <div class="row card-title-com d-flex align-content-center">
                            <h6 class="card-title col-10 ">${itemList[j].name}</h6>
                            <div class="col-2  pr-0 veg ${itemList[j].veg ? "text-success" : "text-danger"} d-flex justify-content-end" id="cat" >${itemList[j].veg ? '<img src="https://img.icons8.com/color/36/000000/vegetarian-food-symbol.png"/  height="35px" width="45px">' : '<img src="https://img.icons8.com/color/36/000000/non-vegetarian-food-symbol.png"/>'}</div>
                        </div>    
                            <div class="row d-flex flex-row flex-wrap ">
                            <div class="col-1 food-rating"><p class="card-text"><span class="type">${itemList[j].rating}</span></p></div>
                            <div class="col-2 star-img pl-0"><img src="./assets/rating-star-icon-11-256.png" style="margin-bottom:5px" height="25px" width="25px"></div>
                            </div>
                            <h6 class="card-text pt-1"><span class="type">${itemList[j].type}</span></h6>
                            <h6 class="card-text pb-1">spice-level: <span class="level ${itemList[j]["spice-level"] === "high" ? "text-danger" : "text-success"}">${itemList[j]["spice-level"]}</span></h6>
                            <button type="submit" class="btn btn-success" onclick="valueSender(${itemList[j].id})">Quick View</button>
                        </div>
                        `
                    cmntdiv.innerHTML += cmnt;
                    maindiv.appendChild(cmntdiv);
                    // console.log(cmntdiv);
                }
                // console.log(cardDown.children.length)
                // console.log(cardDown.children)


            }
        }

    }
    else {
        if (p == 0) {
            localStorage.removeItem("fill");
            location.reload();
        }
        let idis = document.getElementById(`${itemList[j].id}`);
        console.log(idis);
        if (idis !== null) {
            let idiss = document.getElementById(`${itemList[j].id}`);
            idiss.remove();
        }

    }


};





window.addEventListener('load', () =>{ 
    localStorage.removeItem('fill');
});



