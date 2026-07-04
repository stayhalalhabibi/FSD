// COUNTER PROGRAM



 const decreaseBtn = document.getElementById("d");
 const resetBtn = document.getElementById("r");
 const increaseBtn = document.getElementById("i");
 const value = document.getElementById("countable");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countable.textContent = count;
}