import React, { useState } from "react";


const Forms =() =>{
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfrimPassword]=useState("");

    const[firstNameerror,setFirstNameerror]=useState("");
    const[lastNameerror,setLastNameerror]=useState("");
    const[emailerror,setEmailerror]=useState("");
    const[passworderror,setPassworderror]=useState("");
    const[confirmPassworderror,setConfrimPassworderror]=useState("");


    const validateName=(e) =>{
        const firstName=e.target.value;
        setFirstName(firstName);
        if (firstName.length < 3){
            setFirstNameerror("first name must be at least 3 char");

        }
        else {
            setFirstNameerror("");
        }
    }
    const validateLastName=(e)=>{
        const lastName=e.target.value;
        setLastName(lastName);
        if(lastName.length <3){
            setLastNameerror("last name must be more than 3 char")
        }
        else{
            setLastNameerror("");
        }
    }
    const validateEmail=(e)=>{
        const email=e.target.value;
        setEmail(email);
        if(email.length <3){
            setEmailerror("email must be more than 3 char")
        }
        else{
            setEmailerror("");
        }
    }
    const validatePassword=(e)=>{
        const password=e.target.value;
        setPassword(password);
        if(password.length <3){
            setPassworderror("password must be more than 3 char")
        }
        else{
            setPassworderror("");
        }
    }
    const validateCpassword=(e)=>{
        const confirmPassword=e.target.value;
        setConfrimPassword(confirmPassword);
        if(confirmPassword == password){
            setConfrimPassworderror("confirm password must be more than 3 char")
        }
        else{
            setConfrimPassworderror("");
        }
    }


    
    
    return(
        <form>
            <div>
            <label >FirstName :</label>
            <input type="text" value={firstName} onChange={validateName}></input>
            <p style={{color:"red"}}>{firstNameerror}</p>
            </div>
            <div>
            <label >LastName :</label>
            <input type="text" value={lastName} onChange={validateLastName}></input>
            <p style={{color:"red"}}>{lastNameerror}</p>
            </div>
            <div>
            <label >email :</label>
            <input type="email" value={email} onChange={validateEmail}></input>
            <p style={{color:"red"}}>{emailerror}</p>
            </div>
            <div>
            <label >password :</label>
            <input type="password" value={password} onChange={validatePassword}></input>
            <p style={{color:"red"}}>{passworderror}</p>
            </div>
            <div>
            <label >Confirm password :</label>
            <input type="password" value={confirmPassword} onChange={validateCpassword}></input>
            <p style={{color:"red"}}>{confirmPassworderror}</p>
            </div>

        </form>
    )

}
export default Forms;