import React, { useState, useRef, useEffect } from 'react';

/**
 * useRef Hook Examples
 * 
 * This component demonstrates the core concepts of useRef:
 * 1. DOM references for direct manipulation
 * 2. Instance variables that don't trigger re-renders
 * 3. Storing previous values and mutable data
 * 4. Imperative DOM method calls
 */
const useRefExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [renderCount, setRenderCount] = useState(0);
  
  // Ref 1: DOM reference for input focus
  const inputRef = useRef(null);
  
  // Ref 2: DOM reference for measuring element size
  const boxRef = useRef(null);
  
  // Ref 3: DOM reference for scrolling
  const scrollTargetRef = useRef(null);
  
  // Ref 4: Instance variable that doesn't trigger re-renders
  const previousCountRef = useRef(null);
  
  // Ref 5: Instance variable for tracking render count without re-renders
  const renderCountRef = useRef(0);
  
  // Ref 6: Instance variable for storing timer ID
  const timerRef = useRef(null);
  
  // Ref 7: Instance variable for storing previous name
  const previousNameRef = useRef('');

  // Effect to track previous values
  useEffect(() => {
    previousCountRef.current = count;
  });

  useEffect(() => {
    previousNameRef.current = name;
  });

  // Effect to increment render count without causing re-renders
  useEffect(() => {
    renderCountRef.current += 1;
    setRenderCount(renderCountRef.current);
  });

  // Effect to demonstrate timer with ref
  useEffect(() => {
    timerRef.current = setInterval(() => {
      // This won't trigger a re-render because we're updating a ref
      console.log('⏰ Timer tick (ref-based, no re-render)');
    }, 2000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleFocusInput = () => {
    // Direct DOM manipulation using ref
    if (inputRef.current) {
      inputRef.current.focus();
      console.log('🎯 Input focused using useRef');
    }
  };

  const handleMeasureBox = () => {
    // Reading DOM properties using ref
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      console.log(`📏 Box dimensions: ${width}px × ${height}px`);
      alert(`Box dimensions: ${width.toFixed(0)}px × ${height.toFixed(0)}px`);
    }
  };

  const handleScrollToTarget = () => {
    // Scrolling to element using ref
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      console.log('📜 Scrolled to target element');
    }
  };

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
    setName('');
  };

  const handleImperativeUpdate = () => {
    // Updating ref without triggering re-render
    renderCountRef.current += 10;
    console.log(`🔄 Render count ref updated to: ${renderCountRef.current}`);
    console.log('⚠️ Notice: No re-render occurred!');
  };

  return (
    <div className="hooks-example">
      <h2>🎯 useRef Hook Examples</h2>
      
      <div className="example-section">
        <h3>🎯 DOM References</h3>
        <p>useRef allows direct access to DOM elements for imperative operations:</p>
        
        <div className="dom-examples">
          <div className="input-example">
            <h4>Input Focus</h4>
            <input
              ref={inputRef}
              type="text"
              placeholder="This input can be focused programmatically"
              className="demo-input"
            />
            <button onClick={handleFocusInput}>
              🎯 Focus Input
            </button>
            <p>Click the button to focus the input using useRef</p>
          </div>

          <div className="measurement-example">
            <h4>Element Measurement</h4>
            <div 
              ref={boxRef}
              className="measurement-box"
              style={{
                width: '200px',
                height: '100px',
                backgroundColor: '#e3f2fd',
                border: '2px solid #2196f3',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '10px 0'
              }}
            >
              📏 Measurable Box
            </div>
            <button onClick={handleMeasureBox}>
              📏 Measure Box
            </button>
            <p>Click to measure the box dimensions using useRef</p>
          </div>

          <div className="scroll-example">
            <h4>Scroll to Element</h4>
            <button onClick={handleScrollToTarget}>
              📜 Scroll to Target
            </button>
            <p>Click to scroll to the target element below</p>
            
            <div style={{ height: '200px', overflow: 'auto', border: '1px solid #ccc', margin: '10px 0' }}>
              <div style={{ height: '100px', backgroundColor: '#f5f5f5', padding: '20px' }}>
                <p>Scroll down to see the target...</p>
              </div>
              <div style={{ height: '100px', backgroundColor: '#e8f5e8', padding: '20px' }}>
                <p>Keep scrolling...</p>
              </div>
              <div 
                ref={scrollTargetRef}
                style={{ 
                  height: '100px', 
                  backgroundColor: '#fff3e0', 
                  padding: '20px',
                  border: '3px solid #ff9800'
                }}
              >
                <p>🎯 This is the scroll target!</p>
                <p>It will be scrolled into view when you click the button above.</p>
              </div>
              <div style={{ height: '100px', backgroundColor: '#f3e5f5', padding: '20px' }}>
                <p>More content below...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>📊 Instance Variables (No Re-renders)</h3>
        <p>useRef can store values that persist between renders without causing re-renders:</p>
        
        <div className="instance-examples">
          <div className="counter-example">
            <h4>Previous Value Tracking</h4>
            <div className="value-display">
              <p>Current count: <strong>{count}</strong></p>
              <p>Previous count: <strong>{previousCountRef.current !== null ? previousCountRef.current : 'None'}</strong></p>
              <p>Change: <strong>
                {previousCountRef.current !== null 
                  ? count > previousCountRef.current 
                    ? `+${count - previousCountRef.current}` 
                    : count < previousCountRef.current 
                      ? `${count - previousCountRef.current}` 
                      : 'No change'
                  : 'N/A'
                }
              </strong></p>
            </div>
            <button onClick={handleIncrement}>
              ➕ Increment Count
            </button>
            <p>Notice how previous values are tracked without causing re-renders</p>
          </div>

          <div className="name-example">
            <h4>Name Change Tracking</h4>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type to see previous value tracking"
              className="demo-input"
            />
            <div className="value-display">
              <p>Current name: <strong>"{name || 'None'}"</strong></p>
              <p>Previous name: <strong>"{previousNameRef.current || 'None'}"</strong></p>
            </div>
          </div>

          <div className="render-example">
            <h4>Render Count (Ref vs State)</h4>
            <div className="value-display">
              <p>State render count: <strong>{renderCount}</strong> (triggers re-renders)</p>
              <p>Ref render count: <strong>{renderCountRef.current}</strong> (no re-renders)</p>
            </div>
            <button onClick={handleImperativeUpdate}>
              🔄 Update Ref Only
            </button>
            <p>Click to see how ref updates don't cause re-renders</p>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>⏰ Timer Management</h3>
        <p>useRef is perfect for storing timer IDs and other mutable values:</p>
        
        <div className="timer-info">
          <p>✅ Timer is running in the background (check console)</p>
          <p>✅ Timer ID is stored in useRef and won't cause re-renders</p>
          <p>✅ Timer is properly cleaned up when component unmounts</p>
        </div>
      </div>

      <div className="example-section">
        <h3>🎯 Key Takeaways</h3>
        <div className="key-points">
          <div className="point">
            <h4>📌 When to Use useRef</h4>
            <ul>
              <li>🔗 Direct DOM access (focus, scroll, measure)</li>
              <li>📊 Storing previous values</li>
              <li>⏰ Timer IDs and mutable references</li>
              <li>🔄 Values that shouldn't trigger re-renders</li>
            </ul>
          </div>
          
          <div className="point">
            <h4>⚠️ Important Notes</h4>
            <ul>
              <li>Updating ref.current does NOT trigger re-renders</li>
              <li>Refs are mutable and can be changed at any time</li>
              <li>Don't store values in refs that the UI needs to reflect</li>
              <li>Use for imperative operations, not declarative state</li>
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
        <p>💡 <strong>Open your browser console</strong> to see the ref operations and timer logs!</p>
        <p>Notice how ref updates don't cause re-renders, but state updates do.</p>
      </div>
    </div>
  );
};

export default useRefExample;
