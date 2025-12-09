import React from "react";



const List =(props)=>{



const {list}= props;
    
    














    return(
        <>

        <form>
            



        </form>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>

        </>
        
    )

    
}


export default List;