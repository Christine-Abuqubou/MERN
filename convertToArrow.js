// update all functions to arrow functions

document.getElementById("button").onclick = () => { 
    setBackgroundColorById("paragraph", "blue"); 
} 

document.getElementById("alert").onclick = () => { 
    alert(document.getElementById("popup-input").value); 
} 

document.getElementById("hover-this").onmouseover = () => { 
    setBackgroundColorById("body", "red"); 
} 

document.getElementById("hover-this ").onmouseout = () => { 
    setBackgroundColorById("body", "white"); 
} 

const getValueFromId = (id) => { 
    return document.getElementById(id).value; 
} 

const setBackgroundColorById = (id, color) => { 
    document.getElementById(id).style = "background-color: " + color; 
} 

const mouseOverFunction = (el) => { 
    el.style = "background-color: black"; 
}
 // Connect the EventListener `setBackgroundColorById` to the paragraph in the HTML
document.getElementById("paragraph").onclick = () => { 
    const color = getValueFromId("color-input"); 
    setBackgroundColorById("paragraph", color); 
}
