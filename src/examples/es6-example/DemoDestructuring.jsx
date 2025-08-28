import { demoDestructuring } from "./es6-practice.js";
import PrettyJson from "./PrettyJson.jsx";

/**
 * @component DemoDestructuring
 * @description Object/array destructuring examples.
 */
export default function DemoDestructuring() {
  const data = demoDestructuring();
  return <PrettyJson title="Destructuring" data={data} />;
}
