document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
      button.addEventListener('click', function() {
        const details = this.nextElementSibling;
        if (details.style.display === 'block') {
          details.style.display = 'none';
          this.textContent = 'Show Details';
        } else {
          details.style.display = 'block';
          this.textContent = 'Hide Details';
        }
      });
    });
  });
  