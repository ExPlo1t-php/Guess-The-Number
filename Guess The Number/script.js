//this block declares a random number between 1 and 100, and then assign it to the variable initiator.
     function initiatorfx() {
          return Math.floor(Math.random() *(100 - 1) +1);
        };
        let initiator = initiatorfx();
        let numberOfTries = 10;
        let result = 0;



function checker(){
     result++;
     numberOfTries--;
//this block shows how many tries the user has left
     let remainingTries = `nombre d'essais restants : ${numberOfTries}`;
     document.getElementById("tries").innerHTML= remainingTries;

//this block assigns user input to the input variable so we can compare it later
    let input = document.getElementById("input").value;


// this loop does many things, but mainly it :
//      compares between input and initator (the random number), then based on that the code execute certain code.

        for (let i = 1 ; i <= 10  ; i++) {
          if(numberOfTries === 0){
               document.getElementById("message").innerHTML="C'est raté !!";
               document.getElementById("play-again").style.display = "block";
               document.getElementById("input").style.display = "none";
               document.getElementById("button").style.display = "none";
               break;
          }else if(initiator == input && result >= 3){
               document.getElementById("message").innerHTML=`Félicitations, vous avez gagné après ${result} tentatives`;
               document.getElementById("message").style.color = "#00ff00";
          }else if(input < initiator){
               document.getElementById("message").innerHTML="Plus petite";
          }else if(input > initiator){
               document.getElementById("message").innerHTML="Plus grande";
          }else if(initiator == input && result <= 2){
               document.getElementById("message").innerHTML="Bravo, vous etes un Génie !!!";
               document.getElementById("message").style.color = "#FFD700";
          } else{
               document.getElementById("message").innerHTML="Error"; }
               break;
        }



}
