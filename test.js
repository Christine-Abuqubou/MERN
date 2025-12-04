// var a = 1; // its a global scope where in anyother function i can access it

// function test(){
    // var b = 2; // its a local scope where only inside this function i can access it

    // return function (){ // its an inner functon we can write function inside function in java script

    // }



// 

// var Myxname = christine ; // it will take the variable to the top of the page and it will be undefined 
// any function has var variable its going to be undefined 
// console.log(Myxname);


// let Myname = 'christine' ; // it will not take the variable to the top of the page and it will give reference error
// console.log(Myname);

// const Myzname = 'christine' ; // it will not take the variable to the top of the page and it will give reference error
// console.log(Myzname);

// let and const are also histed but they are in temporal dead zone

// function hoisting we can call the function before its declaration




// const submitBtn =(name , id )=>{   arrow function   

    // console.log("button clicked");
// }

// submitBtn(); we can hoist arrow function but we have to use var keyword 
// var submitBtn = (name , id )=>{   arrow function   

    // console.log("button clicked");
// }


// Mern Stack
// MongoDB
// ExpressJS
// ReactJS
// NodeJS

// mongoDB is a NoSQL database
// it is used to store data in the form of collections and documents
// it is a document-oriented database
// it is a NoSQL database

// ExpressJS is a web application framework for NodeJS
// it is used to build web applications and APIs
// it is a minimal and flexible framework

// ReactJS is a front-end library for building user interfaces
// it is used to build single-page applications
// it is a component-based library

// NodeJS is a JavaScript runtime environment
// it is used to run JavaScript code outside the browser
// it is built on Chrome's V8 JavaScript engine
// MERN stack is used to build full-stack web applications


// java script objects

var person = {
    name: 'christine',
    age: 25,
    city: 'New York',
    projects: ['Django', 'Python', 'Springboot'],
    // getDetails: function(){
    //     return this.name + ' ' + this.age + ' ' + this.city;
    // }
    getDetails(){
        return `${this.name} ${this.age} ${this.city}, Projects: ${this.projects.join(', ')}`;
    }
};

console.log(person.getDetails());
console.log(person.projects[1]);

const {name, age, city, projects} = person; // destructuring means extracting the values from the object
console.log(name, age, city);
console.log(projects);

const{name : FirstName} = person; // renaming while destructuring
console.log(FirstName);


// Ternary Operator. 
// condition ? expr1 : expr2 THE CONDITION IS TRUE IT WILL RETURN EXPR1 IF FALSE IT WILL RETURN EXPR2 like if else statement

var age1 = 18;
var canVote = age >= 18 ? 'Yes' : 'No'; 
console.log(canVote);

// Rest/Spread Operator
// ... three dots is called as rest/spread operator
// it is used to spread the elements of an array or object
// it is used to collect the elements of an array or object

// if we have specific object we should create  a copy of that object and add new properties to it we can use spread operator and we must not change the original object

var person1 = {
    name: 'john',
    age: 30
};

var person2 = {
    ...person1, // spreading the properties of person1 into person2
    city: 'Los Angeles' // adding new property to person2
};

console.log(person2);

// Spread Operator
var arr1 = [1, 2, 3];
var arr2 = [...arr1, 4, 5, 6]; // spreading the elements of arr1 into arr2
console.log(arr2);

// Rest Operator
function sum(...numbers){ // collecting the elements into an array
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));


var fruits = {
    name: 'Apple',
    color : 'Red',
    weight: '200g'
}

const{name : fruitName, color : fruitColor} = fruits; // renaming while destructuring
console.log(fruitName, fruitColor);



console.log(FirstName);
console.log(fruits);



//arrow function is a function expression 
const greet = (xname) => {
    return `Hello, ${xname}!`;
}
console.log(greet('Christine'));


// discussion 2
//java script is not class based language it is prototype based language 
// every object in java script has a prototype
//what is prototype ? prototype is an object that is associated with every functions and objects in java script
// prototype is used to add properties and methods to objects
// we can use prototype to add new properties and methods to existing objects

//java script functional programming style language

// java script dosnt made to support object oriented programming

 class Person{
    //def init in python
    constructor(FirstName,lastName,age){
        this.FistName= FirstName;
        this.lastName= lastName;
        this.age= age;
    }
    getName(){
        return this.FistName + ' ' + this.lastName;

    }
    setName(newFirstName, newLastName){
        this.FistName = newFirstName;
        this.lastName = newLastName;
    }
    printInfo(){
        console.log(`Name: ${this.getName()}, Age: ${this.age}`);
    }
    // we can apply some of four pillars of OOP here like inheritance and encapsulation but polymorphism and abstraction is bit difficult in java script
    //we cant do encapsulation in java script like private and protected we can use _ to indicate that the property is private but its not enforced by the language



 }

 class Employee extends Person{
    constructor(FirstName,lastName,age,salary){
        super(FirstName,lastName,age); // calling the parent class constructor
        this.salary = salary;
    }
 }

 class Driver{
    constructor(){
        this.emp = new Employee('christine','abuqubou',25,50000);
        this.emp.printInfo();
    }
 }

 // type script class way example it will reduce the number of errors and it will make the code more readable

// call back finctions is a function that is passed as an argument to another function 

//why we use call back functions
//1. to make the code more readable
//2. to make the code more modular
//3. to make the code more reusable
//4. to handle asynchronous operations how  to handle async operations in js 
// what async operations  in js
// async operations are operations that take some time to complete like fetching data from a server reading a file from disk etc
// how to handle async operations in js
// we can use call back functions promises and async/await to handle async operations in js

// when we use call back function 
// it is used when we want to execute a function after another function has completed its execution
// or when we want to execute a function when an event occurs like button click mouse over etc apis call 


//node package manager npm
// it is a package manager for java script
// it is used to install and manage packages for java script
// it is used to share code with other developers
// it is used to create and publish packages for java script



//the difference between function and arrow function
//1. syntax
// function declaration
//we cant make instance of arrow function because it dosnt have its own this keyword
// whats the react fragment 
// react fragment is a way to group multiple elements without adding extra nodes to the DOM
// we can use react fragment to return multiple elements from a component without adding extra nodes to the DOM
// we can use react fragment to wrap multiple elements in a component without adding extra nodes to the DOM
// we can use react fragment to group multiple elements in a component without adding extra nodes to the DOM

// react fragment syntax
// 1. <React.Fragment> </React.Fragment>
// 2. <> </>
// example of react fragment
// function MyComponent(){
//     return (
//         <>
//             <h1>Hello World</h1>
//             <p>This is a react fragment example</p>
//         </>
//     );
// }


// why we use react fragment
// 1. to avoid adding extra nodes to the DOM
// 2. to improve performance
// 3. to make the code more readable
// 4. to make the code more modular

//whatd DOM
// DOM stands for Document Object Model
// it is a programming interface for web documents
// it represents the page so that programs can change the document structure style and content
// the DOM represents the document as nodes and objects
// that way programming languages can interact with the page

//WHAT IS NODE DOM
// Node DOM is a way to interact with the DOM using NodeJS
// it is used to create server-side applications that can manipulate the DOM
// it is used to create server-side applications that can render HTML pages
// it is used to create server-side applications that can handle HTTP requests and responses






















