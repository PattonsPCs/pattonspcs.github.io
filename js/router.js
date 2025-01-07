// Router configuration
const routes = {
    '/': '/pages/home.html',
    '/services': '/pages/services.html',
    '/scheduling': '/pages/scheduling.html',
    '/connect': '/pages/connect.html',
    '/reviews': '/pages/reviews.html'
};

// Handle navigation
async function handleLocation() {
    const path = window.location.pathname;
    const route = routes[path] || routes['/'];
    const content = await fetch(route).then(response => response.text());
    document.getElementById('content').innerHTML = content;
    
    // Update page title
    const titles = {
        '/': 'Patton\'s PC Clinic - Home',
        '/services': 'Our Services - Patton\'s PC Clinic',
        '/scheduling': 'Schedule a Repair - Patton\'s PC Clinic',
        '/connect': 'Connect With Us - Patton\'s PC Clinic',
        '/reviews': 'Client Reviews - Patton\'s PC Clinic'
    };
    document.title = titles[path] || titles['/'];
}

// Handle navigation without page reload
window.addEventListener('popstate', handleLocation);

// Handle clicks on navigation links
document.addEventListener('click', e => {
    if (e.target.matches('nav a')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        window.history.pushState({}, '', href);
        handleLocation();
    }
});

// Initial load
window.addEventListener('load', () => {
    handleLocation();
});
