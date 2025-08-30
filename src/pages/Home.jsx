/**
 * @page Home
 * @description Enhanced homepage showcasing all project features with modern card design.
 */
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "/vite.svg"; // ensures asset is bundled/cached
import "../App.css";
import "../examples/modern-forms.css";

export default function Home() {
  const [count, setCount] = useState(0);

  const projectFeatures = [
    {
      icon: "⚛️",
      title: "React Fundamentals",
      description: "Master core React concepts including components, props, state, and lifecycle",
      features: ["Component Architecture", "Props & State Management", "Event Handling", "Conditional Rendering"]
    },
    {
      icon: "🎣",
      title: "React Hooks",
      description: "Learn modern React patterns with built-in and custom hooks",
      features: ["useState & useEffect", "useRef & useMemo", "useCallback & useContext", "Custom Hooks"]
    },
    {
      icon: "🔄",
      title: "State Management",
      description: "Explore different approaches to managing application state",
      features: ["Local State", "Form Management", "List Operations", "Object State"]
    },
    {
      icon: "📝",
      title: "Props Examples",
      description: "Understand how to pass data between components effectively",
      features: ["Basic Props", "Children Props", "Multiple Props", "Dynamic Content"]
    },
    {
      icon: "🚀",
      title: "ES6+ JavaScript",
      description: "Modern JavaScript features and best practices",
      features: ["Arrow Functions", "Destructuring", "Template Literals", "Async/Await"]
    },
    {
      icon: "⚡",
      title: "Vite Build Tool",
      description: "Fast development and optimized production builds",
      features: ["Hot Module Replacement", "ES Modules", "Optimized Bundling", "TypeScript Support"]
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Logos */}
      <div className="hero-section">
        <div className="logo-container">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="hero-title">React.js Learning Platform</h1>
        <p className="hero-subtitle">
          Master React fundamentals, hooks, state management, and modern JavaScript
        </p>
        <div className="hero-cta">
          <button 
            className="modern-button modern-button--primary modern-button--large"
            onClick={() => setCount((c) => c + 1)}
          >
            🎯 Count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      {/* Project Overview */}
      <div className="project-overview">
        <h2 className="section-title">🚀 What You'll Learn</h2>
        <p className="section-description">
          This comprehensive React.js learning platform covers everything from basic concepts 
          to advanced patterns, with interactive examples and real-world scenarios.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {projectFeatures.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <ul className="feature-list">
              {feature.features.map((item, itemIndex) => (
                <li key={itemIndex} className="feature-item">
                  <span className="feature-bullet">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Getting Started */}
      <div className="getting-started">
        <h2 className="section-title">🎯 Getting Started</h2>
        <div className="getting-started-content">
          <div className="getting-started-card">
            <h3>📚 Explore Examples</h3>
            <p>Navigate through the examples using the navigation menu above. Each section contains interactive examples with detailed explanations.</p>
          </div>
          <div className="getting-started-card">
            <h3>🔧 Interactive Learning</h3>
            <p>All examples are fully interactive - modify code, see real-time results, and experiment with different approaches.</p>
          </div>
          <div className="getting-started-card">
            <h3>💡 Best Practices</h3>
            <p>Learn industry-standard patterns and best practices for building scalable React applications.</p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="tech-stack">
        <h2 className="section-title">🛠️ Built With</h2>
        <div className="tech-items">
          <div className="tech-item">
            <span className="tech-icon">⚛️</span>
            <span className="tech-name">React 18</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">⚡</span>
            <span className="tech-name">Vite</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🎨</span>
            <span className="tech-name">CSS3</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">📱</span>
            <span className="tech-name">Responsive</span>
          </div>
        </div>
      </div>
    </div>
  );
}
