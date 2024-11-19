// script.js

const waves = document.querySelectorAll('.wave');

// Trigger the animation after a delay
setTimeout(() => {
  waves.forEach(wave => {
    wave.style.animationPlayState = 'running';
  });
}, 2000); // Adjust the delay as needed
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const countdown = () => {
    const now = new Date().getTime();
    const targetDate = new Date('January 1, 2025 00:00:00').getTime(); // Replace with your desired target date

    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    // Dynamic background color change
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
};

setInterval(countdown, 1000);