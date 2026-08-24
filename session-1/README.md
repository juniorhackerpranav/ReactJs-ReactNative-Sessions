## Session 1 : React Introduction and Basics

``` 
# 1. Introduction to React
# 2. What is React?
# 3. Why React?
# 4. React Features
# 5. Virtual DOM
# 6. Create First React Project
# 7. Understand the Project Structure
# 8. JSX
# 9. Components
# 10. Props
# 11. Mini Project to implement all learning
```

## 1. Introduction to React
React is an open-source front-end JavaScript library created by Meta (formerly Facebook) for building dynamic, interactive user interfaces, particularly for single-page applications (SPAs). It allows developers to build reusable UI components that manage their own state.

---

## 2. What is React?
* **Library, not a Framework:** React focuses strictly on the View layer of an application. You can easily combine it with other libraries or frameworks (like routing or state management tools).  
* **Component-Based Architecture:** Applications are broken down into independent, isolated pieces called components, making code maintenance and scaling much easier.
* **Declarative:** You describe *what* the UI should look like based on the current state, and React handles the DOM updates automatically when the state changes.

---

## 3. Why React?
* **High Performance:** Thanks to the Virtual DOM and efficient diffing algorithms, rendering is extremely fast.
* **Reusability:** Write components once and reuse them across different parts of the application or even in multiple projects.
* **Strong Ecosystem & Community:** Backed by Meta and a massive developer community, offering a vast array of tools, extensions, and libraries (e.g., React Router, Redux, Next.js).
* **Unidirectional Data Flow:** Data flows downward from parent to child, making debugging and tracking data changes predictable.

---

## 4. React Features
* **JSX (JavaScript XML):** Allows writing HTML structures directly within JavaScript code.
* **Components:** Modular building blocks for the user interface.
* **Props:** Mechanism for passing data from parent components to child components.
* **State:** Built-in object used to manage dynamic data that changes over time within a component.
* **Hooks:** Functions (like `useState`, `useEffect`) that let functional components manage state and lifecycle features without writing classes.

---

## 5. Virtual DOM
* **What is it?** The Virtual DOM (VDOM) is a lightweight, in-memory representation of the real DOM.
* **How it works:**
  1. When state or props change, a new Virtual DOM tree is created.
  2. React compares (diffs) the new VDOM tree with the previous VDOM tree using a fast diffing algorithm.
  3. React computes the exact minimal set of changes needed.
  4. Only those specific changes are updated in the Real DOM (Reconciliation/Batch Updating), avoiding costly full-page re-renders.

---

## 6. Create First React Project
We use **Vite** (or Create React App, though Vite is modern and preferred for speed) to scaffold a modern React project.

### Commands to Run:
```bash
# Create a new Vite React project
npm create vite@latest my-react-app -- --template react

# Navigate into the project directory
cd my-react-app

# Install dependencies
npm install

# Start the development server
npm run dev

---

## 7. Understand the Project Structure

A standard modern React project structure looks like this:

```text
my-react-app/
├── node_modules/         # Installed npm packages and dependencies
├── public/               # Static assets (images, favicon, etc.)
├── src/                  # Main source code directory
│   ├── assets/           # Images, styles, etc.
│   ├── App.jsx           # Root component
│   ├── App.css           # Styling for App component
│   └── main.jsx          # Entry point rendering App into the DOM
├── .gitignore            # Files to ignore in Git
├── index.html            # Main HTML template file
├── package.json          # Project metadata, scripts, and dependencies
└── vite.config.js        # Vite configuration file

```

---

## 8. JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

* **Key Rules:**
1. **Single Root Element:** Every JSX expression must be wrapped in a single parent element (e.g., a `<div>`, `<React.Fragment>`, or shorthand `<>...</>`).
2. **Close All Tags:** Self-closing tags must end with a slash (e.g., `<img src="..." />`, `<br />`).
3. **camelCase Properties:** HTML attributes use camelCase in JSX (e.g., `class` becomes `className`, `onclick` becomes `onClick`, `tabindex` becomes `tabIndex`).
4. **Embedding Expressions:** JavaScript variables and expressions can be embedded using curly braces `{}`.



### Example:

```jsx
function Greeting() {
  const name = "Developer";
  return (
    <div className="card">
      <h1>Hello, {name}!</h1>
      <p>Welcome to learning React JSX.</p>
    </div>
  );
}

```

---

## 9. Components

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via JSX.

* **Functional Components:** JavaScript functions that return JSX. (Modern standard).

### Example:

```jsx
function WelcomeCard(props) {
  return <h2>Welcome to React, {props.name}!</h2>;
}

```

---

## 10. Props (Properties)

Props are arguments passed into React components. Props are passed down from parent components to child components and are **read-only** (immutable).

### Example:

```jsx
// Child Component
function UserProfile({ username, role }) {
  return (
    <div className="profile">
      <h3>User: {username}</h3>
      <p>Role: {role}</p>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div>
      <UserProfile username="Alice" role="Admin" />
      <UserProfile username="Bob" role="User" />
    </div>
  );
}
```