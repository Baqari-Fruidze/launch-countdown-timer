const daysspan = document.querySelector(".days-span");
const hoursspan = document.querySelector(".hours-span");
const minutesspan = document.querySelector(".minutes-span");
const secondsspan = document.querySelector(".seconds-span");

function change() {
  const targetDate = new Date("september 20,24 00:20:00");
  const currentDate = new Date();
  let difference = targetDate - currentDate;
  let day = Math.floor(difference / 1000 / 60 / 60 / 24);
  let hour = Math.floor((difference / 1000 / 60 / 60) % 24);
  let minutes = Math.floor((difference / 1000 / 60) % 60);
  let seconds = Math.floor((difference / 1000) % 60);
  daysspan.textContent = String(day).padStart(2, "0");
  hoursspan.textContent = String(hour).padStart(2, "0");
  minutesspan.textContent = String(minutes).padStart(2, "0");
  secondsspan.textContent = String(seconds).padStart(2, "0");
  if (day <= 0 && hour <= 0 && minutes <= 0 && seconds <= 0) {
    clearInterval(foo);
  }
}
let foo = setInterval(change, 1000);
