import React, { useState, useCallback, useMemo, memo } from 'react';

/**
 * useCallback Hook Examples
 * 
 * This component demonstrates the core concepts of useCallback:
 * 1. Stabilizing function references to prevent unnecessary re-renders
 * 2. Working with React.memo for child component optimization
 * 3. Managing callback dependencies properly
 * 4. Performance impact measurement
 */

// Memoized child component that only re-renders when props change
const MemoizedButton = memo(({ onClick, label, count, renderCount }) => {
  console.log(`🔄 MemoizedButton "${label}" rendered (count: ${count})`);
  
  return (
    <button 
      onClick={onClick}
      className="memoized-btn"
      style={{
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        margin: '5px',
        fontSize: '14px'
      }}
    >
      {label} (Count: {count})
      <div className="render-info">Renders: {renderCount}</div>
    </button>
  );
});

// Non-memoized child component for comparison
const RegularButton = ({ onClick, label, count, renderCount }) => {
  console.log(`🔄 RegularButton "${label}" rendered (count: ${count})`);
  
  return (
    <button 
      onClick={onClick}
      className="regular-btn"
      style={{
        backgroundColor: '#ff9800',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        margin: '5px',
        fontSize: '14px'
      }}
    >
      {label} (Count: {count})
      <div className="render-info">Renders: {renderCount}</div>
    </button>
  );
};

// Memoized list item component
const MemoizedListItem = memo(({ item, onSelect, onDelete, renderCount }) => {
  console.log(`🔄 MemoizedListItem "${item.name}" rendered`);
  
  return (
    <div className="list-item">
      <div className="item-content">
        <strong>{item.name}</strong> - ${item.price}
        <div className="render-info">Renders: {renderCount}</div>
      </div>
      <div className="item-actions">
        <button 
          onClick={() => onSelect(item)}
          className="action-btn select"
        >
          Select
        </button>
        <button 
          onClick={() => onDelete(item.id)}
          className="action-btn delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
});

// Memoized form component
const MemoizedForm = memo(({ onSubmit, onReset, renderCount }) => {
  console.log(`🔄 MemoizedForm rendered`);
  
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '' });
  };
  
  const handleReset = () => {
    setFormData({ name: '', email: '' });
    onReset();
  };
  
  return (
    <form onSubmit={handleSubmit} className="memoized-form">
      <h4>📝 Contact Form</h4>
      <div className="form-field">
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="form-input"
        />
      </div>
      <div className="form-field">
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="form-input"
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
      </div>
      <div className="render-info">Form Renders: {renderCount}</div>
    </form>
  );
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 80 },
    { id: 3, name: 'Keyboard', price: 150 },
    { id: 4, name: 'Monitor', price: 400 }
  ]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [renderCount, setRenderCount] = useState(0);
  const [useCallbackEnabled, setUseCallbackEnabled] = useState(true);

  // Force re-render to demonstrate the difference
  const forceRender = useCallback(() => {
    setRenderCount(prev => prev + 1);
  }, []);

  // Callbacks with useCallback - stable references
  const handleIncrementStable = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // No dependencies = never changes

  const handleDecrementStable = useCallback(() => {
    setCount(prev => prev - 1);
  }, []); // No dependencies = never changes

  const handleResetStable = useCallback(() => {
    setCount(0);
  }, []); // No dependencies = never changes

  const handleItemSelectStable = useCallback((item) => {
    setSelectedItem(item);
    console.log(`🎯 Item selected: ${item.name}`);
  }, []); // No dependencies = never changes

  const handleItemDeleteStable = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
    console.log(`🗑️ Item deleted: ${id}`);
  }, []); // No dependencies = never changes

  const handleFormSubmitStable = useCallback((formData) => {
    console.log(`📝 Form submitted:`, formData);
    // Simulate API call
    alert(`Form submitted with: ${formData.name} (${formData.email})`);
  }, []); // No dependencies = never changes

  const handleFormResetStable = useCallback(() => {
    console.log(`🔄 Form reset`);
    setSelectedItem(null);
  }, []); // No dependencies = never changes

  // Callbacks WITHOUT useCallback - new function on every render
  const handleIncrementUnstable = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrementUnstable = () => {
    setCount(prev => prev - 1);
  };

  const handleResetUnstable = () => {
    setCount(0);
  };

  const handleItemSelectUnstable = (item) => {
    setSelectedItem(item);
    console.log(`🎯 Item selected: ${item.name}`);
  };

  const handleItemDeleteUnstable = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
    console.log(`🗑️ Item deleted: ${id}`);
  };

  const handleFormSubmitUnstable = (formData) => {
    console.log(`📝 Form submitted:`, formData);
    alert(`Form submitted with: ${formData.name} (${formData.email})`);
  };

  const handleFormResetUnstable = () => {
    console.log(`🔄 Form reset`);
    setSelectedItem(null);
  };

  // Choose which callbacks to use based on toggle
  const handleIncrement = useCallbackEnabled ? handleIncrementStable : handleIncrementUnstable;
  const handleDecrement = useCallbackEnabled ? handleDecrementStable : handleDecrementUnstable;
  const handleReset = useCallbackEnabled ? handleResetStable : handleResetUnstable;
  const handleItemSelect = useCallbackEnabled ? handleItemSelectStable : handleItemSelectUnstable;
  const handleItemDelete = useCallbackEnabled ? handleItemDeleteStable : handleItemDeleteUnstable;
  const handleFormSubmit = useCallbackEnabled ? handleFormSubmitStable : handleFormSubmitUnstable;
  const handleFormReset = useCallbackEnabled ? handleFormResetStable : handleFormResetUnstable;

  // Memoized expensive calculation
  const expensiveValue = useMemo(() => {
    console.log('🔄 Expensive calculation running...');
    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += Math.random();
    }
    return result;
  }, [count]); // Only recalculate when count changes

  return (
    <div className="hooks-example">
      <h2>🔄 useCallback Hook Examples</h2>
      
      <div className="example-section">
        <h3>🎯 What is useCallback?</h3>
        <p>useCallback returns a memoized callback function that only changes when its dependencies change. This prevents unnecessary re-renders of child components that depend on function references.</p>
        
        <div className="callback-benefits">
          <h4>✅ Benefits of useCallback</h4>
          <ul>
            <li>🔄 <strong>Stable References</strong> - Functions maintain the same reference across renders</li>
            <li>⚡ <strong>Performance</strong> - Prevents unnecessary re-renders of memoized children</li>
            <li>🎯 <strong>Dependency Control</strong> - Explicit control over when callbacks change</li>
            <li>🧠 <strong>Memory Efficiency</strong> - Avoids recreating functions on every render</li>
          </ul>
        </div>
      </div>

      <div className="example-section">
        <h3>🔧 Callback Toggle Control</h3>
        <p>Toggle between useCallback and regular functions to see the difference:</p>
        
        <div className="toggle-control">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={useCallbackEnabled}
              onChange={(e) => setUseCallbackEnabled(e.target.checked)}
            />
            <span className="toggle-text">
              {useCallbackEnabled ? '✅ useCallback Enabled' : '❌ useCallback Disabled'}
            </span>
          </label>
          <p className="toggle-description">
            {useCallbackEnabled 
              ? 'Callbacks are stable and won\'t cause unnecessary re-renders'
              : 'Callbacks are recreated on every render (may cause unnecessary re-renders)'
            }
          </p>
        </div>
      </div>

      <div className="example-section">
        <h3>📊 Counter with Memoized Buttons</h3>
        <p>These buttons are wrapped in React.memo and only re-render when their props change:</p>
        
        <div className="counter-section">
          <div className="counter-display">
            <h4>Current Count: {count}</h4>
            <p>Expensive Value: {expensiveValue.toFixed(6)}</p>
            <p>Render Count: {renderCount}</p>
          </div>
          
          <div className="button-group">
            <h5>🔄 Memoized Buttons (React.memo)</h5>
            <MemoizedButton
              onClick={handleIncrement}
              label="Increment"
              count={count}
              renderCount={renderCount}
            />
            <MemoizedButton
              onClick={handleDecrement}
              label="Decrement"
              count={count}
              renderCount={renderCount}
            />
            <MemoizedButton
              onClick={handleReset}
              label="Reset"
              count={count}
              renderCount={renderCount}
            />
          </div>
          
          <div className="button-group">
            <h5>🔄 Regular Buttons (No memoization)</h5>
            <RegularButton
              onClick={handleIncrement}
              label="Increment"
              count={count}
              renderCount={renderCount}
            />
            <RegularButton
              onClick={handleDecrement}
              label="Decrement"
              count={count}
              renderCount={renderCount}
            />
            <RegularButton
              onClick={handleReset}
              label="Reset"
              count={count}
              renderCount={renderCount}
            />
          </div>
          
          <button onClick={forceRender} className="force-render-btn">
            🔄 Force Re-render (No State Change)
          </button>
        </div>
      </div>

      <div className="example-section">
        <h3>📋 Memoized List with Callbacks</h3>
        <p>List items are memoized and only re-render when their specific callbacks change:</p>
        
        <div className="list-section">
          <div className="list-controls">
            <button onClick={() => setItems(prev => [...prev, {
              id: Date.now(),
              name: `Item ${prev.length + 1}`,
              price: Math.floor(Math.random() * 1000) + 50
            }])} className="add-item-btn">
              ➕ Add Item
            </button>
            <button onClick={() => setItems([])} className="clear-items-btn">
              🗑️ Clear All
            </button>
          </div>
          
          <div className="items-list">
            {items.map(item => (
              <MemoizedListItem
                key={item.id}
                item={item}
                onSelect={handleItemSelect}
                onDelete={handleItemDelete}
                renderCount={renderCount}
              />
            ))}
          </div>
          
          {selectedItem && (
            <div className="selected-item">
              <h4>🎯 Selected Item:</h4>
              <p><strong>{selectedItem.name}</strong> - ${selectedItem.price}</p>
            </div>
          )}
        </div>
      </div>

      <div className="example-section">
        <h3>📝 Memoized Form with Callbacks</h3>
        <p>The form component is memoized and only re-renders when its callbacks change:</p>
        
        <div className="form-section">
          <MemoizedForm
            onSubmit={handleFormSubmit}
            onReset={handleFormReset}
            renderCount={renderCount}
          />
        </div>
      </div>

      <div className="example-section">
        <h3>🔍 Performance Analysis</h3>
        <p>Monitor the console to see when components re-render:</p>
        
        <div className="performance-analysis">
          <h4>📊 What to Watch For:</h4>
          <ul>
            <li>✅ <strong>With useCallback:</strong> Memoized components only re-render when their specific props change</li>
            <li>❌ <strong>Without useCallback:</strong> Memoized components re-render on every parent render</li>
            <li>🔄 <strong>Force Render:</strong> Shows the difference between state changes and re-renders</li>
            <li>📈 <strong>Console Logs:</strong> Track which components are re-rendering and why</li>
          </ul>
          
          <div className="render-patterns">
            <h5>🔄 Render Patterns:</h5>
            <div className="pattern">
              <strong>State Change (count):</strong> All components that depend on count will re-render
            </div>
            <div className="pattern">
              <strong>Force Render:</strong> Only components without stable callbacks will re-render
            </div>
            <div className="pattern">
              <strong>Items Change:</strong> List items will re-render due to new data
            </div>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>🎯 Key Takeaways</h3>
        <div className="key-points">
          <div className="point">
            <h4>📌 When to Use useCallback</h4>
            <ul>
              <li>🔄 Passing callbacks to memoized child components</li>
              <li>⚡ Preventing unnecessary re-renders in performance-critical components</li>
              <li>🎯 When callback identity affects other hooks' dependencies</li>
              <li>🧠 When you need stable function references</li>
            </ul>
          </div>
          
          <div className="point">
            <h4>⚠️ useCallback Best Practices</h4>
            <ul>
              <li>Only use when you have measurable performance issues</li>
              <li>Pair with React.memo for child components</li>
              <li>Include all dependencies in the dependency array</li>
              <li>Don't overuse - it adds complexity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>🔧 Code Examples</h3>
        <div className="code-examples">
          <div className="code-example">
            <h4>✅ Good: Stable Callback</h4>
            <pre className="code-preview">
{`const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
}, []); // No dependencies = never changes

// Child component only re-renders when count changes
<MemoizedButton onClick={handleClick} count={count} />`}
            </pre>
          </div>
          
          <div className="code-example">
            <h4>❌ Bad: Unstable Callback</h4>
            <pre className="code-preview">
{`const handleClick = () => {
  setCount(prev => prev + 1);
}; // New function on every render

// Child component re-renders on every parent render
<MemoizedButton onClick={handleClick} count={count} />`}
            </pre>
          </div>
        </div>
      </div>

      <div className="console-note">
        <p>💡 <strong>Open your browser console</strong> to see which components are re-rendering!</p>
        <p>Toggle useCallback on/off and force re-renders to see the performance difference.</p>
      </div>
    </div>
  );
};

export default UseCallbackExample;
