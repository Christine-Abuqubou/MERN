// react stack 
//two folder one client and  server 
//backend side for server and front end side for client
// we use express js for backend 
// we use react for frontend
// we use nodemon for backend to restart the server automatically when we make changes to the code
// we use axios to make http requests from the frontend to the backend

//map and filter 


//how we use map
// map is used to iterate over an array and return a new array with the results of calling a provided function on every element in the calling array

//example of map
const numbers = [1,2,3,4,5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2,4,6,8,10]




//how we use filter
// filter is used to create a new array with all elements that pass the test implemented by the provided function

//example of filter
const ages = [12,17,18,24,32];
const adults = ages.filter((age) => age >= 18);
console.log(adults); // [18,24,32]


//back to react 
// react is a javascript library for building user interfaces

// why we use react 
// 1. component based architecture
// 2. virtual DOM
// 3. unidirectional data flow
// 4. JSX syntax
// 5. large community and ecosystem

// what is JSX
// JSX stands for JavaScript XML
// it is a syntax extension for javascript
// it looks similar to HTML
// it is used with react to describe what the UI should look like

//what is DOM
// DOM stands for Document Object Model
// it is a programming interface for web documents
// it represents the page so that programs can change the document structure style and content
// the DOM represents the document as nodes and objects
// that way programming languages can interact with the page

//its single page because we just have one htm l file and we load different components in that file without reloading the page
// react fragment is a way to group multiple elements without adding extra nodes to the DOM
// we can use react fragment to return multiple elements from a component without adding extra nodes to the DOM
// we can use react fragment to wrap multiple elements in a component without adding extra nodes to the DOM
// we can use react fragment to group multiple elements in a component without adding extra nodes to the DOM

//vite is a build tool that aims to provide a faster and leaner development experience for modern web projects
// we use vite to create react app because it is faster than create react app
// vite uses esbuild to bundle the code which is faster than webpack used by create react app
// vite has a smaller bundle size than create react app
// vite has a better development experience than create react app

//swc 