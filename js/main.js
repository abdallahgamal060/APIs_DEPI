// API >>>>>>>>>>> Application Programming Interface >>>> Represents Database

// Array Of Object

// id   name   quantity
// 1    ali        5
// 2    omar       10
// 3    ahmed      15
// 4    nour        20

// [
//     {
//         id:1,
//         name:"ali",
//         quantity:5
//     },
//     {
//         id:2,
//         name:"ali",
//         quantity:5
//     },
//     {
//         id:3,
//         name:"ali",
//         quantity:5
//     },
//     {
//         id:4,
//         name:"ali",
//         quantity:5
//     },
// ]

// json >>>>>> Array of Object

// ------------------------------------------------------------------------------------------

// Ajax >>>>>>>>>>>>>>> XMLHttpRequest   Communication between browser and server
// onreadystatechange = true;
// readyState =4;
// status = 200;

// respnseText >>>> String

// ------------------------------------------------------------------------------------------

// sync             توالي         تزامن 
// async                توازي عدم تزامن

// ------------------------------------------------------------------------------------------


// function getApi() {
//     var xhttp = new XMLHttpRequest;
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var result = this.responseText;   // string

//             var ali = JSON.parse(result); // string to json
//             var json = ali.products;

//             var basket = "";
//             for (var i = 0; i < json.length; i++) {
//                 var cartona = `<div class="md:col-4  text-center mb-12">
//                 <img src="${json[i].images[0]}" class="w-100" style = 'height:350px'>
//                     <h4>${json[i].title}</h4>
//                     <h6>${json[i].id}</h6>
//             </div>`;
//                 basket = basket + cartona;

//             }
//             document.querySelector(".test").innerHTML = basket;

//         }
//     }
//     xhttp.open("GET", "https://dummyjson.com/products", true /*async*/);            // link
//     xhttp.send();           //send request
// }
// getApi();

// ---------------------------------------------------------------------------------------------------

// Fetch

// fetch("https://dummyjson.com/products")
//     .then(function (result) {
//         return result.json();
//     })
//     .then(function (ali) {
//         var json = ali.products;
//         var basket = "";
//         for (var i = 0; i < json.length; i++) {
//             var cartona = `<div class="md:col-4  text-center mb-12">
//                 <img src="${json[i].images[0]}" class="w-100" style = 'height:350px'>
//                     <h4>${json[i].title}</h4>
//                     <h6>${json[i].id}</h6>
//             </div>`;
//             basket = basket + cartona;

//         }
//         document.querySelector(".test").innerHTML = basket;

//     })
// -------------------------------------------------------------------------------------------------

async function getApi() {
    var result = await fetch("https://dummyjson.com/products");
    var ali = await result.json();
    var json = ali.products;

    var basket = "";
    for (var i = 0; i < json.length; i++) {
        var cartona = `<div class="md:col-4  text-center mb-12">
                <img src="${json[i].images[0]}" class="w-100" style = 'height:350px'>
                    <h4>${json[i].title}</h4>
                    <h6>${json[i].id}</h6>
            </div>`;
        basket = basket + cartona;

    }
    document.querySelector(".test").innerHTML = basket;

}
getApi();