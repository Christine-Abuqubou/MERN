import React,{useState} from 'react';

const UserForm=()=>{
    const[userName,setName]=useState(""); // validating feilds 
    const[email,setEmail]=useState(""); // use state to save the value 
    const[password,setPassword]=useState("");

//    const itsSubmited =()=>{
    //return ternary function 
    
//    }

    // const [error,setError]=useState("");


// const checkName=(e)=>{
//     setName(e.target.value <=2){
// } setError("the name must be more than two ")}
// setName(e.target.value)}

// } another way to write it 





const createUser = (e) => {
            e.preventDefault(); // prevent from refreshing
    
const newUser={
    userName : userName,
    email : email,
    password : password
}
console.log( "welcome" ,newUser );
    };
    
    return (
        <form onSubmit={createUser}>

            <div>
                <label>user name :</label>
                <input type="text" onChange={(e)=> setName(e.target.value)}/>


            </div>
            <div>
                <label>email :</label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)}/>

            </div>

            <div>
                <label>password :</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value)}/>

            </div>

            {/* form content here */}
        </form>
    );
}

export default UserForm;



