/**
 * @page Es6Examples
 * @description Renders all ES6 demos as separate components.
 */
import DemoLetConst from "../sections/es6/DemoLetConst.jsx";
import DemoArrowFunctions from "../sections/es6/DemoArrowFunctions.jsx";
import DemoTemplateLiterals from "../sections/es6/DemoTemplateLiterals.jsx";
import DemoDestructuring from "../sections/es6/DemoDestructuring.jsx";
import DemoSpreadRest from "../sections/es6/DemoSpreadRest.jsx";
import DemoDefaultParams from "../sections/es6/DemoDefaultParams.jsx";
import DemoArrayMethods from "../sections/es6/DemoArrayMethods.jsx";
import DemoModules from "../sections/es6/DemoModules.jsx";
import DemoAsyncAwait from "../sections/es6/DemoAsyncAwait.jsx";

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
