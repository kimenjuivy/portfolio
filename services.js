document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
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
  