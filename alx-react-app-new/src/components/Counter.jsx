import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={buttonStyle} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
