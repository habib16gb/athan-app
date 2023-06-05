// https://aladhan.com/prayer-times-api

const url =
  "http://api.aladhan.com/v1/timingsByCity/09-05-2023?city=Oran&country=DZ&method=8";
const hours = document.querySelector(".hours");
const minuts = document.querySelector(".minuts");
const seconds = document.querySelector(".seconds");
const time_prayer = document.querySelector(".time-prayer");

const counter = setInterval(() => {
  const now = new Date();

  // console.log(date)
  hours.innerHTML = now.getHours();
  minuts.innerHTML = String(now.getMinutes()).padStart(2, "0");
  seconds.innerHTML = String(now.getSeconds()).padStart(2, "0");
}, 1000);

async function logJSONData() {
  const response = await fetch(url);
  const jsonDate = await response.json();

  console.log(jsonDate.data);
}

logJSONData();

console.log("test");
