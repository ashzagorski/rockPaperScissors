let userChoice = prompt("Pick paper, scissors, or rock.");
let computerChoice = Math.floor(Math.random() * 3) + 1;

if (computerChoice === 1) {
  computerChoice = 'rock';
} else if (computerChoice === 2) {
  computerChoice = 'paper';
} else {
  computerChoice = 'scissors';
}
console.log(computerChoice);


var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return 'Tied Game. Battle Again?';
  } else if (choice1 === 'scissors' && choice2 === 'paper'  ) {
   return 'Computer wins.'
  } else if (choice1 === 'rock' && choice2 === 'paper') {
    return 'You win!!';
  } else if (choice1 === 'paper' && choice2 === 'rock') {
   return " Computer wins. Try again."
  } else if (choice1 === 'paper' && choice2 === 'scissors') {
  return 'You win!!!'
  } else {
    return "We will figure it out. "
  }
};
compare(computerChoice, userChoice);