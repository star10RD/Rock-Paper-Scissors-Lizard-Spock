let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}${smallUserWord} beats ${compChoice.charAt(0).toUpperCase()}${compChoice.slice(1)}${smallCompWord}. You win!🔥`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'),300);
}


function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}${smallUserWord} loses to ${compChoice.charAt(0).toUpperCase()}${compChoice.slice(1)}${smallCompWord}. You lost!💩`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'),300);
}

function draw(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}${smallUserWord} equals ${compChoice.charAt(0).toUpperCase()}${compChoice.slice(1)}${smallCompWord}. It's a draw!`;  
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'),300);
}

function game(userChoice) {
    const compChoice = getComputerChoice();
     switch (userChoice + compChoice) {
         case "rockscissors":
         case "rocklizard":
         case "paperrock":
         case "paperspock":
         case "scissorspaper":
         case "scissorslizard":
         case "lizardspock":
         case "lizardpaper":
         case "spockscissors":
         case "spockrock":
             win(userChoice, compChoice);
             break;
         case "scissorsrock":
         case "lizardrock":
         case "rockpaper":
         case "spockpaper":
         case "paperscissors":
         case "lizardscissors":
         case "spocklizard":
         case "paperlizard":
         case "scissorsspock":
         case "rockspock":
            lose(userChoice, compChoice);
            break;
         case "lizardlizard":
         case "spockspock":
         case "paperpaper":
         case "scissorsscissors":
         case "rockrock":
                draw(userChoice, compChoice);
                break;
     }
}

function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors")); 
    lizard_div.addEventListener('click', () => game("lizard"));
    spock_div.addEventListener('click', () => game("spock"));
}

main();