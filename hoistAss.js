//hoisting mean 
// hoisting is a javascript mechanism where variables and function declarations are moved to the top of their scope before code execution

// in javascript var variables and function declarations are hoisted
// this means that we can use a variable or call a function before it is declared in the code


console.log(example);
var example = "im the example";

//AFTER HOISTING BY THE ENTERPRETER
// var example;
// console.log(example); // undefined
// example = "im the example";


// The output will be undefined because of hoisting.

console.log(example);
let example = "im the example";

//the output will be ReferenceError: Cannot access 'example' before initialization because let and const are not hoisted like var. They are in a temporal dead zone until they are initialized.


console.log(hello);
var hello = 'world';

//AFTER HOISTING BY THE ENTERPRETER
// var hello;
// console.log(hello); // undefined
// hello = 'world';

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//AFTER HOISTING BY THE ENTERPRETER
// var needle;
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle); // magnet
// }
// needle = 'haystack';
// test();

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
print();
console.log(brendan);

//AFTER HOISTING BY THE ENTERPRETER
// var brendan;
// function print(){
//     brendan = 'only okay';
//     console.log(brendan); // only okay

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//AFTER HOISTING BY THE ENTERPRETER
// var food;
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food); // half-chicken
//     food = 'gone';
// }
// food = 'chicken';
// console.log(food); // chicken
// eat();

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}

//AFTER HOISTING BY THE ENTERPRETER
// var mean;
// mean(); // TypeError: mean is not a function
// console.log(food); // ReferenceError: food is not defined
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}

//AFTER HOISTING BY THE ENTERPRETER
// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";  

//     console.log(genre); // rock
//     genre = "r&b";
//     console.log(genre); // r&b
// }
// genre = "disco";
// console.log(genre); // disco
// rewind();

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}

//AFTER HOISTING BY THE ENTERPRETER
// var dojo;
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo); // seattle
//     dojo = "burbank";
//     console.log(dojo); // burbank
// }
// dojo = "san jose";
// console.log(dojo); // san jose
// learn();

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//AFTER HOISTING BY THE ENTERPRETER
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;    
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now"; // TypeError: Assignment to constant variable.
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); // { name: 'Chicago', students: 65, hiring: true }
// console.log(makeDojo("Berkeley", 0)); // TypeError: Assignment to constant variable.