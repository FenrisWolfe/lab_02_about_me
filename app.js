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

if (military.trim().toLowerCase() == 'yes'){
  alert('That is right ' + userName + ' I served in the United States Navy. Next you get to guess how many years I served.  Good Luck!');
}else{
  alert('Actually, I served in the United States Navy.');
}

//asksuser to guess my time in the service and returns an answer
var yearsServed = prompt(' How many years do you think I served? Hint, it is between 20 and 30.');
alert(' you think I did ' + yearsServed + ' years of service. I did over 24');
console.log('Years Served Guess' + yearsServed);

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

if (kaNine == true){
  alert('I LOVE dogs!');
}else {
  alert(' Actually, I Love Dogs! I like cats too. ');
}
// asks the user to guess my age
var age = prompt(' Now for a more difficult question. How old do you think I am? ');
console.log(age);

if(age <=50){
  alert(' Aww, you\'re too kind!');
}else {
  if(age >=52){
    alert('Oh Come On! I\'m only 51');
  }else {
    if(age == 51){
      alert(' That\'s right!')
    }
  }
}
// This will display the alerts / answers to the prompts and confirms
alert('you guessed my dog lover status as ' + kaNine);
alert('you guessed my age as ' + age);

//this concatenates all the questions into one alert and displays it to the user
alert('so you guessed, ' + militaryService + ' to the question of did I serve, ' + yearsServed + ' is your guess to how many years I served, ' + ' my dog lover status as ' + kaNine + ' which in fact I do, and ' + age + ' is the age that you guessed I am. I am 51 BTW.');
