let choices=document.querySelectorAll(".choice");
let you=document.querySelector(".you");
let AI=document.querySelector(".AI");
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
       let userChoice=choice.getAttribute("id");
       let options=["stone","paper","scissor"];
       let compindex=Math.floor(Math.random()*3);
       let compChoice=options[compindex];
       playgame(userChoice,compChoice);
    })
   
});
function playgame(userChoice,compChoice){
    if(userChoice===compChoice){
        console.log("draw");
    }else if(userChoice==="stone" && compChoice==="scissor"){
        console.log("you won");
    }else if(userChoice==="paper" && compChoice==="stone"){
        console.log("you won");
    }else if(userChoice==="scissor" && compChoice==="paper"){
        console.log("you won");
    }else{
        console.log("you loose")
    }

}