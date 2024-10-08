let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let answer = Math.floor(Math.random() * 100) + 1;
let no_of_guesses = 0;
let guessed_nums = [];

function play(){
    let user_guess = document.getElementById("guess").value ;
    if(user_guess < 1 || user_guess > 100){
        alert("please enter a number between 1 and 100.");

    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses += 1;
        if(user_guess < answer){
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " + guessed_nums;

        }
        else if(user_guess > answer){
                msg1.textContent = "Your guess is too high.";
                msg2.textContent = "No. of guesses: " + no_of_guesses;
                msg3.textContent = "Guessed numbers are: " + guessed_nums;
    

        }
        else if(user_guess == answer){
            msg1.textContent = "You Win!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in " + no_of_guesses + " guesses";

        }
    }
}

