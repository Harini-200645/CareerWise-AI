// ===============================
// CareerWise Skill Gap Analysis
// ===============================

// AI Recommended Career
const recommendation = JSON.parse(
    localStorage.getItem("careerRecommendation")
);

const career =
    recommendation?.recommendedCareerTitle ||
    recommendation?.career ||
    "Software Developer";

// Show Career Name
document.getElementById("careerName").innerText = career;

// ===============================
// User Skills
// (Later you can get these from your assessment)
// ===============================

const userSkills = [
    "Java",
    "HTML",
    "CSS"
];

// ===============================
// Career Database
// ===============================

const careerData = {

"Software Developer":{

skills:[
"Problem Solving",
"Programming",
"Object-Oriented Programming",
"Database Management",
"Web Development",
"Version Control",
"Debugging",
"Team Collaboration"
],

courses:[
"C Programming",
"Java Programming",
"Data Structures & Algorithms",
"HTML, CSS & JavaScript",
"React.js",
"Spring Boot",
"MySQL",
"Git & GitHub"
]

},

"AI Engineer":{

skills:[
"Python Programming",
"Mathematics",
"Statistics",
"Machine Learning",
"Deep Learning",
"Data Analysis",
"Model Building",
"Problem Solving"
],

courses:[
"Python for AI",
"Linear Algebra",
"Probability & Statistics",
"Machine Learning",
"Deep Learning",
"TensorFlow",
"PyTorch",
"Generative AI"
]

},

"Cloud Engineer":{

skills:[
"Linux Administration",
"Networking",
"Cloud Computing",
"Virtualization",
"Docker",
"Kubernetes",
"Infrastructure Management",
"Security Basics"
],

courses:[
"Linux Essentials",
"Computer Networking",
"AWS Cloud Practitioner",
"Microsoft Azure Fundamentals",
"Docker",
"Kubernetes",
"Terraform",
"Cloud Security"
]

},

"Cyber Security":{

skills:[
"Network Security",
"Ethical Hacking",
"Penetration Testing",
"Incident Response",
"Risk Assessment",
"Cyber Threat Analysis",
"Cryptography",
"Problem Solving"
],

courses:[
"Networking Fundamentals",
"Ethical Hacking",
"Cyber Security Essentials",
"CEH Certification",
"Penetration Testing",
"Digital Forensics",
"Kali Linux",
"Security Operations"
]

},

"Data Scientist":{

skills:[
"Python Programming",
"Statistics",
"Data Analysis",
"Machine Learning",
"Data Visualization",
"SQL",
"Critical Thinking",
"Problem Solving"
],

courses:[
"Python",
"Statistics",
"SQL",
"Machine Learning",
"Power BI",
"Tableau",
"Pandas & NumPy",
"Data Visualization"
]

},

"ECE":{

skills:[
"Circuit Design",
"Embedded Programming",
"Microcontroller Programming",
"PCB Design",
"Signal Processing",
"IoT Development",
"Troubleshooting",
"Analytical Thinking"
],

courses:[
"Digital Electronics",
"Analog Electronics",
"Embedded Systems",
"Microcontrollers",
"Arduino Programming",
"IoT",
"VLSI Design",
"Communication Systems"
]

},

"Mechanical Engineer":{

skills:[
"Mechanical Design",
"CAD Modeling",
"Problem Solving",
"Manufacturing",
"Quality Control",
"Thermodynamics",
"Machine Design",
"Teamwork"
],

courses:[
"Engineering Mechanics",
"AutoCAD",
"SolidWorks",
"CATIA",
"ANSYS",
"Manufacturing Technology",
"CNC Programming",
"Industrial Automation"
]

},

"Civil Engineer":{

skills:[
"Structural Analysis",
"Construction Planning",
"Project Management",
"Surveying",
"Problem Solving",
"Site Management",
"Quantity Estimation",
"Communication"
],

courses:[
"AutoCAD",
"STAAD Pro",
"ETABS",
"Quantity Surveying",
"Construction Management",
"Building Materials",
"Surveying",
"Structural Engineering"
]

},

"Doctor":{

skills:[
"Patient Care",
"Clinical Decision Making",
"Medical Communication",
"Diagnosis",
"Critical Thinking",
"Emergency Response",
"Empathy",
"Teamwork"
],

courses:[
"Human Anatomy",
"Physiology",
"Biochemistry",
"Pathology",
"Pharmacology",
"Microbiology",
"Clinical Medicine",
"Surgery Basics"
]

},

"Nursing":{

skills:[
"Patient Care",
"Communication",
"Clinical Skills",
"Critical Thinking",
"Emergency Care",
"Teamwork",
"Empathy",
"Time Management"
],

courses:[
"Fundamentals of Nursing",
"Medical Surgical Nursing",
"Community Health Nursing",
"Pharmacology",
"Anatomy & Physiology",
"Pediatric Nursing",
"Emergency Nursing",
"Clinical Practice"
]

},

"Pharmacist":{

skills:[
"Drug Knowledge",
"Prescription Analysis",
"Communication",
"Patient Counseling",
"Analytical Thinking",
"Medication Safety",
"Research Skills",
"Attention to Detail"
],

courses:[
"Pharmacology",
"Pharmaceutical Chemistry",
"Pharmaceutics",
"Clinical Pharmacy",
"Hospital Pharmacy",
"Medicinal Chemistry",
"Drug Regulatory Affairs",
"Industrial Pharmacy"
]

},

"Biotechnology":{

skills:[
"Laboratory Techniques",
"Genetics",
"Research",
"Data Analysis",
"Critical Thinking",
"Biological Analysis",
"Problem Solving",
"Communication"
],

courses:[
"Molecular Biology",
"Genetics",
"Microbiology",
"Biochemistry",
"Cell Biology",
"Bioinformatics",
"Genetic Engineering",
"Laboratory Techniques"
]

},

"Commerce":{

skills:[
"Accounting",
"Financial Analysis",
"Business Communication",
"Taxation",
"Problem Solving",
"Data Analysis",
"Decision Making",
"Leadership"
],

courses:[
"Financial Accounting",
"Cost Accounting",
"GST",
"Income Tax",
"Business Law",
"Corporate Finance",
"Tally ERP",
"MS Excel"
]

},

"Chartered Accountant":{

skills:[
"Accounting",
"Auditing",
"Tax Planning",
"Financial Reporting",
"Analytical Thinking",
"Problem Solving",
"Decision Making",
"Professional Ethics"
],

courses:[
"CA Foundation",
"CA Intermediate",
"CA Final",
"Advanced Accounting",
"Auditing",
"Direct Tax",
"Indirect Tax",
"Corporate Law"
]

},

"MBA":{

skills:[
"Leadership",
"Strategic Thinking",
"Communication",
"Decision Making",
"Team Management",
"Business Analysis",
"Marketing",
"Problem Solving"
],

courses:[
"Business Management",
"Marketing Management",
"Financial Management",
"Human Resource Management",
"Operations Management",
"Business Analytics",
"Strategic Management",
"Entrepreneurship"
]

},

"Business Analyst":{

skills:[
"Business Analysis",
"Communication",
"SQL",
"Data Analysis",
"Problem Solving",
"Requirement Gathering",
"Critical Thinking",
"Presentation Skills"
],

courses:[
"Business Analysis",
"SQL",
"Excel",
"Power BI",
"Tableau",
"Agile Methodology",
"Requirements Engineering",
"Data Visualization"
]

},

"Fashion Designer":{

skills:[
"Creativity",
"Fashion Illustration",
"Textile Knowledge",
"Pattern Making",
"Communication",
"Trend Analysis",
"Problem Solving",
"Portfolio Development"
],

courses:[
"Fashion Design",
"Textile Design",
"Garment Construction",
"Fashion Illustration",
"CAD for Fashion",
"Merchandising",
"Fashion Marketing",
"Portfolio Development"
]

},

"Animation Designer":{

skills:[
"Creativity",
"Storyboarding",
"Character Design",
"3D Modeling",
"Animation",
"Visual Effects",
"Problem Solving",
"Communication"
],

courses:[
"Adobe Photoshop",
"Adobe Illustrator",
"Blender",
"Autodesk Maya",
"After Effects",
"3D Animation",
"Visual Effects",
"Motion Graphics"
]

},

"UI/UX Designer":{

skills:[
"User Research",
"Wireframing",
"Prototyping",
"Visual Design",
"Communication",
"Problem Solving",
"Usability Testing",
"Creativity"
],

courses:[
"UI Design",
"UX Design",
"Figma",
"Adobe XD",
"Responsive Web Design",
"Interaction Design",
"Design Systems",
"Usability Testing"
]

},

"Digital Marketing":{

skills:[
"SEO",
"Content Marketing",
"Social Media Marketing",
"Communication",
"Analytics",
"Creativity",
"Email Marketing",
"Campaign Management"
],

courses:[
"SEO",
"Google Ads",
"Social Media Marketing",
"Email Marketing",
"Google Analytics",
"Content Marketing",
"Facebook Ads",
"Digital Branding"
]

},

"Entrepreneur":{

skills:[
"Leadership",
"Business Planning",
"Decision Making",
"Communication",
"Financial Management",
"Problem Solving",
"Innovation",
"Negotiation"
],

courses:[
"Entrepreneurship",
"Business Planning",
"Startup Funding",
"Marketing",
"Financial Management",
"Business Strategy",
"Leadership",
"Innovation Management"
]

}

};

// ===============================
// Get Career Details
// ===============================

const data =
careerData[career] ||
careerData["Software Developer"];

const requiredSkills =
data.skills;

const courses =
data.courses;

// ===============================
// Skill Matching
// ===============================

const matchedSkills =
requiredSkills.filter(skill =>
userSkills.includes(skill));

const missingSkills =
requiredSkills.filter(skill =>
!userSkills.includes(skill));

const percentage =
Math.round(
(matchedSkills.length /
requiredSkills.length) * 100
);

// ===============================
// Progress
// ===============================

document.getElementById("progressBar").style.width =
percentage + "%";

document.getElementById("progressText").innerText =
percentage + "% Ready";

// ===============================
// User Skills
// ===============================

const userList =
document.getElementById("userSkills");

userSkills.forEach(skill=>{

userList.innerHTML +=
`<li class="completed">✅ ${skill}</li>`;

});

// ===============================
// Missing Skills
// ===============================

const missingList =
document.getElementById("missingSkills");

missingSkills.forEach(skill=>{

missingList.innerHTML +=
`<li class="missing"> ${skill}</li>`;

});

// ===============================
// Recommended Courses
// ===============================

const courseList =
document.getElementById("courseList");

courses.forEach(course=>{

courseList.innerHTML +=
`<li>📚 ${course}</li>`;

});

// ===============================
// Learning Plan
// ===============================

const plan =
document.getElementById("learningPlan");

if(missingSkills.length===0){

plan.innerHTML=`
<h3 style="color:green">
🎉 Congratulations!
</h3>

<p>

You already have all the required
skills for becoming a
<strong>${career}</strong>.

</p>
`;

}
else{

plan.innerHTML=`

<p>

Start learning these skills in order:

</p>

<ol>

${missingSkills.map(skill=>
`<li>${skill}</li>`).join("")}

</ol>

<p>

After mastering these skills,
build projects and complete
an internship to improve
your career readiness.

</p>

`;

}