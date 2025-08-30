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

export default function Es6ExamplesPage() {
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
        <div className="es6-overview">
          <h2>📚 ES6+ Features Overview</h2>
          <p>
            ES6 (ECMAScript 2015) introduced many powerful features that make JavaScript more expressive, 
            readable, and maintainable. Explore these examples to master modern JavaScript development.
          </p>
        </div>

        <div className="es6-examples-grid">
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

        <div className="es6-next-steps">
          <h2>🚀 Next Steps</h2>
          <p>
            After mastering these ES6+ features, explore advanced concepts:
          </p>
          <ul>
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
