import { demoArrayMethods } from "../../es6-practice";
import PrettyJson from "../PrettyJson.jsx";

/**
 * @component DemoArrayMethods
 * @description Array map/filter/reduce.
 */
export default function DemoArrayMethods() {
  const data = demoArrayMethods();
  return <PrettyJson title="Array Methods" data={data} />;
}
