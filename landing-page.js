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
                "review": "Excellent Idli and chutney",
                "reviewedDate":"10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "Light on breakfast",
                "reviewedDate":"11/03/2020"
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
                "review": "Excellent Dosa and chutney",
                "reviewedDate":"10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "Light on breakfast",
                "reviewedDate":"11/03/2020"
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
                "review": "Excellent kara bath and chutney",
                "reviewedDate":"10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "Light on breakfast",
                "reviewedDate":"11/03/2020"
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
                "review": "Excellent chow chow bath and chutney",
                "reviewedDate":"10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "Light on breakfast",
                "reviewedDate":"11/03/2020"
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
                "review": "Excellent rava idli and chutney",
                "reviewedDate":"10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "Light on lunch",
                "reviewedDate":"11/03/2020"
            }
        ],
        "img-path":[
            "assets/ravaidli-1.jpg",
            "assets/ravaidli-2.jpg"
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
                "review": "Excellent Plain Dosa and sambar",
                "reviewedDate":"10/03/2020"
            },
            {
                "reviewedBy": "Joe",
                "review": "Light on breakfast",
                "reviewedDate":"11/03/2020"
            }
        ],
        "img-path":[
            "assets/pdosa-1.jpg",
            "assets/pdosa-2.jpg"
        ]
    }
];


//logical-backend code


// window.addEventListener('load', () =>{
    let params = (new URL(document.location)).searchParams;
    var id = params.get('id');
    
    // console.log(id);

    var length = itemList.length;
    // console.log(length);
    
    
    for(var i=0; i<length;i++){

        // console.log(itemList[i]);

        // console.log(itemList[i].id);

        let val = itemList[i].id;

        if(id==val){
            // console.log(itemList[i].id);
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
                // console.log(comment[j]);
                let maindiv=document.getElementById("comment");
                let cmntdiv=document.createElement("div");
                let cmnt=`
                <div class="d-flex justify-content-between">
                <p><b><span>By: ${itemList[i].comments[j].reviewedBy}</span></b><p>
                <p class="text-muted pr-3">${itemList[i].comments[j].reviewedDate}</p>
                </div>
                <p><b><span> ${itemList[i].comments[j].review}</span></b><hr></p>
                
                `
                cmntdiv.innerHTML+=cmnt;
                maindiv.appendChild(cmntdiv);
                console.log(cmntdiv);
            }

           
            
            var img1 = itemList[i]["img-path"][0];
            // var img2 = itemList[i]["img-path"][1];

        }

    }


    document.getElementById("image").src = img1;
    document.getElementById("name").innerHTML = name;

    if(category==true){
        document.getElementById("veg").innerHTML = "veg";
        document.getElementById("veg").style.color = "green";
    }else{
        document.getElementById("veg").innerHTML = "non-veg";
        document.getElementById("veg").style.color = "red";

    }
    document.getElementById("rating").innerHTML = rating;
    document.getElementById("type").innerHTML = type;
    document.getElementById("spice").innerHTML = spiceLevel;
    document.getElementById("price").innerHTML = price;
    document.getElementById("description").innerHTML = desc;

    console.log(id);
// });


function addToCart(){

    if (localStorage.getItem('carts') == null) {
        let cart=[];
        let size=cart.length;
        cart[size]=parseInt(id);
        localStorage.setItem("carts",JSON.stringify(cart));
    }
    else{
        let cart=localStorage.getItem("carts");
        //console.log(JSON.parse(cart));
        let m=JSON.parse(cart)
        let p=m.length
        m[p]= parseInt(id);
        localStorage.setItem("carts",JSON.stringify(m));
        
    }
    window.document.location="./cart-page.html"+"?id="+ id;
}





