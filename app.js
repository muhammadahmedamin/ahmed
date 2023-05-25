var word = prompt("Enter a word:");


var upperCaseWord = word.toUpperCase();
console.log("Uppercase: " + upperCaseWord);


var lowerCaseWord = word.toLowerCase();
console.log("Lowercase: " + lowerCaseWord);

let sameWords = "captain";
let slice = sameWords.slice(1, 3);
console.log(slice);  

let name = "tufan khan";
let lastName = name.length;
console.log(lastName)


let animal = "elephant";
let seg = animal.slice(2, 6);
console.log(seg);  

let tex = "usama";
let row = tex.length;
console.log(row);  

let var1 = "ahmed";
let length = var1.length;
let sliced = var1.slice(1, length - 3);
console.log(sliced);  

let line = "To be or not to be.";
let ind = line.indexOf("be");
console.log(ind);  

let var2 = "life is mortal";
let Output = var2.lastIndexOf("be");
console.log(Output);  

let words = "i here the shots";
let indx = words.lastIndexOf("go");
console.log(indx);  

  let abc = "wich kind of shots";
let character = abc.charAt(2);
console.log(character);  

let text = "its supra";
let char = text.charAt(9);
console.log(char);  

let y = "ratatattatatatta";
let x = y.charAt(y.length - 1);
console.log(x);  

let input = "hello world";
let cha = input.charAt(4);
console.log(cha);  


  let string = "focous on your goal";
  let myArray = [];
  
  for (let i = 0; i < string.length; i++) {
    myArray.push(string.charAt(i));
  }
  
  console.log(myArray);

  
  let str2 = "1a1b1c";
let newStr1 = str2.replace("1", "one");
console.log(newStr1);  

let str = "1f5g8d";
let newStr = str.replace(/1/g, "one");
console.log(newStr);  


let number1 = 3.7;
let roundedNumber1 = Math.round(number1);
console.log(roundedNumber1);  

let origNum2 = 4.3;
let roundNum2 = Math.ceil(origNum2);
console.log(roundNum2);  

let origNum = 4.8;
let roundNum = Math.floor(origNum);
console.log(roundNum);  

let number3 = 2.5;
let roundedNumber3 = Math.round(number3);
console.log(roundedNumber3);  

let number4 = 0.5;
let roundedNumber4 = Math.floor(number4);
console.log(roundedNumber4);  

let randomNumber1 = Math.random(); 
let numberInRange = Math.floor(randomNumber1 * 50) + 1; 
console.log(numberInRange);  

let randomNumber2 = Math.random();
console.log(randomNumber2);  

let diceNumber = Math.floor(Math.random() * 6) + 1; 
console.log(diceNumber);  

let tossResult = Math.random() < 0.5 ? "Heads" : "Tails"; 
console.log(tossResult);  

function convertStringToInteger(str) {
    return parseInt(str);
  }
  
  let stringNumber1 = "123";
  let integerNumber = convertStringToInteger(stringNumber1);
  console.log(integerNumber); 

  function convertNumberToString(num) {
    return num.toString();
  }
  
  let number5 = 42;
  let stringNumber = convertNumberToString(number5);
  console.log(stringNumber); 
  
  let num1 = 3.14159265359;
let newNum = num1.toFixed(4).toString();
console.log(newNum);  

let number6 = 3.789;
number6 = parseFloat(number6.toFixed(2).toString());
console.log(number6);  

let num = 123.456789;
if (num.toFixed(2).toString().length > 4) {

}

let number = 9.87654321;
let roundedNumber = number.toFixed(2).toString();
alert(roundedNumber); 

let dObj = new Date();
console.log(dObj);  

let d1 = new Date();
let dStr = d1.toString();
console.log(dStr);  

let d2 = new Date();
let day1 = d2.getDay();
console.log(day1);  

let d3 = new Date();
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(dayNames[d3.getDay()]);

let d4 = new Date();
let year = d4.getFullYear();
let month = d4.getMonth();
let day = d4.getDate();
let hours = d4.getHours();
let minutes = d4.getMinutes();
let seconds = d4.getSeconds();
let milliseconds = d4.getMilliseconds();

console.log(year, month, day, hours, minutes, seconds, milliseconds);  

let later = new Date(2020, 11, 31);
console.log(later);  

let date1992 = new Date(1992, 1, 2);
console.log(date1992); 

let referenceDate = new Date();
let beginningOf1980 = new Date(1980, 0, 1);
let millisecondsElapsed = referenceDate - beginningOf1980;
alert(millisecondsElapsed);

function changeMonthToJanuary(date) {
    date.setMonth(0);  
    return date;
  }
  
  let givenDate = new Date();
  let modifiedDate = changeMonthToJanuary(givenDate);
  console.log(modifiedDate);  

  function changeMonthToJanuary(date) {
    date.setMonth(0);  
    return date;
  }
  
  let givenDate1 = new Date();
  let modifiedDate1 = changeMonthToJanuary(givenDate1);
  console.log(modifiedDate1);  

  function changeMinutesToSpecificValue(time, minutes) {
    time.setMinutes(minutes);
    return time;
  }
  
  let givenTime2 = new Date();
  let specificMinutes = prompt("Enter the specific minutes value:");
  let modifiedTime2 = changeMinutesToSpecificValue(givenTime2, specificMinutes);
  console.log(modifiedTime2);  

  function addHoursToTime(time, hours) {
    time.setHours(time.getHours() + hours);
    return time;
  }
  
  let givenTime = new Date();
  let hoursToAdd = 2;  
  let modifiedTime = addHoursToTime(givenTime, hoursToAdd);
  console.log(modifiedTime);  

  function calculateAge(birthDate) {
    let now = new Date();
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth();
    let birthDay = birthDate.getDate();
    
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    
    let age = currentYear - birthYear;
    
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }
    
    return age;
  }
  
  let birthDate = new Date("1990-01-01");
  let age1 = calculateAge(birthDate);
  console.log(age1);  
  
  function displayAlert() {
    
  }

  function askName() {
    let userName = prompt("Enter name");
    return userName;
  }

  function callOtherFunctions() {
    
    function1();
  
    
    function2();
  }
    
  function promptAndAlertName() {
    let name = prompt("Enter name");
    alert("Name: " + name);
  }
  
  promptAndAlertName();

  function concatenateStrings(string1, string2) {
    let result = string1 + string2;
    return result;
  }
  
  let concatenated = concatenateStrings("Hello", "World");
  console.log(concatenated);

  function multiplyNumbers(a, b, c) {
    let result = a * b * c;
    return result;
  }
  
  let multiplied = multiplyNumbers(2, 3, 4);
  console.log(multiplied);

  function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;
  }
  
  let numbersArray = [1, 2, 3, 4, 5];
  let average = calculateAverage(numbersArray);
  console.log(average); 

  function calculateSum(a, b) {
    let sum = a + b;
    return sum;
  }
  
  let result1 = calculateSum(3, 4);
  console.log(result1);  


function letterCounts(word) {
    let counts = {};
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      counts[letter] = (counts[letter] || 0) + 1;
    }
    return counts;
  }
  
  let ahmed = "amin";
  let title = letterCounts(ahmed);
  console.log(title);  
  

  function setYear(date, year) {
    date.setFullYear(year);
  }
  
  let myDate = new Date();
  setYear(myDate, 2023);
  console.log(myDate);  

  function calculateAge(dateOfBirth) {
    let today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    let monthDifference = today.getMonth() - dateOfBirth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dateOfBirth.getDate())) {
      age--;
    }
    return age;
  }
  
  let dateOfBirth = new Date("1990-01-01");
  let age = calculateAge(dateOfBirth);
  console.log(age);  

  function checkWordPresence(word, array) {
    return array.includes(word);
  }
  
  let array1 = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
  let identity = "haris";
  let isPresent = checkWordPresence(identity , array1);
  console.log(isPresent);  

  function repeatLetter(letter, times) {
    return letter.repeat(times);
  }
  
  let repeated = repeatLetter("supra", 10);
  console.log(repeated);  

  function reverseArray(array) {
    return array.reverse();
  }
  
  let array = ['a', 'b', 'c', 'd', 'e'];
  let reversed = reverseArray(array);
  console.log(reversed);  

  function demonstrateLocalVariable() {
  
    let message = "Hello, world!";
    console.log(message);
  }
  
  demonstrateLocalVariable(); 
  

  
  let globalVariable = "I'm a global variable";

function accessGlobalVariable() {
  console.log(globalVariable);
}

accessGlobalVariable(); 

let din = 3;
let dayName;

switch (din) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(dayName);  

let cityName = prompt("Enter the city name:");
let message;

switch (cityName) {
  case "London":
    message = "You entered London!";
    break;
  case "Paris":
    message = "You entered Paris!";
    break;
  case "Tokyo":
    message = "You entered Tokyo!";
    break;
  default:
    message = "City not recognized.";
}

alert(message);