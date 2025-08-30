/**
 * @page Es6Examples
 * @description Renders all ES6 demos with modern styling and proper JSON formatting.
 */
import DemoLetConst from "../examples/es6-example/DemoLetConst.jsx";
import DemoArrowFunctions from "../examples/es6-example/DemoArrowFunctions.jsx";
import DemoTemplateLiterals from "../examples/es6-example/DemoTemplateLiterals.jsx";
import DemoDestructuring from "../examples/es6-example/DemoDestructuring.jsx";
import DemoSpreadRest from "../examples/es6-example/DemoSpreadRest.jsx";
import DemoDefaultParams from "../examples/es6-example/DemoDefaultParams.jsx";
import DemoArrayMethods from "../examples/es6-example/DemoArrayMethods.jsx";
import DemoModules from "../examples/es6-example/DemoModules.jsx";
import DemoAsyncAwait from "../examples/es6-example/DemoAsyncAwait.jsx";
import "../examples/modern-forms.css";

export default function Es6ExamplesPage() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>🚀 ES6+ JavaScript Examples</h1>
        <p className="page-description">
          Explore modern JavaScript features with interactive examples. Each section demonstrates 
          key ES6+ concepts with proper JSON formatting and beautiful styling.
        </p>
      </div>

      <div className="page-content">
        <div className="es6-overview" style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '25px', 
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', 
          border: '1px solid #e1e8ed',
          marginBottom: '30px'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '1.8rem', fontWeight: 600 }}>📚 ES6+ Features Overview</h2>
          <p style={{ color: '#6c757d', lineHeight: 1.6, margin: 0, fontSize: '1.1rem' }}>
            ES6 (ECMAScript 2015) introduced many powerful features that make JavaScript more expressive, 
            readable, and maintainable. Explore these examples to master modern JavaScript development.
          </p>
        </div>

        <div className="es6-examples-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '25px' 
        }}>
          <DemoLetConst />
          <DemoArrowFunctions />
          <DemoTemplateLiterals />
          <DemoDestructuring />
          <DemoSpreadRest />
          <DemoDefaultParams />
          <DemoArrayMethods />
          <DemoModules />
          <DemoAsyncAwait />
        </div>

        <div className="es6-next-steps" style={{ 
          background: '#f8f9fa', 
          padding: '25px', 
          borderRadius: '16px', 
          marginTop: '30px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '1.6rem', fontWeight: 600 }}>🚀 Next Steps</h2>
          <p style={{ color: '#6c757d', lineHeight: 1.6, margin: '0 0 15px 0' }}>
            After mastering these ES6+ features, explore advanced concepts:
          </p>
          <ul style={{ color: '#6c757d', lineHeight: 1.6, margin: 0, paddingLeft: '20px' }}>
            <li><strong>TypeScript:</strong> Add static typing to your JavaScript code</li>
            <li><strong>Modern Frameworks:</strong> Use React, Vue, or Angular with ES6+</li>
            <li><strong>Build Tools:</strong> Webpack, Vite, or Parcel for modern development</li>
            <li><strong>Testing:</strong> Jest, Vitest, or Cypress for robust applications</li>
            <li><strong>Performance:</strong> Optimize with modern JavaScript patterns</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
