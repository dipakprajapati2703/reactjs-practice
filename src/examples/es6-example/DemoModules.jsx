import { demoModules } from "./es6-practice.js";
import PrettyJson from "./PrettyJson.jsx";

/**
 * @component DemoModules
 * @description ES modules note.
 */
export default function DemoModules() {
  const data = demoModules();
  return <PrettyJson title="Modules (import/export)" data={data} />;
}
