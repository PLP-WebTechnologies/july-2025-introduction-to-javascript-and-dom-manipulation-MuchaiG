// Show an alert when a navigation link is clicked
function setupNavAlerts() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            alert(`You clicked: ${this.textContent}`);
        });
    });
}

// Highlight a card on hover and remove highlight on mouse leave
function setupCardHighlights() {
    // Select all card elements
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ffe082'; // Highlight color
            this.style.cursor = 'pointer';
        });
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = ''; // Reset color
        });
    });
}

// Example: Toggle sidebar visibility with a button (demonstrates variables, conditionals, and DOM methods)
function setupSidebarToggle() {
    // Create a toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle Sidebar';
    toggleBtn.style.margin = '1em 0';
    // Insert the button before the main content
    const mainArticle = document.querySelector('.main-article');
    mainArticle.parentNode.insertBefore(toggleBtn, mainArticle);

    // Get the sidebar element
    const sidebar = document.querySelector('.sidebar');
    // Track sidebar state
    let sidebarVisible = true;

    // Add click event to toggle sidebar
    toggleBtn.addEventListener('click', function() {
        sidebarVisible = !sidebarVisible; // Toggle state
        sidebar.style.display = sidebarVisible ? '' : 'none';
        toggleBtn.textContent = sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar';
    });
}

// Initialize all interactive features after DOM is loaded
function init() {
    setupNavAlerts();
    setupCardHighlights();
    setupSidebarToggle();
}

// Run init when DOM is ready
document.addEventListener('DOMContentLoaded', init);