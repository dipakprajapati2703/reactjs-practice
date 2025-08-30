/**
 * @page PropsExamples
 * @description Demonstrates key props patterns with beautiful card-based design.
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
} from "../examples/props-example"; // barrel file index.js

export default function PropsExamplesPage() {
  const [activeExample, setActiveExample] = useState('greeting');
  const [count, setCount] = useState(0);
  const user = { first: "Dipak", last: "Prajapati", skills: ["PHP", "React", "Docker"] };

  const examples = [
    {
      id: 'greeting',
      name: '👋 Greeting Component',
      description: 'Simple props for text and boolean values',
      component: Greeting,
      props: { name: "Dipak", excited: true }
    },
    {
      id: 'profileCard',
      name: '👤 Profile Card Component',
      description: 'Object props for complex data structures',
      component: ProfileCard,
      props: { user: user }
    },
    {
      id: 'actionButton',
      name: '🔘 Action Button Component',
      description: 'Function props for event handling',
      component: ActionButton,
      props: { label: "Run Action", onRun: () => setCount((c) => c + 1) },
      extraContent: <p className="extra-content">Count: <strong>{count}</strong></p>
    },
    {
      id: 'card',
      name: '📦 Card Component with Children',
      description: 'Using props.children for content composition',
      component: Card,
      props: { title: "Children Demo" },
      children: (
        <>
          <p>This paragraph is passed as <code>props.children</code>.</p>
          <p>You can pass any JSX content as children!</p>
        </>
      )
    },
    {
      id: 'badge',
      name: '🏷️ Badge Component',
      description: 'Simple text props with styling',
      component: Badge,
      props: { text: "New" },
      multipleProps: [
        { text: "New" },
        { text: "Hot" },
        { text: "Sale" }
      ]
    },
    {
      id: 'price',
      name: '💰 Price Component',
      description: 'Multiple props for flexible display',
      component: Price,
      props: { amount: 199.99, currency: "INR" },
      multipleProps: [
        { amount: 199.99, currency: "INR" },
        { amount: 29.99, currency: "USD" },
        { amount: 49.99, currency: "EUR" }
      ]
    },
    {
      id: 'toolbar',
      name: '🛠️ Toolbar Component',
      description: 'JSX props for complex content',
      component: Toolbar,
      props: {
        left: <span className="app-title">🚀 React App</span>,
        right: <button className="login-button">Login</button>
      }
    }
  ];

  const handleExampleChange = (exampleId) => {
    console.log('🎯 Props example change:', exampleId);
    setActiveExample(exampleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ActiveExample = examples.find(ex => ex.id === activeExample);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">🎯 React Props Examples</h1>
        <p className="page-description">
          Master React props patterns from basic to advanced. Learn how to pass data between components, 
          handle events, and build reusable component interfaces.
        </p>
      </div>

      <div className="page-content">
        {/* Props Overview */}
        <div className="props-overview">
          <h2>📚 Props Fundamentals</h2>
          <p>
            Props (properties) are React's way of passing data from parent to child components. 
            They are read-only and help create reusable, configurable components.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="examples-navigation">
          <h2>🎯 Choose an Example to Explore</h2>
          <div className="nav-tabs">
            {examples.map((example) => (
              <button
                key={example.id}
                onClick={() => handleExampleChange(example.id)}
                className={`nav-tab ${activeExample === example.id ? 'active' : ''}`}
              >
                <div className="tab-content">
                  <div className="tab-icon">{example.name.split(' ')[0]}</div>
                  <div className="tab-details">
                    <div className="tab-name">{example.name.split(' ').slice(1).join(' ')}</div>
                    <div className="tab-description">{example.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Example Display */}
        <div className="example-display">
          {ActiveExample ? (
            <div className="example-card">
              <h3>{ActiveExample.name}</h3>
              <p>{ActiveExample.description}:</p>
              
              <div className="component-demo">
                {ActiveExample.component ? (
                  <>
                    {ActiveExample.multipleProps ? (
                      // Render multiple instances for components like Badge and Price
                      ActiveExample.multipleProps.map((props, index) => (
                        <ActiveExample.component key={index} {...props} />
                      ))
                    ) : (
                      // Render single instance with children if they exist
                      <ActiveExample.component {...ActiveExample.props}>
                        {ActiveExample.children}
                      </ActiveExample.component>
                    )}
                    {ActiveExample.extraContent}
                  </>
                ) : (
                  <div className="error-message">
                    ❌ {ActiveExample.name} component failed to load
                  </div>
                )}
              </div>

              <div className="code-explanation">
                <h4>Key Concepts:</h4>
                <ul>
                  {ActiveExample.id === 'greeting' && (
                    <>
                      <li><strong>String props</strong> - <code>name="Dipak"</code></li>
                      <li><strong>Boolean props</strong> - <code>excited</code> (shorthand for <code>excited={true}</code>)</li>
                      <li><strong>Conditional rendering</strong> - Different output based on prop values</li>
                    </>
                  )}
                  {ActiveExample.id === 'profileCard' && (
                    <>
                      <li><strong>Object props</strong> - <code>user=&#123;user&#125;</code></li>
                      <li><strong>Destructuring</strong> - Access nested properties easily</li>
                      <li><strong>Array rendering</strong> - Map over arrays in props</li>
                    </>
                  )}
                  {ActiveExample.id === 'actionButton' && (
                    <>
                      <li><strong>Function props</strong> - <code>onRun=&#123;() =&gt; setCount(c =&gt; c + 1)&#125;</code></li>
                      <li><strong>Event handling</strong> - Pass callbacks to child components</li>
                      <li><strong>State updates</strong> - Child can trigger parent state changes</li>
                    </>
                  )}
                  {ActiveExample.id === 'card' && (
                    <>
                      <li><strong>Children prop</strong> - <code>props.children</code> for content composition</li>
                      <li><strong>Content injection</strong> - Pass JSX content between component tags</li>
                      <li><strong>Flexible layouts</strong> - Reusable container components</li>
                    </>
                  )}
                  {ActiveExample.id === 'badge' && (
                    <>
                      <li><strong>Text props</strong> - <code>text="New"</code></li>
                      <li><strong>Reusable components</strong> - Same component, different content</li>
                      <li><strong>Consistent styling</strong> - Uniform appearance across instances</li>
                    </>
                  )}
                  {ActiveExample.id === 'price' && (
                    <>
                      <li><strong>Number props</strong> - <code>amount=&#123;199.99&#125;</code></li>
                      <li><strong>Multiple props</strong> - Combine different prop types</li>
                      <li><strong>Formatting</strong> - Display data in different formats</li>
                    </>
                  )}
                  {ActiveExample.id === 'toolbar' && (
                    <>
                      <li><strong>JSX props</strong> - Pass complex JSX elements as props</li>
                      <li><strong>Layout composition</strong> - Flexible left/right content placement</li>
                      <li><strong>Component composition</strong> - Build complex UIs from simple components</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <div className="center-content">
              <p>Select an example from the navigation cards above to get started!</p>
            </div>
          )}
        </div>

        {/* Best Practices */}
        <div className="best-practices">
          <h2>✅ Props Best Practices</h2>
          <div className="practices-list">
            <div className="practice-item">
              <h4>📝 Naming Conventions</h4>
              <ul>
                <li>Use camelCase for prop names</li>
                <li>Be descriptive and clear</li>
                <li>Use consistent naming patterns</li>
              </ul>
            </div>
            
            <div className="practice-item">
              <h4>🔒 Immutability</h4>
              <ul>
                <li>Props are read-only</li>
                <li>Never modify props directly</li>
                <li>Use state for mutable data</li>
              </ul>
            </div>
            
            <div className="practice-item">
              <h4>🎯 Default Values</h4>
              <ul>
                <li>Provide sensible defaults</li>
                <li>Use destructuring with defaults</li>
                <li>Handle missing props gracefully</li>
              </ul>
            </div>
            
            <div className="practice-item">
              <h4>🧪 Validation</h4>
              <ul>
                <li>Use PropTypes for validation</li>
                <li>TypeScript for type safety</li>
                <li>Clear error messages</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="next-steps">
          <h2>🚀 Next Steps</h2>
          <div className="steps-content">
            <p>After mastering props, explore these advanced concepts:</p>
            <ul>
              <li><strong>State Management:</strong> Combine props with local component state</li>
              <li><strong>Context API:</strong> Avoid prop drilling with React Context</li>
              <li><strong>Custom Hooks:</strong> Extract reusable logic from components</li>
              <li><strong>Component Composition:</strong> Build complex UIs with simple components</li>
              <li><strong>Performance:</strong> Use React.memo and useMemo for optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
