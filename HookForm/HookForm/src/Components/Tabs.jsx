import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0); 

  
  
  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div style={{ padding: '20px' }}>
    
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              backgroundColor: activeTabIndex === index ? '#007bff' : '#f0f0f0',
              color: activeTabIndex === index ? 'white' : 'black',
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginRight: '10px',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <p>{tabs[activeTabIndex].content}</p>
      </div>
    </div>
  );
};

export default Tabs;
