# 🚀 Development Workflow & Scripts

This document explains the development workflow, available scripts, and best practices for working with the React.js Demo Project.

## 🛠️ Available Scripts

### Development Commands
```bash
# Start development server with hot reload
npm run dev

# Start with custom port
npm run dev -- --port 3000

# Start with custom host
npm run dev -- --host 0.0.0.0
```

### Build Commands
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Build with custom configuration
npm run build -- --mode production
```

### Code Quality Commands
```bash
# Run ESLint for code quality
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix

# Check specific files
npm run lint src/components/
```

## 🔄 Development Workflow

### 1. Project Setup
```bash
# Clone or download the project
git clone <repository-url>
cd reacjs-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Development Cycle
```bash
# 1. Start development server
npm run dev

# 2. Make code changes
# 3. See changes instantly with hot reload
# 4. Run linting to check code quality
npm run lint

# 5. Build for testing
npm run build

# 6. Preview production build
npm run preview
```

### 3. Code Quality Workflow
```bash
# Before committing code
npm run lint

# Fix any issues automatically
npm run lint -- --fix

# Check for unused dependencies
npm audit

# Update dependencies if needed
npm update
```

## 🌐 Development Server

### Features
- **Hot Module Replacement**: Instant updates without page refresh
- **Fast Refresh**: React component state preservation
- **Source Maps**: Full debugging support
- **Live Reload**: Automatic browser refresh on file changes

### Configuration
```bash
# Default settings
Port: 5173
Host: localhost
Protocol: http

# Custom configuration
npm run dev -- --port 3000 --host 0.0.0.0
```

### Browser Access
- **Local**: http://localhost:5173
- **Network**: http://your-ip:5173 (when using --host 0.0.0.0)
- **HTTPS**: Available with custom configuration

## 📝 Code Development

### File Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Route-specific page components
├── routes/        # Routing configuration
├── assets/        # Static assets (images, icons)
├── App.jsx        # Main application component
├── main.jsx       # Application entry point
└── ...            # Other source files
```

### Component Development
```jsx
// Example component structure
/**
 * @component ComponentName
 * @description Brief description of the component
 */
import React from 'react';
import './ComponentName.css';

export default function ComponentName({ prop1, prop2 }) {
  return (
    <div className="component">
      {/* Component content */}
    </div>
  );
}
```

### Adding New Routes
1. **Create page component** in `src/pages/`
2. **Add route configuration** in `src/routes/config.jsx`
3. **Update navigation** if needed
4. **Test the new route**

```jsx
// src/routes/config.jsx
import NewPage from "../pages/NewPage.jsx";

export const routes = [
  // ... existing routes
  { 
    path: "/new-route", 
    element: <NewPage />, 
    label: "New Page", 
    inNav: true 
  },
];
```

## 🔍 Code Quality Tools

### ESLint Configuration
- **React Rules**: Enforces React best practices
- **Hooks Rules**: Ensures proper hooks usage
- **JSX Rules**: Validates JSX syntax
- **Code Quality**: Catches common errors

### Best Practices
- **Use functional components** with hooks
- **Follow naming conventions** (PascalCase for components)
- **Add JSDoc comments** for complex functions
- **Keep components small** and focused
- **Use proper prop types** and validation

### Code Style
```jsx
// Good practices
const MyComponent = ({ title, children }) => {
  const [state, setState] = useState('');
  
  const handleClick = () => {
    setState('new value');
  };
  
  return (
    <div className="my-component">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

// Avoid
const MyComponent = (props) => {
  const [state, setState] = useState('');
  return <div>{props.title}</div>;
};
```

## 🧪 Testing & Debugging

### Development Tools
- **React Developer Tools**: Browser extension for component inspection
- **Vite DevTools**: Build tool integration
- **Browser DevTools**: Console, network, and performance

### Debugging Tips
```jsx
// Use console.log for debugging
console.log('Component props:', props);
console.log('Component state:', state);

// Use React DevTools for component tree
// Use browser DevTools for network and performance
```

### Common Issues
- **Hot reload not working**: Check file extensions and imports
- **Build errors**: Run `npm run lint` to identify issues
- **Port conflicts**: Use different port with `--port` flag
- **Dependency issues**: Clear cache and reinstall

## 📦 Dependency Management

### Adding Dependencies
```bash
# Production dependencies
npm install package-name

# Development dependencies
npm install -D package-name

# Global packages
npm install -g package-name
```

### Updating Dependencies
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update specific package
npm install package-name@latest
```

### Security
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Force fix (may break things)
npm audit fix --force
```

## 🚀 Performance Optimization

### Development Performance
- **Fast Refresh**: Preserves component state during development
- **Hot Module Replacement**: Instant updates without full reload
- **Source Maps**: Efficient debugging

### Production Optimization
- **Code Splitting**: Automatic bundle optimization
- **Tree Shaking**: Unused code removal
- **Asset Optimization**: Image and font compression
- **Bundle Analysis**: Size optimization

## 🔧 Custom Development Setup

### Environment Variables
```bash
# .env.local
VITE_PORT=3000
VITE_API_URL=http://localhost:8000
VITE_DEBUG=true
```

### Custom Scripts
```json
// package.json
{
  "scripts": {
    "dev:debug": "vite --mode development --debug",
    "build:analyze": "vite build --mode analyze",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

### IDE Configuration
- **VS Code**: Install React and ESLint extensions
- **WebStorm**: Built-in React support
- **Sublime Text**: Install React packages

## 📚 Related Documentation

- **[Project Overview](./PROJECT_OVERVIEW.md)** - High-level project description
- **[Architecture Guide](./ARCHITECTURE.md)** - How the application works
- **[Features Guide](./FEATURES.md)** - Key features and capabilities
- **[Configuration Guide](./CONFIGURATION.md)** - Build and tool configuration
- **[Installation Guide](./INSTALLATION.md)** - Setup and configuration

---

**Next**: Learn about contributing in [CONTRIBUTING.md](./CONTRIBUTING.md)

