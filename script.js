// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Resume URL
const resumeUrl = 'https://raw.githubusercontent.com/zack-horton/Project-Portfolio/main/Zack%20Horton%20-%20Resume.pdf';

// Function to get Google Docs Viewer URL
function getGoogleDocsViewerUrl(pdfUrl) {
    return `https://docs.google.com/viewer?embedded=true&url=${encodeURIComponent(pdfUrl)}`;
}

// Initialize resume viewer
document.addEventListener('DOMContentLoaded', () => {
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        aboutImage.innerHTML = `
            <div class="resume-container">
                <iframe src="${getGoogleDocsViewerUrl(resumeUrl)}" frameborder="0"></iframe>
                <button class="download-resume-btn">
                    <i class="fas fa-download"></i> Download Resume
                </button>
            </div>
        `;

        // Add download button functionality
        const downloadBtn = aboutImage.querySelector('.download-resume-btn');
        downloadBtn.addEventListener('click', () => {
            window.open(resumeUrl, '_blank');
        });
    }
});

// Mobile menu functionality
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Project data structure
const projects = [
    {
        id: 'data-analysis',
        title: 'Data Analysis Project',
        description: 'Statistical analysis and visualization of large datasets',
        technologies: [
            { name: 'Python', icon: 'python.svg' },
            { name: 'Python', icon: 'python.svg' },
            { name: 'Pandas', icon: 'pandas.svg' },
            { name: 'Matplotlib', icon: 'matplotlib.svg' }
        ],
        image: 'images/projects/python.svg'
    }
    // Add more projects here...
];

// Populate projects
const projectGrid = document.querySelector('.project-grid');

function createProjectCard(project) {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = `projects/${project.id}.html`;
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" class="project-thumbnail">
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.technologies.map(tech => `
                    <div class="tech-icon">
                        <img src="images/tech-icons/${tech.icon}" alt="${tech.name}">
                        <span>${tech.name}</span>
                    </div>
                `).join(' ')}
            </div>
        </div>
    `;
    return card;
}

// Populate projects when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    projects.forEach(project => {
        projectGrid.appendChild(createProjectCard(project));
    });
});
