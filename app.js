let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let button = document.querySelector(".result");
let you_sc = document.querySelector(".you_sc");
let com_sc = document.querySelector(".com_sc");
let reset = document.querySelector(".reset");


let your_sc = 0;
let comp_sc = 0;
function playGame(userChoice) {
    
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        result = "You win!";
        
        your_sc ++;
        you_sc.innerText = your_sc;
    } else {
        result = "You lose!";
        comp_sc++;
        com_sc.innerText = comp_sc;
    }
    
    button.innerText = (result);

}



rock.addEventListener("click",()=>{
console.log("good");
     playGame("rock");
});
paper.addEventListener("click",()=>{

    playGame("rock");
});
scissors.addEventListener("click",()=>{

    playGame("rock");
});
     
reset.addEventListener("click",()=>{
    
    com_sc.innerText = 0;
    you_sc.innerText = 0;
});
     