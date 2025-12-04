import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeComponents from './Components/HomeComponents'
import AboutComponents from './Components/AboutComponents'
import PersonCard from './Components/PersonCardComponents'
import HelloDojo from './Components/HelloDojo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HomeComponents name ="Christine" location="Palestine" hobbies={["reading", "coding", "hiking"]} />
      <AboutComponents/> */}
      <HelloDojo/>
      <PersonCard firstName="ahmad " lastName="Badwan" age={21} hairColor="Brown"  />
      <PersonCard 
  firstName="Lana" 
  lastName="Saleh" 
  age={18} 
  hairColor="Black" 
/>

<PersonCard 
  firstName="Omar" 
  lastName="Khalil" 
  age={22} 
  hairColor="Blonde" 
/>

<PersonCard 
  firstName="Maya" 
  lastName="Hassan" 
  age={19} 
  hairColor="Dark Brown" 
/>

    </>
  )
}

export default App


//app.jsx is the main entry point of a React application. It imports necessary dependencies, including React, useState hook, logos, CSS styles, and two custom components: HomeComponents and AboutComponents. The App function component maintains a state variable 'count' using the useState hook, although it is not utilized in the current implementation. The component returns a JSX fragment that renders the HomeComponents and AboutComponents, effectively composing the main structure of the application. Finally, the App component is exported as the default export for use in other parts of the application.
//and the parent component is App.jsx which imports and uses the two child components HomeComponents and AboutComponents to display their content on the main page.
//from child to parent its lefting satate lifting
//from app to component its props drilling

// if there is component call another component what will happen ?
// When a component calls another component in React, it results in a hierarchical structure where the parent component (the one calling) renders the child component (the one being called). This allows for modular and reusable code, as components can be composed together to build complex UIs. The parent component can pass data to the
