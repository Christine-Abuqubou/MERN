import React, {  useState } from "react";

import { useNavigate } from "react-router-dom";


function Search(){
    const [resource,setResource]=useState('people');
    const [id,setId]=useState('');
    const navigate =useNavigate();


    const handleSearch=()=>{
        if(resource == 'people'){
            navigate(`/character/${id}`);

        }
        else if(resource == 'planets'){
            navigate(`/planet/${id}`);
        }
    }


        return(
            <>
            <h1>Serach Resources</h1>
            <select onChange={(e)=>setResource(e.target.value) }value={resource}>
                <option value="people">Charachters</option>
                <option value="planets">Planets</option>

            </select>
            <input type="number" placeholder="id" value={id} onChange={(e)=>setId(e.target.value)}>
            </input>
            <button onClick={handleSearch}>Search</button>
            </>
        );
    
    
};
export default Search;