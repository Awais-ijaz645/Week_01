//Daily Challenges
//Problem # 1 Reverse a string without using reverse()
console.log("Daily Challenge 01")
function reverseStr(str){
let reversed = "";
for (let i = str.length-1; i>=0;i--){
    reversed+=str[i];
}
console.log(reversed);
}
reverseStr("Hello Awais");

//Problem # 2 Find the missing number in [1,2,4,5]
console.log("Daily Challenge 02")
function missing_element(arr){
    for ( let i = 0 ; i < arr.length; i++){
        if(arr[i] != i + 1){
            return i + 1;
        }
    }
}
console.log(missing_element([1,2,4,5]));

//Problem # # Check if a string is a palindrome, without reverse()
console.log("Daily Challenge 03")
function checkPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
    if (str === reversed) {
        console.log("Palindrome");
    } else {
        console.log("Not a Palindrome");
    }
}
checkPalindrome("madam");   
checkPalindrome("level");   
checkPalindrome("hello");  

//Problem # 4 Find the largest and smallest number without Math.max/Math.min
console.log("Daily Challenge 04")
let array = [1,20,40,,90,50];
let largest = array[0];
let smallest= array[0];
for (let i = 1 ;i < array.length; i++){
    if(array[i] > largest){
        largest=array[i];
    }
    if(array[i] < smallest){
        smallest = array[i];
    }
}
console.log("Largest Number :",largest);
console.log("Smallest Number :",smallest);

// Problem # 5 Find duplicates in an array

console.log("Daily Challenge 05")
let array1 = [1,2,2,3,3,4,5,6,7,7,8,8];

for (let i = 0; i < array1.length; i++) {
    for (let j = i + 1; j < array1.length; j++) {
        if (array1[i] === array1[j]) {
            console.log(array1[i]);
        }
    }
}
// Problem # 6 Find what two arrays have in common, without using filter() and includes() together
console.log("Daily Challenge 06")
let arr1=[1,2,3,4,5];
let arr2=[13,2,32,4,5];
function findCommon(arr1, arr2){
for (let i = 0 ; i <arr1.length; i++){
    for(let j = i; j<arr2.length; j++){
        if(arr1[i]===arr2[j]){
            console.log(arr1[i])
        }

    }
}
}findCommon(arr1, arr2);