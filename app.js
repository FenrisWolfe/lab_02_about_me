'use strict';

/*This is the code that will ask for question input, either by typing in an
answer or clicing ok or cancel as a yes or no prompt and return a response to
the user using their own name. This*/
var userName = prompt(' Hey there! What is your Name? ');
//this will log the users name to the console
console.log('username is', userName);

//return a greeting with the users name
alert('Hello, '+ userName + '. Welcome to my About me Page.');

//questions about me start here.
// asks if I served in the Navy
var militaryService = prompt(' Do you think I served in the Navy? Answer with a Yes or No. ');
console.log('Military Service guess' + militaryService);
alert(' you said ' + militaryService + ' to my military service');

if (militaryService.trim().toLowerCase() == 'yes'){
  alert('That is right ' + userName + ' I served in the United States Navy. Next you get to guess how many years I served.  Good Luck!');
}else{
  alert('Actually, I served in the United States Navy.');
}

//asksuser to guess my time in the service and returns an answer
var yearsServed = prompt(' How many years do you think I served? Hint, it is between 20 and 30.');
console.log('Years Served Guess' + yearsServed);
alert(' you think I did ' + yearsServed + ' years of service. I did over 24');

if (yearsServed <= 23){
  alert(' Sorry, ' + userName + ' I served over 24! ');
}else {
  if(yearsServed >= 25){
    alert('Nope! too high! I only served just over 24 years.');
  }else{
    alert('Hot Damn, you got it!');
    }
}
//asks user if they think I like dogs
var kaNine = confirm(' do you think I like dogs? Click OK for Yes, Cancel for No.');
console.log(kaNine);
alert('you guessed my dog lover status as ' + kaNine);

if (kaNine == true){
  alert('You\'re right, I love dogs!');
}else {
  alert(' Actually, I Love Dogs! I like cats too. ');
}
// asks the user to guess my age
var age = prompt(' Now for a more difficult question. How old do you think I am? ');
console.log(age);
alert('you guessed my age as ' + age);

if(age <=50){
  alert(' Aww, you\'re too kind! but my age is actually 51.');
}else {
  if(age >=52){
    alert('Oh Come On! I\'m only 51');
  }else {
    if(age == 51){
      alert(' That\'s right!')
    }
  }
}
var quirky = confirm('One last thing, Click OK if you think I am Quirky or Cancel if not. ');
console.log('Quirky Status is: ' + quirky);
alert('You think my Quirky status is: ' + quirky + ', truth be told, I am but so is JavaScript! But it\'s FUN!');
// This will display the alerts / answers to the prompts and confirms

//this concatenates all the questions into one alert and displays it to the user
alert('so you guessed, ' + militaryService + ' to the question of did I serve, ' + yearsServed + ' is your guess to how many years I served, ' + ' my dog lover status as ' + kaNine + ' which in fact I do, and ' + age + ' is the age that you guessed I am. I am 51 BTW.');
  if (quirky == true){
    alert('Oh yes, and you think I am Quirky!');
  } else {
    alert('Oh yes, and you actually think I am NOT Quirky when I actually am!')
  }

  //sixth question added giving user four tries to guess a number
  var number;
  var counter = 0;

  while (number !== 6 && counter<6) {
    number = parseInt(prompt('what number am I guessing between 1 and 10? You have SIX tries'));

    if (number < 6) {
      alert('you guessed too low');
      counter++;
      console.log('counter' + counter);
    } else if (number > 6) {
      alert('you guessed too high');
      counter++;
      console.log('counter' + counter);
    } else if (number === NaN || number === null) {
      alert('enter a number please');
      counter++;
      console.log('counter' + counter);
    } else if (number === 6) {
      alert('that\'s Right!')
      console.log('counter' + counter);
    }
  }

// seventh question added, asking wat type of books I like
var books = ['SCI-FI', 'FANTASY', 'MYSTERY', 'FICTION'];
var whatBooks = prompt('What kind of books do you think I like?');
console.log('whatbook Guess: ' + whatBooks);
var flag;

for (var i=0; i<books.length; i++) {
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
