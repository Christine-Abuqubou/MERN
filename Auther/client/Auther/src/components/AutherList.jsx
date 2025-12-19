import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function AutherList() {
  const [authers, setAuthers] = useState(null);
  const { id } = useParams();


  useEffect(()=>{
    fetch("http://localhost:8008/authers" + id)
    .then(res=>res.json())
    .then(data=>setAuthers(data))
  },[id]);

  return (
    <>
      <h1>Auther List</h1>
      {authers && (
        <div>
          <h2>{authers.name}</h2>
        </div>
      )}
    </>
  );
}

export default AutherList;
