import { demoTemplateLiterals } from "./es6-practice.js";
import PrettyJson from "./PrettyJson.jsx";

/**
 * @component DemoTemplateLiterals
 * @description Demonstrates template literals.
 */
export default function DemoTemplateLiterals() {
  const data = demoTemplateLiterals();
  return <PrettyJson title="Template Literals" data={data} />;
}
