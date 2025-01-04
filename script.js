// Burger Menu Toggle
const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showSlide(index) {
  if (index < 0) currentSlide = slides.length - 1;
  else if (index >= slides.length) currentSlide = 0;
  else currentSlide = index;

  document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

// Countdown Timer
const countdownDate = new Date('Dec 31, 2025 23:59:59').getTime();
const daysElem = document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElem.textContent = days;
  hoursElem.textContent = hours;
  minutesElem.textContent = minutes;
  secondsElem.textContent = seconds;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countdown-section').innerHTML = 'Happy New Year!';
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Scroll to Top Button
const btnUp = document.getElementById('btn-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    btnUp.classList.add('visible');
  } else {
    btnUp.classList.remove('visible');
  }
});

btnUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

function openModal() {
  modal.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
