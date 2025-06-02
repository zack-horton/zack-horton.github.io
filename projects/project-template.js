// Get project ID from the URL
const projectId = window.location.pathname.split('/').pop().replace('.html', '');

// Function to load project data
async function loadProjectData() {
    try {
        const response = await fetch('../script.js');
        const scriptContent = await response.text();
        // Extract projects array from script content
        eval(scriptContent);
        
        const project = projects.find(p => p.id === projectId);
        if (project) {
            populateProjectPage(project);
        }
    } catch (error) {
        console.error('Error loading project data:', error);
    }
}

function populateProjectPage(project) {
    // Update page title
    document.title = `${project.title} | Portfolio`;
    document.querySelector('.project-title').textContent = project.title;

    // Populate links
    const linksContainer = document.querySelector('.project-links');
    if (project.githubUrl) {
        linksContainer.innerHTML += `
            <a href="${project.githubUrl}" class="project-link" target="_blank">
                <i class="fab fa-github"></i> GitHub Repository
            </a>
        `;
    }
    if (project.linkedinUrl) {
        linksContainer.innerHTML += `
            <a href="${project.linkedinUrl}" class="project-link" target="_blank">
                <i class="fab fa-linkedin"></i> LinkedIn Project
            </a>
        `;
    }

    // Populate description
    document.querySelector('.project-description').innerHTML = project.fullDescription;

    // Populate technologies
    const techStack = document.querySelector('.tech-stack');
    project.technologies.forEach(tech => {
        techStack.innerHTML += `
            <div class="tech-icon">
                <img src="../images/tech-icons/${tech.icon}" alt="${tech.name}">
                <span>${tech.name}</span>
            </div>
        `;
    });

    // Embed PDF presentation
    if (project.presentationUrl) {
        document.querySelector('.pdf-container').innerHTML = `
            <iframe src="${project.presentationUrl}" width="100%" height="100%"></iframe>
        `;
    }

    // Populate collaborators
    const collaboratorsContainer = document.querySelector('.collaborators');
    project.collaborators.forEach(collaborator => {
        collaboratorsContainer.innerHTML += `
            <a href="${collaborator.linkedinUrl}" class="collaborator" target="_blank">
                <img src="../images/collaborators/${collaborator.image}" alt="${collaborator.name}">
                <div>
                    <h3>${collaborator.name}</h3>
                    <p>${collaborator.role}</p>
                </div>
            </a>
        `;
    });

    // Populate additional links
    const additionalLinksContainer = document.querySelector('.additional-links');
    project.additionalLinks.forEach(link => {
        additionalLinksContainer.innerHTML += `
            <a href="${link.url}" class="project-link" target="_blank">
                <i class="fas fa-external-link-alt"></i> ${link.title}
            </a>
        `;
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', loadProjectData);
