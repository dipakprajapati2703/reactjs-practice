import { useEffect, useState } from "react";
import { demoAsyncAwait } from "./es6-practice.js";
import PrettyJson from "./PrettyJson.jsx";

/**
 * @component DemoAsyncAwait
 * @description Promises & async/await.
 */
export default function DemoAsyncAwait() {
  const [data, setData] = useState({ note: "Loading..." });

  useEffect(() => {
    demoAsyncAwait().then(setData);
  }, []);

  return <PrettyJson title="Async/Await" data={data} />;
}
