const userId = localStorage.getItem("userId");

fetch("http://localhost:8082/api/enrollments/user/" + userId)

.then(response => response.json())

.then(data => {

const container = document.getElementById("courseContainer");

if(data.length===0){

container.innerHTML=`

<h2>No courses enrolled yet.</h2>

`;

return;

}

data.forEach(course=>{

container.innerHTML+=`

<div class="card">

<h3>${course.courseName}</h3>

<p><b>Student:</b> ${course.studentName}</p>

<p><b>Email:</b> ${course.studentEmail}</p>

<p><b>Enrolled:</b>

${course.enrollmentDate.replace("T"," ").substring(0,16)}

</p>

<p><b>Progress</b></p>

<div class="progress">

<div class="fill"></div>

</div>

<button onclick="continueCourse('${course.courseName}')">

Continue Learning

</button>

</div>

`;

});

})

.catch(err=>{

console.log(err);

});

function continueCourse(course){

localStorage.setItem("selectedCourse",course);

window.location.href="course-view.html";

}