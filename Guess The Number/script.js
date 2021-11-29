//this function declares a random number between 1 and 100, and then assign it to the variable initiator.
     function initiatorfx() {
          return Math.floor(Math.random() *(100 - 1) +1);
        };
        let initiator = initiatorfx();
        alert(initiator);
        let numberOfTries = 10;
        let result = 0;
function checker(){
     result++;
     numberOfTries--;
     let remainingTries = `nombre d'essais restants : ${numberOfTries}`;
     document.getElementById("tries").innerHTML= remainingTries;

    let input = document.getElementById("input").value;

        for (let i = 1 ; i <= 10 ; i++) {
          if(initiator == input && result <= 2){
               document.getElementById("message").innerHTML="Bravo, vous etes un Génie !!!";
          }else if(initiator == input && result >= 3){
               document.getElementById("message").innerHTML=`Félicitations, vous avez gagné après ${result} tentatives`;
          }else if(input < initiator){
               document.getElementById("message").innerHTML="Plus petite";
          }else if(input > initiator){
               document.getElementById("message").innerHTML="Plus grande";
          }else if(input != initiator && numberOfTries == 0){
               document.getElementById("message").innerHTML="C'est raté !!";
          }
          else{
               document.getElementById("message").innerHTML="Error"; }
               break;
        }



}
