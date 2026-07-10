// =============================================
// DOM SELECTORS
// =============================================

const hospitalName = document.getElementById("hospitalName");
const hospitalStatus = document.getElementById("hospitalStatus");

const statusBtn = document.getElementById("statusBtn");
const themeBtn = document.getElementById("themeBtn");

const form = document.getElementById("appointmentForm");

const patientName = document.getElementById("patientName");
const department = document.getElementById("department");
const appointmentDate = document.getElementById("appointmentDate");

const livePreview = document.getElementById("livePreview");
const selectedDepartment = document.getElementById("selectedDepartment");

const appointmentList = document.getElementById("appointmentList");
const totalAppointments = document.getElementById("totalAppointments");

const parentBox = document.getElementById("parentBox");
const heading = document.getElementById("heading");
const practiceBtn = document.getElementById("practiceBtn");

// =============================================
// querySelector()
// =============================================

const firstCard = document.querySelector(".card");

console.log(firstCard);

// =============================================
// getElementById()
// =============================================

hospitalName.innerText = "Awais hospital";

// =============================================
// parentNode
// =============================================

console.log("Parent of Button");
console.log(practiceBtn.parentNode);

// =============================================
// children
// =============================================

console.log("Children of parentBox");

console.log(parentBox.children);

// =============================================
// nextElementSibling
// =============================================

console.log("Next Element");

console.log(heading.nextElementSibling);

// Change next sibling text

heading.nextElementSibling.innerText =
"Hospital Open 24 Hours Everyday";

// =============================================
// INPUT EVENT
// =============================================

patientName.addEventListener("input", function(){

livePreview.innerText =
"Typing : " + patientName.value;

});

// =============================================
// CHANGE EVENT
// =============================================

department.addEventListener("change", function(){

selectedDepartment.innerText =
"Department : " + department.value;

});

// =============================================
// SUBMIT EVENT
// =============================================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (
        patientName.value === "" ||
        department.value === "" ||
        appointmentDate.value === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    createAppointment();

});
function createAppointment() {

    const card = document.createElement("div");

    card.classList.add("appointment");

    card.innerHTML = `

        <h3>${patientName.value}</h3>

        <p><strong>Department:</strong> ${department.value}</p>

        <p><strong>Date:</strong> ${appointmentDate.value}</p>

        <div class="controls">

            <button class="completeBtn">
                Complete
            </button>

            <button class="deleteBtn">
                Delete
            </button>

        </div>

    `;

    appointmentList.appendChild(card);

    totalAppointments.innerText =
        appointmentList.children.length;

    patientName.value = "";
    department.value = "";
    appointmentDate.value = "";

    livePreview.innerText = "";
    selectedDepartment.innerText = "";

}

// =============================================
// BUTTON EVENT
// =============================================

practiceBtn.addEventListener("click", function(){

alert("Practice Button Clicked");

});

// =============================================
// STATUS BUTTON
// =============================================

let hospitalOpen = true;

statusBtn.addEventListener("click", function(){

if(hospitalOpen){

hospitalStatus.innerText =
"Hospital Status : CLOSED";

hospitalStatus.style.color = "red";

hospitalOpen = false;

}else{

hospitalStatus.innerText =
"Hospital Status : OPEN";

hospitalStatus.style.color = "green";

hospitalOpen = true;

}

});

// =============================================
// DARK MODE
// =============================================

themeBtn.addEventListener("click", function(){

document.body.classList.toggle("dark");

});

// =============================================
// EVENT BUBBLING DEMO
// =============================================

parentBox.addEventListener("click", function(){

console.log("Parent Clicked");

});

practiceBtn.addEventListener("click", function(){

console.log("Button Clicked");

});

// =============================================
// TOTAL APPOINTMENTS
// =============================================

totalAppointments.innerText =
appointmentList.children.length;