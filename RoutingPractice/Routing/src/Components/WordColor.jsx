import React from 'react'
import { useParams } from "react-router";
export default function WordColor() {
    const { word,color1,color2 } = useParams();
  return (
    <>
    
        <div style={{width:"1200px" ,height:"70px",backgroundColor:color1}}>
            {
                isNaN(word) ? <h1 style={{color:color2}}> this is Words : {word}</h1>
                : <h1 style={{color:color2}}>it is number : {word}</h1>
            }
        </div>
    
    </>
  )
}
