/**
 * @component useEffectExample
 * @description Demonstrates useEffect hook for side effects and lifecycle management.
 */
import { useState, useEffect } from "react";
import "./HooksExample.css";
import "../../examples/modern-forms.css";

export default function useEffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Effect 1: Run on every render (componentDidUpdate equivalent)
  useEffect(() => {
    console.log('🔄 Effect 1: Component updated, count is:', count);
    document.title = `Count: ${count}`;
  });

  // Effect 2: Run only when count changes (componentDidUpdate with dependency)
  useEffect(() => {
    console.log('🎯 Effect 2: Count changed to:', count);
    
    // Simulate API call or expensive operation
    const timer = setTimeout(() => {
      console.log('⏰ Delayed effect for count:', count);
    }, 1000);

    return () => {
      console.log('🧹 Cleaning up timer for count:', count);
      clearTimeout(timer);
    };
  }, [count]);

  // Effect 3: Run only once (componentDidMount equivalent)
  useEffect(() => {
    console.log('🚀 Effect 3: Component mounted');
    
    // Simulate initial data fetch
    const fetchInitialData = async () => {
      console.log('📡 Fetching initial data...');
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('✅ Initial data fetched');
    };
    
    fetchInitialData();
  }, []);

  // Effect 4: Run when name changes, with cleanup
  useEffect(() => {
    if (name.trim()) {
      console.log('👤 Effect 4: Name changed to:', name);
      
      // Simulate search API call
      const searchTimer = setTimeout(() => {
        console.log('🔍 Searching for:', name);
      }, 300);

      return () => {
        console.log('🧹 Cleaning up search for:', name);
        clearTimeout(searchTimer);
      };
    }
  }, [name]);

  // Effect 5: Window resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    console.log('📱 Effect 5: Window resize listener added');

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('🧹 Effect 5: Window resize listener removed');
    };
  }, []);

  // Effect 6: Mouse move listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    console.log('🖱️ Effect 6: Mouse move listener added');

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      console.log('🧹 Effect 6: Mouse move listener removed');
    };
  }, []);

  // Effect 7: Online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    console.log('🌐 Effect 7: Network status listeners added');

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      console.log('🧹 Effect 7: Network status listeners removed');
    };
  }, []);

  // Effect 8: Cleanup on unmount
  useEffect(() => {
    console.log('🎭 Effect 8: Component is active');
    
    return () => {
      console.log('💀 Effect 8: Component will unmount - cleanup time!');
    };
  }, []);

  return (
    <div className="hook-example">
      <div className="example-header">
        <h3>🔄 useEffect Hook</h3>
        <p>Manage side effects, lifecycle events, and external interactions in functional components.</p>
      </div>

      <div className="example-content">
        <div className="demo-section">
          <h4>🎯 Basic Counter Effect</h4>
          <p>Document title updates automatically when count changes:</p>
          <div className="counter-demo">
            <button onClick={() => setCount(c => c + 1)} className="modern-button primary">
              ➕ Increment
            </button>
            <span className="counter-display">Count: {count}</span>
            <button onClick={() => setCount(c => c - 1)} className="modern-button secondary">
              ➖ Decrement
            </button>
          </div>
          <p className="effect-info">Check the browser tab title - it updates automatically!</p>
        </div>

        <div className="demo-section">
          <h4>👤 Name Input Effect</h4>
          <p>Search effect with debouncing and cleanup:</p>
          <div className="input-controls">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="modern-input"
              placeholder="Type a name to see search effect..."
            />
          </div>
          <p className="effect-info">Watch console for search effects and cleanup logs.</p>
        </div>

        <div className="demo-section">
          <h4>📱 Window Resize Effect</h4>
          <p>Window size tracking with event listener:</p>
          <div className="window-info">
            <p><strong>Current Width:</strong> {windowWidth}px</p>
            <p><strong>Status:</strong> <span className={isOnline ? 'online' : 'offline'}>
              {isOnline ? '🟢 Online' : '🔴 Offline'}
            </span></p>
          </div>
          <p className="effect-info">Resize your browser window to see the effect!</p>
        </div>

        <div className="demo-section">
          <h4>🖱️ Mouse Position Effect</h4>
          <p>Real-time mouse tracking with cleanup:</p>
          <div className="mouse-info">
            <p><strong>Mouse X:</strong> {mousePosition.x}px</p>
            <p><strong>Mouse Y:</strong> {mousePosition.y}px</p>
          </div>
          <p className="effect-info">Move your mouse around to see real-time updates!</p>
        </div>

        <div className="demo-section">
          <h4>🔍 Effect Types & Cleanup</h4>
          <div className="effect-types">
            <div className="effect-type">
              <h5>🔄 Every Render</h5>
              <p>Runs after every render (like componentDidUpdate)</p>
            </div>
            <div className="effect-type">
              <h5>🎯 Dependency-based</h5>
              <p>Runs only when specific values change</p>
            </div>
            <div className="effect-type">
              <h5>🚀 Mount Only</h5>
              <p>Runs only once when component mounts</p>
            </div>
            <div className="effect-type">
              <h5>🧹 With Cleanup</h5>
              <p>Runs cleanup function before next effect or unmount</p>
            </div>
          </div>
        </div>
      </div>

      <div className="key-concepts">
        <h4>🎯 Key Concepts</h4>
        <ul>
          <li>⚡ <strong>Side Effects</strong> - Handle operations outside React's render cycle</li>
          <li>🔄 <strong>Lifecycle Management</strong> - Replace class component lifecycle methods</li>
          <li>🧹 <strong>Cleanup</strong> - Prevent memory leaks and unnecessary operations</li>
          <li>📡 <strong>API Calls</strong> - Handle data fetching and external interactions</li>
          <li>🎭 <strong>Event Listeners</strong> - Manage DOM events and subscriptions</li>
        </ul>
      </div>

      <div className="best-practices">
        <h4>✅ Best Practices</h4>
        <ul>
          <li>🎯 <strong>Dependencies</strong> - Always include all dependencies in the array</li>
          <li>🧹 <strong>Cleanup</strong> - Return cleanup functions for subscriptions and timers</li>
          <li>📦 <strong>Separation</strong> - Use multiple effects for different concerns</li>
          <li>⚡ <strong>Performance</strong> - Avoid unnecessary effect runs with proper dependencies</li>
          <li>🔍 <strong>Debugging</strong> - Use console logs to track effect execution</li>
        </ul>
      </div>

      <div className="common-patterns">
        <h4>🔧 Common Patterns</h4>
        <ul>
          <li>📡 <strong>Data Fetching</strong> - useEffect for API calls and data loading</li>
          <li>🎭 <strong>Event Listeners</strong> - DOM events with proper cleanup</li>
          <li>⏰ <strong>Timers</strong> - setTimeout/setInterval with cleanup</li>
          <li>🔄 <strong>Subscriptions</strong> - WebSocket, observables, or custom subscriptions</li>
          <li>📱 <strong>Browser APIs</strong> - Geolocation, notifications, or storage</li>
        </ul>
      </div>

      <div className="next-steps">
        <h4>🚀 Next Steps</h4>
        <ul>
          <li><strong>useLayoutEffect:</strong> Synchronous effects that run before browser paint</li>
          <li><strong>Custom Hooks:</strong> Extract effect logic into reusable hooks</li>
          <li><strong>Effect Optimization:</strong> useCallback and useMemo for effect dependencies</li>
          <li><strong>Error Boundaries:</strong> Handle errors in effects gracefully</li>
          <li><strong>Testing:</strong> Test effects with React Testing Library</li>
        </ul>
      </div>
    </div>
  );
}
