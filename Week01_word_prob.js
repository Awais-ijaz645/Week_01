// //Wordd problem # 1 Three students scored [80, 92, 75], given as [{name, score}]. Write a function that returns the name of the highest scorer
console.log("Problem # 1")
let students = [
    { name: "Ali", score: 80 },
    { name: "Ahmed", score: 92 },
    { name: "Awais", score: 75 }
];
function highestScorer(students) {
    let highest = students[0];

    for (let i = 1; i < students.length; i++) {
        if (students[i].score > highest.score) {
            highest = students[i];
        }
    }
    return highest;
}
console.log(highestScorer(students));

// //Word problem Number 2 A teacher has 23 candies to split evenly among 5 students. Write a function that returns how many candies each student gets, and how many are left over.
console.log("Problem # 2")
function Candies_distribuition(candies,students){
let Each_Student = Math.floor(candies/students);

let Left_candies= candies % students;

console.log("Each Student Got :",Each_Student,"Candies");
console.log("Left Candies :",Left_candies,"Candies");
}
Candies_distribuition(23,5);
// //Word problem # 3 A CRM holds 10 contacts, and 4 of them are marked as duplicates. Write a function that returns the percentage that's clean.
console.log("Problem # 3")
function clean_percentage(Contacts,duplicate){
    let Clean_contacts = Contacts - duplicate;
    let percentage = (Clean_contacts/Contacts)* 100 ;
    return percentage +" % are clean contact in CRM.";
}
console.log(clean_percentage(10,4))


