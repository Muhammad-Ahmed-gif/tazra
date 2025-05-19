AOS.init({
  duration: 3000,
  once: true,
});

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

if (menuBtn && navLinks && hamburger) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// FAQ Toggle Functionality (simplified for brevity)
document.querySelectorAll('.custom').forEach(item => {
  const toggleButton = item.querySelector('.v');
  const hiddenContent = item.querySelector('.hidden');
  if (toggleButton && hiddenContent) {
    toggleButton.addEventListener('click', () => {
      hiddenContent.style.display = hiddenContent.style.display === 'block' ? 'none' : 'block';
      toggleButton.classList.toggle('rotate');
    });
  }
});


// Offerings-Js

     AOS.init({
      duration: 3000,
      once: true,
    });

   
    const items = document.querySelectorAll('.item');
const sections = document.querySelectorAll('.section');

// Function to show the selected section
function showSection(sectionId) {
  sections.forEach(section => section.classList.remove('active'));
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('active');

    // Reset buttons & texts
    const buttons = selectedSection.querySelectorAll('.chat');
    const texts = selectedSection.querySelectorAll('.text');

    buttons.forEach(btn => btn.classList.remove('active-btn'));
    texts.forEach(text => text.classList.remove('active-text'));

    // Show first button's text by default
    if (buttons.length > 0 && texts.length > 0) {
      buttons[0].classList.add('active-btn');
      texts[0].classList.add('active-text');
    }
  }
}

// Add click event listeners to all items
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    showSection(`section${index + 1}`);
  });
});

// Add button functionality inside sections
sections.forEach(section => {
  const buttons = section.querySelectorAll('.chat');
  const texts = section.querySelectorAll('.text');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active-btn'));
      texts.forEach(text => text.classList.remove('active-text'));

      button.classList.add('active-btn');
      texts[index].classList.add('active-text');
    });
  });

  // Ensure the first text is visible by default in each section
  if (section.classList.contains('active')) {
    if (buttons.length > 0 && texts.length > 0) {
      buttons[0].classList.add('active-btn');
      texts[0].classList.add('active-text');
    }
  }
});