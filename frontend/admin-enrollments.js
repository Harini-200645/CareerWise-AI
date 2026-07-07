const API_URL = "http://localhost:8082/api/enrollments";

window.onload = loadEnrollments;

function loadEnrollments(){

    fetch(API_URL)

    .then(response => response.json())

    .then(data => {

        const table = document.getElementById("enrollmentTable");

        table.innerHTML = "";

        document.getElementById("totalEnrollments").innerText = data.length;

        data.forEach(enrollment => {

            table.innerHTML += `

            <tr>

                <td>${enrollment.id}</td>

                <td>${enrollment.studentName}</td>

                <td>${enrollment.studentEmail}</td>

                <td>${enrollment.courseName}</td>

                <td>${formatDate(enrollment.enrollmentDate)}</td>

                <td>

                    <button
                    class="delete-btn"
                    onclick="deleteEnrollment(${enrollment.id})">

                    Delete

                    </button>

                </td>

            </tr>

            `;

        });

    })

    .catch(error => {

        console.error(error);

        alert("Failed to load enrollments.");

    });

}

function deleteEnrollment(id){

    if(!confirm("Delete this enrollment?")){

        return;

    }

    fetch(API_URL + "/" + id,{

        method:"DELETE"

    })

    .then(() =>{

        loadEnrollments();

    });

}

function formatDate(date){

    return new Date(date).toLocaleString();

}

function goBack(){

    window.location.href="admin.html";

}