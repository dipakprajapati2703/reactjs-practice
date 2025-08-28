import React, { useState, useEffect, useCallback } from 'react';
import './HooksExample.css';

/**
 * Custom Hooks Examples
 * 
 * This component demonstrates the core concepts of custom hooks:
 * 1. Extracting reusable logic into custom hooks
 * 2. Composing multiple hooks together
 * 3. Creating hooks with clear input/output contracts
 * 4. Practical examples of common custom hook patterns
 */

// Custom Hook 1: useLocalStorage
const useLocalStorage = (key, initialValue) => {
  // Get initial value from localStorage or use provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage when value changes
  const setValue = useCallback((value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};

// Custom Hook 2: useOnlineStatus
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [lastSeen, setLastSeen] = useState(new Date());

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setLastSeen(new Date());
    };

    const handleOffline = () => {
      setIsOnline(false);
      setLastSeen(new Date());
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return {
    isOnline,
    lastSeen,
    isOffline: !isOnline,
    timeSinceLastSeen: Date.now() - lastSeen.getTime()
  };
};

// Custom Hook 3: useDebouncedValue
const useDebouncedValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Custom Hook 4: useWindowSize
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...windowSize,
    isMobile: windowSize.width < 768,
    isTablet: windowSize.width >= 768 && windowSize.width < 1024,
    isDesktop: windowSize.width >= 1024
  };
};

// Custom Hook 5: usePrevious
const usePrevious = (value) => {
  const ref = React.useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

// Custom Hook 6: useToggle
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, { toggle, setTrue, setFalse, setValue }];
};

// Custom Hook 7: useCounter
const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => prev + step);
  }, [step]);

  const decrement = useCallback(() => {
    setCount(prev => prev - step);
  }, [step]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const setValue = useCallback((value) => {
    setCount(value);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
    isPositive: count > 0,
    isNegative: count < 0,
    isZero: count === 0
  };
};

// Custom Hook 8: useForm
const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleBlur = useCallback((name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  const setFieldValue = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const setFieldError = useCallback((name, error) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  }, []);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const validate = useCallback((validationSchema) => {
    const newErrors = {};
    Object.keys(validationSchema).forEach(field => {
      const value = values[field];
      const rules = validationSchema[field];
      
      if (rules.required && !value) {
        newErrors[field] = `${field} is required`;
      } else if (rules.minLength && value && value.length < rules.minLength) {
        newErrors[field] = `${field} must be at least ${rules.minLength} characters`;
      } else if (rules.pattern && value && !rules.pattern.test(value)) {
        newErrors[field] = rules.message || `${field} format is invalid`;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldError,
    reset,
    validate,
    isValid: Object.keys(errors).length === 0,
    isDirty: JSON.stringify(values) !== JSON.stringify(initialValues)
  };
};

const CustomHooksExample = () => {
  const [activeTab, setActiveTab] = useState('localStorage');
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Using our custom hooks
  const [userName, setUserName] = useLocalStorage('userName', '');
  const [userPreferences, setUserPreferences] = useLocalStorage('userPreferences', {
    theme: 'light',
    notifications: true,
    language: 'en'
  });
  
  const onlineStatus = useOnlineStatus();
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 500);
  const windowSize = useWindowSize();
  const previousWindowSize = usePrevious(windowSize);
  const [isVisible, visibilityActions] = useToggle(false);
  const counter = useCounter(0, 5);
  
  const form = useForm({
    name: '',
    email: '',
    message: ''
  });

  // Validation schema for the form
  const validationSchema = {
    name: { required: true, minLength: 2 },
    email: { 
      required: true, 
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    message: { required: true, minLength: 10 }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (form.validate(validationSchema)) {
      alert('Form submitted successfully!');
      form.reset();
    }
  };

  const tabs = [
    { id: 'localStorage', label: '💾 useLocalStorage', icon: '💾' },
    { id: 'onlineStatus', label: '🌐 useOnlineStatus', icon: '🌐' },
    { id: 'debouncedValue', label: '⏱️ useDebouncedValue', icon: '⏱️' },
    { id: 'windowSize', label: '📱 useWindowSize', icon: '📱' },
    { id: 'previous', label: '🔄 usePrevious', icon: '🔄' },
    { id: 'toggle', label: '🔄 useToggle', icon: '🔄' },
    { id: 'counter', label: '🔢 useCounter', icon: '🔢' },
    { id: 'form', label: '📝 useForm', icon: '📝' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'localStorage':
        return (
          <div className="tab-content">
            <h3>💾 useLocalStorage Hook</h3>
            <p>Persist data in the browser's localStorage with automatic JSON serialization:</p>
            
            <div className="hook-demo">
              <div className="demo-section">
                <h4>User Name (Persisted)</h4>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                  className="demo-input"
                />
                <p>This value persists across page reloads!</p>
              </div>
              
              <div className="demo-section">
                <h4>User Preferences (Persisted)</h4>
                <div className="preferences">
                  <label>
                    <input
                      type="checkbox"
                      checked={userPreferences.notifications}
                      onChange={(e) => setUserPreferences(prev => ({
                        ...prev,
                        notifications: e.target.checked
                      }))}
                    />
                    Enable Notifications
                  </label>
                  
                  <select
                    value={userPreferences.theme}
                    onChange={(e) => setUserPreferences(prev => ({
                      ...prev,
                      theme: e.target.value
                    }))}
                    className="demo-select"
                  >
                    <option value="light">Light Theme</option>
                    <option value="dark">Dark Theme</option>
                    <option value="auto">Auto</option>
                  </select>
                  
                  <select
                    value={userPreferences.language}
                    onChange={(e) => setUserPreferences(prev => ({
                      ...prev,
                      language: e.target.value
                    }))}
                    className="demo-select"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>
                <p>All preferences are automatically saved to localStorage!</p>
              </div>
            </div>
          </div>
        );

      case 'onlineStatus':
        return (
          <div className="tab-content">
            <h3>🌐 useOnlineStatus Hook</h3>
            <p>Track online/offline status and last seen timestamp:</p>
            
            <div className="hook-demo">
              <div className="status-display">
                <div className={`status-indicator ${onlineStatus.isOnline ? 'online' : 'offline'}`}>
                  {onlineStatus.isOnline ? '🟢 Online' : '🔴 Offline'}
                </div>
                <p><strong>Last Seen:</strong> {onlineStatus.lastSeen.toLocaleTimeString()}</p>
                <p><strong>Time Since Last Seen:</strong> {Math.round(onlineStatus.timeSinceLastSeen / 1000)}s ago</p>
              </div>
              
              <div className="demo-actions">
                <button onClick={() => window.dispatchEvent(new Event('offline'))}>
                  🧪 Simulate Offline
                </button>
                <button onClick={() => window.dispatchEvent(new Event('online'))}>
                  🧪 Simulate Online
                </button>
              </div>
            </div>
          </div>
        );

      case 'debouncedValue':
        return (
          <div className="tab-content">
            <h3>⏱️ useDebouncedValue Hook</h3>
            <p>Debounce input values to avoid excessive API calls or calculations:</p>
            
            <div className="hook-demo">
              <div className="demo-section">
                <h4>Search Input (Debounced)</h4>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Type to search..."
                  className="demo-input"
                />
                <p><strong>Current Value:</strong> "{searchTerm}"</p>
                <p><strong>Debounced Value:</strong> "{debouncedSearchTerm}"</p>
                <p><strong>Delay:</strong> 500ms</p>
              </div>
              
              <div className="demo-section">
                <h4>Search Results</h4>
                <div className="search-results">
                  {debouncedSearchTerm ? (
                    <p>🔍 Searching for: "{debouncedSearchTerm}"</p>
                  ) : (
                    <p>💡 Start typing to see debounced search in action</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 'windowSize':
        return (
          <div className="tab-content">
            <h3>📱 useWindowSize Hook</h3>
            <p>Track window dimensions and responsive breakpoints:</p>
            
            <div className="hook-demo">
              <div className="size-display">
                <div className="size-item">
                  <strong>Width:</strong> {windowSize.width}px
                </div>
                <div className="size-item">
                  <strong>Height:</strong> {windowSize.height}px
                </div>
                <div className="size-item">
                  <strong>Previous Width:</strong> {previousWindowSize?.width || 'N/A'}px
                </div>
                <div className="size-item">
                  <strong>Previous Height:</strong> {previousWindowSize?.height || 'N/A'}px
                </div>
              </div>
              
              <div className="breakpoint-display">
                <h4>Responsive Breakpoints</h4>
                <div className="breakpoint-item">
                  <span className={`indicator ${windowSize.isMobile ? 'active' : ''}`}>
                    📱 Mobile: {windowSize.width < 768 ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="breakpoint-item">
                  <span className={`indicator ${windowSize.isTablet ? 'active' : ''}`}>
                    📱 Tablet: {windowSize.width >= 768 && windowSize.width < 1024 ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="breakpoint-item">
                  <span className={`indicator ${windowSize.isDesktop ? 'active' : ''}`}>
                    💻 Desktop: {windowSize.width >= 1024 ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
              
              <p>💡 Try resizing your browser window to see the hook in action!</p>
            </div>
          </div>
        );

      case 'previous':
        return (
          <div className="tab-content">
            <h3>🔄 usePrevious Hook</h3>
            <p>Track the previous value of any state or prop:</p>
            
            <div className="hook-demo">
              <div className="demo-section">
                <h4>Window Size Changes</h4>
                <p>Current: {windowSize.width} × {windowSize.height}</p>
                <p>Previous: {previousWindowSize ? `${previousWindowSize.width} × ${previousWindowSize.height}` : 'None'}</p>
                <p>Change: {previousWindowSize ? 
                  `${windowSize.width - previousWindowSize.width > 0 ? '+' : ''}${windowSize.width - previousWindowSize.width}px width, ` +
                  `${windowSize.height - previousWindowSize.height > 0 ? '+' : ''}${windowSize.height - previousWindowSize.height}px height` : 
                  'No previous value'
                }</p>
              </div>
            </div>
          </div>
        );

      case 'toggle':
        return (
          <div className="tab-content">
            <h3>🔄 useToggle Hook</h3>
            <p>Boolean toggle with multiple control methods:</p>
            
            <div className="hook-demo">
              <div className="demo-section">
                <h4>Toggle Controls</h4>
                <div className="toggle-controls">
                  <button onClick={visibilityActions.toggle} className="control-btn">
                    🔄 Toggle
                  </button>
                  <button onClick={visibilityActions.setTrue} className="control-btn">
                    ✅ Set True
                  </button>
                  <button onClick={visibilityActions.setFalse} className="control-btn">
                    ❌ Set False
                  </button>
                </div>
                
                <div className="toggle-display">
                  <p><strong>Current Value:</strong> {isVisible ? 'True' : 'False'}</p>
                  <div className={`toggle-indicator ${isVisible ? 'visible' : 'hidden'}`}>
                    {isVisible ? '👁️ Visible' : '🙈 Hidden'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'counter':
        return (
          <div className="tab-content">
            <h3>🔢 useCounter Hook</h3>
            <p>Enhanced counter with step control and derived state:</p>
            
            <div className="hook-demo">
              <div className="demo-section">
                <h4>Counter Controls</h4>
                <div className="counter-controls">
                  <button onClick={counter.decrement} className="control-btn">
                    ➖ Decrement
                  </button>
                  <button onClick={counter.increment} className="control-btn">
                    ➕ Increment
                  </button>
                  <button onClick={counter.reset} className="control-btn">
                    🔄 Reset
                  </button>
                </div>
                
                <div className="counter-display">
                  <h2>Count: {counter.count}</h2>
                  <p><strong>Step:</strong> 5</p>
                  <p><strong>Is Positive:</strong> {counter.isPositive ? 'Yes' : 'No'}</p>
                  <p><strong>Is Negative:</strong> {counter.isNegative ? 'Yes' : 'No'}</p>
                  <p><strong>Is Zero:</strong> {counter.isZero ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'form':
        return (
          <div className="tab-content">
            <h3>📝 useForm Hook</h3>
            <p>Form management with validation, error handling, and state tracking:</p>
            
            <div className="hook-demo">
              <form onSubmit={handleFormSubmit} className="custom-form">
                <div className="form-field">
                  <label>Name:</label>
                  <input
                    type="text"
                    value={form.values.name}
                    onChange={(e) => form.handleChange('name', e.target.value)}
                    onBlur={() => form.handleBlur('name')}
                    className={`form-input ${form.errors.name && form.touched.name ? 'error' : ''}`}
                    placeholder="Enter your name"
                  />
                  {form.errors.name && form.touched.name && (
                    <span className="error-message">{form.errors.name}</span>
                  )}
                </div>
                
                <div className="form-field">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={form.values.email}
                    onChange={(e) => form.handleChange('email', e.target.value)}
                    onBlur={() => form.handleBlur('email')}
                    className={`form-input ${form.errors.email && form.touched.email ? 'error' : ''}`}
                    placeholder="Enter your email"
                  />
                  {form.errors.email && form.touched.email && (
                    <span className="error-message">{form.errors.email}</span>
                  )}
                </div>
                
                <div className="form-field">
                  <label>Message:</label>
                  <textarea
                    value={form.values.message}
                    onChange={(e) => form.handleChange('message', e.target.value)}
                    onBlur={() => form.handleBlur('message')}
                    className={`form-input ${form.errors.message && form.touched.message ? 'error' : ''}`}
                    placeholder="Enter your message"
                    rows="4"
                  />
                  {form.errors.message && form.touched.message && (
                    <span className="error-message">{form.errors.message}</span>
                  )}
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="submit-btn">Submit</button>
                  <button type="button" onClick={form.reset} className="reset-btn">Reset</button>
                </div>
                
                <div className="form-status">
                  <p><strong>Form Valid:</strong> {form.isValid ? 'Yes' : 'No'}</p>
                  <p><strong>Form Dirty:</strong> {form.isDirty ? 'Yes' : 'No'}</p>
                </div>
              </form>
            </div>
          </div>
        );

      default:
        return <div>Select a tab to see the custom hook examples</div>;
    }
  };

  return (
    <div className="hooks-example">
      <h2>🪝 Custom Hooks Examples</h2>
      
      <div className="example-section">
        <h3>🎯 What are Custom Hooks?</h3>
        <p>Custom hooks are functions that start with "use" and can call other hooks. They allow you to extract component logic into reusable functions.</p>
        
        <div className="custom-hooks-benefits">
          <h4>✅ Benefits of Custom Hooks</h4>
          <ul>
            <li>🔄 <strong>Reusability</strong> - Share logic between components</li>
            <li>🧹 <strong>Clean Components</strong> - Keep components focused on UI</li>
            <li>🧪 <strong>Easy Testing</strong> - Test logic separately from components</li>
            <li>📚 <strong>Better Organization</strong> - Group related logic together</li>
          </ul>
        </div>
      </div>

      <div className="example-section">
        <h3>🔧 Custom Hook Navigation</h3>
        <p>Explore different custom hook patterns:</p>
        
        <div className="tab-navigation">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="example-section">
        {renderTabContent()}
      </div>

      <div className="example-section">
        <h3>🎯 Key Takeaways</h3>
        <div className="key-points">
          <div className="point">
            <h4>📌 Custom Hook Best Practices</h4>
            <ul>
              <li>Always start with "use" to follow React conventions</li>
              <li>Keep hooks focused on a single responsibility</li>
              <li>Return values in a consistent format (array or object)</li>
              <li>Handle errors gracefully and provide fallbacks</li>
            </ul>
          </div>
          
          <div className="point">
            <h4>🔧 Common Custom Hook Patterns</h4>
            <ul>
              <li>State management hooks (useLocalStorage, useToggle)</li>
              <li>Effect-based hooks (useOnlineStatus, useWindowSize)</li>
              <li>Utility hooks (useDebouncedValue, usePrevious)</li>
              <li>Form hooks (useForm, useField)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>📚 Hook Composition</h3>
        <p>Custom hooks can compose other hooks to build complex functionality:</p>
        
        <div className="composition-example">
          <h4>Example: useUserProfile Hook</h4>
          <pre className="code-preview">
{`const useUserProfile = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Compose other custom hooks
  const onlineStatus = useOnlineStatus();
  const [preferences, setPreferences] = useLocalStorage('userPreferences', {});
  
  // Combine logic from multiple hooks
  useEffect(() => {
    // Fetch user data, update preferences, etc.
  }, [userId, onlineStatus.isOnline]);
  
  return {
    user,
    loading,
    error,
    isOnline: onlineStatus.isOnline,
    preferences,
    updatePreferences: setPreferences
  };
};`}
          </pre>
        </div>
      </div>

      <div className="console-note">
        <p>💡 <strong>Try different tabs</strong> to explore various custom hook patterns!</p>
        <p>Each hook demonstrates a different use case and implementation approach.</p>
      </div>
    </div>
  );
};

export default CustomHooksExample;
