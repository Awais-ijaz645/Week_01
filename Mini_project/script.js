const API_URL = "https://jsonplaceholder.typicode.com/users";

const patientTable = document.getElementById("patientTable");
const patientCount = document.getElementById("patientCount");
const addBtn = document.getElementById("addPatientBtn");

let patients = [];
async function loadPatients() {
    let storedPatients = localStorage.getItem("patients");
    if (storedPatients) {
        patients = JSON.parse(storedPatients);
        showPatients();
    } else {
        let response = await fetch(API_URL);
        patients = await response.json();
        localStorage.setItem("patients", JSON.stringify(patients));
        showPatients();
    }
}

loadPatients();
addBtn.addEventListener("click", addPatient);
function showPatients() {

    patientTable.innerHTML = "";

    patientCount.innerHTML = patients.length;

    patients.forEach(function (patient) {

        patientTable.innerHTML += `
        <tr>
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.email}</td>
            <td>${patient.phone}</td>
            <td>
                <button onclick="editPatient(${patient.id})">Edit</button>
                <button onclick="deletePatient(${patient.id})">Delete</button>
            </td>
        </tr>
        `;

    });

}

// Add Patient
async function addPatient() {

    let name = prompt("Enter Patient Name");
    if (!name) return;

    let email = prompt("Enter Email");
    if (!email) return;

    let phone = prompt("Enter Phone");
    if (!phone) return;

    let newPatient = {
        id: patients.length + 1,
        name: name,
        email: email,
        phone: phone
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPatient)
    });

    patients.push(newPatient);

    localStorage.setItem("patients", JSON.stringify(patients));

    showPatients();

    alert("Patient Added Successfully!");

}

// Edit Patient
async function editPatient(id) {

    let newName = prompt("Enter New Name");

    if (!newName) return;

    for (let i = 0; i < patients.length; i++) {

        if (patients[i].id == id) {

            patients[i].name = newName;

            break;

        }

    }

    await fetch(API_URL + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: newName })
    });

    localStorage.setItem("patients", JSON.stringify(patients));

    showPatients();

    alert("Patient Updated!");

}

// Delete Patient
async function deletePatient(id) {

    let confirmDelete = confirm("Delete this patient?");

    if (!confirmDelete) return;

    await fetch(API_URL + "/" + id, {
        method: "DELETE"
    });

    for (let i = 0; i < patients.length; i++) {

        if (patients[i].id == id) {

            patients.splice(i, 1);

            break;

        }

    }

    localStorage.setItem("patients", JSON.stringify(patients));

    showPatients();

    alert("Patient Deleted!");

}