import React from 'react';
import {
  CounterExample,
  ToggleExample,
  FormExample,
  ListExample,
  ObjectExample
} from '../examples/state-example';

/**
 * @page StateExamples
 * @description Demonstrates React state management patterns and examples.
 */
export default function StateExamplesPage() {
  return (
    <section>
      <h1>React State Examples</h1>
      <p>Explore different patterns for managing component state with React hooks.</p>
      
      <div className="state-examples-container">
        <CounterExample />
        <hr />
        <ToggleExample />
        <hr />
        <FormExample />
        <hr />
        <ListExample />
        <hr />
        <ObjectExample />
      </div>
    </section>
  );
}
