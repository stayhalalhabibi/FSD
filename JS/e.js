// NUMBER GUESSING GAME 

const minNum = 1;
const maxNum = 100;

 const answer  = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


 let attempts = 0;
 let guess;
 let running = true;
 
while(running){
    

    guess = window.prompt(`Guess a number between 1 to 100 buddy ${minNum} - ${maxNum}`);
    guess = Number(guess);
   // console.log(typeof guess, guess);

    if(isNaN(guess)){
        window.alert("Plz enter a valid number");

    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Plz enter a valid number number between ${minNum} and ${maxNum}`);
    }
    else{
        attempts++;
        if(guess <  answer){
            window.alert(` You guessed the lower number ! choose higher number  in ${attempts} attempts`);
        }
        else if(guess > answer){
            window.alert(` You guessed the higher number ! choose lower number in ${attempts} attempts`);
        }
        else{
            window.alert(`Your guess is correct buddy was ${answer} ! You guessed the number in ${attempts} attempts`);
            running = false;
    
        }
    }



        


}