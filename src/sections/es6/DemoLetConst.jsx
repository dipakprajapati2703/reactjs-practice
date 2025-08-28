import { demoLetConst } from "../../es6-practice";
import PrettyJson from "../PrettyJson.jsx";

/**
 * @component DemoLetConst
 * @description Showcases let/const behavior.
 */
export default function DemoLetConst() {
  const data = demoLetConst();
  return <PrettyJson title="let / const" data={data} />;
}
