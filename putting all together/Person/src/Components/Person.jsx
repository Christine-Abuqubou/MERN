import React,{useState} from "react";
 


const Person =(props)=>{
    const {firstName,lastName}=props;
    const [age,setAge]=useState(0);
    const Submit =()=>{
        setAge(age + 1);
    }
    
    return (
        <>

             <p>{firstName}</p>
             <p>{lastName}</p>
            
            <p>Age: {age}</p>
            <button onClick={Submit}>Increment Age</button>
        </>
    );
}
export default Person;
