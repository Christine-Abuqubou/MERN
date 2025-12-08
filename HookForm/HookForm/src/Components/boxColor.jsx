import React, { useState } from 'react';

const ColorBoxForm = () => {
  const [color, setColor] = useState("#8b0f0f"); 
  const [boxes, setBoxes] = useState([]); 

  const handleColorChange = (e) => {
    setColor(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (color) {
      setBoxes([...boxes, color]); 
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Colored Boxes</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label>Select a Color: </label>
          <input 
            type="color" 
            value={color} 
            onChange={handleColorChange} 
            style={{ marginLeft: "10px" }}
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Add Color Box</button>
      </form>

      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        {boxes.map((boxColor, index) => (
          <div 
            key={index} 
            style={{
              width: '100px', 
              height: '100px', 
              backgroundColor: boxColor,
              border: '1px solid #ccc'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorBoxForm;
