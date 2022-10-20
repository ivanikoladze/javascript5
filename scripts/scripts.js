
let numStart = 0;

let numIncrease = document.querySelector(".buttonInc");
let numDecrease = document.querySelector(".buttonDec");

numIncrease.addEventListener("click", function(){
    numStart+=1;
    document.querySelector(".num").innerHTML = numStart; 
    if(numStart<=0){
        document.querySelector(".num").innerHTML = "stop"; 
        numStart=0;
    }   
})
numDecrease.addEventListener("click", function(){
    numStart-=1;
    document.querySelector(".num").innerHTML = numStart; 
    if(numStart<=0){
        document.querySelector(".num").innerHTML = "0"; 
        numStart=0;
    }  
})





