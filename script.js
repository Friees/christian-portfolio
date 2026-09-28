const projectData = {
    evote: {
        title: "E-VOTE",
        images: [
            "images/evote-1.jpg",
            "images/evote-2.jpg",
            "images/evote-3.jpg",
            "images/evote-4.jpg"
        ],
        description: "A client-based mobile voting system designed for school elections and voting events. The system allows students to vote digitally while administrators can manage elections, candidates, and voting results.",
        technologies: [
            "Flutter",
            "Firebase",
            "Firestore",
            "Mobile Development"
        ],
        role: "I worked on the design and development of the system, including the user interface, voting flow, database structure, and other parts of the application."
    },

    cafe: {
        title: "KAVENTRA CAFÉ",
        images: [
            "images/cafe-1.jpg",
            "images/cafe-2.jpg",
            "images/cafe-3.jpg"
        ],
        description: "A modern café website concept designed to provide a clean and attractive online experience. The project focuses on UI/UX design, layout, typography, and visual presentation.",
        technologies: [
            "Figma",
            "UI/UX Design",
            "Web Design",
            "Prototyping"
        ],
        role: "I designed the website layout, user interface, visual style, and interactive prototype."
    },

    database: {
        title: "STUDENT DATABASE",
        images: [
            "images/database-1.jpg",
            "images/database-2.jpg"
        ],
        description: "A database project created to organize student information and related records. The project focuses on proper database structure and relationships between different types of information.",
        technologies: [
            "SQL",
            "Database Design",
            "ERD",
            "Data Management"
        ],
        role: "I worked on the database structure, entity relationships, and organization of the data."
    },

    portfolio: {
        title: "PORTFOLIO WEBSITE",
        images: [
            "images/portfolio-1.jpg",
            "images/portfolio-2.jpg"
        ],
        description: "A personal portfolio website created to showcase my background, skills, projects, and experience as an IT student.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ],
        role: "I designed and developed the website using HTML, CSS, and JavaScript."
    }
};

let currentProject = null;
let currentImageIndex = 0;

function showProject(projectName) {
    const project = projectData[projectName];

    if (!project) {
        return;
    }

    currentProject = project;
    currentImageIndex = 0;

    const modal = document.getElementById("projectModal");
    const title = document.getElementById("modalTitle");
    const image = document.getElementById("modalImage");
    const description = document.getElementById("modalDescription");
    const technologies = document.getElementById("modalTechnologies");
    const role = document.getElementById("modalRole");
    const dots = document.getElementById("galleryDots");

    title.textContent = project.title;
    description.textContent = project.description;
    role.textContent = project.role;

    technologies.innerHTML = "";

    project.technologies.forEach(function (technology) {
        const tag = document.createElement("span");

        tag.className = "technology-tag";
        tag.textContent = technology;

        technologies.appendChild(tag);
    });

    dots.innerHTML = "";

    project.images.forEach(function (_, index) {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "gallery-dot";
        dot.setAttribute("aria-label", "Show image " + (index + 1));

        dot.addEventListener("click", function () {
            currentImageIndex = index;
            updateGallery();
        });

        dots.appendChild(dot);
    });

    updateGallery();

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function updateGallery() {
    if (!currentProject) {
        return;
    }

    const image = document.getElementById("modalImage");
    const counter = document.getElementById("imageCounter");
    const dots = document.querySelectorAll(".gallery-dot");

    image.src = currentProject.images[currentImageIndex];
    image.alt = currentProject.title + " project image " + (currentImageIndex + 1);

    counter.textContent =
        (currentImageIndex + 1) +
        " / " +
        currentProject.images.length;

    dots.forEach(function (dot, index) {
        dot.classList.toggle(
            "active",
            index === currentImageIndex
        );
    });
}

function nextImage() {
    if (!currentProject) {
        return;
    }

    currentImageIndex++;

    if (currentImageIndex >= currentProject.images.length) {
        currentImageIndex = 0;
    }

    updateGallery();
}

function previousImage() {
    if (!currentProject) {
        return;
    }

    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = currentProject.images.length - 1;
    }

    updateGallery();
}

function closeProject() {
    const modal = document.getElementById("projectModal");

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    currentProject = null;
    currentImageIndex = 0;
}

window.addEventListener("click", function (event) {
    const modal = document.getElementById("projectModal");

    if (event.target === modal) {
        closeProject();
    }
});

document.addEventListener("keydown", function (event) {
    const modal = document.getElementById("projectModal");

    if (!modal.classList.contains("show")) {
        return;
    }

    if (event.key === "Escape") {
        closeProject();
    }

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }
});

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuButton.textContent = isOpen ? "×" : "☰";
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.textContent = "☰";
        });
    });
}

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}