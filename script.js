// Show alert when a navigation link is clicked
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        alert(`You clicked: ${this.textContent}`);
    });
});

// Highlight card on hover
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#ffe082';
        this.style.cursor = 'pointer';
    });
    card.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});