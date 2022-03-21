const formatSwitchBtn = document.querySelector('.format-switch-btn');

formatSwitchBtn.addEventListener('click', () => {
  formatSwitchBtn.classList.toggle('active');

  var formatValue = formatSwitchBtn.getAttribute('data-format');

  if (formatValue === '12') {
    formatSwitchBtn.setAttribute('data-format', '24');
  } else {
    formatSwitchBtn.setAttribute('data-format', '12');
  }
  var formatValue = formatSwitchBtn.getAttribute('data-format');
});

function clock() {
  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  let period = 'AM';

  if (hours >= 12) {
    period = 'PM';
  }

  var formatValue = formatSwitchBtn.getAttribute('data-format');

  if (formatValue === '12') {
    hours = hours > 12 ? hours % 12 : hours;
  }

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
   

  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.period').innerHTML = period;
  document.querySelector('.seconds').innerHTML = seconds;
}

var updateClock = setInterval(clock, 100);

var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString('default', { weekday: 'long' });
const monthName = today.toLocaleString('default', { month: 'short' });

 if (dayNumber < 10) {
   dayNumber = '0' + dayNumber;
 }

document.querySelector('.month-name').innerHTML = monthName;
document.querySelector('.day-number').innerHTML = dayNumber;
document.querySelector('.day-name').innerHTML = dayName;
document.querySelector('.year').innerHTML = year;

const dotmenuBtn = document.querySelector('.dot-menu-btn');
const dotMenu = document.querySelector('.dot-menu');

dotmenuBtn.addEventListener('click', () => {
  dotMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (e.target.id !== 'active-menu') {
    dotMenu.classList.remove('active');
  }
});
