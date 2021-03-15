//json-data

const itemList = [
    {
        "id": 1,
        "name": "Idly (2)",
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
        "name": "Masala Dosa",
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
        "name": "Kara Bath",
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
        "name": "Chow Chow Bath",
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
        "name": "Rava Idly",
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
        "name": "Plain Dosa",
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
        "name": "Panner tikka dry",
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
        "name": "Panner grill",
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
        "name": "Corn Spinach Cutlet",
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
        "id": 10,
        "name": "Panner Cheese Ball",
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
        "name": "Aloo Tikki",
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
        "id": 12,
        "name": "Gobi Pepper Dry",
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
        "id": 13,
        "name": "Gobi Manchurian",
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
        "name": "Chilli Panner",
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
        "name": "Mushroom Manchurian",
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
        "id": 16,
        "name": "Baby corn Manchurian",
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
        "name": "Baby corn Chilli",
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
        "name": "Mushroom Chilli",
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
        "name": "Chana Masala",
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
        "name": "Chana Panner Masala",
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
        "name": "Plain Palak",
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
        "name": "Paneer Butter Masala",
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
        "name": "Panner Tikka Masala",
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
        "name": "Capsicum Masala",
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
    }

];

//Add dynamic card in listing page

var cardUp = document.getElementById("cardUp");
// console.log(cardUp);
cardUp.innerHTML = `
        ${itemList.map(foodTemplate).join('')}
`;


var check;

function foodTemplate(food) {


    var category = `${food.veg}`;
    if (category === "true") {
        check = "veg";
    } else {
        check = "non-veg";
    }


    return `
            <div class="col-sm-5 col-lg-4 offset-md-1 offset-lg-0 card p-3  mb-5">
                <img src="${food["img-path"][0]}" class="card-img-top food-image-path shadow pt-2" height="200px" widht="100px" alt="...">
                <div class="card-body p-2">
                    <h5 class="card-title">${food.name}</h5>
                    <div class="row d-flex flex-row flex-wrap">
                    <div class="col-1 food-rating"><p class="card-text"><span class="type">${food.rating}</span></p></div>
                    <div class="col-10 star-img pl-0"><img src="./assets/rating-star-icon-11-256.png" style="margin-bottom:5px" height="25px" width="25px"></div>
                    </div>
                    <p class="card-text"><span class="type">${food.type}</span><span class="veg ml-auto" id="cat" >(${check})</span></p>
                    <p class="card-text"><span class="level">('spice-level' - ${food["spice-level"]})</span></p>
                    <button type="submit" class="btn btn-success" onclick="valueSender(${food.id})">Quick View</button>
                </div>
            </div>
            `
}

(function changeCategoryColor() {
    // console.log(check);
    var cat = document.getElementsByClassName("veg");

    if (check == "veg") {
        for (var i = 0; i < cat.length; i++) {
            cat[i].style.color = "green";
        }
    } else {
        for (var i = 0; i < cat.length; i++) {
            cat[i].style.color = "red";
        }

    }
})();



//QueryParams
function valueSender(id) {
    window.document.location = './landing-page.html' + '?id=' + id;
}




// filters backendLogic

const filter = document.getElementsByClassName('check');
// var filters=[];

// console.log(filters);
for (let j = 0; j < filter.length; j++) {
    filter[j].addEventListener('change', function (e) {
        console.log(e.target.checked);

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

        }
        else {
            let arr = localStorage.getItem("fill");
            let array = JSON.parse(arr);

            let f = array.indexOf(filter[j].value)

            array.splice(f, 1);

            localStorage.setItem("fill", JSON.stringify(array));
        }
        filling();
    })
}    

console.log(typeof itemList[0].type);


// console.log("this is the king chair");
let filt = localStorage.getItem("fill");
// console.log(JSON.parse(filt));
// console.log(filt)



function filling() {
    let filt = localStorage.getItem("fill");
    let m = JSON.parse(filt);
    console.log(typeof m);
    let p = m.length;
    if (p != 0) {
        cardUp.remove();

        var cardDown = document.getElementById("cardDown");
        // var flag = false;
        for (let j = 0; j < itemList.length; j++) {
            for (let k = 0; k < p; k++) {

            var category = `${itemList[j].veg}`;
            if (category === "true") {
                check = "veg";
            } else {
                check = "non-veg";
            }
            
                if (itemList[j].type === m[k]) {

                    console.log(document.getElementById("cat").innerHTML);

                     let idis=document.getElementById(`${itemList[j].id}`);
                     console.log(idis);
                     if(idis!==null){
                     let idiss=document.getElementById(`${itemList[j].id}`);
                        idiss.remove();

                     }

                    let maindiv = document.getElementById("cardDown");
                    let cmntdiv = document.createElement("div");
                    cmntdiv.classList.add("col-sm-5", "col-lg-4", "offset-md-1", "offset-lg-0", "card", "mb-5")
                    cmntdiv.setAttribute('id',`${itemList[j].id}`)
                    let cmnt = `
                        
                        <img src="${itemList[j]["img-path"][0]}" " class="card-img-top food-image-path shadow pt-2" height="200px" widht="100px" alt="...">
                        <div class="card-body p-2">
                            <h5 class="card-title">${itemList[j].name}</h5>
                            <div class="row d-flex flex-row flex-wrap">
                            <div class="col-1 food-rating"><p class="card-text"><span class="type">${itemList[j].rating}</span></p></div>
                            <div class="col-10 star-img pl-0"><img src="./assets/rating-star-icon-11-256.png" style="margin-bottom:5px" height="25px" width="25px"></div>
                            </div>
                            <p class="card-text"><span class="type">${itemList[j].type}</span><span class="veg ml-auto" id="cat" >(${check})</span></p>
                            <p class="card-text"><span class="level">('spice-level' - ${itemList[j]["spice-level"]})</span></p>
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
        if(p==0){
        localStorage.removeItem("fill");
        location.reload();
    }
    }
 
};













