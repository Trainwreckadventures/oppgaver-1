const myFortune = document.getElementById("my-fortune");
const fortuneBtn = document.getElementById("fortune-btn");

fortuneBtn.onclick = yourRandomFortune;

const randomFortunesArray = [
  "You will meet a very handsom dog",
  "You will meet a very nice cat",
  "You will get eaten by a wendigo",
];

function generateRandomFortune() {
  const randomFortune = Math.floor(Math.random() * randomFortunesArray.length);
  return randomFortune;
}

function yourRandomFortune() {
  const userName = prompt("Tell me your name");
  const randomFortune = generateRandomFortune();
  myFortune.innerHTML = `${userName} this is your fortune: ${randomFortunesArray[randomFortune]}`;
}
