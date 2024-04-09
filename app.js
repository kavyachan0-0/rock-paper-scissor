let userScore = 1;
let compScore = 1;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

const gencompChoice = () =>{
 const options = ["rock","paper","scissors"];
 const randomIdx = Math.floor(Math.random() * 3);
 return options[randomIdx];
};

const game = (userWin) =>
{
   
if(userWin){
    // console.log("user win");
    msg.innerText = "User wins 0-0";
    msg.style.backgroundColor="#66ff66";
    userscore.innerText = userScore++;

}
else {
    // console.log("user lose");
    msg.innerText = "User loose T-T";
    msg.style.backgroundColor="#ff1a1a";
    compscore.innerText = compScore++;
    
}
}

const playGame = (userChoice) => {
    // console.log("user choice = ",userChoice)
    const compChoice = gencompChoice();
    // console.log("comp choice = ",compChoice);
    
        if(userChoice == compChoice){
            // console.log("draw");
            msg.innerText = "There is a draw!! Play again $-$";
            msg.style.backgroundColor="aquamarine";
        }
        else{
            let userWin = true;
            if(userChoice === "rock"){
                //paper,scissor
                userWin = compChoice === "scissor"?true:false;
            }
            else if(userChoice === "paper"){
                //rock,scissor
                userWin = compChoice === "rock"?true:false;
            }
            else if(userChoice === "scissor"){
                userWin = compChoice === "paper"?true:false;
            }
            game(userWin);
            
        }
       
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
});

