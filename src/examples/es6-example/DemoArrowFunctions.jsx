import { demoArrowFunctions } from "./es6-practice.js";
import PrettyJson from "./PrettyJson.jsx";

/**
 * @component DemoArrowFunctions
 * @description Demonstrates arrow functions.
 */
export default function DemoArrowFunctions() {
  const data = demoArrowFunctions();
  return <PrettyJson title="Arrow Functions" data={data} />;
}
