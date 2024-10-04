// DOM
const magicBall = document.querySelector(".magic-ball-btn");

function getEightBallAnswer() {
  // 20 possible answers, randomize 0-20
  let randomNum = Math.floor(Math.random() * 20);

  //  eightball response
  let eightBall = "";

  switch (randomNum) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "Without a doubt";
      break;
    case 3:
      eightBall = "Yes definitely";
      break;
    case 4:
      eightBall = "You may rely on it";
      break;
    case 5:
      eightBall = "As i see it, yes";
      break;
    case 6:
      eightBall = "Most likely";
      break;
    case 7:
      eightBall = "Outlook good";
      break;
    case 8:
      eightBall = "Yes";
      break;
    case 9:
      eightBall = "Signs point to yes";
      break;
    case 10:
      eightBall = "Reply hazy, try again";
      break;
    case 11:
      eightBall = "Ask again later";
      break;
    case 12:
      eightBall = "Better not tell you now";
      break;
    case 13:
      eightBall = "Cannot predict now";
      break;
    case 14:
      eightBall = "Concentrate and ask again";
      break;
    case 15:
      eightBall = "Don't count on it";
      break;
    case 16:
      eightBall = "My reply is no";
      break;
    case 17:
      eightBall = "My sources say no";
      break;
    case 18:
      eightBall = "Outlook not so good";
      break;
    case 19:
      eightBall = "Very doubtful";
      break;
  }
  return eightBall;
}

function eightballTransition() {
  // eightball image transition and display answer
  magicBall.classList.add("buttonV2");
  const answer = getEightBallAnswer();
  magicBall.innerHTML = answer;
}

function updateEightBall() {
  // 1. animate eightball
  magicBall.classList.add("animate__animated", "animate__wobble");
  // 2. end animation
  magicBall.addEventListener("animationend", () => {
    magicBall.classList.remove("animate__animated", "animate__wobble");
    // 3. call eightballTransition function
    eightballTransition();
  });
}

// event
magicBall.addEventListener("click", () => {
  updateEightBall();
});
