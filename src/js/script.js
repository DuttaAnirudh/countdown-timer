'use strict';

// VARIABLES
const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

// Pre-set
const init = function () {
  daysEl.textContent = '';
  hoursEl.textContent = '';
  minutesEl.textContent = '';
  secondsEl.textContent = '';
};
init();

// New Year Date & Time
const newYearDate = new Date(2025, 0, 1).getTime();

const startLogoutTimer = setInterval(function () {
  // Current Time
  const currentDate = new Date().getTime();

  // Set time to time remaining between current time & new year
  let time = newYearDate - currentDate;

  // In each call, print the remaining time to UI
  daysEl.textContent = String(
    Math.floor(time / (1000 * 60 * 60 * 24))
  ).padStart(2, 0);
  hoursEl.textContent = String(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, 0);
  minutesEl.textContent = String(
    Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, 0);
  secondsEl.textContent = String(
    Math.floor((time % (1000 * 60)) / 1000)
  ).padStart(2, 0);

  //   Decrease 1s
  time--;

  // Call the timer every second
}, 1000);
