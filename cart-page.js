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


var price=0;


      let arr=localStorage.getItem("carts");
      let array=JSON.parse(arr);
      console.log(array);
      document.getElementById("h1").innerHTML+=" ("+array.length+") ";
     
      for(var j=0;j<array.length;j++){
        var i=array[j];
        price+=itemList[i].price;
        console.log(itemList[i].name);
        var mainContainer=document.getElementById("carts");
        var div=document.createElement("div");
        div.classList.add("container","p-2");
        var content=`
        <div class="row" style="border:1px solid gray;border-radius:5px">
        <br>
            <div class="col-sm-5">    
                <br><br>
                <div class="d-flex flex-column">
                    <center><img src="${itemList[i]["img-path"][0]}" alt"..." height="70px" width="auto"></center>
                </div>
                <br>
            </div>
            <div class="col-sm-7">
                <br>
                <div class="d-flex flex-column">
                    <h4>${itemList[i].name}</h4>
                    <h6>Brand: ${itemList[i].brand}</h6>
                    <h5 style="color:green">Rs.${itemList[i].price}</h5>
                    <button type="button" class="btn-outline-danger" style="border-radius:10px;width:50%" onclick=removeItem(${itemList[i].id})>Remove Item</button>
                </div>
                <br>  
            </div>
        </div>
        `


        div.innerHTML+=content;
        mainContainer.appendChild(div);
        
    }
 
    var sideContainer=document.getElementById("priceDetails");
    var div1=document.createElement("div");
    div1.classList.add("container","p-2");
    
    let content1=`
    <div class="row" style="border:1px solid gray;border-radius:5px">
        
        <center><h3>PRICE DETAILS</h3></center>
        <hr>
        <div class=" d-flex justify-content-evenly">
        <h5>Price(`+array.length+` items)</h5>
        <h5>Rs.`+price+`</h5>
        </div>
        <div class=" d-flex justify-content-evenly">
        <h5>Discount</h5>
        <h5>-Rs.0</h5>
        </div>
        
        <div class=" d-flex justify-content-evenly">
        <h5>Delivery charge</h5>
        <h5>+Rs.0</h5>
        </div>
        <hr>
        <div class="d-flex justify-content-evenly">
        <h5>Total Amount</h5>
        <h5>Rs.`+price+`</h5>
        </div>
    </div>
    `
    div1.innerHTML+=content1;
    sideContainer.appendChild(div1);


    var div2 = document.createElement("div");
        div.classList.add("container","p-2");
        let button1=`
        <center><button class="btn btn-success btn-lg" id="placeOrder" width="50%">PLACE ORDER</button></center>
        `
        div2.innerHTML+=button1;
        sideContainer.appendChild(div2);
        if(array.length===0){
            document.getElementById("placeOrder").setAttribute("disabled","true")
        }


function removeItem(id){
    let arr=localStorage.getItem("carts");
    let array=JSON.parse(arr);
     let newArray=[];
     for(let i=0;i<array.length;i++){
         if((id-1)==array[i]){
        }
        else{
             newArray.push(array[i]);
         }
     }   
     localStorage.setItem("carts",JSON.stringify(newArray));
     window.location.href="cart-page.html";
}