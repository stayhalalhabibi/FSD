// REST PARAMETERS =  (..rest) allow a function work with a variable number of
//                    arguments by bunding them into an array

//                    SPREAD = expand an array into seperate elements 
//                    REST = bundles seperate elements into an array


function openFridge(...foods){
    console.log(foods);
}

const food1 = "salad";
const food2 = "milk";
const food3 = "meat";
const food4 = "sushi";
const food5 = "fish";
const food6 = "biryani";

openFridge(food1, food2, food3, food4, food5, food6);
console.log("JavaScript is working!");