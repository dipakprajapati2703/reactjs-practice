import React, { createContext, useContext, useState, useMemo } from 'react';

// Create a theme context
const ThemeContext = createContext();

// Create a user context
const UserContext = createContext();

/**
 * Theme Provider Component
 * Wraps children with theme context and provides theme switching functionality
 */
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [accentColor, setAccentColor] = useState('#2196f3');

  // Memoize the context value to prevent unnecessary re-renders
  const themeValue = useMemo(() => ({
    theme,
    accentColor,
    setTheme,
    setAcccentColor: setAccentColor,
    // Computed values based on theme
    isDark: theme === 'dark',
    textColor: theme === 'dark' ? '#ffffff' : '#000000',
    backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
    surfaceColor: theme === 'dark' ? '#1e1e1e' : '#f5f5f5',
    borderColor: theme === 'dark' ? '#333333' : '#e0e0e0',
  }), [theme, accentColor]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const changeAccentColor = (color) => {
    setAccentColor(color);
  };

  return (
    <ThemeContext.Provider value={{ ...themeValue, toggleTheme, changeAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * User Provider Component
 * Wraps children with user context
 */
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    preferences: {
      notifications: true,
      language: 'en'
    }
  });

  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const updatePreferences = (prefUpdates) => {
    setUser(prev => ({
      ...prev,
      preferences: { ...prev.preferences, ...prefUpdates }
    }));
  };

  const userValue = useMemo(() => ({
    user,
    updateUser,
    updatePreferences,
    isAdmin: user.role === 'admin',
    isLoggedIn: !!user.name,
  }), [user]);

  return (
    <UserContext.Provider value={userValue}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Custom hook for theme context
 * Provides easy access to theme values and functions
 */
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * Custom hook for user context
 * Provides easy access to user values and functions
 */
const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

/**
 * Theme Toggle Button Component
 * Demonstrates using context without prop drilling
 */
const ThemeToggleButton = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle-btn"
      style={{
        backgroundColor: isDark ? '#333' : '#fff',
        color: isDark ? '#fff' : '#333',
        border: `2px solid ${isDark ? '#666' : '#ccc'}`,
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold'
      }}
    >
      {isDark ? '🌞 Switch to Light' : '🌙 Switch to Dark'}
    </button>
  );
};

/**
 * Accent Color Picker Component
 * Demonstrates using context for color selection
 */
const AccentColorPicker = () => {
  const { accentColor, changeAccentColor } = useTheme();
  
  const colors = ['#2196f3', '#f44336', '#4caf50', '#ff9800', '#9c27b0', '#00bcd4'];
  
  return (
    <div className="color-picker">
      <h4>🎨 Choose Accent Color</h4>
      <div className="color-options">
        {colors.map(color => (
          <button
            key={color}
            onClick={() => changeAccentColor(color)}
            className={`color-option ${accentColor === color ? 'selected' : ''}`}
            style={{
              backgroundColor: color,
              border: `3px solid ${accentColor === color ? '#333' : 'transparent'}`,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              margin: '5px'
            }}
            title={color}
          />
        ))}
      </div>
      <p>Current accent: <code>{accentColor}</code></p>
    </div>
  );
};

/**
 * User Profile Component
 * Demonstrates using user context
 */
const UserProfile = () => {
  const { user, updateUser, updatePreferences, isAdmin } = useUser();
  
  const handleNameChange = (e) => {
    updateUser({ name: e.target.value });
  };
  
  const handleRoleToggle = () => {
    updateUser({ role: isAdmin ? 'user' : 'admin' });
  };
  
  const handleNotificationToggle = () => {
    updatePreferences({ notifications: !user.preferences.notifications });
  };

  return (
    <div className="user-profile">
      <h4>👤 User Profile</h4>
      <div className="profile-field">
        <label>Name:</label>
        <input
          type="text"
          value={user.name}
          onChange={handleNameChange}
          className="profile-input"
        />
      </div>
      
      <div className="profile-field">
        <label>Email:</label>
        <span>{user.email}</span>
      </div>
      
      <div className="profile-field">
        <label>Role:</label>
        <span className={`role-badge ${isAdmin ? 'admin' : 'user'}`}>
          {user.role}
        </span>
        <button onClick={handleRoleToggle} className="role-toggle-btn">
          Toggle Role
        </button>
      </div>
      
      <div className="profile-field">
        <label>Notifications:</label>
        <input
          type="checkbox"
          checked={user.preferences.notifications}
          onChange={handleNotificationToggle}
        />
      </div>
    </div>
  );
};

/**
 * Context Consumer Component
 * Demonstrates the old way of consuming context (for comparison)
 */
const OldWayConsumer = () => {
  return (
    <ThemeContext.Consumer>
      {(themeContext) => (
        <UserContext.Consumer>
          {(userContext) => (
            <div className="old-way-consumer">
              <h4>🔄 Old Way: Context.Consumer</h4>
              <p>Theme: {themeContext.theme}</p>
              <p>User: {userContext.user.name}</p>
              <p>This approach is more verbose and harder to read</p>
            </div>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
};

/**
 * Main Context Example Component
 * Demonstrates the complete context pattern
 */
const UseContextExample = () => {
  return (
    <div className="hooks-example">
      <h2>🌐 useContext Hook Examples</h2>
      
      <div className="example-section">
        <h3>🎯 What is Context?</h3>
        <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
        
        <div className="context-benefits">
          <h4>✅ Benefits of Context</h4>
          <ul>
            <li>🚫 <strong>No Prop Drilling</strong> - Pass data directly to deeply nested components</li>
            <li>🔄 <strong>Shared State</strong> - Multiple components can access the same data</li>
            <li>🧹 <strong>Cleaner Code</strong> - Eliminate long prop chains</li>
            <li>⚡ <strong>Performance</strong> - Avoid unnecessary re-renders with proper memoization</li>
          </ul>
        </div>
      </div>

      <div className="example-section">
        <h3>🎨 Theme Context Example</h3>
        <p>This example shows how to create and use a theme context:</p>
        
        <div className="theme-demo">
          <div className="theme-controls">
            <ThemeToggleButton />
            <AccentColorPicker />
          </div>
          
          <div className="theme-preview">
            <h4>🎨 Theme Preview</h4>
            <div 
              className="preview-box"
              style={{
                backgroundColor: useTheme().backgroundColor,
                color: useTheme().textColor,
                border: `2px solid ${useTheme().borderColor}`,
                padding: '20px',
                borderRadius: '8px',
                margin: '10px 0'
              }}
            >
              <p>This box reflects the current theme settings</p>
              <p>Background: {useTheme().backgroundColor}</p>
              <p>Text Color: {useTheme().textColor}</p>
              <p>Border Color: {useTheme().borderColor}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>👤 User Context Example</h3>
        <p>This example shows how to manage user state across components:</p>
        
        <div className="user-demo">
          <UserProfile />
          
          <div className="user-info-display">
            <h4>📊 User Info Display</h4>
            <p>This component can access user data without props:</p>
            <div className="info-grid">
              <div className="info-item">
                <strong>Name:</strong> {useUser().user.name}
              </div>
              <div className="info-item">
                <strong>Role:</strong> {useUser().user.role}
              </div>
              <div className="info-item">
                <strong>Admin:</strong> {useUser().isAdmin ? 'Yes' : 'No'}
              </div>
              <div className="info-item">
                <strong>Notifications:</strong> {useUser().user.preferences.notifications ? 'On' : 'Off'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>🔄 Context vs Props Comparison</h3>
        <p>See the difference between using context and the old consumer pattern:</p>
        
        <div className="comparison">
          <div className="new-way">
            <h4>✅ New Way: useContext Hook</h4>
            <div className="code-example">
              <p><code>const theme = useTheme();</code></p>
              <p><code>const user = useUser();</code></p>
            </div>
            <p>Clean, simple, and easy to read!</p>
          </div>
          
          <div className="old-way">
            <OldWayConsumer />
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>🎯 Key Takeaways</h3>
        <div className="key-points">
          <div className="point">
            <h4>📌 When to Use Context</h4>
            <ul>
              <li>🌐 App-wide state (theme, user, language)</li>
              <li>🔄 Shared data between distant components</li>
              <li>⚙️ Configuration and settings</li>
              <li>🔐 Authentication and user state</li>
            </ul>
          </div>
          
          <div className="point">
            <h4>⚠️ Context Best Practices</h4>
            <ul>
              <li>Memoize context values to prevent unnecessary re-renders</li>
              <li>Split contexts by domain (theme, user, etc.)</li>
              <li>Don't overuse context for local component state</li>
              <li>Provide meaningful default values</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>🔧 Context Structure</h3>
        <div className="context-structure">
          <h4>📁 File Organization</h4>
          <pre className="structure-code">
{`// 1. Create context
const ThemeContext = createContext();

// 2. Create provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create custom hook
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

// 4. Use in components
const MyComponent = () => {
  const { theme, setTheme } = useTheme();
  // ... component logic
};`}
          </pre>
        </div>
      </div>

      <div className="console-note">
        <p>💡 <strong>Try changing the theme and user settings</strong> to see how context updates propagate!</p>
        <p>Notice how components automatically re-render when context values change.</p>
      </div>
    </div>
  );
};

// Wrap the main component with providers
const useContextExampleWithProviders = () => (
  <ThemeProvider>
    <UserProvider>
      <UseContextExample />
    </UserProvider>
  </ThemeProvider>
);

export default useContextExampleWithProviders;
