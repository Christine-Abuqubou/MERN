import React, { useEffect, useState } from "react";
import axios from 'axios';

const Api =()=>{

    const [list,setList]=useState([]);

    const[isSubmited,setIsSubmited]=useState(false);

    

    const handleClick=(e)=>{
        e.preventDefault();

        setIsSubmited(true)
    }


    

    useEffect(() => {
        if(isSubmited){
        
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(response => {
        setList(response.data.results);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    }
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





export default Api;




