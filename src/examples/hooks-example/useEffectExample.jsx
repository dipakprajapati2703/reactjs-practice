import React, { useState, useEffect } from 'react';
import './HooksExample.css';

/**
 * useEffect Hook Examples
 * 
 * This component demonstrates the core concepts of useEffect:
 * 1. Mount-only effects (empty dependency array)
 * 2. Effects that run when dependencies change
 * 3. Cleanup functions to prevent memory leaks
 * 4. Proper dependency management
 */
const useEffectExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [timer, setTimer] = useState(0);
  const [isOnline, setIsOnline] = useState(true);
  const [renderCount, setRenderCount] = useState(0);

  // Effect 1: Mount-only effect (runs once when component mounts)
  useEffect(() => {
    console.log('🔄 Component mounted - this effect runs only once');
    
    // Simulate setting up a connection or subscription
    const connectionId = Math.random().toString(36).substr(2, 9);
    console.log(`🔗 Connection established: ${connectionId}`);
    
    // Cleanup function - runs when component unmounts
    return () => {
      console.log(`🔌 Connection closed: ${connectionId}`);
      console.log('🧹 Component unmounting - cleanup executed');
    };
  }, []); // Empty dependency array = run only on mount

  // Effect 2: Effect that runs when count changes
  useEffect(() => {
    console.log(`📊 Count changed to: ${count}`);
    
    // Simulate an API call or expensive operation
    const timeoutId = setTimeout(() => {
      console.log(`⏰ Delayed operation completed for count: ${count}`);
    }, 1000);
    
    // Cleanup: cancel the timeout if count changes before completion
    return () => {
      console.log(`❌ Cancelling operation for count: ${count}`);
      clearTimeout(timeoutId);
    };
  }, [count]); // Runs whenever count changes

  // Effect 3: Effect that runs when name changes
  useEffect(() => {
    if (name.trim()) {
      console.log(`👤 Name changed to: "${name}"`);
      
      // Simulate saving to localStorage
      localStorage.setItem('userName', name);
      console.log(`💾 Name saved to localStorage: "${name}"`);
    }
  }, [name]); // Runs whenever name changes

  // Effect 4: Effect with multiple dependencies
  useEffect(() => {
    console.log(`🔄 Count: ${count}, Name: "${name}" - both values changed`);
    
    // Simulate a complex operation that depends on multiple values
    const combinedValue = `${count}-${name}`;
    console.log(`🔗 Combined value: ${combinedValue}`);
  }, [count, name]); // Runs when either count OR name changes

  // Effect 5: Effect that runs on every render (usually not recommended)
  useEffect(() => {
    setRenderCount(prev => prev + 1);
    console.log('🔄 Component rendered again');
  }); // No dependency array = runs on every render

  // Effect 6: Simulating online/offline status
  useEffect(() => {
    const handleOnline = () => {
      console.log('🌐 Browser went online');
      setIsOnline(true);
    };
    
    const handleOffline = () => {
      console.log('📴 Browser went offline');
      setIsOnline(false);
    };

    // Add event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Cleanup: remove event listeners
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []); // Empty array - only set up listeners once

  // Effect 7: Timer effect with cleanup
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    
    // Cleanup: clear interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty array - only set up timer once

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
    setName('');
    setTimer(0);
  };

  return (
    <div className="hooks-example">
      <h2>🔄 useEffect Hook Examples</h2>
      
      <div className="example-section">
        <h3>📊 Counter Effect</h3>
        <p>This effect runs whenever the count changes and includes cleanup:</p>
        <div className="counter-controls">
          <button onClick={handleIncrement}>
            Increment Count ({count})
          </button>
          <p>Effect will run and log to console when count changes</p>
        </div>
      </div>

      <div className="example-section">
        <h3>👤 Name Input Effect</h3>
        <p>This effect runs when the name changes and saves to localStorage:</p>
        <div className="input-controls">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <p>Current name: "{name || 'None'}"</p>
          <p>Effect will save name to localStorage when it changes</p>
        </div>
      </div>

      <div className="example-section">
        <h3>⏰ Timer Effect</h3>
        <p>This effect sets up a timer on mount and cleans up on unmount:</p>
        <div className="timer-display">
          <p>Timer: {timer} seconds</p>
          <p>Effect sets up timer once and cleans up on unmount</p>
        </div>
      </div>

      <div className="example-section">
        <h3>🌐 Online Status Effect</h3>
        <p>This effect listens for online/offline events:</p>
        <div className="status-display">
          <p>Status: <span className={isOnline ? 'online' : 'offline'}>
            {isOnline ? '🟢 Online' : '🔴 Offline'}
          </span></p>
          <p>Effect sets up event listeners once and cleans up on unmount</p>
        </div>
      </div>

      <div className="example-section">
        <h3>🔄 Render Counter</h3>
        <p>This effect runs on every render (usually not recommended):</p>
        <div className="render-info">
          <p>Component has rendered {renderCount} times</p>
          <p>⚠️ This effect has no dependency array, so it runs on every render</p>
        </div>
      </div>

      <div className="example-section">
        <h3>🧹 Cleanup Functions</h3>
        <p>All effects include proper cleanup to prevent memory leaks:</p>
        <ul>
          <li>✅ Timer cleanup (clearInterval)</li>
          <li>✅ Timeout cleanup (clearTimeout)</li>
          <li>✅ Event listener cleanup (removeEventListener)</li>
          <li>✅ Connection cleanup (simulated)</li>
        </ul>
      </div>

      <div className="example-section">
        <h3>🎯 Key Takeaways</h3>
        <div className="key-points">
          <div className="point">
            <h4>📌 Dependency Arrays</h4>
            <ul>
              <li><code>[]</code> - Run only on mount</li>
              <li><code>[value]</code> - Run when value changes</li>
              <li><code>[value1, value2]</code> - Run when either changes</li>
              <li>No array - Run on every render (usually avoid)</li>
            </ul>
          </div>
          
          <div className="point">
            <h4>🧹 Cleanup Functions</h4>
            <ul>
              <li>Return a function from useEffect for cleanup</li>
              <li>Cleanup runs before effect runs again</li>
              <li>Cleanup runs when component unmounts</li>
              <li>Essential for preventing memory leaks</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="example-section">
        <button onClick={handleReset} className="reset-button">
          🔄 Reset All Values
        </button>
      </div>

      <div className="console-note">
        <p>💡 <strong>Open your browser console</strong> to see the effect logs in action!</p>
        <p>Watch how effects run, when they cleanup, and the order of operations.</p>
      </div>
    </div>
  );
};

export default useEffectExample;
