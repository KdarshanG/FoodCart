//json-data

const itemList = [
    {
        "id": 1,
        "name": "Idly (2)",
        "spice-level": "low",
        "price": 30,
        "description": "Idli is a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India",
        "veg": true,
        "type": "break-fast",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent"
            },
            {
                "reviewedBy": "Joe",
                "review": "Excellent"
            }
        ],
        "img-path":[ 
            "assets/idli-1.jpg",
            "assets\idli-2.jpg"
        ]
    },
    {
        "id": 2,
        "name": "Masala Dosa",
        "spice-level": "low",
        "price": 60,
        "description": "Dosa is a type of savoury rice pan cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India",
        "veg": true,
        "type": "break-fast",
        "rating": 5,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent"
            },
            {
                "reviewedBy": "Joe",
                "review": "Excellent"
            }
        ],
        "img-path":[
            "assets/mdosa-1.jpg",
            "assets\mdosa-2.jpg"
        ]
    },
    {
        "id": 3,
        "name": "Kara Bath",
        "spice-level": "medium",
        "price": 30,
        "description": "Kara Bath is a type of savoury cooked as a thick porridge from dry-roasted semolina, originating from the Indian subcontinent, popular as breakfast foods in Southern India",
        "veg": true,
        "type": "break-fast",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent"
            },
            {
                "reviewedBy": "Joe",
                "review": "Excellent"
            }
        ],
        "img-path":[
            "assets/karabath-1.jpg",
            "assets\karabath-2.jpg"
        ]
    },
    {
        "id": 4,
        "name": "Chow Chow Bath",
        "spice-level": "medium",
        "price": 50,
        "description": "Chow Chow Bath is a type of savoury from dry-roasted semolina served with 2dish, originating from the Indian subcontinent, popular as breakfast foods in Southern India",
        "veg": true,
        "type": "break-fast",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent"
            },
            {
                "reviewedBy": "Joe",
                "review": "Excellent"
            }
        ],
        "img-path":[
            "assets/ccbath-1.jpg",
            "assets\ccbath-2.jpg"
        ]
    },
    {
        "id": 5,
        "name": "Rava Idly",
        "spice-level": "medium",
        "price": 30,
        "description": "Rava Idly is a type of savoury cooked as a thick porridge from dry-roasted semolina , originating from the Indian subcontinent, popular as breakfast foods in Southern India",
        "veg": true,
        "type": "break-fast",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent"
            },
            {
                "reviewedBy": "Joe",
                "review": "Excellent"
            }
        ],
        "img-path":[
            "assets/ravaidli-1.jpg",
            "assets\ravaidli-2.jpg"
        ]
    },
    {
        "id": 6,
        "name": "Plain Dosa",
        "spice-level": "medium",
        "price": 40,
        "description": "Dosa is a type of savoury rice pan cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India",
        "veg": true,
        "type": "break-fast",
        "rating": 4,
        "comments": [
            {
                "reviewedBy": "John",
                "review": "Excellent"
            },
            {
                "reviewedBy": "Joe",
                "review": "Excellent"
            }
        ],
        "img-path":[
            "assets/pdosa-1.jpg",
            "assets\pdosa-2.jpg"
        ]
    },
   
];

//Add dynamic card in listing page

document.getElementById("cardUp").innerHTML = `
        ${itemList.map(foodTemplate).join('')}
`;


var check;

function foodTemplate(food){
    
    
    var category = `${food.veg}`;
    if(category === "true"){
       check = "veg";
    }else{
       check = "non-veg";
    }
    

    return `
            <div class="col-sm-5 card m-3 p-3 mb-5">
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

(function changeCategoryColor(){
        console.log(check);
        var cat = document.getElementsByClassName("veg");

        if(check == "veg"){
            for (var i = 0; i < cat.length; i++) {
                cat[i].style.color = "green";
            }
        }else{
            for(var i = 0; i < cat.length; i++) {
                cat[i].style.color = "red";
            }
            
        }
})();

//QueryParams
   function valueSender(id){
    window.document.location = './landing-page.html' + '?id='+id;
   }





   













