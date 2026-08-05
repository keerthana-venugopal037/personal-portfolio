const projects = [
    {
        title: "Student Study Planner App",
        description: "A responsive app storing all the details of student's progress of each subject and giving special slots for each subject based on their level in it.",
        technologies: "HTML, CSS, JavaScript, Node.js, Express.js",
       
    },

    {
        title: "Weather App",
        description: "Displays real-time weather using an API.",
        technologies: "HTML, CSS, JavaScript",
        
    }

];
const projectContainer = document.getElementById("projectContainer");

projects.forEach(function(project){

    const card = document.createElement("div");

    card.classList.add("project-card");

    card.innerHTML = `
    
        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <p><strong>Technologies:</strong> ${project.technologies}</p>

        <a href="${project.github}" target="_blank">
            View Project
        </a>

    `;

    projectContainer.appendChild(card);

});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    contactForm.reset();

});