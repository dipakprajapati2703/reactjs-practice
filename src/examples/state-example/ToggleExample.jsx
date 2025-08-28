import React, { useState } from 'react';

/**
 * @component ToggleExample
 * @description Demonstrates boolean state for show/hide functionality.
 */
export default function ToggleExample() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="state-example">
      <h3>Toggle Examples</h3>
      
      <div className="toggle-section">
        <h4>Visibility Toggle</h4>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Hide' : 'Show'} Content
        </button>
        {isVisible && (
          <div className="content-box">
            <p>This content is now visible!</p>
            <p>Boolean state: <code>{isVisible.toString()}</code></p>
          </div>
        )}
      </div>

      <div className="toggle-section">
        <h4>Expandable Content</h4>
        <button onClick={toggleExpanded}>
          {isExpanded ? 'Collapse' : 'Expand'} Details
        </button>
        {isExpanded && (
          <div className="expanded-content">
            <p>Here are the expanded details:</p>
            <ul>
              <li>Boolean state: <code>{isExpanded.toString()}</code></li>
              <li>State changes trigger re-renders</li>
              <li>Conditional rendering based on state</li>
            </ul>
          </div>
        )}
      </div>

      <div className="toggle-section">
        <h4>Theme Toggle</h4>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <div className={`theme-preview ${isDarkMode ? 'dark' : 'light'}`}>
          <p>Current theme: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong></p>
          <p>Boolean state: <code>{isDarkMode.toString()}</code></p>
        </div>
      </div>

      <div className="code-explanation">
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Boolean state</strong> - Perfect for toggle functionality</li>
          <li><strong>Conditional rendering</strong> - Show/hide based on state</li>
          <li><strong>State inversion</strong> - <code>setIsVisible(!isVisible)</code></li>
          <li><strong>Multiple boolean states</strong> - Independent toggles</li>
        </ul>
      </div>
    </div>
  );
}
