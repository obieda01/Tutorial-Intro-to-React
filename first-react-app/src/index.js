import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var x = "Ahmad";
console.log(5 > 10);

console.log(x);

var celisus=12;
var fahrenheit= celisus*1.8 +32;

console.log(fahrenheit);
var thingOne="red"; var thingTwo="blue";
console.log(thingOne,thingTwo);
var fullName="Ahmad Obiedat";
console.log(fullName);

var bill=10.25 + 3.99 + 7.15;
var tip=bill*0.15;
var total = bill +tip;
console.log(total);
var celisus=12;
var fahrenheit= celisus*1.8 +32;

console.log(fahrenheit);
var thingOne="red"; var thingTwo="blue";
console.log(thingOne,thingTwo);
var fullName="Ahmad Obiedat";
console.log(fullName);

var bill=10.25 + 3.99 + 7.15;
var tip=bill*0.15;
var total = bill +tip;
console.log(total);
// Setup
var a;
var b = 2;

// Only change code below this line
// Example
var ourVar = 19;

// Only change code below this line
var a = 9;
// Initialize these three variables
var a =5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";
// Declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a += 12;
b += 9;
c += 7;

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

var myStr="FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "This is the start. " + "This is the end.";
// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName ="Ahmad Ob";
var myStr = "My name is " +myName+ " and I am well!";
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective="passion";
var myStr = "Learning to code is "
myStr+= someAdjective;
// Setup
var myStr = "Jello World";

// Only change code below this line

myStr = "Hello World"; // Fix Me

// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length-1];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = myAdjective +" " +myNoun+" " +myVerb+" " +myAdverb;
  
    // Your code above this line
    return result;
  }
  
  // Change the words here to test your function
  wordBlanks("dog", "big", "ran", "quickly");

  // Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["hello",22];

// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [["hello",33],[33,33]];
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.
var myData = myArray[0];
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); 
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.

myArray.push(["dog",3]);
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); 
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop(myArray.length-1);
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul",35]);
// Example
function ourReusableFunction() {
    console.log("Heyya, World");
  }
  
  ourReusableFunction();
  
  // Only change code below this line
  function reusableFunction(){
      console.log("Hi World");
  }
  reusableFunction();

// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
  }
  ourFunctionWithArgs(10, 5); // Outputs 5
  
  // Only change code below this line.
  
  function functionWithArgs(param1,param2)
  {
  console.log(param1+param2);
  
  }
  functionWithArgs(2,4);

  // Declare your variable here
var myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal=5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}