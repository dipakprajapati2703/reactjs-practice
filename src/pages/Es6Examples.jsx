/**
 * @page Es6Examples
 * @description Renders all ES6 demos as separate components.
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
    <section>
      <h1>ES6 Examples</h1>
      <p>Each section below is its own component.</p>
      <DemoLetConst />
      <DemoArrowFunctions />
      <DemoTemplateLiterals />
      <DemoDestructuring />
      <DemoSpreadRest />
      <DemoDefaultParams />
      <DemoArrayMethods />
      <DemoModules />
      <DemoAsyncAwait />
    </section>
  );
}
