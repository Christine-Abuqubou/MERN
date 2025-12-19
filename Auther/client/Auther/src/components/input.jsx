import React from "react";

const Input = ({ type, name, value, onChange}) => {
    
    return (
        <>

        <label>{name}</label>
        
        
        <input
            type={type}
            name={name}
            value={value}
            onChange={(e) =>{onChange(e.target.value)}}
            className="form-control"
        />
        
        
        </>
        
    );
};

export default Input;





