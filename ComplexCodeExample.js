/*
Filename: ComplexCodeExample.js
Content: A complex and creative JavaScript code example.
*/

// Sample data for demonstration
const sampleData = [
  { id: 1, name: "John", age: 28, city: "New York" },
  { id: 2, name: "Adam", age: 35, city: "Chicago" },
  { id: 3, name: "Emily", age: 22, city: "San Francisco" },
  // ... more data
];

// Function to filter data based on age
function filterDataByAge(data, minAge, maxAge) {
  return data.filter((item) => item.age >= minAge && item.age <= maxAge);
}

// Function to group data by city
function groupDataByCity(data) {
  const groups = {};

  data.forEach((item) => {
    if (!groups[item.city]) {
      groups[item.city] = [item];
    } else {
      groups[item.city].push(item);
    }
  });

  return groups;
}

// Function to calculate the average age of data
function calculateAverageAge(data) {
  const totalAge = data.reduce((sum, item) => sum + item.age, 0);
  return totalAge / data.length;
}

// Class representing a Person
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  introduce() {
    console.log(`My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`);
  }
}

// Generate Person objects from sample data
const persons = sampleData.map((data) => new Person(data.name, data.age, data.city));

// Outputting filtered data
const filteredData = filterDataByAge(persons, 25, 35);
console.log("Filtered data:");
filteredData.forEach((item) => item.introduce());

// Grouping data by city
const groupedData = groupDataByCity(filteredData);
console.log("Grouped data:");
console.log(groupedData);

// Calculating and outputting average age
const averageAge = calculateAverageAge(filteredData);
console.log(`Average age: ${averageAge}`); 

// ... more complex and creative code
// ... the rest of the code (over 200 lines)