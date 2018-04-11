let userName = "YOUR NAME HERE...";
let userQuestion = "TYPE YOUR QUESTION HERE...";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

userName ? console.log(`Hello ${userName}!`) : console.log("Hello");

console.log(`Ok, ${userName}, you asked this question: " ${userQuestion}" `);

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;

  case 1:
    eightBall = "It is certain";
    break;

  case 2:
    eightBall = "It is decidedly so";
    break;

  case 3:
    eightBall = "Reply hazy try again";
    break;

  case 4:
    eightBall = "Do not count on it";
    break;

  case 5:
    eightBall = "My sources say no";
    break;

  case 6:
    eightBall = "Outlook not so good";
    break;

  case 7:
    eightBall = "Signs point to yes";
    break;
}
console.log(randomNumber);
console.log(eightBall);
