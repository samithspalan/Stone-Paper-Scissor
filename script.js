let choices=document.querySelectorAll(".choice");
let you=document.querySelector(".you");
let AI=document.querySelector(".AI");
let result=document.querySelector(".result");
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        result.innerText="";
        result.style="box-shadow: inset 2px 2px 20px rgba(57, 57, 57, 0.8),inset -2px -2px 20px rgba(51, 51, 51, 0.8);";
        startshake();
       setTimeout(()=>{
        stopshake();
        let userChoice=choice.getAttribute("id");
       let options=["stone","paper","scissor"];
       let compindex=Math.floor(Math.random()*3);
       let compChoice=options[compindex];
       playgame(userChoice,compChoice);
       },1000);
    });
   
});
function startshake(){
    you.style="animation: shake 1s linear 1;"
    AI.style="animation: shake 1s linear 1;"
}
function stopshake(){
    you.style="animation:none;"
    AI.style="animation: none;"
}
function playgame(userChoice,compChoice){
    if(userChoice==="stone"){
        you.innerText="👊"
    }else if(userChoice==="paper"){ 
        you.innerText="🤚"
    }else if(userChoice==="scissor"){ 
        you.innerText="✌️"
    }
    if(compChoice==="stone"){
        AI.innerText="👊"
    }else if(compChoice==="paper"){ 
        AI.innerText="🤚"
    }else if(compChoice==="scissor"){ 
        AI.innerText="✌️"
    }

    if(userChoice===compChoice){
        result.innerText="DRAW";
        result.style=" box-shadow: inset 2px 2px 20px rgba(245, 251, 50, 0.8),inset -2px -2px 20px rgba(234, 240, 65, 0.8);";
        result.style.color="rgba(243, 184, 56, 0.8)";
    }else if(userChoice==="stone" && compChoice==="scissor"){
        result.innerText="YOU WON💪";
        result.style=" box-shadow: inset 2px 2px 20px rgba(9, 251, 9, 0.8),inset -2px -2px 20px rgba(109, 245, 5, 0.8);";
        result.style.color="rgba(26, 161, 11, 0.8)";
    }else if(userChoice==="paper" && compChoice==="stone"){
        result.innerText="YOU WON💪";
        result.style=" box-shadow: inset 2px 2px 20px rgba(9, 251, 9, 0.8),inset -2px -2px 20px rgba(109, 245, 5, 0.8);";
        result.style.color="rgba(26, 161, 11, 0.8)";
    }else if(userChoice==="scissor" && compChoice==="paper"){
        result.innerText="YOU WON💪";
        result.style=" box-shadow: inset 2px 2px 20px rgba(9, 251, 9, 0.8),inset -2px -2px 20px rgba(109, 245, 5, 0.8);";
        result.style.color="rgba(26, 161, 11, 0.8)";
    }else{
        result.innerText="LOST😒";  
         result.style=" box-shadow: inset 2px 2px 20px rgba(251, 126, 9, 0.8),inset -2px -2px 20px rgba(252, 61, 18, 0.8);";
        result.style.color="rgba(245, 45, 10, 0.8)";
    }

}