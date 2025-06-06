// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 6,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#3b82f6"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 6
        }
      },
      "opacity": {
        "value": 0.05,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.01,
          "sync": false
        }
      },
      "size": {
        "value": 160,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 8,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false
  });

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
      });
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });

  // Active navigation link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function() {
      let current = '';
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollY >= (sectionTop - 200)) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
              link.classList.add('active');
          }
      });
  });

  // Typewriter effect
  const typewriterText = document.getElementById('typewriter');
  const texts = [
      'Embedded Systems Developer',
      'Analog Circuit Designer',
      'Machine Learning Enthusiast',
      'Microcontroller Programmer',
      'Hardware-Software Integrator',
      'Robotics & Automation Engineer'
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function typeWriter() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
          typewriterText.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          typeSpeed = 50;
      } else {
          typewriterText.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentText.length) {
          typeSpeed = 2000;
          isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          typeSpeed = 500;
      }

      setTimeout(typeWriter, typeSpeed);
  }

  typeWriter();

  // Intersection Observer for animations
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              
              // Animate skill bars
              if (entry.target.classList.contains('skill-category')) {
                  const skillBars = entry.target.querySelectorAll('.skill-progress');
                  skillBars.forEach(bar => {
                      const width = bar.style.width;
                      bar.style.width = '0%';
                      setTimeout(() => {
                          bar.style.width = width;
                      }, 200);
                  });
              }

              // Animate stats
              if (entry.target.classList.contains('skills-stats')) {
                  const statNumbers = entry.target.querySelectorAll('.stat-number');
                  statNumbers.forEach(stat => {
                      const finalNumber = parseInt(stat.textContent);
                      let currentNumber = 0;
                      const increment = finalNumber / 50;
                      
                      const timer = setInterval(() => {
                          currentNumber += increment;
                          if (currentNumber >= finalNumber) {
                              stat.textContent = finalNumber + '+';
                              clearInterval(timer);
                          } else {
                              stat.textContent = Math.floor(currentNumber) + '+';
                          }
                      }, 30);
                  });
              }
          }
      });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .skill-category, .skills-stats').forEach(el => {
      observer.observe(el);
  });

  // Add animation classes to elements
  document.querySelectorAll('.section-header').forEach(el => {
      el.classList.add('fade-in');
  });

  document.querySelectorAll('.project-card').forEach((el, index) => {
      el.classList.add('fade-in');
      el.style.animationDelay = `${index * 0.1}s`;
  });

  document.querySelectorAll('.timeline-item').forEach((el, index) => {
      if (index % 2 === 0) {
          el.classList.add('slide-in-left');
      } else {
          el.classList.add('slide-in-right');
      }
  });

  document.querySelectorAll('.highlight-item').forEach((el, index) => {
      el.classList.add('fade-in');
      el.style.animationDelay = `${index * 0.2}s`;
  });

  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');

      // Simple validation
      if (!name || !email || !subject || !message) {
          alert('Please fill in all fields.');
          return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          return;
      }

      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitButton.disabled = true;

      setTimeout(() => {
          alert('Thank you for your message! I\'ll get back to you soon.');
          contactForm.reset();
          submitButton.innerHTML = originalText;
          submitButton.disabled = false;
      }, 2000);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              const offsetTop = target.offsetTop - 70; // Account for fixed navbar
              window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Parallax effect for hero shapes
  window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const shapes = document.querySelectorAll('.hero-shape');
      
      shapes.forEach((shape, index) => {
          const speed = 0.5 + (index * 0.1);
          const yPos = -(scrolled * speed);
          shape.style.transform = `translateY(${yPos}px)`;
      });
  });

  // Add hover effects to project cards
  document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
      });
  });

  // Add loading animation to page
  window.addEventListener('load', function() {
      document.body.classList.add('loaded');
      
      // Animate hero content
      const heroContent = document.querySelector('.hero-content');
      heroContent.style.opacity = '0';
      heroContent.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
          heroContent.style.transition = 'all 1s ease';
          heroContent.style.opacity = '1';
          heroContent.style.transform = 'translateY(0)';
      }, 300);
  });

  // Add scroll progress indicator
  const scrollProgress = document.createElement('div');
  scrollProgress.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      z-index: 9999;
      transition: width 0.1s ease;
  `;
  document.body.appendChild(scrollProgress);

  window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + '%';
  });

  // Add click effect to buttons
  document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', function(e) {
          const ripple = document.createElement('span');
          const rect = this.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;
          
          ripple.style.cssText = `
              position: absolute;
              width: ${size}px;
              height: ${size}px;
              left: ${x}px;
              top: ${y}px;
              background: rgba(255, 255, 255, 0.3);
              border-radius: 50%;
              transform: scale(0);
              animation: ripple 0.6s ease-out;
              pointer-events: none;
          `;
          
          this.style.position = 'relative';
          this.style.overflow = 'hidden';
          this.appendChild(ripple);
          
          setTimeout(() => {
              ripple.remove();
          }, 600);
      });
  });

  // Add ripple animation CSS
  const style = document.createElement('style');
  style.textContent = `
      @keyframes ripple {
          to {
              transform: scale(2);
              opacity: 0;
          }
      }
  `;
  document.head.appendChild(style);

  // Custom Cursor & Magnetic Effect
  const cursor = document.querySelector('.custom-cursor');
  const ring = document.querySelector('.cursor-ring');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  // Move cursor and ring
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateRing() {
    // Smooth follow
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Magnetic effect
  function addMagneticEffect(selector) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('mouseenter', e => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        ring.classList.add('magnetic');
        ring.style.left = centerX + 'px';
        ring.style.top = centerY + 'px';
      });
      el.addEventListener('mouseleave', e => {
        ring.classList.remove('magnetic');
      });
    });
  }
  addMagneticEffect('.btn');
  addMagneticEffect('.project-card');

  // Cursor ring scroll animation
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    ring.classList.add('scrolling');
    cursor.classList.add('scrolling');
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      ring.classList.remove('scrolling');
      cursor.classList.remove('scrolling');
    }, 300);
  });
});

// Utility function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add performance optimization for scroll events
let ticking = false;

function updateScrollEffects() {
  // Update navbar
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }

  // Update progress bar
  const scrollProgress = document.querySelector('div[style*="position: fixed"]');
  if (scrollProgress) {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + '%';
  }

  ticking = false;
}

function requestScrollUpdate() {
  if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
  }
}

window.addEventListener('scroll', requestScrollUpdate);