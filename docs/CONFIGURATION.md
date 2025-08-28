# 🔧 Configuration Files & Settings

This document explains the configuration files and settings used in the React.js Demo Project.

## 📁 Configuration Files Overview

The project uses several configuration files to manage:
- **Build tooling** and development server
- **Code quality** and linting rules
- **Project dependencies** and scripts
- **Environment settings** and build modes

## 📦 Package Configuration

### `package.json`
The main project configuration file containing:

#### Project Metadata
```json
{
  "name": "reacjs-demo",
  "private": true,
  "version": "0.0.0",
  "type": "module"
}
```

#### Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^7.8.2"
  }
}
```

#### Development Dependencies
```json
{
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "vite": "^5.2.0"
  }
}
```

#### Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
}
```

## ⚡ Vite Configuration

### `vite.config.js`
The main build tool configuration file:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

#### Configuration Options
- **React Plugin**: Enables JSX transformation and Fast Refresh
- **Build Optimization**: Automatic code splitting and tree shaking
- **Development Server**: Hot module replacement and source maps
- **Production Builds**: Minification and asset optimization

#### Available Plugins
- **@vitejs/plugin-react**: React-specific optimizations
- **@vitejs/plugin-react-swc**: Alternative using SWC for faster builds

## 🧹 ESLint Configuration

### `.eslintrc.cjs`
Code quality and consistency rules:

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@eslint/js',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

#### ESLint Rules
- **React Rules**: Enforces React best practices
- **Hooks Rules**: Ensures proper hooks usage
- **JSX Rules**: Validates JSX syntax and patterns
- **Code Quality**: Catches common errors and anti-patterns

#### Plugin Configuration
- **eslint-plugin-react**: React-specific linting rules
- **eslint-plugin-react-hooks**: Hooks usage validation
- **eslint-plugin-react-refresh**: Fast Refresh compatibility

## 🌍 Environment Configuration

### Environment Variables
The project supports environment-specific configuration:

#### Development Environment
- **Port**: Default 5173, configurable via `VITE_PORT`
- **Host**: Localhost for development
- **Build Mode**: Development with hot reload

#### Production Environment
- **Build Mode**: Production with optimizations
- **Asset Optimization**: Minification and compression
- **Bundle Analysis**: Size optimization and splitting

### Environment Files
Create these files for custom configuration:

#### `.env.local`
```bash
# Local development overrides
VITE_PORT=3000
VITE_API_URL=http://localhost:8000
```

#### `.env.production`
```bash
# Production environment settings
VITE_API_URL=https://api.production.com
VITE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

## 🚀 Build Configuration

### Development Mode
```bash
npm run dev
```
- **Hot Module Replacement**: Instant updates without page refresh
- **Source Maps**: Full debugging support
- **Fast Refresh**: React component state preservation
- **Development Server**: Local development with live reload

### Production Mode
```bash
npm run build
```
- **Code Splitting**: Automatic bundle optimization
- **Tree Shaking**: Unused code removal
- **Minification**: Code and asset compression
- **Asset Optimization**: Image and font optimization

### Preview Mode
```bash
npm run preview
```
- **Local Testing**: Test production build locally
- **Performance Analysis**: Analyze bundle size and loading
- **Production Simulation**: Verify production behavior

## 🔧 Custom Configuration

### Vite Customization
Extend the Vite configuration for additional features:

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  }
})
```

### ESLint Customization
Add custom rules and configurations:

```javascript
// .eslintrc.cjs
module.exports = {
  // ... existing config
  rules: {
    // Custom rules
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-unused-vars': 'warn'
  }
}
```

## 📱 Browser Support

### Target Browsers
The build configuration targets modern browsers:

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Polyfills
- **Automatic**: Vite handles most polyfills automatically
- **Manual**: Add specific polyfills if needed
- **Conditional**: Load polyfills only when required

## 🔍 Configuration Validation

### Validation Commands
```bash
# Validate package.json
npm run lint

# Check build configuration
npm run build

# Verify development setup
npm run dev
```

### Common Issues
- **Port Conflicts**: Change port in vite.config.js or .env
- **Dependency Issues**: Clear cache and reinstall
- **Build Errors**: Check configuration syntax and plugins

## 📚 Related Documentation

- **[Project Overview](./PROJECT_OVERVIEW.md)** - High-level project description
- **[Architecture Guide](./ARCHITECTURE.md)** - How the application works
- **[Features Guide](./FEATURES.md)** - Key features and capabilities
- **[Development Guide](./DEVELOPMENT.md)** - Development workflow
- **[Installation Guide](./INSTALLATION.md)** - Setup and configuration

---

**Next**: Learn about development workflow in [DEVELOPMENT.md](./DEVELOPMENT.md)
