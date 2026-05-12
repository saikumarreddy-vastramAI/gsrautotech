document.addEventListener('DOMContentLoaded', () => {

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Mobile menu
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileNav = document.querySelector('.navbar__mobile');
  hamburger?.addEventListener('click', () => {
    const isOpen = mobileNav?.classList.toggle('open');
    const bars = hamburger.querySelectorAll('span');
    if (isOpen) {
      bars[0].style.transform = 'translateY(7px) rotate(45deg)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    }
  });

  // Close mobile nav on link click
  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger?.querySelectorAll('span').forEach(b => {
        b.style.transform = '';
        b.style.opacity = '';
      });
    });
  });

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Smooth scroll with navbar offset
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });
  });

  // Contact form — Formspree AJAX submission
  const contactForm = document.querySelector('.contact-form');
  contactForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = 'var(--color-success)';
        this.reset();
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
          btn.style.background = '';
        }, 3000);
      } else {
        btn.textContent = 'Error — try again';
        btn.disabled = false;
      }
    }).catch(() => {
      btn.textContent = 'Error — try again';
      btn.disabled = false;
    });
  });

  // Process line animation on scroll
  const processSteps = document.getElementById('processSteps');
  if (processSteps) {
    new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) processSteps.classList.add('line-animate');
      });
    }, { threshold: 0.3 }).observe(processSteps);
  }

  // Typing animation in hero
  const typedEl = document.getElementById('typedText');
  if (typedEl) {
    const words = ['Vehicle', 'Standard', 'Stage', 'System', 'ECU'];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let pause = false;

    function type() {
      const current = words[wordIndex];

      if (pause) {
        setTimeout(type, 1500);
        pause = false;
        return;
      }

      if (!deleting) {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          pause = true;
          deleting = true;
          setTimeout(type, 1500);
          return;
        }
        setTimeout(type, 80);
      } else {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 300);
          return;
        }
        setTimeout(type, 40);
      }
    }

    setTimeout(type, 1000);
  }

});