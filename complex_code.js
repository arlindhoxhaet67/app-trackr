/**
 * Filename: complex_code.js
 * 
 * Description: A sophisticated and elaborate JavaScript code
 *              showcasing various concepts and techniques.
 */

// Utility function to generate a random number between given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  getAgeInDays() {
    return this.age * 365;
  }
}

// Class representing a Vehicle
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

// Function to check if a number is prime
function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to find the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Function to calculate the sum of an array of numbers
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Generate a random array of numbers
const randomArray = Array.from({ length: 10 }, () => getRandomNumber(1, 100));

// Print the random array
console.log("Random Array:");
console.log(randomArray);

// Calculate and print the sum of the random array
console.log("Sum of Array:", sumArray(randomArray));

// Check if a random number is prime
const randomNum = getRandomNumber(1, 100);
console.log(`Is ${randomNum} a Prime Number?`, isPrimeNumber(randomNum));

// Reverse a string and print the result
const stringToReverse = "Hello, World!";
console.log("Reversed String:", reverseString(stringToReverse));

// Find factorial and print the result
const numToFactorial = getRandomNumber(1, 10);
console.log(`Factorial of ${numToFactorial}:`, factorial(numToFactorial));

// Create instances of Person and Vehicle classes
const person = new Person("John Doe", 25);
const vehicle = new Vehicle("Toyota", "Camry", 2021);

// Invoke methods from the classes
person.introduce();
console.log(`Person's age in days: ${person.getAgeInDays()}`);
vehicle.getDetails();