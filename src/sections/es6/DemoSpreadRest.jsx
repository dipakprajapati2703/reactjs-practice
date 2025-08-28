import { demoSpreadRest } from "../../es6-practice";
import PrettyJson from "../PrettyJson.jsx";

/**
 * @component DemoSpreadRest
 * @description Spread/Rest usage.
 */
export default function DemoSpreadRest() {
  const data = demoSpreadRest();
  return <PrettyJson title="Spread & Rest" data={data} />;
}
