//json-data

const itemList = [
    {
        "id": 1,
        "name": "Idly (2)",
        "spiceLevel": "low",
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
            "assetsidli-2.jpg"
        ]
    },
    {
        "id": 2,
        "name": "Masala Dosa",
        "spiceLevel": "low",
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
        "spiceLevel": "medium",
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
        "spiceLevel": "medium",
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
        "spiceLevel": "medium",
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
        "spiceLevel": "medium",
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
    }
];



window.addEventListener('load', () =>{
    let params = (new URL(document.location)).searchParams;
    const id = params.get('id');
    
    console.log(id);

    var length = itemList.length;
    console.log(length);
    
    
    for(var i=0; i<length;i++){

        // console.log(itemList[i]);

        console.log(itemList[i].id);

        let val = itemList[i].id;

        if(id==val){
            console.log(itemList[i].id);
            var name = itemList[i].name;
            var spiceLevel = itemList[i].spiceLevel;
            var price = itemList[i].price;
            var desc = itemList[i].description;
            var category = itemList[i].veg;
            var type = itemList[i].type;
            var rating = itemList[i].rating;

            for(let j=0; j<itemList[i].comments.length;j++){
                var comment = [];
                comment[j] = itemList[i].comments[j];
                console.log(comment[j])
            }
            var c1 = itemList[i].comments[0];
            console.log(c1);
            var c2 = itemList[i].comments[1];
            console.log(c2);
            
            var img1 = itemList[i]["img-path"][0];
            var img2 = itemList[i]["img-path"][1];

        }
    }

    document.getElementById("image").src = img1;
    document.getElementById("name").innerHTML = name;

    if(category==true){
        document.getElementById("veg").innerHTML = "veg";
    }else{
        document.getElementById("veg").innerHTML = "non-veg";
    }
    document.getElementById("rating").innerHTML = rating;
    document.getElementById("type").innerHTML = type;
    document.getElementById("spice").innerHTML = spiceLevel;
    document.getElementById("price").innerHTML = price;
    document.getElementById("description").innerHTML = desc;


    function commentTemplate(comments){
        return `
                <div class="col-sm-5 card m-4 p-3 mb-5">
                    <img src="${comments.review}" class="card-img-top food-image-path shadow pt-2" height="200px" widht="100px" alt="...">
                    <div class="card-body p-2">
                        <h5 class="card-title">${food.name}  &nbsp; <span class="veg text-success ml-auto">${food.veg}</span></h5>
                        <p class="card-text"><span class="type">(${food.type})</span></p>
                        <p class="card-text"><span class="level">('spice-level' - ${food["spice-level"]})</span></p>
                        <button onclick="valueSender(${food.id})">Quick View</button>
                    </div>
                </div>
                `
    }


    document.getElementById("comment") = commentTemplate(comment);
});

// console.log(id);



// const inti = function(e){
//     let id = document.location.search.replace(/^.*?\=/,'');
//     document.getElementById("clickedCardh1").innerHTML = id;
// }







// document.addEventListener('DOMContentLoaded', function(){
//     init();
// });

// var getUrl = window.location.search.slice(1);
// getUrl = getUrl.replace(/=/g,'":"');
// getUrl = getUrl.replace(/&/g,'","');

// getUrl = '{"'+getUrl+'"}';

// var obj = JSON.parse(getUrl);