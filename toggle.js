// Navbar Atas (Arrow)
function toggleDropdown(id, button) {
  const dropdown = document.getElementById(id);
  const arrow = button.querySelector('.arrow');
  const allDropdowns = document.querySelectorAll('.dropdown');
  const allArrows = document.querySelectorAll('.arrow');

  allDropdowns.forEach(d => {
    if (d.querySelector('.dropdown-content') !== dropdown) {
      d.classList.remove('open');
    }
  });

  allArrows.forEach(a => {
    if (a !== arrow) a.classList.remove('rotate');
  });

  const parentDropdown = button.closest('.dropdown');
  const isOpen = parentDropdown.classList.toggle('open');
  if (isOpen) {
    arrow.classList.add('rotate');
  } else {
    arrow.classList.remove('rotate');
  }
}

// Dropdown
document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.arrow').forEach(a => a.classList.remove('rotate'));
  }
});

// Side-Bar & MB
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.getElementById('hamburgerButton');
  const sideMenu = document.getElementById('sideMenu');
  const sideBarLogo = document.getElementById('sideBarLogo');
  const topBarLogo = document.getElementById('topBarLogo');

  function toggleMenu() {
    sideMenu.classList.toggle('open');
  }

  hamburgerButton.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  function handleLogoClick(e) {
    if (sideMenu && sideMenu.classList.contains('open')) {
      sideMenu.classList.remove('open');
    }
  }

  topBarLogo?.addEventListener('click', handleLogoClick);
  sideBarLogo?.addEventListener('click', handleLogoClick);
});

// Close Right-Bar
document.addEventListener('click', function(e) {
  if (sideMenu.classList.contains('open') && !sideMenu.contains(e.target) && e.target !== hamburgerButton) {
    sideMenu.classList.remove('open');
  }
});

// Contact Features
document.querySelectorAll('.faq-btn').forEach(btn => 
  { 
    btn.addEventListener('click', () => { 
      const content = btn.nextElementSibling; const icon = btn.querySelector('svg'); content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px'; icon.classList.toggle('rotate-180'); 
    }); 
  }); 

  function toggleSidebarDropdown(button) {
    const dropdown = button.parentElement;
    const arrow = button.querySelector('.arrow');

    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });
    document.querySelectorAll('.arrow').forEach(a => {
      if (a !== arrow) a.classList.remove('rotate');
    });

    const isOpen = dropdown.classList.toggle('open');
    arrow.classList.toggle('rotate', isOpen);
  }

// Tutup dropdown saat klik di luar
document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.arrow').forEach(a => a.classList.remove('rotate'));
  }
});

// Main Content Animation
const reveals = document.querySelectorAll('.reveal');
      
window.addEventListener('scroll', () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('opacity-100', 'translate-y-0');
      el.classList.remove('opacity-0', 'translate-y-10');
    }
  });
});

//scroll navbar
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {

    navbar.style.transform = 'translateY(-100%)';
  } else {

    navbar.style.transform = 'translateY(0)';
  }
  lastScrollY = window.scrollY;
});

// Video 
const video = document.getElementById("bgVideo");
video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
