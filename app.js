'use strict';
/*This is the code that will ask for question input, either by typing in an
answer or clicing ok or cancel as a yes or no prompt and return a response to
the user using their own name. This*/
var userName = prompt(' Hey there! What is your Name? ');
//this will log the users name to the console
console.log('username is', userName);
alert('Hello, '+ userName + '. Welcome to my About me Page.');
//questions about me start here.
// asks if I served in the Navy
var military = prompt(' Do you think I served in the Navy? ');
if (military.trim().toLowerCase() == 'yes'){
  alert('That is right ' + userName + ' I served in the United States Navy. Next you get to guess how many years I served.  Good Luck!');
}else{
  alert('Aww, nope that is wrong, I served in the United States Navy.');
}
//asksuser to guess my time in the service and returns an answer
var yearsServed = prompt(' How many years do you think I served? Hint, it is between 20 and 30.');
if (yearsServed <= 23){
  alert(' Sorry ' + userName + ' I served over 24! ');
}else {
  if(yearsServed >= 25){
    alert('Nope! too high! Lol');
  }else{
    alert('Hot Damn, you got it!');
    }
}
