import React, { useState } from 'react';
import {
  CounterExample,
  ToggleExample,
  FormExample,
  ListExample,
  ObjectExample
} from '../examples/state-example';

/**
 * @page StateExamples
 * @description Demonstrates React state management patterns and examples with beautiful card-based design.
 */
export default function StateExamplesPage() {
  const [activeExample, setActiveExample] = useState('counter');

  const examples = [
    {
      id: 'counter',
      name: '🔢 Counter Example',
      description: 'Basic useState with counter functionality',
      component: CounterExample
    },
    {
      id: 'toggle',
      name: '🔄 Toggle Examples',
      description: 'Boolean state for show/hide functionality',
      component: ToggleExample
    },
    {
      id: 'form',
      name: '📝 Form State Management',
      description: 'Complex state with form inputs and validation',
      component: FormExample
    },
    {
      id: 'list',
      name: '📋 List State Management',
      description: 'Array state with CRUD operations',
      component: ListExample
    },
    {
      id: 'object',
      name: '🏗️ Object State Management',
      description: 'Complex object state with nested properties',
      component: ObjectExample
    }
  ];

  const handleExampleChange = (exampleId) => {
    console.log('🎯 State example change:', exampleId);
    setActiveExample(exampleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ActiveComponent = examples.find(ex => ex.id === activeExample)?.component;

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">🔄 React State Examples</h1>
        <p className="page-description">
          Master React state management from basic to advanced. Learn useState patterns, form handling, 
          list management, and object state updates with practical examples.
        </p>
      </div>

      <div className="page-content">
        {/* State Overview */}
        <div className="state-overview">
          <h2>📚 State Management Fundamentals</h2>
          <p>
            State in React represents data that can change over time. It's what makes components interactive 
            and dynamic. The useState hook provides a way to add state to functional components.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="examples-navigation">
          <h2>🎯 Choose an Example to Explore</h2>
          <div className="nav-tabs">
            {examples.map((example) => (
              <button
                key={example.id}
                onClick={() => handleExampleChange(example.id)}
                className={`nav-tab ${activeExample === example.id ? 'active' : ''}`}
              >
                <div className="tab-content">
                  <div className="tab-icon">{example.name.split(' ')[0]}</div>
                  <div className="tab-details">
                    <div className="tab-name">{example.name.split(' ').slice(1).join(' ')}</div>
                    <div className="tab-description">{example.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Example Display */}
        <div className="example-display">
          {ActiveComponent ? (
            <ActiveComponent />
          ) : (
            <div className="center-content">
              <p>Select an example from the navigation cards above to get started!</p>
            </div>
          )}
        </div>

        {/* State Best Practices */}
        <div className="best-practices">
          <h2>✅ State Management Best Practices</h2>
          <div className="practices-list">
            <div className="practice-item">
              <h4>🔒 Immutability</h4>
              <ul>
                <li>Never mutate state directly</li>
                <li>Always use setter functions</li>
                <li>Use spread operator for updates</li>
              </ul>
            </div>
            
            <div className="practice-item">
              <h4>🎯 State Structure</h4>
              <ul>
                <li>Keep state minimal and focused</li>
                <li>Group related data together</li>
                <li>Avoid deeply nested state</li>
              </ul>
            </div>
            
            <div className="practice-item">
              <h4>⚡ Performance</h4>
              <ul>
                <li>Use functional updates for dependent state</li>
                <li>Split large state objects when possible</li>
                <li>Consider useReducer for complex state logic</li>
              </ul>
            </div>
            
            <div className="practice-item">
              <h4>🧹 Cleanup</h4>
              <ul>
                <li>Clean up timers and subscriptions</li>
                <li>Use useEffect cleanup functions</li>
                <li>Handle component unmounting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Patterns */}
        <div className="common-patterns">
          <h2>🔄 Common State Patterns</h2>
          <div className="patterns-grid">
            <div className="pattern-card">
              <h3>📊 Derived State</h3>
              <p>Calculate values from existing state instead of storing them separately.</p>
              <code>{`const completedCount = items.filter(item => item.completed).length;`}</code>
            </div>
            
            <div className="pattern-card">
              <h3>🔄 State Lifting</h3>
              <p>Move state up to the closest common ancestor when multiple components need it.</p>
              <code>{`const [sharedState, setSharedState] = useState(initialValue);`}</code>
            </div>
            
            <div className="pattern-card">
              <h3>🎭 State Machines</h3>
              <p>Use multiple boolean states to represent component states (loading, error, success).</p>
              <code>{`const [isLoading, setIsLoading] = useState(false);`}</code>
            </div>
            
            <div className="pattern-card">
              <h3>💾 Persistence</h3>
              <p>Save state to localStorage or sessionStorage for persistence across sessions.</p>
              <code>{`useEffect(() => localStorage.setItem('key', value), [value]);`}</code>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="next-steps">
          <h2>🚀 Next Steps</h2>
          <div className="steps-content">
            <p>After mastering state management, explore these advanced concepts:</p>
            <ul>
              <li><strong>useReducer:</strong> Complex state logic with reducers</li>
              <li><strong>Context API:</strong> Global state management</li>
              <li><strong>Custom Hooks:</strong> Extract reusable state logic</li>
              <li><strong>State Libraries:</strong> Redux, Zustand, or Jotai</li>
              <li><strong>Performance:</strong> React.memo, useMemo, and useCallback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
