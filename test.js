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














