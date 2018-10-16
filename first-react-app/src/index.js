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
var STUDLYCAPVAR;
var properCamelCase;
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10;
properCamelCase = "A String";
TitleCaseOver = 9000;
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

  function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar;  
    console.log(myVar);
  }
  myLocalScope();
    var myVar;  
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log(myVar);
  
  // Now remove the console log line to pass the test
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  
  var outerWear = "sweater";
  
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Example
function minusSeven(num) {
    return num - 7;
  }
  
  // Only change code below this line
  function timesFive(args){
    return args*5;
  }
  
  
  console.log(minusSeven(10));
  console.log(timesFive(5));

  // Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive (){
  sum+=5;
}


// Only change code above this line
var returnedValue = addFive();
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

var processed = processArg(7);
function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    var removedItem = arr.shift();
    return removedItem;  // Change this line
  }
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));


  // Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) { 
      return "Yes, it's true";
    }
    return "No, it's false";
  }
  
  // Setup
  function trueOrFalse(wasThatTrue) {
  
    // Only change code below this line.
    if(wasThatTrue)
     {
         return "Yes, that was true";
     }
    return "No, that was false";
    
    // Only change code above this line.
  
  }
  
  // Change this value to test
  trueOrFalse(true);
  // Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  testEqual(10);
  // Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  testStrict(10);

  // Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  compareEquality(10, "10");
  // Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  compareEquality(10, "10");

  // Setup
function testNotEqual(val) {
    if (val !=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  testNotEqual(10);

  // Setup
function testStrictNotEqual(val) {
    // Only Change Code Below this Line
    
    if (val!==17) {
  
    // Only Change Code Above this Line
  
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  testStrictNotEqual(10);

  function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
    
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  // Change this value to test
  testGreaterThan(10);
  function testGreaterOrEqual(val) {
    if (val >=20) {  // Change this line
      return "20 or Over";
    }
    
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  // Change this value to test
  testGreaterOrEqual(10);

  function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
    
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  // Change this value to test
  testLessThan(10);
  function testLessOrEqual(val) {
    if (val <=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
    
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  // Change this value to test
  testLessOrEqual(10);
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val<=50 && val >=25) {
  
        return "Yes";
      
    }
  
    // Only change code above this line
    return "No";
  }
  
  // Change this value to test
  testLogicalAnd(10);
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val >20|| val <10) {
      return "Outside";
    }
  
   
  
    // Only change code above this line
    return "Inside";
  }
  
  // Change this value to test
  testLogicalOr(15);
  function testElse(val) {
    var result = "";
    // Only change code below this line
    
    if (val > 5) {
      result = "Bigger than 5";
    }
    
    else{
      result = "5 or Smaller";
    }
    
    // Only change code above this line
    return result;
  }
  
  // Change this value to test
  testElse(4);
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    
   else if (val < 5) {
      return "Smaller than 5";
    }
    else{
    return "Between 5 and 10";
  
    }
  }
  
  // Change this value to test
  testElseIf(7);
  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  // Change this value to test
  orderMyLogic(7);  
  function testSize(num) {
    // Only change code below this line
    if(num <5)
    {return "Tiny";
    }else if(num <10){
      return "Small";
    }else if(num <15)
    {
      return "Medium";
    }else if(num <20){
      return "Large";
    }else if(num>=20){
      return "Huge";
    }
    
  
  }
  
  // Change this value to test
  testSize(7);
  var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes===1){
    return names[0];
  }else if(strokes <=par-2){
    return names[1];
  }else if(strokes ===par-1){
    return names[2];
  }else if (strokes ===par){
    return names[3];
  }else if (strokes ===par+1){
    return names[4];
  }else if (strokes ===par+2){
    return names[5];
  }else if (strokes >=par+3){
    return names[6];
  }
 
}

// Change these values to test
golfScore(5, 4);

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
      case 1:
        answer= "alpha";
        break;
      case 2:
        answer="beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta"; 
    }
    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  caseInSwitch(1);
  function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
      case "a":
        answer = "apple";
        break;
      case "b":
        answer ="bird";
        break;
      case "c":
        answer ="cat";
        break;
      default :
        answer="stuff";
        break;
  
    }
    
    
    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  switchOfStuff(1);
  function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val){
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer ="High";
        break;
    } 
    
    
    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  sequentialSizes(1);
  function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val){
      case "bob":
        answer = "Marley";
        break;
      case (42):
        answer = "The Answer";
        break;
      case 1 :
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer ="Ate Nine";
        break;
    }
  
    
    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  chainToSwitch(7);
    
  var emp = {
      name : "Ahmad d",
      num : 1234
  };

  console.log(emp.name);

  var myArray =[1,3,4];
  console.log(myArray[1]);
myArray.push(5,6,7,8,8);
  for(var  i=0 ; i< myArray.length; i++){
      console.log(myArray[i]);
  }

  function func(x){
    console.log(typeof x, arguments.length);
 }

 func();                //==> "undefined", 0
 func(1);               //==> "number", 1
 func("1", "2", "3");   //==> "string", 3

 function closures(){
    var counter =0;
    return {
        increment : function(){
            return counter++;
        },
        print : function(){
            console.log(counter);
        }
    }

 }
 var c = closures();
 c.increment();
 c.print();


 function sclosures(){
    var counter =5;
    return {
        increment : function (){
            console.log(counter++);
        }
    }

 }
 var c = sclosures();
 c.increment();
 c.increment();
 c.increment();
 c = sclosures();
 c.increment();
 c.increment();
 c.increment();

 var ff = "ahmad";
 console.log(ff.indexOf('a'));
 console.log(ff.substr(1,2));
 console.log(typeof(1));
 console.log(typeof(null));
 var myVar= "Hi!"
console.log(myVar.valueOf())


