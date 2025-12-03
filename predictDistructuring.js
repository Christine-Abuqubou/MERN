const cars = ['Tesla','Marcedes','Honda'];
const [randomCar] = cars;
const [,otherRandomCar] = cars;

//Predict the output
console.log(randomCar);
console.log(otherRandomCar);
//the output will be
// Tesla 
// Marcedes
//why 
//why hese taking the first and second element from the array cars answer me 
// because of array destructuring in js we can extract values from arrays and objects and assign them to variables
// in the first line we are extracting the first element of the array cars and assigning it to the variable randomCar
// in the second line we are skipping the first element of the array cars and extracting the second element and assigning it to the variable otherRandomCar


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
};
const {name: otherName} = employee;

//Predict the output
console.log(name);
console.log(otherName);
//the output will be
// ReferenceError: name is not defined
// Elon
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
};
const password = '12345';
const {password: hashedPassword} = person;

//Predict the output
console.log(password);
console.log(hashedPassword); // why undefined because there is no property called password in the person object
//the output will be
// 12345
// undefined

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

//Predict the output
console.log(first == second);//how  the answer is false because first is 2 and second is 5
console.log(first == third); // how the answer is true because first is 2 and third is 2
//the output will be
// false
// true

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
};
const {key} = lastTest;
const {secondKey} = lastTest;
const [,willThisWork] = secondKey;

//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//the output will be
// value
// [1,5,1,8,3,3]
// 1
// 5    
