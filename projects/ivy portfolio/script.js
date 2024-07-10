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
  
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
    });
  
    // Animate text on scroll
    const animateText = () => {
      const elements = document.querySelectorAll('.animate-text');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', animateText);
    animateText(); // Initial check on page load
  
    // Animate skill bars
    const animateSkillBars = () => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    };
  
    // Intersection Observer for skill bars animation
    const skillsSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(skillsSection);
  
    // Counter animation for stats
    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-target'));
      let count = 0;
      const increment = target / 200; // Adjust for animation speed
  
      const updateCount = () => {
        if (count < target) {
          count += increment;
          el.innerText = Math.ceil(count);
          setTimeout(updateCount, 10);
        } else {
          el.innerText = target;
        }
      };
  
      updateCount();
    };
  
    // Intersection Observer for stats animation
    const statsSection = document.querySelector('.about-stats');
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.stat-number').forEach(animateCounter);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    statsObserver.observe(statsSection);
  
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add your form submission logic here
      // For example, you could use fetch to send the form data to your server
      console.log('Form submitted');
      contactForm.reset();
    });
  });