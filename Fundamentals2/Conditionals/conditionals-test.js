
/* 
    * Conditionals Test 1

    ? Procedure

    * 1. Add 'season' variable that says what is the current season 
    * 2. Add 'response' variable that is uninitialized 
    * 3. Check if 'season' contains the string of 'summer' and 'winter'. If so, assigned an appropriate message to the user using the 'response' variable 
    * 4. If not, assigned a generic string on 'response' that tells the user we don't know that season it is.

    */


// let season = "summer";
// let response;

// let askSeason = prompt('What is the current season in your country ?', response);

// if (askSeason === season) {
//     alert('Ohh it\'s hot in your country. Drink plenty of Water!');
// } else if (askSeason === 'winter') {
//     alert(`It's so cold there. Make a hot Chocolate!`);
// } else {
//     alert('Cannot determined your current season!');
// }


/*

 * Conditionals Test 2
 
    ? Procedure

* 1. Add 'machineActive' that contains an indicator of true or false.
* 2. Add 'score' contains the imaginary score of a game.
* 3. Add 'response' uninitialized, used to store the user input. 
* 4. If..else structure whether the switch is on or the 'response' is not valid and telling the user to switch the machine on.
* 5. Nest if..else if...else that puts appropriate message into the 'response' depending on what value the score is, if only the machine is turned on. 

    ? The procedure on different conditionals tests (when the score is evaluating)

* Score of less than 0 or more than 100 — "This is not possible, an error has occurred."
* Score of 0 to 19 — "That was a terrible score — total fail!"
* Score of 20 to 39 — "You know some things, but it\'s a pretty bad score. Needs improvement."
* Score of 40 to 69 — "You did a passable job, not bad!"
* Score of 70 to 89 — "That\'s a great score, you really know your stuff."
* Score of 90 to 100 — "What an amazing score! Did you cheat? Are you for real?"

  alert('You\'re not active yet!');
    prompt('Want to turn the machine? Yes or No?', userResponse);

    */

let machineActive = false;
let score = 75;
let machineResponse;
let decide;



if (machineActive) {

    machineResponse = 'The machine is turned off. Turn it on to process your score.';

} else {

    decide = prompt('The machine is turned off, do you want to turn it on, Yes Or No?', machineResponse);

    if (decide === 'Yes' || decide === 'yes') {
        decide = prompt('Do you want to know the previous score?', machineResponse)

        if (decide === 'Yes' || decide === 'yes') {
            if (score >= 70 && score < 90) {
                machineActive = 'That\'s a great score, you really know your stuff.';
                alert('That\'s a great score, you really know your stuff.');
            }

        } else {
            score = prompt('You decide to input a score, type it here!', score);
            if (decide < 0 || score > 100) {
                machineResponse = 'This is not possible, an error has occurred.';
                alert('This is not possible, an error has occurred.');

            } else if (score >= 0 && score < 20) {
                machineActive = 'That was a terrible score -- total fail.';
                alert('That was a terrible score -- total fail.');

            } else if (score >= 20 && score < 40) {
                machineActive = 'You know some things, but it\'s a pretty bad score. Needs improvement';
                alert('You know some things, but it\'s a pretty bad score. Needs improvement');

            } else if (score >= 40 && score < 70) {
                machineActive = 'You did a passable job, not bad!';
                alert('You did a passable job, not bad!');

            } else if (score >= 70 && score < 90) {
                machineActive = 'That\'s a great score, you really know your stuff.';
                alert('That\'s a great score, you really know your stuff.');

            } else if (score >= 90 && score < 100) {
                machineActive = 'What an amazing score! Did you cheat? Are you for real?';
                alert('What an amazing score! Did you cheat? Are you for real?');
            }

        }



    } else {
        machineActive = 'The machine is turned off. Turn it on to process your score';
        alert('The machine is turned off. Turn it on to process your score');

    }

}

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${score}`;
para2.textContent = machineResponse;

section.appendChild(para1);
section.appendChild(para2);


