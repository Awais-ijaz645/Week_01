/*
 var city = "Lahore";
   
    console.log(city);
    
    function test(){
        var x = 5;
      console.log(5);  
    }
    test();
    let marks = 60;
    marks = 40 ;
    console.log(marks);

    if(true){
        let x =10;
       console.log(x);

    }
    const student = {
    
};

student.name = "Ahmmed";

console.log(student);

let a = 4;
let b=7 ;
sum = a+b;
divide = a / b;
modulus = a %  b;
mltipy= a * b;
sub = a - b;
console.log(sum);
console.log(divide);
console.log(modulus);
console.log(mltipy);
console.log(sub);




console.log(10 > 550);
console.log(10 == "Awais");
console.log(10 === 10);
console.log(10 != 550);
console.log(10 !== 550);
console.log(10 >= 550);
console.log(10 <= 550);

let age = 18 ;
let result = age >= 18 ? "Adult" : "child";
console.log(result);

let islogin = false;
islogin = true;
console.log(islogin ? "Welcome" : " need improv ");

let age = 10;

switch (true) {
    case (age === 18 || age === 19):
        console.log("verified");
        break;
    case (age === 10):
        console.log("unverified");
        break;
    default:
        console.log("Invalid");
}
        function evenodd(num){
    if (num % 2 == 0){
        console.log("Even");
    
    }
    else{
        console.log("odd");
    }
   
}
 evenodd(9009);
 let message = function(name){
    return "helllo" + name;
}
console.log(message("awais "));
const calculator = function(a,b,operator){

    if(operator==="+") return a+b;

    if(operator==="*") return a*b;

};

console.log(calculator(10,20,"*","+"));
console.log(calculator(10,20,"+"));
let even = num => num % 2 == 0 ;
console.log(even(77))

let max = (a,b) => a > b ? a : b ;
console.log(max(-100,20));
function add5(x){
    return x+5;
}

function multiply2(x){
    return x*2;
}

function minus3(x){
    return x-3;
}

let answer = minus3(multiply2(add5(10)));

console.log(answer);{
var ame = "Awais"

}
console.log(ame);
const user = { name: "Awais" };

user.name = "Ali";   
let user1 ={name : "Awwwais"};
console.log(user);
console.log(user1);
let name  = " Awais Ijaz";
let Age = "18";
console.log(name + " "+ Age);
console.log(`My Name is ${name} my age is ${Age}`);
let str = "javascript";
console.log(str.toUpperCase());
console.log(str.length);
let price = 500;
let quantity = 2;
Total = price * quantity;
console.log(Total);
console.log(Total/2);
let count = 100;
count++;

console.log(count);
count--;  
console.log(count);
let name = "Awais";
let email = "awaisraj789@gmai.com";
if(name == "Awais" || email=="sss"){
    console.log("hurrrrrrrrayyyyyyyyy")
}
let light ="green";
switch(light){
    case "red":
        console.log("You have to STop !");
        break;
        case "green":
        console.log("You can go !");
        break;
        case "orange":
        console.log("You can start the bike !");
        break;
        default :
        console.log("Accident baby");
}

let num = 9;
for (let i = 1; i <= 10; i++){
console.log(`${num} x ${i} = ${num * i}`);
}
const stduents = ["Awais","Hanzla Tahir","Abdullah"];
for(let i =0; i < stduents.length; i++
){
    console.log(stduents[i]);
}
    let array =[1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < array.length; i++){
if (array[i] % 2 === 0)continue
{
    console.log(array[i]);
}
}
let num = 9;
let i = 1;
while(i <= 10){
    console.log(`${num} x ${i} = ${num * i}`);
i++;
}

const calbill = function(price,quantity)
{
Total = price * quantity * 0.9 ;
return Total;
}
console.log(calbill(3300,9))
let array = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0 ;i<array.length; i++)
// {
//     console.log(array[i]);
// }

// array.forEach( (num) => console.log(num*num));
 let  Square = array.map((num) => num *num 

);
console.log(Square) ; 

//ARrrays
let students =["Awais","Saad","Abdullah","Zain","Shams"];
console.log("Avaiable Students : ");
for(let i = 0; i < students.length; i++){
    
    console.log(students[i]);

}
console.log("Updated Students : ");
students[3]="zain Bhai";
for(let i = 0; i < students.length; i++){
    
    console.log(students[i]);

}
const employee =[
    {name : "Awais", salary:5000},
    {name : "Hanzala", salary:6000},
    {name : "saad", salary:5000}
];
let TotalSal= 0;
employee.forEach(employees =>{
    console.log(`${employees.name} = ${employees.salary}`);
    TotalSal+=employees.salary;
});
console.log("Total Salary",TotalSal);
const numbers = [10,20,30];

numbers.map((item, index) => {

    console.log(item);
    console.log(index);

});

const numbers =[1,2,3,4,5,7,8];
const evennum = numbers.filter(Number => Number % 2 ===0);
console.log(evennum);

const employee =[
    {name : "Awais", salary:5000},
    {name : "Hanzala", salary:6000},
    {name : "saad", salary:5000}
];

const payrol = employee.reduce((total,employees)=>{
return total + employees.salary;
},0);
console.log("Total Saary",payrol);

const employee = 
    {
        name : "Awais",
        age  :  20,
        salary : 50000
    };
    employee.salary+=10000;
    console.log(employee);
    let products ={
    name : "Laptop",
    price :30000,
    model : "Hp"
};
for (let key in products){
    console.log(key+" "+products[key]);
}
let products ={
    name : "Laptop",
    price :30000,
    model : "Hp"
};
let data = JSON.stringify(products);
console.log(data);
let orignal = JSON.parse(data);
console.log(orignal)
*/



    

