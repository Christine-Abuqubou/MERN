import React from 'react'
import { useParams } from "react-router";


export default function Words() {
    const { word } = useParams();
  return (
    <>{
        isNaN(word) ? <h1> this is Words : {word}</h1> : <h1>it is number : {word}</h1>

    }
    
    </>
    
  )
}
