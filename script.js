'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent = '🎉correct Number');

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value); // NO number
document.querySelector('.guess').value = 23;         // assigned 23 no
console.log(document.querySelector('.guess').value); // 23 in console
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; //Math.random() gives 0.___ values * 20 + 1 gives 0 to 20.__ values to remove point after values use trunc

let score =20; //score value changes
let highScore = 0; //highscore value remains same
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No number';
    }
    else if(guess == secretNumber){
        document.querySelector('.message').textContent = '🎉 correct Number';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;  
        }

    }
    else if(guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = '📈 Too High!';
            score --;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "❌ You lost tha game!";
            document.querySelector('.score').textContent = 0;
        }
    }
    else if(guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = '📉 Too Low!';
            score --;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "❌ You lost tha game!";
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})