import React from "react";


import { useState } from "react";

const ToDo = (props) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };


    const Add= (e)=>{
        console.log(inputValue);
        e.preventDefault();
        props.setList((prevList) => [...prevList, inputValue]);
        setInputValue("");

        
        
    }

    const Delete= (props)=>{
        props.setList([]);
    }



    

    return(
        <form>
            <input
                style={{ color: "blue", backgroundColor: "white",display:"flex", flexDirection: "column",
                padding: "8px 16px", 
                borderRadius: "4px", margin: "10px" }}
                placeholder="Get Mern Black Belt"
                value={inputValue}
                onChange={(e)=> {handleInputChange(e)}}
            />
            <button style={{color: "white", backgroundColor: "green",margin:"10px"} } onClick={(e)=>{Add(e)}}>Add</button>
            <button style={{
                color: "white",
                backgroundColor: "red",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",margin:"10px"
            }}>Delete</button>
        
        </form>
    )

}
export default ToDo;