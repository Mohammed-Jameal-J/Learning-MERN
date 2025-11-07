// objects

const person = {
  name: "John",
  age: 30,
  city: "New York",
  "full name": "John Doe" /* Property with space */,
};

console.log(person["name"]); /* Square notation */
console.log(person.city); /* Dot notation */
console.log(person.age, person.city);
/* Multiple properties */
console.log(person["full name"]); /* Accessing property with space */
// console.log(person.full name); /* This will cause an syntax error */

// Updated and added values
person.name = "Jane"; /* Updating existing property */
person.country = "USA"; /* Adding new property */
person.gender = "male"; /* Adding another new property */
console.log(person["name"]);
console.log(person.country);
console.log(person.gender);
console.log(person);
/* Deleting a property */
delete person.age;
console.log(person);

// object can hold any type of data
const student = {
  name: "Alice",
  age: 22,  
  marks: [85, 90, 78], /* Array as a property */
  address: {
    street: "123 Main St",
    city: "Los Angeles",
    zip: "90001",
    }, /* Nested object as a property */
};
console.log(student.marks[0]);

const keys = Object.keys(student); /* Get all keys of the object */
console.log(keys);
const values = Object.values(student); /* Get all values of the object */
console.log(values);
const entries = Object.entries(student); /* Get all entries of the object */
console.log(entries);

// Objects & Array Destructuring in JavaScript

const numbers = [10, 20, 30, 40, 50];
const a = numbers[0];
const b = numbers[1];
console.log(a, b); /* 10 20 */

// destructuring assignment
const [x, y, , z] = numbers; /* Skipping the 3rd element */
console.log(x, y, z); /* 10 20 40 */

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [first, second, ...others] = num; /* Rest operator */
console.log(first, second , others); /* 1 2 [3, 4, 5, 6, 7, 8, 9] */

// default values
const [fruit1, fruit2, fruit3 = "Mango"] = ["Apple", "Banana", "Grapes"];
console.log(fruit1, fruit2, fruit3); /* Apple Banana Mango */

// object destructuring
const laptop = {
  brand: "Dell",
  model: "XPS 13",
  year: 2020
};
const lap = laptop.model; // Accessing without destructuring
console.log(lap); // XPS 13
const { brand:showRoom, model, year } = laptop;
console.log(showRoom, model, year); // Dell XPS 13 2020


// nested object destructuring
const employee = {
  id: 101,
  name: "Bob",
  department: {
    id: 201,
    name: "Sales"
  }
};

const { id, name:userName, department: { id: deptId, name: deptName } } = employee;
console.log(id, userName, deptId, deptName); // 101 Bob 201 Sales

const studentInfo={
    name: "Charlie",
    age: 23,
    subjects: { math: 95, science: 88, english: 92 }
}

const{ name:stuName , age , subjects:{math, science, english} }= studentInfo;
console.log(stuName);
console.log(age);
console.log(math);
console.log(science);
console.log(english);

// Rest Operator The rest operator in JavaScript, denoted by three consecutive dots (...), 
// is a powerful feature introduced in ES6 (ECMAScript 2015) that allows you to gather an indefinite number of arguments into an array.
//  It essentially "collects" the remaining elements or properties into a single entity. 

const {name:studentName, ...nested} = studentInfo;
console.log(studentName);
console.log(nested);
