import React, { useState } from 'react';

/**
 * @component CounterExample
 * @description Demonstrates basic useState with counter functionality.
 */
export default function CounterExample() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const incrementBy = (amount) => setCount(count + amount);

  return (
    <div className="state-example">
      <h3>Counter Example</h3>
      <p>Current count: <strong>{count}</strong></p>
      
      <div className="button-group">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
        <button onClick={() => incrementBy(5)}>+5</button>
        <button onClick={reset}>Reset</button>
      </div>
      
      <div className="code-explanation">
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>useState(0)</strong> - Initialize state with default value</li>
          <li><strong>setCount</strong> - Function to update state</li>
          <li><strong>Never mutate state directly</strong> - Always use setter function</li>
          <li><strong>State updates trigger re-renders</strong> - UI automatically updates</li>
        </ul>
      </div>
    </div>
  );
}
