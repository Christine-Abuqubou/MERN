import React from "react";
// import './HomeComponents.css';


const HomeComponents=(props) =>{
    const {name,location,hobbies} = props;
    return(

        <> 
            <h1>Welcome to the Home Page my name is {name}</h1>
            <p>This is the home component of our React application.</p>
            <h2>Location: {location}</h2>
            <h3>Hobbies: {hobbies.join(", ")}</h3>



            <h3>Hobbies : </h3>
                    
        </>
    )

}


export default HomeComponents;

// i want to make a map of hobbies
//  return (
//      <>
//          <h1>Welcome to the Home Page my name is {name}</h1>
//          <p>This is the home component of our React application.</p>
//          <h2>Location: {location}</h2>
//          <h3>Hobbies:</h3>
//          <ul>
//              {hobbies.map((hobby, index) => (
//                  <li key={index}>{hobby}</li>
//              ))}
//          </ul>
//      </>
//  )

// differencess between class components and functional components in React:
// 1. Syntax: Class components are defined using ES6 classes and extend React.Component, while functional components are plain JavaScript functions.
// 2. State Management: Class components have built-in state management using this.state and this.setState(), whereas functional components use the useState hook for managing state.
// 3. Lifecycle Methods: Class components have lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount. Functional components use the useEffect hook to handle side effects and lifecycle events.
// 4. 'this' Keyword: In class components, 'this' refers to the component instance, which can lead to confusion with binding methods. Functional components do not use 'this', making them simpler and easier to understand.
// 5. Performance: Functional components are generally considered to be more lightweight and can lead to better performance due to optimizations in React's rendering process, especially with the introduction of hooks.
// 6. Readability and Maintainability: Functional components are often seen as more concise and easier to read, especially for simpler components, while class components can become verbose with boilerplate code.


//what swc is :
// SWC (Speedy Web Compiler) is a super-fast JavaScript and TypeScript compiler written in Rust. It is designed to be a drop-in replacement for Babel, providing similar functionality such as transpiling modern JavaScript/TypeScript code into a format compatible with older browsers. SWC is known for its high performance and speed, making it a popular choice for developers looking to optimize their build processes. It supports various features like JSX transformation, TypeScript support, and minification, making it a versatile tool in the web development ecosystem.