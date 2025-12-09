import React, { useEffect, useState } from "react";

const useApi =()=>{

    const [list,setList]=useState([]);

    const[isSubmited,setIsSubmited]=useState(false);

    // const isSubmit=()=>{
    //     if
    //     setIsSubmited(true)
    // }

    const handleClick=(e)=>{
        e.preventDefault();

        setIsSubmited(true)
    }


    

    useEffect(() => {
        if(isSubmited){
        
        fetch('https://jsonplaceholder.typicode.com/users')
        
            .then(response => response.json())
            .then(response => setList(response))
            .then(response => console.log(response))}
    }, [isSubmited]);





    

return (
        <div>
            {list.length > 0 && list.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
            <br/>
            <form >
                <button style={{color: "red"}} onClick={(e)=>handleClick(e)}
                    >Api</button>

            </form>
        </div>

    );


}





export default useApi;




