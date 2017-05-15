'use strict';

/*This is the code that will ask for question input, either by typing in an
answer or clicing ok or cancel as a yes or no prompt and return a response to
the user using their own name. This*/
var userNameAnswer = prompt('Hey there! What is your Name?');
//this will log the users name to the console
console.log('username is', userNameAnswer);
// return a greeting with the users name
alert('Hello, '+ userNameAnswer + ', Welcome to my About me Page.');

//questions about me start here.
// asks if I served in the Military
var militaryService = function() {
  var answer = prompt(' Do you think I served in the Military? Answer with a Yes or No.');
  // logs the users response to the console
  console.log('Military Service guess', answer);

  if (answer.trim().toLowerCase() === 'yes'){
    alert('That is right ' + userNameAnswer + ' I served in the United States Navy. Next you get to guess whether I deployed.  Good Luck!');
  } else {
    alert('Actually, I served in the United States Navy.');
  }
  alert('you said ' + answer + ' to my military service');
  return answer;
}

// asks user to guess if I deployed overseas and returns an answer
var dePloyed = function() {
  var answer = prompt('Do you think I deployed overseas?');
  // logs the users response to the console
  console.log('Years Served Guess' + answer);

  if (answer.trim().toLowerCase() === 'yes'){
    alert(userNameAnswer + ' you think I did deploy overseas, I did.');
  } else {
    alert('Nope! Wrong answer! I actually deployed several times overseas.');
    return answer;
  }
}

//asks user if they think I like dogs
var kaNine = function() {
  var dogLover = confirm(' do you think I like dogs? Click OK for Yes, Cancel for No.');
  // logs the users response to the console
  console.log(dogLover);
  alert('you guessed my dog lover status as ' + dogLover);

  if (dogLover === true){
    alert('You\'re right, I love dogs!');
    return dogLover;
  }else {
    alert(' Actually, I Love Dogs! I like cats too. ');
    return dogLover;
  }
}

// // asks the user to guess my age
var age = function() {
  var answer = confirm(' Now for a more difficult question. Do I look old enough to drink?');
  console.log(answer);
  alert('you guessed ' + answer);

  if(answer === true){
    alert(' That\'s right!');
    return answer;
  }else {
    alert('Oh Come On! I\'m Like, 51');
    return answer;
  }
}

var quirky = function() {
  var answer = confirm('One last thing, Click OK if you think I am Quirky or Cancel if not. ');
  // logs the users response to the console
  console.log('Quirky Status is: ' + answer);
  alert('You think my Quirky status is: ' + answer + ', truth be told, I am but so is JavaScript! But it\'s FUN!');
  return answer;
}
// This will display the alerts / answers to the prompts and confirms
var military = militaryService();
var years = dePloyed();
var dogs = kaNine();
var old = age();
var fun = quirky();

//this concatenates all the questions into one alert and displays it to the user
alert('so you guessed, ' + military + ' to the question of did I serve, ' + years + ' is your guess to how many years I served, ' + ' my dog lover status as ' + dogs + ' which in fact I do, and ' + old + ' is the age that you guessed I am. I am 51 BTW.');
if (fun === true){
  alert('Oh yes, and you think I am Quirky!');
} else {
  alert('Oh yes, and you actually think I am NOT Quirky when I actually am!')
}

//sixth question added giving user four tries to guess a number
var guessing = function() {
  var number;
  var counter = 0;
  var done = true;
  while (number !== 6 && counter < 6 && done) {
    number = parseInt(prompt('what number am I guessing between 1 and 10? You have SIX tries'));
    console.log(number);
    if (counter >= 6 ) {
      alert ('Sorry you have run out of guesses');
      done = false;
      return done;
    } else {

      if (number <= 5) {
        alert('you guessed too low');
        counter++;
        console.log('counter' + counter);
      } else if (number >= 7) {
        alert('you guessed too high');
        counter++;
        console.log('counter' + counter);
      } else if (isNaN(number)) {
        alert('enter a number please');
        counter++;
        console.log('counter' + counter);
      } else if (number === 6) {
        alert('that\'s Right!');
        console.log('counter' + counter);
      }
    }
  }
}
guessing();

// // seventh question added, asking wat type of books I like
var guessBooks = function() {
  var books = ['SCI-FI', 'FANTASY', 'MYSTERY', 'FICTION', 'WESTERNS'];
  var whatBooks = prompt('What kind of books do you think I like?');
  // logs the users response to the console
  console.log('whatbook Guess: ' + whatBooks);
  var flag;

  for (var i=0; i<books.length; i++) {
    // logs the users response to the console
    console.log('Current books: ', books[i]);

    if (whatBooks.trim().toUpperCase() === books[i]) {
      alert('Good guess. That is one of my favorite kind of books.');
      flag = true;
      break;
    }
  }

  if (!flag) {
    alert('Not a kind of book I like, but good guess.');
  }
}

guessBooks();
