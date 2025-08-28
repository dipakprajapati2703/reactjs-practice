# 🛠️ Installation & Setup Guide

Complete guide to get the React.js Demo Project up and running on your local machine.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### **Node.js**
- **Version**: 16.0.0 or higher
- **Download**: [https://nodejs.org/](https://nodejs.org/)
- **Verify**: Run `node --version` in your terminal

### **Package Manager**
Choose one of the following:
- **npm** (comes with Node.js): `npm --version`
- **yarn** (recommended for larger projects): `npm install -g yarn`

### **Code Editor**
Recommended editors:
- **VS Code** with React extensions
- **WebStorm** with built-in React support
- **Sublime Text** with React packages

## 🚀 Quick Installation

### **Option 1: Clone from Repository**
```bash
# Clone the repository
git clone <repository-url>
cd reacjs-demo

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

### **Option 2: Download & Extract**
```bash
# Download and extract the project
# Navigate to the project directory
cd /path/to/reacjs-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Dependency Installation

### **Automatic Installation (Recommended)**
```bash
# Install all dependencies listed in package.json
npm install
```

### **Manual Installation (if needed)**
```bash
# Core React dependencies
npm install react react-dom react-router-dom

# Development dependencies
npm install -D @vitejs/plugin-react vite eslint
npm install -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
npm install -D @types/react @types/react-dom
```

## 🔧 Configuration

### **Environment Setup**
The project uses Vite as the build tool, which requires minimal configuration:

1. **Vite Configuration** (`vite.config.js`)
   - React plugin enabled
   - Development server on port 5173
   - Hot module replacement enabled

2. **ESLint Configuration**
   - React-specific rules enabled
   - Hooks rules for best practices
   - JSX support configured

### **Port Configuration**
- **Default**: http://localhost:5173
- **Custom Port**: Create `.env` file with `VITE_PORT=3000`

## 🚀 Available Scripts

### **Development**
```bash
# Start development server with hot reload
npm run dev

# Start with custom port
npm run dev -- --port 3000
```

### **Build & Production**
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Build with custom configuration
npm run build -- --mode production
```

### **Code Quality**
```bash
# Run ESLint for code quality
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

## 🌐 Browser Support

### **Modern Browsers**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### **Mobile Browsers**
- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 15+

## 🔍 Troubleshooting

### **Common Issues**

#### **Port Already in Use**
```bash
# Kill process using port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

#### **Dependencies Issues**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### **Node Version Issues**
```bash
# Check Node version
node --version

# Use nvm to switch versions (if installed)
nvm use 18
```

### **Performance Issues**
- **Slow builds**: Check available RAM and CPU
- **Hot reload slow**: Disable antivirus scanning for project directory
- **Large bundle**: Run `npm run build` to analyze bundle size

## 📱 Development Tools

### **Browser Extensions**
- **React Developer Tools** - Component inspection
- **Redux DevTools** - State management (if using Redux)
- **Vite Plugin** - Build tool integration

### **VS Code Extensions**
- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**
- **ESLint**
- **Auto Rename Tag**

## 🔒 Security Considerations

### **Development Environment**
- Never commit `.env` files with secrets
- Use `.env.local` for local development
- Keep dependencies updated regularly

### **Production Deployment**
- Run `npm audit` to check for vulnerabilities
- Use HTTPS in production
- Implement proper CORS policies

## 📚 Next Steps

After successful installation:

1. **Start Learning**: Begin with [Step 0: ES6+ JavaScript](./step-0-es6.md)
2. **Explore the App**: Navigate through different routes
3. **Modify Code**: Make changes and see hot reload in action
4. **Add Features**: Extend the project with new components

## 🆘 Getting Help

### **Documentation**
- **Project Docs**: [./README.md](./README.md)
- **React Official**: [https://react.dev/](https://react.dev/)
- **Vite Docs**: [https://vitejs.dev/](https://vitejs.dev/)

### **Community**
- **Stack Overflow**: Tag questions with `react` and `vite`
- **React Discord**: [https://discord.gg/react](https://discord.gg/react)
- **GitHub Issues**: Report bugs in the project repository

---

**Happy Coding! 🎉**
