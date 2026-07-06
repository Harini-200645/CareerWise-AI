// ================================
// CareerWise Roadmap System
// ================================

// Get AI Recommendation
const recommendation = JSON.parse(
    localStorage.getItem("careerRecommendation")
);

let career =
    recommendation?.recommendedCareerTitle ||
    recommendation?.career ||
    "Software Developer";

// ================================
// Career Roadmaps
// ================================

const roadmaps = {

    "Software Developer":[

        {
            title:"🎓 Step 1 - Education",
            desc:"Complete B.E/B.Tech CSE, IT, BCA or MCA."
        },

        {
            title:"💻 Step 2 - Programming",
            desc:"Learn C, C++, Java, Python."
        },

        {
            title:"🌐 Step 3 - Web Development",
            desc:"Learn HTML, CSS, JavaScript."
        },

        {
            title:"⚛ Step 4 - Frontend",
            desc:"React.js / Angular."
        },

        {
            title:"⚙ Step 5 - Backend",
            desc:"Spring Boot / Node.js."
        },

        {
            title:"🗄 Step 6 - Database",
            desc:"MySQL & MongoDB."
        },

        {
            title:"📁 Step 7 - Projects",
            desc:"Build at least 5 Full Stack Projects."
        },

        {
            title:"🏢 Step 8 - Internship",
            desc:"Complete Internship."
        },

        {
            title:"🎉 Career Outcome",
            desc:"Software Engineer",
            result:true
        }

    ],
    "Doctor":[
    {
        title:"🎓 Step 1",
        desc:"Complete 12th with Biology."
    },
    {
        title:"📝 Step 2",
        desc:"Qualify NEET Examination."
    },
    {
        title:"🏥 Step 3",
        desc:"Complete MBBS."
    },
    {
        title:"🩺 Step 4",
        desc:"Clinical Training."
    },
    {
        title:"💊 Step 5",
        desc:"One Year Hospital Internship."
    },
    {
        title:"📜 Step 6",
        desc:"Medical Council Registration."
    },
    {
        title:"🎓 Step 7",
        desc:"Specialization (MD/MS)."
    },
    {
        title:"🎉 Career Outcome",
        desc:"Doctor / Surgeon",
        result:true
    }
],

    "AI Engineer":[

        {
            title:"🎓 Step 1",
            desc:"Complete B.Tech CSE / AI."
        },

        {
            title:"🐍 Step 2",
            desc:"Master Python."
        },

        {
            title:"📊 Step 3",
            desc:"Statistics & Mathematics."
        },

        {
            title:"🤖 Step 4",
            desc:"Machine Learning."
        },

        {
            title:"🧠 Step 5",
            desc:"Deep Learning."
        },

        {
            title:"✨ Step 6",
            desc:"Generative AI."
        },

        {
            title:"🏢 Step 7",
            desc:"AI Internship."
        },

        {
            title:"🎉 Career Outcome",
            desc:"AI Engineer",
            result:true
        }

    ],

    "ECE":[

        {
            title:"🎓 Step 1",
            desc:"ECE Engineering Degree."
        },

        {
            title:"📘 Step 2",
            desc:"Electronics Basics."
        },

        {
            title:"🔌 Step 3",
            desc:"Embedded C."
        },

        {
            title:"📡 Step 4",
            desc:"IoT & Communication Systems."
        },

        {
            title:"🧩 Step 5",
            desc:"VLSI Design."
        },

        {
            title:"🏢 Step 6",
            desc:"Internship."
        },

        {
            title:"🎉 Career Outcome",
            desc:"ECE Engineer",
            result:true
        }

    ],

    "Cloud Engineer":[

        {
            title:"🎓 Step 1",
            desc:"Complete CSE / IT Degree."
        },

        {
            title:"🐧 Step 2",
            desc:"Learn Linux."
        },

        {
            title:"🌐 Step 3",
            desc:"Networking."
        },

        {
            title:"☁ Step 4",
            desc:"AWS / Azure."
        },

        {
            title:"🎉 Career Outcome",
            desc:"Cloud Engineer",
            result:true
        }

    ],

    "Cyber Security":[

        {
            title:"🎓 Step 1",
            desc:"Complete CSE Degree."
        },

        {
            title:"🌐 Step 2",
            desc:"Networking."
        },

        {
            title:"🔐 Step 3",
            desc:"Ethical Hacking."
        },

        {
            title:"🛡 Step 4",
            desc:"Penetration Testing."
        },

        {
            title:"🎉 Career Outcome",
            desc:"Cyber Security Analyst",
            result:true
        }

    ],

    "Data Scientist":[

        {
            title:"🎓 Step 1",
            desc:"Complete Degree."
        },

        {
            title:"🐍 Step 2",
            desc:"Learn Python."
        },

        {
            title:"📊 Step 3",
            desc:"Statistics."
        },

        {
            title:"🤖 Step 4",
            desc:"Machine Learning."
        },

        {
            title:"🎉 Career Outcome",
            desc:"Data Scientist",
            result:true
        }

    ]

};
// ================================
// Mapping AI output to roadmap key
// ================================

const careerMap = {

    "Software Engineer":"Software Developer",
    "Full Stack Developer":"Software Developer",
    "Java Developer":"Software Developer",

    "Artificial Intelligence Engineer":"AI Engineer",
    "Machine Learning Engineer":"AI Engineer",

    "Cyber Security Analyst":"Cyber Security",
    "Ethical Hacker":"Cyber Security",

    "Cloud Computing":"Cloud Engineer",
    "AWS Engineer":"Cloud Engineer",

    "Data Analyst":"Data Scientist",
    "Data Science":"Data Scientist",

    "Embedded Engineer":"ECE",
    "VLSI Engineer":"ECE",
    "IoT Engineer":"ECE"

};

career = careerMap[career] || career;

// ================================
// Get HTML Elements
// ================================

const aiContainer =
document.getElementById("aiRoadmapContainer");

const roadmapContainer =
document.getElementById("roadmapContainer");

const allContainer =
document.getElementById("allRoadmapContainer");

// ================================
// AI Recommendation
// ================================

aiContainer.innerHTML = `
<div class="ai-box">
    <h1>🎯 AI Recommended Career</h1>
    <h2>${career}</h2>
</div>
`;

// ================================
// Function to Display One Roadmap
// ================================

function showRoadmap(careerName){

    let roadmap =
    roadmaps[careerName];

    if(!roadmap){
        roadmap =
        roadmaps["Software Developer"];
    }

    document.getElementById("careerTitle").innerText =
    careerName + " Career Roadmap";

    roadmapContainer.innerHTML="";

    roadmap.forEach(step=>{

        roadmapContainer.innerHTML +=`

        <div class="step ${step.result ? 'result' : ''}">

            <h2>${step.title}</h2>

            <p>${step.desc}</p>

        </div>

        `;

    });

}
// =======================================
// Show AI Recommended Roadmap First
// =======================================

showRoadmap(career);

// =======================================
// Display All Career Names
// =======================================

if (allContainer) {

    allContainer.innerHTML = `
        <h1 style="text-align:center;margin:40px 0;">
            📚 All Career Roadmaps
        </h1>

        <input
            type="text"
            id="roadmapSearch"
            placeholder="🔍 Search Career..."
            style="
                width:80%;
                max-width:500px;
                padding:12px;
                display:block;
                margin:20px auto;
                border:2px solid #2563eb;
                border-radius:30px;
                font-size:16px;
            "
        >

        <div id="careerList"></div>
    `;

    const careerList = document.getElementById("careerList");

    function displayCareerList(filter = "") {

        careerList.innerHTML = "";

        Object.keys(roadmaps).forEach(careerName => {

            if (
                careerName.toLowerCase()
                .includes(filter.toLowerCase())
            ) {

                const card = document.createElement("div");

                card.className = "career-title";

                card.innerHTML = `
                    <h2>
                        ${careerName}
                        ${careerName === career ? " ⭐ AI Recommended" : ""}
                    </h2>
                `;

                card.style.cursor = "pointer";

                card.onclick = () => {

                    showRoadmap(careerName);

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                };

                careerList.appendChild(card);

            }

        });

    }

    displayCareerList();

    document
        .getElementById("roadmapSearch")
        .addEventListener("keyup", function () {

            displayCareerList(this.value);

        });

}
