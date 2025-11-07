let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const showWinner =(userWin,userChoice,compChoice)=>{
if(userWin===true){
userScore++;
userScorePara.innerText=userScore;
console.log("You Win!");
msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor="green";
} else{
compScore++;
compScorePara.innerText=compScore;
console.log("You Lose!");
msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
msg.style.backgroundColor = "red";
}
};

const drawGame= () => {
console.log("Game was Draw");
msg.innerText="Game was Draw! Play again.";
msg.style.backgroundColor="#081b31";
};

const playGame=(userChoice)=>{
console.log("User Choice = ",userChoice);
const compChoice= genCompChoice();
console.log("Computer Choice = ",compChoice);

if(userChoice===compChoice){
 // Draw game
 drawGame();
}else{
 let userWin=true;
 if(userChoice==="rock"){
  // paper , scissor
  if(compChoice==="paper"){
  userWin=false;
  }else{
  userWin=true;
  }
 }
 else if(userChoice==="paper"){
  //rock, scissor
  if(compChoice==="rock"){
  userWin=true;
  }
  else{
  userWin=false;
  }
 }
 else{
  // rock, paper
  if(compChoice=="rock"){
  userWin=false;
  }
  else{
  userWin=true;
  }
 }
 showWinner(userWin,userChoice,compChoice);
}
};

const genCompChoice = () =>{
const options=["rock","paper","scissor"];
const randomIndex=Math.floor(Math.random()*3);
return options[randomIndex];
}


choices.forEach((choice) =>{
 choice.addEventListener("click",()=>{
 const userChoice=choice.getAttribute("id");
 playGame(userChoice);
 });
});