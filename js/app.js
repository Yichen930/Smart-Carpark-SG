// Shared app functionality
const App = {
    // Navigation helpers
    navigateTo(page, params = {}) {
        const queryString = new URLSearchParams(params).toString();
        const url = queryString ? `${page}?${queryString}` : page;
        window.location.href = url;
    },
    
    // Get URL parameters
    getUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const result = {};
        for (const [key, value] of params) {
            result[key] = value;
        }
        return result;
    },
    
    // Show error message
    showError(element, message) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        if (element) {
            element.textContent = message;
            element.classList.remove('hidden');
            element.classList.add('block');
        }
    },
    
    // Hide error message
    hideError(element) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        if (element) {
            element.classList.add('hidden');
            element.classList.remove('block');
        }
    },
    
    // Format time
    formatTime(minutes) {
        if (minutes < 60) return `${minutes} mins`;
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    },
    
    // Simulate route navigation
    simulateRoute(destinationId) {
        // Store active route in sessionStorage
        sessionStorage.setItem('activeRoute', JSON.stringify({
            destinationId,
            startTime: Date.now()
        }));
    },
    
    // Check for re-recommendation trigger
    checkReRecommendation() {
        const activeRoute = sessionStorage.getItem('activeRoute');
        if (activeRoute) {
            const route = JSON.parse(activeRoute);
            const elapsed = Date.now() - route.startTime;
            // Trigger after 5 seconds for demo
            if (elapsed > 5000) {
                return true;
            }
        }
        return false;
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add active state to navigation
    const currentPage = window.location.pathname.split('/').pop() || 'search.html';
    const navLinks = document.querySelectorAll(`[data-page="${currentPage}"]`);
    navLinks.forEach(link => {
        link.classList.add('text-primary');
        link.classList.remove('text-slate-400');
    });
});
