document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.desktop-nav');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

 
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }

  
  const skillBars = document.querySelectorAll('.skill-progress');
  const animateSkillBars = () => {
    skillBars.forEach(bar => {
      const barTop = bar.getBoundingClientRect().top;
      if (barTop < window.innerHeight - 50) {
        bar.style.width = bar.getAttribute('data-skill') + '%';
      }
    });
  };

  window.addEventListener('scroll', animateSkillBars);

 
  const mainTitle = document.querySelector('.main-title');
  const text = mainTitle.textContent;
  mainTitle.textContent = '';
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      mainTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  typeWriter();

 
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
  });


const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = contactForm.elements['name'].value;
  const email = contactForm.elements['email'].value;
  const message = contactForm.elements['message'].value;
  
  const mailtoLink = `mailto:kimenjuivy@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  
  window.location.href = mailtoLink;
  

  contactForm.reset();
  
  
  alert('Thank you for your message. Your default email client should now open with a pre-filled email to kimenjuivy@gmail.com');
});

  
  const lazyImages = document.querySelectorAll('img[data-src]');
  const lazyLoad = (target) => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          observer.disconnect();
        }
      });
    });
    io.observe(target);
  };
  lazyImages.forEach(lazyLoad);
});