async function loadProjects() {
    try {
        const response = await fetch("http://localhost:5000/projects");
        const projects = await response.json();

        const container = document.getElementById("projects");

        container.innerHTML = "";

        projects.forEach(project => {
            const card = document.createElement("div");

            card.className = "project-card";

            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.github}" target="_blank">GitHub</a>
                <a href="${project.demo}" target="_blank">Live Demo</a>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.log(error);
    }
}

loadProjects();