// ===== Smooth Scroll Navigation =====

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// ===== Navbar Active Highlight for All Sections =====

const allSections = document.querySelectorAll("section");
const allNavLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let currentSectionId = "";

    allSections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            currentSectionId = section.getAttribute("id");

        }

    });

    allNavLinks.forEach(link => {

        link.classList.remove("active");

        const hrefValue = link.getAttribute("href");

        if(hrefValue === "#" + currentSectionId){

            link.classList.add("active");

        }

    });

});

// ===== View Projects Button =====

const viewProjectBtn = document.querySelector('.primary-btn');

viewProjectBtn.addEventListener('click', function(e){

    e.preventDefault();

    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });

});

// ===== Download Resume Button =====

const resumeBtn = document.querySelector('.secondary-btn');

resumeBtn.addEventListener('click', function(e){

    e.preventDefault();

    // Resume File Path
    const resumeLink = document.createElement('a');

    resumeLink.href = "Dipanshu_Resume.pdf";

    resumeLink.download = "Dipanshu_Resume.pdf";

    document.body.appendChild(resumeLink);

    resumeLink.click();

    document.body.removeChild(resumeLink);

});

// // ===== Project Buttons Redirect to GitHub =====

// const projectButtons = document.querySelectorAll('.project-card .btn');

// projectButtons.forEach((button, index) => {

//     button.addEventListener('click', function(e){

//         e.preventDefault();

//         // ===== Your GitHub Project Links =====

//         const projectLinks = [

//             // Seating Planner Web App
//             "https://github.com/dipanshu1502/exam-seating-planner-",

//             // Spam Message Detection System
//             "https://github.com/yourusername/spam-message-detection",

//             // Club Management System
//             "https://github.com/dipanshu1502/club-management"

//         ];

//         // Open GitHub Repository
//         window.open(projectLinks[index], "_blank");

//     });

// });

// ===== Project Buttons Redirect to GitHub =====

const projectButtons = document.querySelectorAll('.project-card .btn');

projectButtons.forEach((button, index) => {

    button.addEventListener('click', function(e){

        e.preventDefault();

        // ===== GitHub Repository Links =====

        const projectLinks = [

            // Exam Seating Planner
            "https://github.com/dipanshu1502/exam-seating-planner",

            // Club Management System
            "https://github.com/dipanshu1502/club-management",

            // Docker Club Management System
            "https://github.com/dipanshu1502/docker-club-management-system",

            // Sudoku Solver
            "https://github.com/dipanshu1502/sudoku",

            // Face Mask Detection
            "https://github.com/dipanshu1502/face-mask-detection"

        ];

        // Open GitHub Repository
        window.open(projectLinks[index], "_blank");

    });

});


// ===== Contact Form =====

const contactForm = document.querySelector('.contact-form form');

contactForm.addEventListener('submit', function(e){

    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;

    alert("Thank You " + name + "! Your message has been sent successfully.");

    contactForm.reset();

});


// ===== Social Media Buttons =====

const socialLinks = document.querySelectorAll('.socials a');

const socialUrls = [

    "https://github.com/yourusername",

    "https://linkedin.com/in/yourusername",

    "https://instagram.com/yourusername",

    "https://twitter.com/yourusername"

];

socialLinks.forEach((icon,index)=>{

    icon.addEventListener('click', function(e){

        e.preventDefault();

        window.open(socialUrls[index], "_blank");

    });

});


// ===== Scroll Reveal Animation =====

const revealElements = document.querySelectorAll(
    '.glass, .project-card, .skill-card, .timeline-card'
);

window.addEventListener('scroll', revealOnScroll);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

}

// Initial Hidden State

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all 0.8s ease";

});

revealOnScroll();


// ===== Active Navbar Highlight =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ===== Add Active Style Dynamically =====

const style = document.createElement('style');

style.innerHTML = `

nav ul li a.active{
    color:#0077ff;
    font-weight:700;
}

`;

document.head.appendChild(style);


// ===== Floating Animation =====

const floatingCards = document.querySelectorAll('.skill-card');

floatingCards.forEach((card,index)=>{

    card.style.animation = `floatAnimation 3s ease-in-out infinite`;

    card.style.animationDelay = `${index * 0.2}s`;

});

const floatingStyle = document.createElement('style');

floatingStyle.innerHTML = `

@keyframes floatAnimation{

    0%{
        transform:translateY(0px);
    }

    50%{
        transform:translateY(-8px);
    }

    100%{
        transform:translateY(0px);
    }

}

`;

document.head.appendChild(floatingStyle);


// ===== Typing Effect =====

const subtitle = document.querySelector('.hero-text h3');

const text = "B.Tech Student | ML Enthusiast | Web Developer";

let index = 0;

subtitle.innerHTML = "";

function typeEffect(){

    if(index < text.length){

        subtitle.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 70);

    }

}

typeEffect();