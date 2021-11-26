//this function declares a random number between 1 and 100, and then assign it to the variable initiator.
     function initiatorfx() {
          return Math.floor(Math.random() *100 );
        };
        let initiator = initiatorfx();


function checker(){
 
          
    let input = document.getElementById("input").value;
        for (let i = 1 ; i <= 10 ; i++) {
                 let counter = 10;
     document.getElementById("tries").innerHTML= counter - 1;
          if(initiator == input && i <= 3){
               document.getElementById("message").innerHTML="Bravo, vous etes un Génie al7mar !!!";
          }else if(input <= initiator){
               document.getElementById("message").innerHTML="plus petite";
          }else if(input >= initiator){
               document.getElementById("message").innerHTML="plus grande";
          }else{
               document.getElementById("message").innerHTML="Please kill yourself"; }
        }

}

