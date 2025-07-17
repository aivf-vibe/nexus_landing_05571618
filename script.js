// Sample data for models
const sampleModels = [
    {
        name: "Llama 3.1 70B",
        description: "Meta's flagship model with exceptional reasoning and code generation capabilities",
        rating: 4.8,
        reviews: 1247,
        usage: "1.2B",
        priceRange: "₹0.8-1.2",
        contextLength: "128k",
        providers: ["OpenRouter", "Together", "Replicate", "Groq"]
    },
    {
        name: "Claude 3.5 Sonnet",
        description: "Anthropic's most capable model for complex reasoning and analysis",
        rating: 4.9,
        reviews: 892,
        usage: "890M",
        priceRange: "₹2.4-3.0",
        contextLength: "200k",
        providers: ["Anthropic", "AWS Bedrock", "OpenRouter"]
    },
    {
        name: "GPT-4 Turbo",
        description: "OpenAI's latest model with improved efficiency and reduced costs",
        rating: 4.7,
        reviews: 2156,
        usage: "2.1B",
        priceRange: "₹0.8-1.5",
        contextLength: "128k",
        providers: ["OpenAI", "Azure", "OpenRouter"]
    },
    {
        name: "Mistral 7B Instruct",
        description: "Efficient open-source model optimized for instruction following",
        rating: 4.5,
        reviews: 634,
        usage: "450M",
        priceRange: "₹0.1-0.3",
        contextLength: "32k",
        providers: ["Mistral AI", "HuggingFace", "Together"]
    },
    {
        name: "Gemini Pro 1.5",
        description: "Google's multimodal model with excellent vision and reasoning capabilities",
        rating: 4.6,
        reviews: 789,
        usage: "670M",
        priceRange: "₹0.5-0.9",
        contextLength: "1M",
        providers: ["Google AI", "Vertex AI", "OpenRouter"]
    },
    {
        name: "CodeLlama 34B",
        description: "Specialized model for code generation and programming tasks",
        rating: 4.4,
        reviews: 445,
        usage: "320M",
        priceRange: "₹0.6-1.0",
        contextLength: "100k",
        providers: ["Meta", "Together", "Replicate"]
    }
];

// Sample rankings data
const rankingsData = {
    usage: [
        { name: "GPT-4 Turbo", description: "Most used model for general tasks", usage: "2.1B tokens", rating: 4.7 },
        { name: "Llama 3.1 70B", description: "Popular for open-source applications", usage: "1.2B tokens", rating: 4.8 },
        { name: "Claude 3.5 Sonnet", description: "Preferred for complex reasoning", usage: "890M tokens", rating: 4.9 },
        { name: "Gemini Pro 1.5", description: "Growing usage in multimodal tasks", usage: "670M tokens", rating: 4.6 },
        { name: "Mistral 7B Instruct", description: "Cost-effective choice", usage: "450M tokens", rating: 4.5 }
    ],
    rating: [
        { name: "Claude 3.5 Sonnet", description: "Highest rated for accuracy", usage: "890M tokens", rating: 4.9 },
        { name: "Llama 3.1 70B", description: "Excellent open-source performance", usage: "1.2B tokens", rating: 4.8 },
        { name: "GPT-4 Turbo", description: "Reliable and versatile", usage: "2.1B tokens", rating: 4.7 },
        { name: "Gemini Pro 1.5", description: "Strong multimodal capabilities", usage: "670M tokens", rating: 4.6 },
        { name: "Mistral 7B Instruct", description: "Great value proposition", usage: "450M tokens", rating: 4.5 }
    ],
    labs: [
        { name: "CodeLlama 34B", description: "Research favorite for code tasks", usage: "320M tokens", rating: 4.4 },
        { name: "Llama 3.1 70B", description: "Experimental applications", usage: "1.2B tokens", rating: 4.8 },
        { name: "Mistral 7B Instruct", description: "Efficient research tool", usage: "450M tokens", rating: 4.5 },
        { name: "Claude 3.5 Sonnet", description: "Academic research choice", usage: "890M tokens", rating: 4.9 },
        { name: "Gemini Pro 1.5", description: "Vision research applications", usage: "670M tokens", rating: 4.6 }
    ],
    apps: [
        { name: "GPT-4 Turbo", description: "Most deployed in production", usage: "2.1B tokens", rating: 4.7 },
        { name: "Llama 3.1 70B", description: "Popular in open-source apps", usage: "1.2B tokens", rating: 4.8 },
        { name: "Gemini Pro 1.5", description: "Growing in mobile apps", usage: "670M tokens", rating: 4.6 },
        { name: "Claude 3.5 Sonnet", description: "Enterprise applications", usage: "890M tokens", rating: 4.9 },
        { name: "Mistral 7B Instruct", description: "Startup favorite", usage: "450M tokens", rating: 4.5 }
    ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('StartFlow landing page loaded');
    initializeModels();
    initializeRankings();
    setupEventListeners();
    setupScrollEffects();
});

// Initialize models grid
function initializeModels() {
    console.log('Initializing models grid');
    const modelsGrid = document.getElementById('modelsGrid');
    if (!modelsGrid) return;

    modelsGrid.innerHTML = '';
    
    sampleModels.forEach(model => {
        const modelCard = createModelCard(model);
        modelsGrid.appendChild(modelCard);
    });
}

// Create model card element
function createModelCard(model) {
    const card = document.createElement('div');
    card.className = 'model-card fade-in-up';
    
    const stars = '★'.repeat(Math.floor(model.rating)) + '☆'.repeat(5 - Math.floor(model.rating));
    
    card.innerHTML = `
        <div class="model-header">
            <div>
                <div class="model-name">${model.name}</div>
                <div class="model-rating">
                    <span>${stars}</span>
                    <span>${model.rating}</span>
                    <span>(${model.reviews})</span>
                </div>
            </div>
        </div>
        <div class="model-description">${model.description}</div>
        <div class="model-stats">
            <div class="stat">
                <div class="stat-value">${model.usage}</div>
                <div class="stat-label">Tokens Used</div>
            </div>
            <div class="stat">
                <div class="stat-value">${model.priceRange}</div>
                <div class="stat-label">Per M Tokens</div>
            </div>
        </div>
        <div class="model-providers">
            ${model.providers.map(provider => `<span class="provider-tag">${provider}</span>`).join('')}
        </div>
    `;
    
    card.addEventListener('click', () => {
        console.log(`Clicked on model: ${model.name}`);
        // In a real app, this would navigate to the individual model page
        alert(`Navigate to ${model.name} details page`);
    });
    
    return card;
}

// Initialize rankings
function initializeRankings() {
    console.log('Initializing rankings');
    showRanking('usage');
}

// Show specific ranking
function showRanking(type) {
    console.log(`Showing ranking: ${type}`);
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const rankingsContent = document.getElementById('rankingsContent');
    if (!rankingsContent) return;
    
    const data = rankingsData[type] || [];
    
    rankingsContent.innerHTML = data.map((item, index) => `
        <div class="ranking-item">
            <div class="ranking-position">${index + 1}</div>
            <div class="ranking-info">
                <div class="ranking-name">${item.name}</div>
                <div class="ranking-description">${item.description}</div>
            </div>
            <div class="ranking-stats">
                <div class="ranking-stat">
                    <div class="ranking-stat-value">${item.usage}</div>
                    <div class="ranking-stat-label">Usage</div>
                </div>
                <div class="ranking-stat">
                    <div class="ranking-stat-value">${item.rating}</div>
                    <div class="ranking-stat-label">Rating</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('modelSearch');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Filter functionality
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', handleFilter);
    });
    
    // FAQ toggle
    setupFAQToggle();
}

// Handle search
function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    console.log(`Searching for: ${query}`);
    
    const filteredModels = sampleModels.filter(model => 
        model.name.toLowerCase().includes(query) ||
        model.description.toLowerCase().includes(query) ||
        model.providers.some(provider => provider.toLowerCase().includes(query))
    );
    
    updateModelsGrid(filteredModels);
}

// Handle filter
function handleFilter(event) {
    const filterType = event.target.className;
    const filterValue = event.target.value;
    console.log(`Filtering by ${filterType}: ${filterValue}`);
    
    // In a real app, this would apply the filter
    // For now, just log the action
}

// Update models grid with filtered results
function updateModelsGrid(models) {
    const modelsGrid = document.getElementById('modelsGrid');
    if (!modelsGrid) return;
    
    modelsGrid.innerHTML = '';
    
    if (models.length === 0) {
        modelsGrid.innerHTML = '<div class="no-results">No models found matching your search.</div>';
        return;
    }
    
    models.forEach(model => {
        const modelCard = createModelCard(model);
        modelsGrid.appendChild(modelCard);
    });
}

// Setup FAQ toggle functionality
function setupFAQToggle() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Toggle FAQ
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Scroll to section
function scrollToSection(sectionId) {
    console.log(`Scrolling to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        // For sections that don't exist yet (like signup), show alert
        alert(`Navigate to ${sectionId} page`);
    }
}

// View all models
function viewAllModels() {
    console.log('View all models clicked');
    alert('Navigate to Models List Page');
}

// Copy code functionality
function copyCode() {
    const codeBlock = document.querySelector('.code-block code');
    if (codeBlock) {
        const text = codeBlock.textContent;
        navigator.clipboard.writeText(text).then(() => {
            console.log('Code copied to clipboard');
            
            // Show feedback
            const copyBtn = document.querySelector('.copy-btn');
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            copyBtn.style.color = '#10b981';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.style.color = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy code:', err);
        });
    }
}

// Setup scroll effects
function setupScrollEffects() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .model-card, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading states for dynamic content
function showLoading(element) {
    element.classList.add('loading');
}

function hideLoading(element) {
    element.classList.remove('loading');
}

// Error handling for API calls (placeholder)
function handleError(error) {
    console.error('Error:', error);
    // In a real app, show user-friendly error messages
}

// Initialize tooltips (if needed)
function initializeTooltips() {
    // Placeholder for tooltip initialization
    console.log('Tooltips initialized');
}

// Performance monitoring
function logPerformance() {
    if (window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
}

// Call performance logging after page load
window.addEventListener('load', logPerformance);

console.log('StartFlow script loaded successfully');