/* =========================
   PROJECT INFORMATION
========================= */

const projectData = {

    /* =========================
       E-VOTE
    ========================== */

    evote: {

        title: "E-VOTE",

        images: [
            "images/evote-1.jpg",
            "images/evote-2.jpg",
            "images/evote-3.jpg",
            "images/evote-4.jpg"
        ],

        description:
            "A client-based mobile voting system designed for school elections and voting events. The system allows students to vote digitally while administrators can manage elections, candidates, and voting results.",

        technologies: [
            "Flutter",
            "Firebase",
            "Firestore",
            "Mobile Development"
        ],

        role:
            "I worked on the design and development of the system, including the user interface, voting flow, database structure, and other parts of the application."
    },


    /* =========================
       KAVENTRA CAFÉ
    ========================== */

    cafe: {

        title: "KAVENTRA CAFÉ",

        images: [
            "images/cafe-1.jpg",
            "images/cafe-2.jpg",
            "images/cafe-3.jpg"
        ],

        description:
            "A modern café website concept designed to provide a clean and attractive online experience. The project focuses on UI/UX design, layout, typography, and visual presentation.",

        technologies: [
            "Figma",
            "UI/UX Design",
            "Web Design",
            "Prototyping"
        ],

        role:
            "I designed the website layout, user interface, visual style, and interactive prototype."
    },


    /* =========================
       STUDENT DATABASE
    ========================== */

    database: {

        title: "STUDENT DATABASE",

        images: [
            "images/database-1.jpg",
            "images/database-2.jpg"
        ],

        description:
            "A database project created to organize student information and related records. The project focuses on proper database structure and relationships between different types of information.",

        technologies: [
            "SQL",
            "Database Design",
            "ERD",
            "Data Management"
        ],

        role:
            "I worked on the database structure, entity relationships, and organization of the data."
    },


    /* =========================
       PORTFOLIO
    ========================== */

    portfolio: {

        title: "PORTFOLIO WEBSITE",

        images: [
            "images/portfolio-1.jpg",
            "images/portfolio-2.jpg"
        ],

        description:
            "A personal portfolio website created to showcase my background, skills, projects, and experience as an IT student.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ],

        role:
            "I designed and developed the website using HTML, CSS, and JavaScript."
    }

};


/* =========================
   GALLERY VARIABLES
========================= */

let currentProject = null;

let currentImageIndex = 0;


/* =========================
   OPEN PROJECT
========================= */

function showProject(projectName) {

    const project = projectData[projectName];

    if (!project) {
        return;
    }


    /* Remember current project */

    currentProject = project;


    /* Start at first image */

    currentImageIndex = 0;


    /* Project title */

    document.getElementById(
        "modalTitle"
    ).textContent = project.title;


    /* Project description */

    document.getElementById(
        "modalDescription"
    ).textContent = project.description;


    /* Project role */

    document.getElementById(
        "modalRole"
    ).textContent = project.role;


    /* Update gallery */

    updateGallery();


    /* Technologies */

    const technologies =
        document.getElementById(
            "modalTechnologies"
        );

    technologies.innerHTML = "";


    project.technologies.forEach(
        function (technology) {

            const tag =
                document.createElement(
                    "span"
                );

            tag.textContent = technology;

            technologies.appendChild(tag);

        }
    );


    /* Show popup */

    document.getElementById(
        "projectModal"
    ).style.display = "flex";


    /* Prevent background scrolling */

    document.body.style.overflow = "hidden";

}


/* =========================
   UPDATE GALLERY
========================= */

function updateGallery() {

    if (!currentProject) {
        return;
    }


    const images = currentProject.images;


    /* Display current image */

    document.getElementById(
        "modalImage"
    ).src = images[currentImageIndex];


    /* Update counter */

    document.getElementById(
        "imageCounter"
    ).textContent =
        `${currentImageIndex + 1} / ${images.length}`;


    /* Create image dots */

    const dotsContainer =
        document.getElementById(
            "imageDots"
        );

    dotsContainer.innerHTML = "";


    images.forEach(
        function (image, index) {

            const dot =
                document.createElement(
                    "button"
                );

            dot.classList.add(
                "image-dot"
            );

            dot.setAttribute(
                "aria-label",
                `View image ${index + 1}`
            );


            /* Active dot */

            if (
                index === currentImageIndex
            ) {

                dot.classList.add(
                    "active"
                );

            }


            /* Click dot */

            dot.onclick =
                function () {

                    currentImageIndex = index;

                    updateGallery();

                };


            dotsContainer.appendChild(dot);

        }
    );


    /* Gallery buttons */

    const previousButton =
        document.querySelector(
            ".gallery-button.previous"
        );

    const nextButton =
        document.querySelector(
            ".gallery-button.next"
        );


    /* Hide buttons if only one image */

    if (images.length <= 1) {

        previousButton.style.display =
            "none";

        nextButton.style.display =
            "none";

    } else {

        previousButton.style.display =
            "flex";

        nextButton.style.display =
            "flex";

    }

}


/* =========================
   NEXT IMAGE
========================= */

function nextImage() {

    if (!currentProject) {
        return;
    }


    if (
        currentImageIndex <
        currentProject.images.length - 1
    ) {

        currentImageIndex++;

    } else {

        /* Return to first image */

        currentImageIndex = 0;

    }


    updateGallery();

}


/* =========================
   PREVIOUS IMAGE
========================= */

function previousImage() {

    if (!currentProject) {
        return;
    }


    if (currentImageIndex > 0) {

        currentImageIndex--;

    } else {

        /* Go to last image */

        currentImageIndex =
            currentProject.images.length - 1;

    }


    updateGallery();

}


/* =========================
   CLOSE PROJECT
========================= */

function closeProject() {

    document.getElementById(
        "projectModal"
    ).style.display = "none";


    /* Allow background scrolling again */

    document.body.style.overflow = "";

}


/* =========================
   CLOSE WHEN CLICKING
   OUTSIDE POPUP
========================= */

window.onclick =
    function (event) {

        const modal =
            document.getElementById(
                "projectModal"
            );


        if (event.target === modal) {

            closeProject();

        }

    };


/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        const modal =
            document.getElementById(
                "projectModal"
            );


        /* Only work when popup is open */

        if (
            modal.style.display !== "flex"
        ) {

            return;

        }


        /* Right arrow */

        if (
            event.key === "ArrowRight"
        ) {

            nextImage();

        }


        /* Left arrow */

        if (
            event.key === "ArrowLeft"
        ) {

            previousImage();

        }


        /* Escape */

        if (
            event.key === "Escape"
        ) {

            closeProject();

        }

    }
);