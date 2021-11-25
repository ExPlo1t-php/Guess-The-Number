

function checker(){
     
     let initiator = function () {
          return Math.floor(Math.random() * (100 - 1) + 1);
        };


    let input = document.getElementById("input").value;

if(initiator === input){
     document.getElementById("message").innerHTML="sucess";
} else if(initiator <= input){
     document.getElementById("message").innerHTML="bad";
}else{
     document.getElementById("message").innerHTML="bad";
}
}

