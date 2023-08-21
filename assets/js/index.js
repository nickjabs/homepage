// LAMBDA FUNCTON HERE !!!!

const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch(
    "https://hhmm5u7563ftso4tgzopolbrvu0kbwdj.lambda-url.eu-west-3.on.aws/"
  );
  let data = await response.json();
  counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();
