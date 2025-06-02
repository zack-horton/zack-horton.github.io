// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

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
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
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
        tags: ['Python', 'Pandas', 'Matplotlib'],
        image: 'placeholder.jpg',
        fullDescription: 'Detailed project description goes here...',
        githubUrl: 'https://github.com/username/project',
        linkedinUrl: 'https://linkedin.com/in/username/detail/project',
        presentationUrl: 'https://raw.githubusercontent.com/username/project/main/presentation.pdf',
        technologies: [
            { name: 'Python', icon: 'python.svg' },
            { name: 'Pandas', icon: 'pandas.svg' },
            { name: 'Matplotlib', icon: 'matplotlib.svg' }
        ],
        collaborators: [
            {
                name: 'John Doe',
                role: 'Data Scientist',
                linkedinUrl: 'https://linkedin.com/in/johndoe',
                image: 'john-doe.jpg'
            }
        ],
        additionalLinks: [
            {
                title: 'Project Demo',
                url: 'https://demo.example.com'
            }
        ]
    },
    // Add more projects here...
    {
        id: 'data-analysis',
        title: 'Data Analysis Project',
        description: 'Statistical analysis and visualization of large datasets',
        tags: ['Python', 'Pandas', 'Matplotlib'],
        image: 'placeholder.jpg',
        fullDescription: 'Detailed project description goes here...',
        githubUrl: 'https://github.com/username/project',
        linkedinUrl: 'https://linkedin.com/in/username/detail/project',
        presentationUrl: 'https://raw.githubusercontent.com/username/project/main/presentation.pdf',
        technologies: [
            { name: 'Python', icon: 'python.svg' },
            { name: 'Pandas', icon: 'pandas.svg' },
            { name: 'Matplotlib', icon: 'matplotlib.svg' }
        ],
        collaborators: [
            {
                name: 'John Doe',
                role: 'Data Scientist',
                linkedinUrl: 'https://linkedin.com/in/johndoe',
                image: 'john-doe.jpg'
            }
        ],
        additionalLinks: [
            {
                title: 'Project Demo',
                url: 'https://demo.example.com'
            }
        ]
    },
    // Add more projects here...
    {
        id: 'data-analysis',
        title: 'Data Analysis Project',
        description: 'Statistical analysis and visualization of large datasets',
        tags: ['Python', 'Pandas', 'Matplotlib'],
        image: 'placeholder.jpg',
        fullDescription: 'Detailed project description goes here...',
        githubUrl: 'https://github.com/username/project',
        linkedinUrl: 'https://linkedin.com/in/username/detail/project',
        presentationUrl: 'https://raw.githubusercontent.com/username/project/main/presentation.pdf',
        technologies: [
            { name: 'Python', icon: 'python.svg' },
            { name: 'Pandas', icon: 'pandas.svg' },
            { name: 'Matplotlib', icon: 'matplotlib.svg' }
        ],
        collaborators: [
            {
                name: 'John Doe',
                role: 'Data Scientist',
                linkedinUrl: 'https://linkedin.com/in/johndoe',
                image: 'john-doe.jpg'
            }
        ],
        additionalLinks: [
            {
                title: 'Project Demo',
                url: 'https://demo.example.com'
            }
        ]
    },
    // Add more projects here...
    {
        id: 'data-analysis',
        title: 'Data Analysis Project',
        description: 'Statistical analysis and visualization of large datasets',
        tags: ['Python', 'Pandas', 'Matplotlib'],
        image: 'placeholder.jpg',
        fullDescription: 'Detailed project description goes here...',
        githubUrl: 'https://github.com/username/project',
        linkedinUrl: 'https://linkedin.com/in/username/detail/project',
        presentationUrl: 'https://raw.githubusercontent.com/username/project/main/presentation.pdf',
        technologies: [
            { name: 'Python', icon: 'python.svg' },
            { name: 'Pandas', icon: 'pandas.svg' },
            { name: 'Matplotlib', icon: 'matplotlib.svg' }
        ],
        collaborators: [
            {
                name: 'John Doe',
                role: 'Data Scientist',
                linkedinUrl: 'https://linkedin.com/in/johndoe',
                image: 'john-doe.jpg'
            }
        ],
        additionalLinks: [
            {
                title: 'Project Demo',
                url: 'https://demo.example.com'
            }
        ]
    },
    // Add more projects here...
    {
        id: 'data-analysis',
        title: 'Data Analysis Project',
        description: 'Statistical analysis and visualization of large datasets',
        tags: ['Python', 'Pandas', 'Matplotlib'],
        image: 'placeholder.jpg',
        fullDescription: 'Detailed project description goes here...',
        githubUrl: 'https://github.com/username/project',
        linkedinUrl: 'https://linkedin.com/in/username/detail/project',
        presentationUrl: 'https://raw.githubusercontent.com/username/project/main/presentation.pdf',
        technologies: [
            { name: 'Python', icon: 'python.svg' },
            { name: 'Pandas', icon: 'pandas.svg' },
            { name: 'Matplotlib', icon: 'matplotlib.svg' }
        ],
        collaborators: [
            {
                name: 'John Doe',
                role: 'Data Scientist',
                linkedinUrl: 'https://linkedin.com/in/johndoe',
                image: 'john-doe.jpg'
            }
        ],
        additionalLinks: [
            {
                title: 'Project Demo',
                url: 'https://demo.example.com'
            }
        ]
    },
    // Add more projects here...
    {
        id: 'data-analysis',
        title: 'Data Analysis Project',
        description: 'Statistical analysis and visualization of large datasets',
        tags: ['Python', 'Pandas', 'Matplotlib'],
        image: 'placeholder.jpg',
        fullDescription: 'Detailed project description goes here...',
        githubUrl: 'https://github.com/username/project',
        linkedinUrl: 'https://linkedin.com/in/username/detail/project',
        presentationUrl: 'https://raw.githubusercontent.com/username/project/main/presentation.pdf',
        technologies: [
            { name: 'Python', icon: 'python.svg' },
            { name: 'Pandas', icon: 'pandas.svg' },
            { name: 'Matplotlib', icon: 'matplotlib.svg' }
        ],
        collaborators: [
            {
                name: 'John Doe',
                role: 'Data Scientist',
                linkedinUrl: 'https://linkedin.com/in/johndoe',
                image: 'john-doe.jpg'
            }
        ],
        additionalLinks: [
            {
                title: 'Project Demo',
                url: 'https://demo.example.com'
            }
        ]
    },
    // Add more projects here...
    {
        id: 'data-analysis',
        title: 'Data Analysis Project',
        description: 'Statistical analysis and visualization of large datasets',
        tags: ['Python', 'Pandas', 'Matplotlib'],
        image: 'placeholder.jpg',
        fullDescription: 'Detailed project description goes here...',
        githubUrl: 'https://github.com/username/project',
        linkedinUrl: 'https://linkedin.com/in/username/detail/project',
        presentationUrl: 'https://raw.githubusercontent.com/username/project/main/presentation.pdf',
        technologies: [
            { name: 'Python', icon: 'python.svg' },
            { name: 'Pandas', icon: 'pandas.svg' },
            { name: 'Matplotlib', icon: 'matplotlib.svg' }
        ],
        collaborators: [
            {
                name: 'John Doe',
                role: 'Data Scientist',
                linkedinUrl: 'https://linkedin.com/in/johndoe',
                image: 'john-doe.jpg'
            }
        ],
        additionalLinks: [
            {
                title: 'Project Demo',
                url: 'https://demo.example.com'
            }
        ]
    },
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
            <div class="placeholder-image"></div>
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' | ')}
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
