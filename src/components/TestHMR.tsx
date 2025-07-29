import { useState } from 'react';

export default function TestHMR() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ 
      padding: '20px', 
      background: '#f0f0f0', 
      margin: '20px 0',
      border: '1px solid #ccc',
      borderRadius: '8px'
    }}>
      <h3>HMR Test Component</h3>
      <p>Count: {count}</p>
      <button 
        onClick={() => setCount(c => c + 1)}
        style={{
          padding: '5px 10px',
          margin: '5px 0',
          cursor: 'pointer'
        }}
      >
        Increment
      </button>
      <p>Last updated: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
