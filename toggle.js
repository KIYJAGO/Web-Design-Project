// Navbar Atas
function toggleDropdown(id, button) {
const dropdown = document.getElementById(id);
const allDropdowns = document.querySelectorAll('.dropdown-content');
const allArrows = document.querySelectorAll('.arrow');

  allDropdowns.forEach(d => {
    if (d !== dropdown) d.style.display = 'none';
  });

  allArrows.forEach(a => {
    if (a !== button.querySelector('.arrow')) a.textContent = '▼';
  });

  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
    button.querySelector('.arrow').textContent = '▼';
  } else {
    dropdown.style.display = 'block';
    button.querySelector('.arrow').textContent = '▲';
  }
}

// Close Dropdwown
document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(d => d.style.display = 'none');
    document.querySelectorAll('.arrow').forEach(a => a.textContent = '▼');
  }
});

// Side-Bar
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.getElementById('hamburgerButton');
  const sideMenu = document.getElementById('sideMenu');
  const logoLink = document.getElementById('logoLink');
    
    function toggleMenu() {
      sideMenu.classList.toggle('open');
    }
    // Automatic Close
    hamburgerButton.addEventListener('click', function(e) {
      e.stopPropagation(); 
      toggleMenu();
    });
  
    logoLink.addEventListener('click', function(e) {
      e.preventDefault();
      if (sideMenu.classList.contains('open')) {
        sideMenu.classList.remove('open');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Close Right-Bar
document.addEventListener('click', function(e) {
  if (sideMenu.classList.contains('open') && !sideMenu.contains(e.target) && e.target !== hamburgerButton) {
    sideMenu.classList.remove('open');
  }
});
  
// Logo Right-Bar
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logoLink");

  logo.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

//