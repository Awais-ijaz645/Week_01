// const products = [
//   {
//     id: 1,
//     name: "Laptop",
//     category: "Electronics",
//     price: 1000,
//     stock: 5,
//     rating: 4.8,
//     sold: 120,
//     discount: 10
//   },
//   {
//     id: 2,
//     name: "Phone",
//     category: "Electronics",
//     price: 700,
//     stock: 0,
//     rating: 4.5,
//     sold: 300,
//     discount: 15
//   },
//   {
//     id: 3,
//     name: "Shoes",
//     category: "Fashion",
//     price: 120,
//     stock: 12,
//     rating: 4.2,
//     sold: 50,
//     discount: 5
//   },
//   {
//     id: 4,
//     name: "Watch",
//     category: "Fashion",
//     price: 250,
//     stock: 8,
//     rating: 4.9,
//     sold: 80,
//     discount: 20,
//     finalPrice:0
//   }
// ];
// // const rating = products.filter(product =>{
// //     return product.category =="Electronics"
// // })
// // console.log(rating)
// // const shipping = products.map(product =>{
// //     return {
// //         ...product,
// //         shipping: product.price > 500 ? "Free shipping" : "200 rs charges"
// //     }
// // })
// // console.log(shipping)

// // const cheapProducts = products.filter( product =>{
// //     return product.price < 500
// // })
// // console.log(cheapProducts);

// // const inventoryValue = products.reduce((total, product) => {
// //     return total + (product.price * product.stock);
// // }, 0);

// // console.log(inventoryValue);
// // const totalsold = products.reduce((total,product) =>{
// //     return total + product.sold
// // },0)
// // console.log(totalsold)
// // const cards = products
// //     .filter(product => product.stock > 0)
// //     .map(product => {
// //         return {
// //             name: product.name,
// //             price: product.price,
// //             rating: product.rating,
// //             shipping: product.price > 500 ? "Free Shipping" : "$20 Shipping"
// //         };
// //     });

// // console.log(cards);
// // const saleRevenue = products
// //     .map(product => {
// //         return {
// //             ...product,
// //             finalPrice: product.price - (product.price * product.discount / 100)
// //         };
// //     })
// //     .reduce((total, product) => {
// //         return total + (product.finalPrice * product.stock);
// //     }, 0);

// // console.log(saleRevenue);

// function login() {

//     let username = "Ali";

//     console.log("Welcome", username);
// console.log(username);
// }

// login();

// const cart = [
//     "Laptop",
//     "Phone",
//     "Mouse"
// ];

// (function () {

//     console.log("Cart Loaded");

//     console.log(cart);

// })();

// (function(){
// let name="Awasi"
// console.log(name)
// })()

// function getProduct(){
//     throw new Error("Product Not Found");
// }
// try{
//     getProduct();
// }
// catch(error){
//     console.log(error.message);

// }
// console.log("Continue Shopping");

// function withdraw(amount){
//     let balance = 50000;
//     if(amount > balance){
//         throw new Error("Insufficient Balance");
//     }
//     console.log("Money Withdrawn");
// }
// try{
//     withdraw(50000);
// }
// catch(error){
//     console.log(error.message);
// }

// function findDoctor(id){
//     if(id != 101){
//         throw new Error("Doctor Not Found");
//     }
//     console.log("Doctor Found");
// }
// try{
//     findDoctor(101);
// }
// catch(error){
//     console.log(error.message);
// }


// function result(marks){
//     if(marks < 0){
//         throw new Error("Invalid Marks");
//     }
//     console.log("Result Ready");
// }
// try{
//     result(20);
// }
// catch(error){
//     console.log(error.message);
// }

// async function loadPatients() {
//     console.log("Loading patients...... ")
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//          if (!response.ok){
//             throw new console.error("failed to load pateinst");
            
//          }
//          const patients = await response.json();
//          console.log("Patients loaded successfully....")

//          patients.forEach(patient => {
//             console.log(`
//                Name : ${patient.name}
//                Email : ${patient.email}
//                Phone : ${patient.phone} 
//                 `)
            
//          });

//     } catch (error) {
//         console.log(error.message);
//     }
   

// }
// loadPatients()
// async function expensiveProducts() {

//     try {

//         const response = await fetch(
//             "https://fakestoreapi.com/products"
//         );

//         if (!response.ok) {
//             throw new Error("Products not found.");
//         }

//         const products = await response.json();

//         const expensive = products.filter(product => product.price > 100);

//         console.log(expensive);

//     } catch (error) {

//         console.log(error.message);

//     }

// }

// expensiveProducts();

// async function finduser(username) {
//     console.log("Founding the student.....")
// try{const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const users = await response.json()
//      const found = users.find(user =>
//             user.username.toLowerCase() === username.toLowerCase()
//         );
//     if (found){
//         console.log(found)
//     }else{
//         console.log("User not found")
//     }
// }catch(error){
//     console.log(error.message)
// }
// }
// finduser("Bret")

// async function update() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1",
//            { method :"PUT",headers:{
//              "Content-Type": "application/json"
//            },
//            body :JSON.stringify({
//                name: "Awais",
//                     email: "new@gmail.com",
//                     phone: "03001234567"
//            })

//            }
//         )
//         const data = await response.json();

//         console.log(data);

//     } catch (error) {

//         console.log(error.message);

//     }

// }

// update();
// async function addBook() {

//     try {

//         const response = await fetch(
//               "https://jsonplaceholder.typicode.com/posts/1",
//             {

//                 method: "POST",

//                 headers: {

//                     "Content-Type": "application/json"

//                 },

//                 body: JSON.stringify({

//                     title: "JavaScript Master",
//                     author: "Awais",
//                     price: 2500

//                 })

//             }
//         );

//         const data = await response.json();

//         console.log(data);

//     }

//     catch (error) {

//         console.log(error.message);

//     }

// }

// addBook();async function addBook() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts",
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     title: "JavaScript Master",
//                     author: "Awais",
//                     price: 2500,
//                 }),
//             }
//         );

//         if (!response.ok) {
//             throw new Error("Failed to add book");
//         }
//         const data = await response.json();
//         console.log("Book Added Successfully");
//         console.log(data);

//     } catch (error) {
//         console.log(error.message);
//     }
// }
// addBook();

const movies=[

{
title:"Avengers",
rating:9,
genres:[
"Action",
"Sci-Fi"
]
},
{

title:"Titanic",
rating:8,
genres:[
"Romance",
"Drama"

]

}

];

movies.forEach(movie=>{

console.log(movie.title);

console.log(movie.genres[0]);

});