# 🧭 Application Routing Diagram

This document provides a visual representation of how the React.js Demo application routing works and how components are connected.

## 🔄 Application Flow Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   index.html    │───▶│   main.jsx      │───▶│   App.jsx       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                       │
                                                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Header.jsx    │◀───│  React Router   │───▶│  Page Components│
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                       │
                                                       ▼
                                              ┌─────────────────┐
                                              │ Example Components│
                                              └─────────────────┘
```

## 🧭 Route Configuration Structure

### **Route Definitions (`src/routes/config.jsx`)**
```jsx
export const routes = [
  // Home Route
  { 
    index: true, 
    path: "/", 
    element: <Home />, 
    label: "Home", 
    inNav: true 
  },
  
  // ES6 Examples Route
  { 
    path: "/es6-examples", 
    element: <Es6ExamplesPage />, 
    label: "ES6 Examples", 
    inNav: true 
  },
  
  // Props Examples Route
  { 
    path: "/props-example", 
    element: <PropsExamplesPage />, 
    label: "Props Example", 
    inNav: true 
  },
  
  // State Examples Route
  { 
    path: "/state-examples", 
    element: <StateExamplesPage />, 
    label: "State Examples", 
    inNav: true 
  },
  
  // Hooks Examples Route
  { 
    path: "/hooks-examples", 
    element: <HooksExamplesPage />, 
    label: "Hooks Examples", 
    inNav: true 
  }
];
```

## 🗺️ Navigation Flow

### **1. Home Page (`/`)**
```
Home.jsx
├── Hero Section (Logos, Title, Counter)
├── Project Overview
├── Features Grid (6 feature cards)
├── Getting Started Guide
└── Tech Stack Display
```

### **2. ES6 Examples Page (`/es6-examples`)**
```
Es6ExamplesPage.jsx
├── Page Header
├── DemoLetConst.jsx (Block-scoped variables)
├── DemoArrowFunctions.jsx (Arrow function syntax)
├── DemoTemplateLiterals.jsx (Template literals)
├── DemoDestructuring.jsx (Destructuring patterns)
├── DemoSpreadRest.jsx (Spread/rest operators)
├── DemoDefaultParams.jsx (Default parameters)
├── DemoArrayMethods.jsx (Modern array methods)
├── DemoModules.jsx (ES6 modules)
├── DemoAsyncAwait.jsx (Async/await patterns)
├── PrettyJson.jsx (JSON formatting utility)
└── Code Explanation
```

### **3. Props Examples Page (`/props-example`)**
```
PropsExamplesPage.jsx
├── Page Header
├── Greeting.jsx (Basic string props)
├── Toolbar.jsx (Configuration props)
├── Price.jsx (Numeric props)
├── Badge.jsx (Conditional rendering)
├── Card.jsx (Object props)
├── ActionButton.jsx (Event handler props)
├── ProfileCard.jsx (Multiple props)
└── Code Explanation
```

### **4. State Examples Page (`/state-examples`)**
```
StateExamplesPage.jsx
├── Page Header
├── CounterExample.jsx (Basic useState with counter)
├── ToggleExample.jsx (Boolean state for toggles)
├── FormExample.jsx (Controlled form inputs)
├── ListExample.jsx (Array state management)
├── ObjectExample.jsx (Object state updates)
└── Code Explanation
```

### **5. Hooks Examples Page (`/hooks-examples`)**
```
HooksExamplesPage.jsx
├── Page Header
├── useEffectExample.jsx (Side effects and cleanup)
├── useRefExample.jsx (DOM manipulation and refs)
├── useContextExample.jsx (Context API and providers)
├── useMemoExample.jsx (Performance optimization)
├── useCallbackExample.jsx (Stable function references)
├── CustomHooksExample.jsx (Custom hooks patterns)
└── Code Explanation
```

## 🔗 Component Relationships

### **Header Component**
```
Header.jsx
├── Navigation Links (from route config)
├── Active Route Highlighting
├── Responsive Mobile Menu
└── Logo/Branding
```

### **Page Components**
```
Page Component
├── Page Header (Title, Description)
├── Multiple Example Components
├── Code Explanations
└── Navigation Between Examples
```

### **Example Components**
```
Example Component
├── Interactive Demo
├── State Management
├── Event Handlers
├── Conditional Rendering
└── Styling Classes
```

## 🎯 URL Structure

```
/                           → Home Page
/es6-examples              → ES6 JavaScript Examples
/props-example             → React Props Examples
/state-examples            → React State Examples
/hooks-examples            → React Hooks Examples
/*                          → 404 Not Found Page
```

## 🔄 Data Flow in Routing

### **1. Route Change**
```
User clicks nav link → React Router updates URL → Route matching → Component rendering
```

### **2. Component Loading**
```
Route matched → Page component loads → Example components render → Interactive demos ready
```

### **3. State Management**
```
Component mounts → Initial state set → User interactions → State updates → UI re-renders
```

## 🎨 Styling Flow

### **CSS Loading Order**
```
index.css (Base styles)
    ↓
App.css (Global styles, layout)
    ↓
modern-forms.css (Form-specific styles)
    ↓
Component-specific styles
```

### **Responsive Design**
```
Mobile First → Tablet → Desktop → Large Screens
```

## 🚀 Performance Considerations

### **Route-based Code Splitting**
- Each page loads independently
- Components are bundled with their pages
- Lazy loading possible for future optimization

### **Component Re-rendering**
- Only affected components re-render
- State changes trigger local updates
- Props changes flow down component tree

## 🔧 Development Workflow

### **Adding New Routes**
1. **Create Page Component** in `src/pages/`
2. **Add Route Definition** in `src/routes/config.jsx`
3. **Update Navigation** (if needed)
4. **Add Styling** in appropriate CSS file
5. **Test Navigation** and component rendering

### **Route Testing**
```bash
# Start development server
npm run dev

# Test each route
http://localhost:5173/           # Home
http://localhost:5173/es6-examples
http://localhost:5173/props-example
http://localhost:5173/state-examples
http://localhost:5173/hooks-examples
```

## 📱 Mobile Navigation

### **Responsive Behavior**
```
Desktop: Horizontal navigation bar
Tablet:  Collapsible navigation
Mobile:  Hamburger menu with overlay
```

### **Touch Interactions**
- Touch-friendly button sizes
- Swipe gestures for mobile
- Accessible navigation patterns

---

**Navigation Summary:**
- **5 Main Routes** with clear navigation
- **Consistent Component Structure** across all pages
- **Responsive Design** for all screen sizes
- **Clear URL Structure** for easy navigation
- **Interactive Examples** on every page

For detailed implementation, see the individual component files and the main routing configuration.
