import { demoDefaultParams } from "../../es6-practice";
import PrettyJson from "../PrettyJson.jsx";

/**
 * @component DemoDefaultParams
 * @description Default parameters.
 */
export default function DemoDefaultParams() {
  const data = demoDefaultParams(7);
  return <PrettyJson title="Default Parameters" data={data} />;
}
