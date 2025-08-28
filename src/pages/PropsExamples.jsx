/**
 * @page PropsExamples
 * @description Demonstrates key props patterns.
 */
import { useState } from "react";
import {
  Greeting,
  ProfileCard,
  ActionButton,
  Card,
  Badge,
  Price,
  Toolbar,
} from "../props-examples"; // barrel file index.js

export default function PropsExamplesPage() {
  const [count, setCount] = useState(0);
  const user = { first: "Dipak", last: "Prajapati", skills: ["PHP", "React", "Docker"] };

  return (
    <section>
      <h1>Props Examples</h1>

      <div style={{ marginTop: 12 }}>
        <Greeting name="Dipak" excited />
      </div>

      <div style={{ marginTop: 12 }}>
        <ProfileCard user={user} />
      </div>

      <div style={{ marginTop: 12 }}>
        <ActionButton label="Run Action" onRun={() => setCount((c) => c + 1)} />
        <p>Count: {count}</p>
      </div>

      <div style={{ marginTop: 12 }}>
        <Card title="Children Demo">
          <p>This paragraph is passed as <code>props.children</code>.</p>
        </Card>
      </div>

      <div style={{ marginTop: 12 }}>
        <Badge text="New" />
      </div>

      <div style={{ marginTop: 12 }}>
        <Price amount={199.99} currency="INR" />
      </div>

      <div style={{ marginTop: 12 }}>
        <Toolbar left={<span>Logo</span>} right={<button>Login</button>} />
      </div>
    </section>
  );
}
