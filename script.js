// Reveal on scroll
const sections = document.querySelectorAll('.hidden');
const scrollBtn = document.querySelector('.scroll-top');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});

// Scroll-to-top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

// Popup image
function showPopup() {
  document.getElementById('popup').style.display = 'flex';
}
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
