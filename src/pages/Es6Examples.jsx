/**
 * @page Es6Examples
 * @description Renders all ES6 demos with modern styling and proper JSON formatting.
 */
import { useState } from "react";
import {
  DemoLetConst,
  DemoArrowFunctions,
  DemoTemplateLiterals,
  DemoDestructuring,
  DemoSpreadRest,
  DemoDefaultParams,
  DemoArrayMethods,
  DemoModules,
  DemoAsyncAwait,
  PrettyJson,
} from "../examples/es6-example"; // barrel file index.js

export default function Es6ExamplesPage() {
  const [activeExample, setActiveExample] = useState('letConst');

  const examples = [
    {
      id: 'letConst',
      name: '🔒 Let & Const',
      description: 'Block-scoped variable declarations',
      component: DemoLetConst,
    },
    {
      id: 'arrowFunctions',
      name: '🏹 Arrow Functions',
      description: 'Concise function syntax with lexical this',
      component: DemoArrowFunctions,
    },
    {
      id: 'templateLiterals',
      name: '📝 Template Literals',
      description: 'String interpolation and multi-line strings',
      component: DemoTemplateLiterals,
    },
    {
      id: 'destructuring',
      name: '📦 Destructuring',
      description: 'Extract values from arrays and objects',
      component: DemoDestructuring,
    },
    {
      id: 'spreadRest',
      name: '🌊 Spread & Rest',
      description: 'Expand arrays and collect arguments',
      component: DemoSpreadRest,
    },
    {
      id: 'defaultParams',
      name: '⚡ Default Parameters',
      description: 'Function parameters with fallback values',
      component: DemoDefaultParams,
    },
    {
      id: 'arrayMethods',
      name: '🔧 Array Methods',
      description: 'Modern array manipulation methods',
      component: DemoArrayMethods,
    },
    {
      id: 'modules',
      name: '📚 ES6 Modules',
      description: 'Import and export syntax',
      component: DemoModules,
    },
    {
      id: 'asyncAwait',
      name: '⏳ Async/Await',
      description: 'Modern asynchronous programming',
      component: DemoAsyncAwait,
    },
  ];

  const handleExampleChange = (exampleId) => {
    console.log('🎯 ES6 example change:', exampleId);
    setActiveExample(exampleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ActiveExample = examples.find(ex => ex.id === activeExample);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">🚀 ES6+ JavaScript Examples</h1>
        <p className="page-description">
          Explore modern JavaScript features with interactive examples. Each section demonstrates 
          key ES6+ concepts with proper JSON formatting and beautiful styling.
        </p>
      </div>

      <div className="page-content">
        {/* ES6 Overview */}
        <div className="es6-overview">
          <h2>📚 ES6+ Features Overview</h2>
          <p>
            ES6 (ECMAScript 2015) introduced many powerful features that make JavaScript more expressive, 
            readable, and maintainable. Explore these examples to master modern JavaScript development.
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
          {ActiveExample ? (
            <div className="example-card">
              <h3>{ActiveExample.name}</h3>
              <p>{ActiveExample.description}:</p>
              
              <div className="component-demo">
                <ActiveExample.component />
              </div>

              <div className="code-explanation">
                <h4>Key Concepts:</h4>
                <ul>
                  {ActiveExample.id === 'letConst' && (
                    <>
                      <li><strong>Block Scope:</strong> Variables declared with <code>let</code> and <code>const</code> are block-scoped</li>
                      <li><strong>Hoisting:</strong> <code>let</code> and <code>const</code> are not hoisted like <code>var</code></li>
                      <li><strong>Reassignment:</strong> <code>let</code> allows reassignment, <code>const</code> does not</li>
                    </>
                  )}
                  {ActiveExample.id === 'arrowFunctions' && (
                    <>
                      <li><strong>Lexical this:</strong> Arrow functions inherit <code>this</code> from surrounding scope</li>
                      <li><strong>Concise syntax:</strong> Shorter function declarations for simple operations</li>
                      <li><strong>Implicit return:</strong> Single expressions can omit <code>return</code> and braces</li>
                    </>
                  )}
                  {ActiveExample.id === 'templateLiterals' && (
                    <>
                      <li><strong>String interpolation:</strong> Use <code>${expression}</code> to embed values</li>
                      <li><strong>Multi-line strings:</strong> No need for <code>\n</code> or string concatenation</li>
                      <li><strong>Expression evaluation:</strong> Any JavaScript expression can be embedded</li>
                    </>
                  )}
                  {ActiveExample.id === 'destructuring' && (
                    <>
                      <li><strong>Array destructuring:</strong> Extract values by position: <code>const [a, b] = array</code></li>
                      <li><strong>Object destructuring:</strong> Extract by property name: <code>const {name, age} = object</code></li>
                      <li><strong>Default values:</strong> Provide fallbacks: <code>const {name = 'Unknown'} = object</code></li>
                    </>
                  )}
                  {ActiveExample.id === 'spreadRest' && (
                    <>
                      <li><strong>Spread operator:</strong> Expand arrays and objects: <code>[...array, newItem]</code></li>
                      <li><strong>Rest parameters:</strong> Collect arguments: <code>function(...args)</code></li>
                      <li><strong>Object spreading:</strong> Merge objects: <code>&#123;...obj1, ...obj2&#125;</code></li>
                    </>
                  )}
                  {ActiveExample.id === 'defaultParams' && (
                    <>
                      <li><strong>Parameter defaults:</strong> Set fallback values: <code>function(param = 'default')</code></li>
                      <li><strong>Expression evaluation:</strong> Defaults can be expressions or function calls</li>
                      <li><strong>Undefined handling:</strong> Only <code>undefined</code> triggers default values</li>
                    </>
                  )}
                  {ActiveExample.id === 'arrayMethods' && (
                    <>
                      <li><strong>Functional programming:</strong> Chain methods for data transformation</li>
                      <li><strong>Immutability:</strong> Methods return new arrays without modifying originals</li>
                      <li><strong>Performance:</strong> Choose appropriate methods for your use case</li>
                    </>
                  )}
                  {ActiveExample.id === 'modules' && (
                    <>
                      <li><strong>Named exports:</strong> Export specific functions: <code>export function name()</code></li>
                      <li><strong>Default exports:</strong> One main export: <code>export default Component</code></li>
                      <li><strong>Import syntax:</strong> Choose what to import: <code>import {name} from './module'</code></li>
                    </>
                  )}
                  {ActiveExample.id === 'asyncAwait' && (
                    <>
                      <li><strong>Synchronous-looking code:</strong> Write async code that looks synchronous</li>
                      <li><strong>Error handling:</strong> Use try-catch blocks for error handling</li>
                      <li><strong>Promise-based:</strong> Built on top of Promises for better control flow</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <div className="center-content">
              <p>Select an example from the navigation cards above to get started!</p>
            </div>
          )}
        </div>

        {/* Best Practices */}
        <div className="best-practices">
          <h2>✅ ES6+ Best Practices</h2>
          <div className="practices-list">
            <div className="practice-item">
              <h4>🔒 Variable Declarations</h4>
              <ul>
                <li>Use <code>const</code> by default</li>
                <li>Use <code>let</code> when reassignment is needed</li>
                <li>Avoid <code>var</code> for new code</li>
              </ul>
            </div>
            
            <div className="practice-item">
              <h4>🏹 Arrow Functions</h4>
              <ul>
                <li>Use for simple, one-liner functions</li>
                <li>Be careful with <code>this</code> binding</li>
                <li>Keep them concise and readable</li>
              </ul>
            </div>
            
            <div className="practice-item">
              <h4>📦 Destructuring</h4>
              <ul>
                <li>Extract only what you need</li>
                <li>Use default values for safety</li>
                <li>Nest destructuring for complex objects</li>
              </ul>
            </div>
            
            <div className="practice-item">
              <h4>🌊 Spread & Rest</h4>
              <ul>
                <li>Use spread for immutable updates</li>
                <li>Rest parameters for flexible functions</li>
                <li>Combine with destructuring for clean code</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="next-steps">
          <h2>🚀 Next Steps</h2>
          <div className="steps-content">
            <p>After mastering these ES6+ features, explore these advanced concepts:</p>
            <ul>
              <li><strong>TypeScript:</strong> Add static typing to your JavaScript code</li>
              <li><strong>Modern Frameworks:</strong> Use React, Vue, or Angular with ES6+</li>
              <li><strong>Build Tools:</strong> Webpack, Vite, or Parcel for modern development</li>
              <li><strong>Testing:</strong> Jest, Vitest, or Cypress for robust applications</li>
              <li><strong>Performance:</strong> Optimize with modern JavaScript patterns</li>
              <li><strong>Advanced Patterns:</strong> Generators, Proxies, and Symbols</li>
              <li><strong>Module Bundlers:</strong> Tree shaking and code splitting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
