// Project data
const projectData = {
    'data-analysis': {
        title: 'ZH | Data Analysis Project',
        description: 'Statistical analysis and visualization of large datasets',
        overview: 'This project involves performing statistical analysis and creating visualizations for large datasets to derive insights and trends.',
        githubUrl: 'https://github.com/zack-horton/RTA-Project',
        linkedinUrl: 'https://www.linkedin.com/in/zack-h-horton/details/projects/#:~:text=Projects-,Real%2DTime%20Analytics%20for%20Rideshare%20App%20Optimization,-Real%2DTime%20Analytics',
        presentationUrl: 'https://raw.githubusercontent.com/zack-horton/RTA-Project/main/RTA%20Final%20Presentation.pdf',
        reportUrl: 'https://raw.githubusercontent.com/zack-horton/RTA-Project/main/RTA%20Final%20Project.pdf',
        demoUrl: 'https://www.youtube.com/watch?v=_RnEoDwFAng', // YouTube video URL
        technologies: [
            { name: 'Python', icon: 'python.svg' },
            { name: 'Pandas', icon: 'pandas.svg' },
            { name: 'Matplotlib', icon: 'matplotlib.svg' }
        ],
        collaborators: [
            {
                name: 'John Doe',
                role: 'Data Scientist',
                linkedinUrl: 'https://www.linkedin.com/in/zack-h-horton/',
                profileImageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFRGZ_1z7_3Gw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695325093343?e=1754524800&v=beta&t=svzwHSiozayws8hjxF1KhAg2NUAHPXXMuEOvuzs_PTc'
            }
        ]
    }
};

// Function to get Google Docs Viewer URL
function getGoogleDocsViewerUrl(pdfUrl) {
    return `https://docs.google.com/viewer?embedded=true&url=${encodeURIComponent(pdfUrl)}`;
}

// Function to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url) {
    const videoId = url.split('v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
}

// Function to initialize PDF viewers and download buttons
function initializePDFs(project) {
    // Handle presentation PDF
    if (project.presentationUrl) {
        const presentationContainer = document.querySelector('.presentation-section .pdf-container');
        presentationContainer.innerHTML = `
            <iframe src="${getGoogleDocsViewerUrl(project.presentationUrl)}" width="100%" height="100%" frameborder="0"></iframe>
        `;

        const presentationDownloadBtn = document.getElementById('presentation-download');
        presentationDownloadBtn.addEventListener('click', () => {
            window.open(project.presentationUrl, '_blank');
        });
    }

    // Handle report PDF
    if (project.reportUrl) {
        const reportContainer = document.getElementById('report-container');
        reportContainer.innerHTML = `
            <iframe src="${getGoogleDocsViewerUrl(project.reportUrl)}" width="100%" height="100%" frameborder="0"></iframe>
        `;

        const reportDownloadBtn = document.getElementById('report-download');
        reportDownloadBtn.addEventListener('click', () => {
            window.open(project.reportUrl, '_blank');
        });
    }
}

// Function to load project data
function loadProjectData() {
    const projectId = window.location.pathname.split('/').pop().replace('.html', '');
    const project = projectData[projectId];
    
    if (project) {
        document.title = `${project.title} | Portfolio`;
        document.querySelector('.project-title').textContent = project.title;

        // Populate project description
        const descriptionContainer = document.querySelector('.project-description');
        if (descriptionContainer && project.overview) {
            descriptionContainer.innerHTML = `<p>${project.overview}</p>`;
        }

        // Embed demo video
        if (project.demoUrl) {
            const videoContainer = document.querySelector('.video-container');
            if (videoContainer) {
                videoContainer.innerHTML = `
                    <iframe
                        src="${getYouTubeEmbedUrl(project.demoUrl)}"
                        title="Project Demo"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                `;
            }
        }

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
                    <i class="fab fa-linkedin"></i> LinkedIn Information
                </a>
            `;
        }

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

        // Populate collaborators
        const collaboratorsContainer = document.querySelector('.collaborators');
        project.collaborators.forEach(collaborator => {
            collaboratorsContainer.innerHTML += `
                <a href="${collaborator.linkedinUrl}" class="collaborator" target="_blank">
                    <img src="${collaborator.profileImageUrl}" alt="${collaborator.name}">
                    <div>
                        <h3>${collaborator.name}</h3>
                        <p>${collaborator.role}</p>
                    </div>
                </a>
            `;
        });

        // Initialize PDFs
        initializePDFs(project);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', loadProjectData);
