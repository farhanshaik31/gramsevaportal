/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================
   STATS COUNTER
========================== */

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        parseInt(counter.innerText.replace(/\D/g, ""));

        let count =
        parseInt(counter.getAttribute("data-count")) || 0;

        const increment =
        target / 100;

        if(count < target){

            count += increment;

            counter.setAttribute(
                "data-count",
                count
            );

            counter.innerText =
            Math.ceil(count) + "+";

            setTimeout(updateCounter,20);

        }else{

            counter.innerText =
            target + "+";

        }

    };

    updateCounter();

});

/* ==========================
   NAVBAR SHADOW
========================== */

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.1)";

    }
    else{

        navbar.style.boxShadow =
        "none";

    }

});

/* ==========================
   ACTIVE MENU
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});

/* ==========================
   REVEAL ANIMATION
========================== */

function reveal(){

    let reveals =
    document.querySelectorAll(
        ".service-card,.stat-card,.timeline-item,.announcement-card"
    );

    for(let i=0;i<reveals.length;i++){

        let windowHeight =
        window.innerHeight;

        let elementTop =
        reveals[i]
        .getBoundingClientRect()
        .top;

        let elementVisible =
        100;

        if(
            elementTop <
            windowHeight -
            elementVisible
        ){

            reveals[i]
            .classList.add("show");

        }

    }

}

window.addEventListener(
    "scroll",
    reveal
);

/* ==========================
   SCROLL TO TOP BUTTON
========================== */

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML =
"↑";

scrollBtn.className =
"scrollTopBtn";

document.body.appendChild(
    scrollBtn
);

window.addEventListener(
    "scroll",
    () => {

    if(window.scrollY > 400){

        scrollBtn.style.display =
        "block";

    }
    else{

        scrollBtn.style.display =
        "none";

    }

});

scrollBtn.addEventListener(
    "click",
    () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================
   BUTTON STYLE
========================== */

scrollBtn.style.position =
"fixed";

scrollBtn.style.bottom =
"20px";

scrollBtn.style.right =
"20px";

scrollBtn.style.width =
"50px";

scrollBtn.style.height =
"50px";

scrollBtn.style.border =
"none";

scrollBtn.style.borderRadius =
"50%";

scrollBtn.style.background =
"#198754";

scrollBtn.style.color =
"#fff";

scrollBtn.style.fontSize =
"22px";

scrollBtn.style.cursor =
"pointer";

scrollBtn.style.display =
"none";

scrollBtn.style.zIndex =
"9999";

/* ==========================
   SMOOTH SCROLL
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute(
                "href"
            )
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================
   ANNOUNCEMENT AUTO SLIDE
========================== */

let cards =
document.querySelectorAll(
".announcement-card"
);

let currentCard = 0;

setInterval(() => {

    cards.forEach(card => {

        card.style.border =
        "none";

    });

    cards[currentCard]
    .style.border =
    "3px solid #198754";

    currentCard++;

    if(
        currentCard >=
        cards.length
    ){

        currentCard = 0;

    }

},3000);

/* ==========================
   HERO BUTTON EFFECT
========================== */

const heroBtns =
document.querySelectorAll(
".hero-buttons .btn"
);

heroBtns.forEach(btn => {

    btn.addEventListener(
        "mouseenter",
        () => {

        btn.style.transform =
        "translateY(-3px)";

    });

    btn.addEventListener(
        "mouseleave",
        () => {

        btn.style.transform =
        "translateY(0px)";

    });

});

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
"🚀 GramSeva Portal Loaded Successfully"
);


const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon =
    themeToggle.querySelector("i");

    if(document.body.classList.contains("dark-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


window.addEventListener("scroll", () => {

    let scrollTop =
    document.documentElement.scrollTop;

    let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let progress =
    (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar")
    .style.width = progress + "%";

});



window.addEventListener("load",()=>{

    document.getElementById("loader")
    .style.display="none";

});




function showDistrict(district){

const info =
document.getElementById("districtInfo");

const data = {

Anantapur:
"Population: 40 Lakhs | It is a historically rich, expanding city in the Rayalaseema region of Andhra Pradesh, situated strategically on National Highway 44. Known as one of the driest places in South India, it serves as a major regional hub for education, agriculture, and local cultural heritage",

Chittoor:
"Population: 42 Lakhs | Chittoor is a vibrant city and district headquarters in Andhra Pradesh, located on the banks of the Ponnai River. Known as the Mango Capital of the state, it is a major agricultural hub for peanuts, jaggery, and sugarcane, and sits near major cultural and natural landmarks in the Rayalaseema region ",

Kurnool:
"Population: 41 Lakhs | Kurnool is a major historical and commercial city in Andhra Pradesh, famously known as the Gateway of Rayalaseema. Situated on the banks of the Tungabhadra River, it served as the first capital of the former Andhra State from 1953 to 1956. Today, it is a bustling hub renowned for its rich culture, ancient temples, and natural wonders",

Nellore:
"Population: 30 Lakhs |Nellore is a major city in the Indian state of Andhra Pradesh, situated on the banks of the Penna River. Often called the Shrimp Capital of India and the 'Rice Bowl of Andhra,' it is an agricultural hub known for its massive aquaculture and paddy production",

Guntur:
"Population: 49 Lakhs | Guntur is a major commercial, educational, and agricultural hub in the Indian state of Andhra Pradesh, widely recognized as the Chilli Capital of India. Located approximately 30 km from the new state capital, Amaravati, it is renowned for hosting Asia’s largest chilli market yard",

Krishna:
"Population: 45 Lakhs | Krishna District is a major district in the Coastal Andhra region of Andhra Pradesh, named after the holy Krishna River. Spanning an area of 8,727 sq. km, it is famous as the cultural and agricultural heartland of the state. Its administrative headquarters is Machilipatnam ",

Visakhapatnam:
"Population: 52 Lakhs | Visakhapatnam, popularly known as Vizag, is the largest and most populous city in the Andhra Pradesh. Sandwiched between the scenic Eastern Ghats and the serene Bay of Bengal, it is a major industrial powerhouse and the headquarters of the Eastern Naval Command of the Indian Navy",

"East Godavari":
"Population: 51 Lakhs |East Godavari is a district in the Coastal Andhra region of Andhra Pradesh, India, with its headquarters located in Rajamahendravaram. It gets its name from the Godavari River, as the district covers the major, fertile eastern portion of the river's delta before it empties into the Bay of Bengal"

};

info.innerHTML = `
<h3>${district}</h3>
<p>${data[district]}</p>
`;

}

// ap map

window.addEventListener("load", () => {

const svgObject =
document.getElementById("apMap");

svgObject.addEventListener("load", () => {

const svgDoc =
svgObject.contentDocument;

const districts =
svgDoc.querySelectorAll("path");
const districtData = {

    Anantapur: {
        population: "40 Lakhs",
        villages: "939",
        schemes: "25",
        schools: "320",
        hospitals: "45",
        collector: "Collector Office",
        famous: "Groundnuts"
    },

    Chittoor: {
        population: "42 Lakhs",
        villages: "1372",
        schemes: "28",
        schools: "410",
        hospitals: "60",
        collector: "Collector Office",
        famous: "Tirupati"
    }

};

districts.forEach(district => {

district.style.cursor = "pointer";

district.addEventListener("mouseenter", () => {

district.style.fill = "#22c55e";

});

district.addEventListener("mouseleave", () => {

district.style.fill = "";

});

district.addEventListener("click", () => {

const name =
district.getAttribute("id") ||
district.getAttribute("title") ||
"District";

document.getElementById(
"district-details"
).innerHTML = `
<h3>${name}</h3>
<p>
Population, Schemes, Contacts and
Village Information will be shown here.
</p>
`;

});

});

});

});

window.addEventListener("load", () => {

const svgObject =
document.getElementById("apMap");

svgObject.addEventListener("load", () => {

const svgDoc =
svgObject.contentDocument;

console.log(svgDoc);

const districts =
svgDoc.querySelectorAll("*");

console.log(
"SVG Elements:",
districts.length
);

});

});

window.onload = function(){

    const map =
    document.getElementById("apMap");

    map.addEventListener("load", function(){

        console.log("SVG Loaded Successfully");

        const svgDoc =
        map.contentDocument;

        console.log(svgDoc);

    });

};

window.addEventListener("DOMContentLoaded", () => {

    const map = document.getElementById("apMap");

    console.log("MAP =", map);

});

// window.addEventListener("DOMContentLoaded", () => {

//     const map = document.getElementById("apMap");

//     map.addEventListener("load", () => {

//         alert("SVG Loaded Successfully");

//     });

// });
window.addEventListener("DOMContentLoaded", () => {

    const map = document.getElementById("apMap");

    map.addEventListener("load", () => {

        const svgDoc = map.contentDocument;

        const districts =
        svgDoc.querySelectorAll("path");

        console.log(
            "Districts Found:",
            districts.length
        );

       const districtData = {

    Anantapur: {
        population: "40 Lakhs",
        famous: "Groundnuts"
    },

    Chittoor: {
        population: "42 Lakhs",
        famous: "Tirupati"
    },

    Kurnool: {
        population: "41 Lakhs",
        famous: "Konda Reddy Fort"
    },

    Guntur: {
        population: "49 Lakhs",
        famous: "Mirchi Market"
    },

    Krishna: {
        population: "45 Lakhs",
        famous: "Vijayawada"
    }

};

districts.forEach(district => {

    district.style.cursor = "pointer";

    district.addEventListener("mouseenter", () => {
    district.style.fill = "#22c55e";
});

district.addEventListener("mouseleave", () => {
    district.style.fill = "#198754";
});

district.addEventListener("click", () => {

    districts.forEach(d => {
        d.style.fill = "#198754";
    });

    district.style.fill = "#f59e0b";

    const districtName =
    district.id || "Unknown District";

    const data =
    districtData[districtName];

    if(data){

        document.getElementById(
        "district-details"
        ).innerHTML = `
        <h3>${districtName}</h3>
        <p><b>Population:</b> ${data.population}</p>
        <p><b>Famous For:</b> ${data.famous}</p>
        `;

    }else{

        document.getElementById(
        "district-details"
        ).innerHTML = `
        <h3>${districtName}</h3>
        <p>District information coming soon.</p>
        `;

    }

});

    // district.addEventListener("click", () => {

    //     const districtName =
    //     district.id || "Unknown District";

       district.addEventListener("click", () => {

    const districtName =
    district.id || "Unknown District";

    const data =
    districtData[districtName];

    if(data){

        document.getElementById(
        "district-details"
        ).innerHTML = `

        <h3>${districtName}</h3>

        <p>👥 Population:
        ${data.population}</p>

        <p>🏡 Villages:
        ${data.villages}</p>

        <p>📜 Schemes:
        ${data.schemes}</p>

        <p>🏫 Schools:
        ${data.schools}</p>

        <p>🏥 Hospitals:
        ${data.hospitals}</p>

        <p>🏛 Collector:
        ${data.collector}</p>

        <p>⭐ Famous:
        ${data.famous}</p>

        `;

    }else{

        document.getElementById(
        "district-details"
        ).innerHTML = `

        <h3>${districtName}</h3>

        <p>
        District information coming soon.
        </p>

        `;

    }

});

});
    });
});
