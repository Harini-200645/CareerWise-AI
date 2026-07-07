let enrolledCourses = [];
const container = document.getElementById("courseContainer");

// modal
const modal = document.getElementById("courseModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalDuration = document.getElementById("modalDuration");
const modalLevel = document.getElementById("modalLevel");
const modalInstructor = document.getElementById("modalInstructor");
const modalStudents = document.getElementById("modalStudents");
const modalRating = document.getElementById("modalRating");

// close modal
document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
};

// =====================
// COURSES DATA
// =====================

const courses = [
  // ======================
  // PROGRAMMING
  // ======================
  {
    title: "Java Programming",
    category: "Programming",
    rating: "4.8",
    duration: "35 Hours",
    level: "Beginner",
    students: "18,500",
    instructor: "John Smith",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
    description: "Master Core Java, OOP, Collections, Exception Handling and JDBC."
  },
  {
    title: "Python Programming",
    category: "Programming",
    rating: "4.9",
    duration: "30 Hours",
    level: "Beginner",
    students: "28,000",
    instructor: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
    description: "Python from basics to advanced with projects."
  },
  {
    title: "C Programming",
    category: "Programming",
    rating: "4.7",
    duration: "25 Hours",
    level: "Beginner",
    students: "14,000",
    instructor: "Michael Brown",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    description: "Learn programming fundamentals using C."
  },
  {
    title: "C++ Programming",
    category: "Programming",
    rating: "4.8",
    duration: "32 Hours",
    level: "Intermediate",
    students: "16,200",
    instructor: "Robert Wilson",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    description: "Object Oriented Programming with C++."
  },

  // ======================
  // WEB DEVELOPMENT
  // ======================
  {
    title: "HTML & CSS",
    category: "Web Development",
    rating: "4.9",
    duration: "20 Hours",
    level: "Beginner",
    students: "35,000",
    instructor: "Daniel White",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    description: "Build responsive websites from scratch."
  },
  {
    title: "JavaScript Mastery",
    category: "Web Development",
    rating: "4.9",
    duration: "28 Hours",
    level: "Beginner",
    students: "31,000",
    instructor: "Emily Davis",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    description: "Modern JS ES6, DOM, APIs, Projects."
  },
  {
    title: "React JS",
    category: "Web Development",
    rating: "4.8",
    duration: "36 Hours",
    level: "Intermediate",
    students: "22,400",
    instructor: "Chris Martin",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    description: "Build modern UI with React."
  },
  {
    title: "Node.js Backend",
    category: "Web Development",
    rating: "4.8",
    duration: "34 Hours",
    level: "Intermediate",
    students: "19,700",
    instructor: "Jason Walker",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    description: "Backend APIs using Node + Express."
  },

  // ======================
  // AI / ML
  // ======================
  {
    title: "Artificial Intelligence",
    category: "AI",
    rating: "4.9",
    duration: "45 Hours",
    level: "Intermediate",
    students: "15,000",
    instructor: "Sophia Green",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    description: "AI fundamentals and neural systems."
  },
  {
    title: "Machine Learning",
    category: "AI",
    rating: "4.9",
    duration: "42 Hours",
    level: "Intermediate",
    students: "13,500",
    instructor: "William Carter",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    description: "Supervised & unsupervised learning."
  },
  {
    title: "Deep Learning",
    category: "AI",
    rating: "4.8",
    duration: "48 Hours",
    level: "Advanced",
    students: "8,700",
    instructor: "Olivia Thomas",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    description: "Neural networks, CNN, RNN, TensorFlow."
  },

  // ======================
  // DATA SCIENCE
  // ======================
  {
    title: "Data Science with Python",
    category: "Data Science",
    rating: "4.9",
    duration: "50 Hours",
    level: "Intermediate",
    students: "24,600",
    instructor: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    description: "Pandas, NumPy, visualization, ML basics."
  },
  {
    title: "Power BI",
    category: "Data Science",
    rating: "4.8",
    duration: "24 Hours",
    level: "Beginner",
    students: "18,900",
    instructor: "Olivia Green",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    description: "Create dashboards and reports."
  },
  {
    title: "Tableau",
    category: "Data Science",
    rating: "4.8",
    duration: "22 Hours",
    level: "Intermediate",
    students: "13,600",
    instructor: "Emma Roberts",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    description: "Data visualization with Tableau."
  },

  // ======================
  // CLOUD
  // ======================
  {
    title: "AWS Cloud Practitioner",
    category: "Cloud",
    rating: "4.8",
    duration: "32 Hours",
    level: "Beginner",
    students: "17,800",
    instructor: "James Anderson",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
    description: "Learn AWS core services."
  },
  {
    title: "Microsoft Azure",
    category: "Cloud",
    rating: "4.8",
    duration: "34 Hours",
    level: "Intermediate",
    students: "11,500",
    instructor: "Linda Harris",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
    description: "Azure cloud deployment."
  },
  {
    title: "Google Cloud Platform",
    category: "Cloud",
    rating: "4.7",
    duration: "30 Hours",
    level: "Intermediate",
    students: "9,400",
    instructor: "Brian Miller",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
    description: "GCP services and deployment."
  },

  // ======================
  // DEVOPS
  // ======================
  {
    title: "Docker Essentials",
    category: "DevOps",
    rating: "4.8",
    duration: "24 Hours",
    level: "Beginner",
    students: "13,200",
    instructor: "Kevin Hall",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    description: "Containerization with Docker."
  },
  {
    title: "Kubernetes",
    category: "DevOps",
    rating: "4.8",
    duration: "36 Hours",
    level: "Intermediate",
    students: "10,700",
    instructor: "Andrew King",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    description: "Container orchestration."
  },
  {
    title: "Git & GitHub",
    category: "DevOps",
    rating: "4.9",
    duration: "18 Hours",
    level: "Beginner",
    students: "26,500",
    instructor: "David Brown",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    description: "Version control system."
  },

  // ======================
  // CYBER SECURITY
  // ======================
  {
    title: "Cyber Security Fundamentals",
    category: "Cyber Security",
    rating: "4.9",
    duration: "40 Hours",
    level: "Beginner",
    students: "19,500",
    instructor: "Michael Scott",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
    description: "Learn security basics."
  },
  {
    title: "Ethical Hacking",
    category: "Cyber Security",
    rating: "4.9",
    duration: "48 Hours",
    level: "Advanced",
    students: "12,800",
    instructor: "Robert King",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
    description: "Pen testing and hacking."
  },

  // ======================
  // UI/UX
  // ======================
  {
    title: "UI Design with Figma",
    category: "UI/UX",
    rating: "4.8",
    duration: "25 Hours",
    level: "Beginner",
    students: "15,700",
    instructor: "Anna Taylor",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    description: "Design modern UI interfaces."
  },
  {
    title: "UX Design",
    category: "UI/UX",
    rating: "4.8",
    duration: "30 Hours",
    level: "Intermediate",
    students: "10,500",
    instructor: "Grace Wilson",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    description: "User experience design."
  }

];

// =====================
// RENDER
// =====================
function renderCourses(list) {
container.innerHTML = "";

list.forEach(course => {
const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<img src="${course.image}">
<h3>${course.title}</h3>
<p>${course.category}</p>
<p>⭐ ${course.rating}</p>
<div class="btn-group">
    <button class="view-btn">View Details</button>
    <button class="enroll-btn">Enroll</button>
</div>
`;
card.querySelector(".view-btn").onclick = () => openModal(course);

card.querySelector(".enroll-btn").onclick = () => enrollCourse(course);



container.appendChild(card);
});
}

// initial load
renderCourses(courses);

// =====================
// FILTER
// =====================
function filterCourse(category) {
if (category === "All") {
renderCourses(courses);
} else {
renderCourses(courses.filter(c => c.category === category));
}
}

// =====================
// SEARCH
// =====================
document.getElementById("search").addEventListener("input", (e) => {
const value = e.target.value.toLowerCase();

const filtered = courses.filter(c =>
c.title.toLowerCase().includes(value) ||
c.category.toLowerCase().includes(value)
);

renderCourses(filtered);
});

// =====================
// MODAL
// =====================
function openModal(course) {
modal.style.display = "block";

modalImage.src = course.image;
modalTitle.textContent = course.title;
modalDescription.textContent = course.description;
modalDuration.textContent = course.duration;
modalLevel.textContent = course.level;
modalInstructor.textContent = course.instructor;
modalStudents.textContent = course.students;
modalRating.textContent = course.rating;
}
async function enrollCourse(course) {

    const exists = enrolledCourses.find(c => c.title === course.title);

    if (exists) {
        alert("⚠ You already enrolled in this course!");
        return;
    }

    const enrollment = {
        userId: localStorage.getItem("userId"),
        studentName: localStorage.getItem("userName"),
        studentEmail: localStorage.getItem("userEmail"),
        courseName: course.title
    };

    try {

        const response = await fetch("http://localhost:8082/api/enrollments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(enrollment)
        });

        if (!response.ok) {
            throw new Error("Enrollment failed");
        }

        enrolledCourses.push(course);

        alert("✅ Successfully enrolled in " + course.title);

        showEnrolledCourses();

    } catch (error) {
        console.error(error);
        alert("Enrollment failed.");
    }
}
function showEnrolledCourses() {

    const box = document.getElementById("enrolledContainer");
    box.innerHTML = "";

    enrolledCourses.forEach(course => {

        box.innerHTML += `
            <div class="enrolled-card">
                <h3>${course.title}</h3>
                <p>${course.category}</p>
            </div>
        `;
    });
  
}
function closeModal() {
    document.getElementById("courseModal").style.display = "none";
}