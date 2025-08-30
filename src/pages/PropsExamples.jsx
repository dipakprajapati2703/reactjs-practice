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
import "../examples/shared-styles.css";

export default function PropsExamplesPage() {
  const [count, setCount] = useState(0);
  const [activeExample, setActiveExample] = useState('greeting');
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
      extraContent: <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>Count: <strong>{count}</strong></p>
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
        left: <span style={{ fontWeight: 'bold', color: '#3498db' }}>🚀 React App</span>,
        right: <button style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#27ae60', color: 'white', cursor: 'pointer' }}>Login</button>
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
        <h1>🎯 React Props Examples</h1>
        <p className="page-description">
          Master React props patterns from basic to advanced. Learn how to pass data between components, 
          handle events, and build reusable component interfaces.
        </p>
      </div>

      <div className="page-content">
        {/* Props Overview */}
        <div className="props-overview" style={{ background: 'white', borderRadius: '16px', padding: '25px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', border: '1px solid #e1e8ed' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '1.8rem', fontWeight: 600 }}>📚 Props Fundamentals</h2>
          <p style={{ color: '#6c757d', lineHeight: 1.6, margin: 0, fontSize: '1.1rem' }}>
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
            <div className="example-card" style={{ background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '12px', padding: '25px', transition: 'all 0.3s ease' }}>
              <h3 style={{ color: '#2c3e50', margin: '0 0 15px 0', fontSize: '1.4rem', fontWeight: 600, borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>
                {ActiveExample.name}
              </h3>
              <p>{ActiveExample.description}:</p>
              
              <div className="component-demo" style={{ background: 'white', border: '1px solid #e9ecef', borderRadius: '8px', padding: '20px', margin: '20px 0', textAlign: 'center', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
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
                  <div style={{ color: 'red' }}>
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
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <p>Select an example from the navigation cards above to get started!</p>
            </div>
          )}
        </div>

        {/* Best Practices */}
        <div className="best-practices">
          <h2>✅ Props Best Practices</h2>
          <div className="practices-grid">
            <div className="practice-card">
              <h3>📝 Naming Conventions</h3>
              <ul>
                <li>Use camelCase for prop names</li>
                <li>Be descriptive and clear</li>
                <li>Use consistent naming patterns</li>
              </ul>
            </div>
            
            <div className="practice-card">
              <h3>🔒 Immutability</h3>
              <ul>
                <li>Props are read-only</li>
                <li>Never modify props directly</li>
                <li>Use state for mutable data</li>
              </ul>
            </div>
            
            <div className="practice-card">
              <h3>🎯 Default Values</h3>
              <ul>
                <li>Provide sensible defaults</li>
                <li>Use destructuring with defaults</li>
                <li>Handle missing props gracefully</li>
              </ul>
            </div>
            
            <div className="practice-card">
              <h3>🧪 Validation</h3>
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
