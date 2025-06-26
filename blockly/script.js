// Custom JavaScript for Portfolio Website 

document.addEventListener('DOMContentLoaded', function () {
  // About/Home toggle logic
  const aboutLink = document.getElementById('about-link');
  const homeLink = Array.from(document.querySelectorAll('a.nav-link')).find(l => l.textContent.trim().toLowerCase() === 'home');
  const aboutSection = document.getElementById('about');
  const heroSection = document.querySelector('.hero-section-custom');
  if (aboutLink && aboutSection && heroSection) {
    aboutLink.addEventListener('click', function(e) {
      e.preventDefault();
      aboutSection.style.display = 'block';
      aboutSection.style.setProperty('display', 'block', 'important');
      heroSection.style.display = 'none';
      heroSection.style.setProperty('display', 'none', 'important');
      console.log('About clicked: hero hidden, about shown');
    });
  }
  if (homeLink && aboutSection && heroSection) {
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      aboutSection.style.display = 'none';
      aboutSection.style.setProperty('display', 'none', 'important');
      heroSection.style.display = 'flex';
      heroSection.style.setProperty('display', 'flex', 'important');
      console.log('Home clicked: about hidden, hero shown');
    });
  }

  // Smooth scrolling for other navbar links
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const text = this.textContent.trim().toLowerCase();
      if (href && href.startsWith('#') && text !== 'about' && text !== 'home') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70, // adjust for navbar height
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Contact form submission handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
}); 