import React, { useState } from 'react';
import {
  useEffectExample,
  useRefExample,
  useContextExample,
  useMemoExample,
  useCallbackExample,
  CustomHooksExample
} from '../examples/hooks-example';


/**
 * Hooks Examples Page
 * 
 * This page demonstrates all the React Hooks examples from beginner to intermediate level.
 * Users can navigate between different hooks to learn their concepts and usage patterns.
 */
const HooksExamples = () => {
  const [activeExample, setActiveExample] = useState('useEffect');

  const examples = [
    {
      id: 'useEffect',
      name: '🔄 useEffect Hook',
      description: 'Side effects, cleanup, and dependency management',
      component: useEffectExample
    },
    {
      id: 'useRef',
      name: '🎯 useRef Hook',
      description: 'DOM manipulation and instance variables',
      component: useRefExample
    },
    {
      id: 'useContext',
      name: '🌐 useContext Hook',
      description: 'Context API and avoiding prop drilling',
      component: useContextExample
    },
    {
      id: 'useMemo',
      name: '⚡ useMemo Hook',
      description: 'Performance optimization and memoization',
      component: useMemoExample
    },
    {
      id: 'useCallback',
      name: '🔄 useCallback Hook',
      description: 'Stable function references and React.memo',
      component: useCallbackExample
    },
    {
      id: 'customHooks',
      name: '🪝 Custom Hooks',
      description: 'Building reusable logic with custom hooks',
      component: CustomHooksExample
    }
  ];

  const handleExampleChange = (exampleId) => {
    setActiveExample(exampleId);
    // Scroll to top when changing examples
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ActiveComponent = examples.find(ex => ex.id === activeExample)?.component;

  return (
    <div className="page">
      <div className="page-header">
        <h1>🪝 React Hooks Examples</h1>
        <p className="page-description">
          Master React Hooks from beginner to intermediate level. Learn useEffect, useRef, useContext, 
          useMemo, useCallback, and how to build custom hooks.
        </p>
      </div>

      <div className="page-content">
        {/* Navigation Tabs */}
        <div className="examples-navigation">
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
          {ActiveComponent && <ActiveComponent />}
        </div>

        {/* Learning Path */}
        <div className="learning-path">
          <h2>📚 Learning Path</h2>
          <div className="path-steps">
            <div className="path-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>🔄 useEffect - Side Effects</h3>
                <p>Start with useEffect to understand how React handles side effects, cleanup, and dependency management.</p>
              </div>
            </div>
            
            <div className="path-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>🎯 useRef - DOM & Values</h3>
                <p>Learn useRef for direct DOM manipulation and storing values that don't trigger re-renders.</p>
              </div>
            </div>
            
            <div className="path-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>🌐 useContext - Global State</h3>
                <p>Master useContext to share data across components without prop drilling.</p>
              </div>
            </div>
            
            <div className="path-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>⚡ useMemo - Performance</h3>
                <p>Optimize performance with useMemo for expensive calculations and referential stability.</p>
              </div>
            </div>
            
            <div className="path-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>🔄 useCallback - Stable Functions</h3>
                <p>Use useCallback to prevent unnecessary re-renders in memoized child components.</p>
              </div>
            </div>
            
            <div className="path-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>🪝 Custom Hooks - Reusable Logic</h3>
                <p>Build your own hooks to extract and reuse component logic across your application.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="key-concepts">
          <h2>🎯 Key Concepts Covered</h2>
          <div className="concepts-grid">
            <div className="concept-card">
              <h3>🔄 Side Effects</h3>
              <p>Managing API calls, subscriptions, timers, and DOM updates with useEffect</p>
            </div>
            
            <div className="concept-card">
              <h3>🎯 DOM Manipulation</h3>
              <p>Direct access to DOM elements for focus, scroll, and measurements with useRef</p>
            </div>
            
            <div className="concept-card">
              <h3>🌐 Global State</h3>
              <p>Sharing data across component trees without prop drilling using useContext</p>
            </div>
            
            <div className="concept-card">
              <h3>⚡ Performance</h3>
              <p>Optimizing renders with useMemo and useCallback for better application performance</p>
            </div>
            
            <div className="concept-card">
              <h3>🧹 Cleanup</h3>
              <p>Proper cleanup of effects, timers, and subscriptions to prevent memory leaks</p>
            </div>
            
            <div className="concept-card">
              <h3>🪝 Reusability</h3>
              <p>Building custom hooks to extract and share logic between components</p>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="best-practices">
          <h2>✅ Best Practices</h2>
          <div className="practices-list">
            <div className="practice-item">
              <h4>📌 Rules of Hooks</h4>
              <ul>
                <li>Only call hooks at the top level of your component</li>
                <li>Only call hooks from React functions or custom hooks</li>
                <li>Keep dependency arrays accurate and complete</li>
              </ul>
            </div>
            
            <div className="practice-item">
              <h4>🧹 Effect Cleanup</h4>
              <ul>
                <li>Always return cleanup functions from useEffect</li>
                <li>Clean up timers, subscriptions, and event listeners</li>
                <li>Use AbortController for fetch requests</li>
              </ul>
            </div>
            
            <div className="practice-item">
              <h4>⚡ Performance</h4>
              <ul>
                <li>Measure performance before optimizing</li>
                <li>Use useMemo and useCallback judiciously</li>
                <li>Memoize context values to prevent unnecessary re-renders</li>
              </ul>
            </div>
            
            <div className="practice-item">
              <h4>🪝 Custom Hooks</h4>
              <ul>
                <li>Start hook names with "use"</li>
                <li>Keep hooks focused on single responsibility</li>
                <li>Return consistent data structures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="next-steps">
          <h2>🚀 Next Steps</h2>
          <div className="steps-content">
            <p>After mastering these hooks, consider exploring:</p>
            <ul>
              <li><strong>Advanced Hooks:</strong> useReducer, useLayoutEffect, useImperativeHandle</li>
              <li><strong>State Management:</strong> Redux, Zustand, or Context + useReducer</li>
              <li><strong>Testing:</strong> Testing hooks with React Testing Library</li>
              <li><strong>Performance:</strong> React DevTools Profiler and performance monitoring</li>
              <li><strong>Real Projects:</strong> Apply these concepts to build real applications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HooksExamples;
