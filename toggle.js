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