
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;


  setTimeout(() => {
    loader.classList.add('hidden');
  
    observeElements();
  }, 900);
});



const profileImg = document.getElementById('profileImg');
const profilePlaceholder = document.getElementById('profilePlaceholder');

if (profileImg && profilePlaceholder) {
  profileImg.addEventListener('error', () => {
    profileImg.style.display = 'none';
    profilePlaceholder.style.display = 'flex';
  });


  if (!profileImg.complete || profileImg.naturalWidth === 0) {
    profileImg.dispatchEvent(new Event('error'));
  }
}



const typingEl = document.getElementById('typingText');
const roles = [
  'Python Developer',
  'Software Developer',
  'Data Analyst',
  'Machine Learning Engineer',
  'AI Engineer'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 120;
let deletingDelay = 65;
let pauseDelay = 1800;

function typeWriter() {
  if (!typingEl) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeWriter, 400);
      return;
    }
    setTimeout(typeWriter, deletingDelay);
  } else {
    typingEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeWriter, pauseDelay);
      return;
    }
    setTimeout(typeWriter, typingDelay);
  }
}


setTimeout(typeWriter, 1000);



const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateNavbar() {
  if (!navbar) return;
  const scrolled = window.scrollY > 40;
  navbar.classList.toggle('scrolled', scrolled);
}

function updateActiveNavLink() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', () => {
  updateNavbar();
  updateActiveNavLink();
}, { passive: true });


updateNavbar();
updateActiveNavLink();



const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navLinks');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });


  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });


  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});



function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {

        const parent = entry.target.parentElement;
        const siblings = Array.from(parent.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right'));
        const idx = siblings.indexOf(entry.target);
        const delay = idx * 80; 

        setTimeout(() => {
          entry.target.classList.add('visible');

          
          const bars = entry.target.querySelectorAll('.skill-progress[data-width]');
          bars.forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
          });

       
          const counters = entry.target.querySelectorAll('[data-count]');
          counters.forEach(counter => animateCounter(counter));
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
  });
}


function animateCounter(el) {
  const target = parseFloat(el.dataset.count);
  const isDecimal = el.dataset.decimal === 'true';
  const duration = 2000; 
  const startTime = performance.now();
  const startVal = 0;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
   
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = startVal + (target - startVal) * eased;

    el.textContent = isDecimal ? current.toFixed(2) : Math.floor(current).toString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = isDecimal ? target.toFixed(2) : target.toString();
    }
  }

  requestAnimationFrame(update);
}



window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.skill-progress[data-width]').forEach(bar => {
      const card = bar.closest('.skill-category');
      if (card) {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          bar.style.width = bar.dataset.width + '%';
        }
      }
    });
  }, 1100);
});



const cursorGlow = document.getElementById('cursorGlow');

if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
} else if (cursorGlow) {
  cursorGlow.style.display = 'none';
}



const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}



const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}



const navLogo = document.querySelector('.nav-logo');
if (navLogo) {
  navLogo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
