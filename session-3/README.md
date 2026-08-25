# Session 3 : Effects, Data Fetching and React Router

```text

# 1. Effects in React
# 2. useEffect Hook
# 3. useEffect Syntax
# 4. Dependency Array
# 5. useEffect Without Dependency Array
# 6. useEffect With Empty Dependency Array
# 7. useEffect With Dependencies
# 8. Multiple Effects in a Component
# 9. Cleanup Function in useEffect
# 10. Data Fetching in React
# 11. Fetch API
# 12. Fetch API with async / await
# 13. Axios
# 14. Axios with async / await
# 15. Fetch vs Axios
# 16. Loading State
# 17. Error Handling
# 18. React Router
# 19. Installation of React Router
# 20. BrowserRouter
# 21. Routes and Route
# 22. Link
# 23. useNavigate
# 24. useParams
# 25. useLocation
# 26. Dynamic Routes
# 27. 404 / Not Found Route
 
```

---

## 1. Effects in React

An **effect** is a piece of code that performs a task outside the normal rendering process of a React component.

Effects are commonly used when a component needs to **synchronize with external systems** or perform operations after rendering.

### Common Examples:

* Fetching data from an API
* Updating the document title
* Setting up timers
* Adding event listeners
* Working with browser APIs
* Subscribing and unsubscribing from services

---

## 2. `useEffect` Hook

`useEffect` is a React Hook used to perform side effects in functional components.

It runs **after React renders the component**.

### Syntax:

```jsx
import { useEffect } from "react";

useEffect(() => {
    // Side effect code
}, []);
```

---

## 3. `useEffect` Syntax

The `useEffect` Hook accepts two main parts:

```jsx
useEffect(() => {
    // Effect code
}, [dependencies]);
```

### Two Parts:

1. **Effect function** – contains the code that should run.
2. **Dependency array** – controls when the effect should run.

---

## 4. Dependency Array

The dependency array controls when the effect should execute.

```jsx
useEffect(() => {
    // Effect
}, [dependencies]);
```

There are three common cases.

### 1. No Dependency Array

```jsx
useEffect(() => {
    console.log("Runs after every render");
});
```

Runs after **every render**.

### 2. Empty Dependency Array

```jsx
useEffect(() => {
    console.log("Runs once");
}, []);
```

Runs after the **initial render**.

### 3. Dependency Array With Values

```jsx
useEffect(() => {
    console.log("Runs when count changes");
}, [count]);
```

Runs whenever `count` changes.

---

## 5. `useEffect` Without Dependency Array

```jsx
useEffect(() => {
    console.log("Effect executed");
});
```

The effect runs after every render of the component.

This should be used carefully because frequent effects can cause unnecessary operations.

---

## 6. `useEffect` With Empty Dependency Array

```jsx
useEffect(() => {
    console.log("Component mounted");
}, []);
```

The effect runs after the initial render.

This is commonly used for:

* Initial API calls
* Initial setup
* Fetching data
* Adding subscriptions

---

## 7. `useEffect` With Dependencies

```jsx
useEffect(() => {
    console.log("Count changed:", count);
}, [count]);
```

The effect runs when the value of `count` changes.

Example:

```jsx
import { useEffect, useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    return (
        <div>
            <h2>{count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}
```

---

## 8. Multiple Effects in a Component

A component can have multiple `useEffect` Hooks.

```jsx
useEffect(() => {
    console.log("Effect 1");
}, []);

useEffect(() => {
    console.log("Effect 2");
}, [count]);
```

Each effect can handle a different side effect.

This helps keep side-effect logic organized.

---

## 9. Cleanup Function in `useEffect`

An effect can return a cleanup function.

```jsx
useEffect(() => {

    console.log("Effect started");

    return () => {
        console.log("Cleanup");
    };

}, []);
```

Cleanup is commonly used for:

* Removing event listeners
* Clearing timers
* Unsubscribing from services
* Cleaning up resources

Example:

```jsx
useEffect(() => {

    const timer = setInterval(() => {
        console.log("Running...");
    }, 1000);

    return () => {
        clearInterval(timer);
    };

}, []);
```

---

# 10. Data Fetching in React

**Data fetching** means retrieving data from an external API or server and displaying it inside a React application.

A common approach is to perform API requests inside `useEffect`.

Typical flow:

```text
Component Render
       ↓
   useEffect
       ↓
   API Request
       ↓
 Receive Response
       ↓
 Update State
       ↓
   Display Data
```

---

# 11. Fetch API

The **Fetch API** is a built-in browser API used to make HTTP requests.

It returns a **Promise**.

### Basic GET Request:

```jsx
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
```

---

# 12. Fetch API With `async / await`

`async/await` provides a cleaner way to work with asynchronous operations.

```jsx
useEffect(() => {

    const fetchUsers = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };

    fetchUsers();
}, []);
```

### Important:

With Fetch:

```jsx
const response = await fetch(url);
const data = await response.json();
```

---

# 13. Axios

**Axios** is a popular JavaScript library used to make HTTP requests.

### Installation:

```bash
npm install axios
```

### Import:

```jsx
import axios from "axios";
```

### Basic GET Request:

```jsx
const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
);

console.log(response.data);
```

---

# 14. Axios With `async / await`

Axios can be used with `async/await` inside `useEffect`.

```jsx
useEffect(() => {

    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    fetchUsers();
}, []);
```

With Axios:

```jsx
const response = await axios.get(url);

const data = response.data;
```

---

# 15. Fetch vs Axios

| Fetch                        | Axios                                   |
| ---------------------------- | --------------------------------------- |
| Built into the browser       | External library                        |
| No installation required     | Requires installation                   |
| Requires `response.json()`   | Automatically parses JSON               |
| More manual request handling | Easier request handling                 |
| Uses `fetch()`               | Uses `axios.get()`, `axios.post()` etc. |

### Fetch:

```jsx
const response = await fetch(url);
const data = await response.json();
```

### Axios:

```jsx
const response = await axios.get(url);
const data = response.data;
```

---

# 16. Loading State

When fetching data, the UI should show a loading state while the request is in progress.

```jsx
const [loading, setLoading] = useState(true);
```

Example:

```jsx
if (loading) {
    return <p>Loading...</p>;
}
```

Typical flow:

```text
Loading
   ↓
   ├── Success → Display Data
   │
   └── Error → Display Error
```

---

# 17. Error Handling

API requests can fail, so errors should be handled properly.

```jsx
const [error, setError] = useState("");
```

Example:

```jsx
try {
    const response = await axios.get(url);

    setUsers(response.data);
} catch (error) {
    setError("Failed to fetch users");
}
```

The UI can then display:

```jsx
if (error) {
    return <p>{error}</p>;
}
```

A complete data-fetching component can use:

```jsx
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
```

---

# 18. React Router

React Router is a library used to implement **routing and navigation** in React applications.

It allows different URLs to display different components **without completely reloading the page**.

Example:

```text
/              → Home
/about         → About
/contact       → Contact
/products      → Products
```

---

# 19. Installation of React Router

Install React Router using:

```bash
npm install react-router-dom
```

---

# 20. `BrowserRouter`

`BrowserRouter` provides routing functionality to the React application.

```jsx
import { BrowserRouter } from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            {/* Application */}
        </BrowserRouter>
    );
}
```

---

# 21. `Routes` and `Route`

`Routes` contains the application's routes.

`Route` defines a URL path and the component that should be displayed.

```jsx
import {    BrowserRouter,    Routes,    Route} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
```

---

# 22. `Link`

The `Link` component is used to navigate between pages without reloading the browser.

```jsx
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>
        </nav>
    );
}
```

### `Link` vs `<a>`

Using:

```jsx
<a href="/about">About</a>
```

can cause a full page reload.

Using:

```jsx
<Link to="/about">About</Link>
```

performs client-side navigation.

---

# 23. `useNavigate`

`useNavigate` is a React Router Hook used to navigate programmatically.

It is useful for:

* Login
* Form submission
* Logout
* Button click
* Successful API request

Example:

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        // Login logic
        navigate("/dashboard");
    };

    return (
        <button onClick={handleLogin}>
            Login
        </button>
    );
}
```

### Navigate Back

```jsx
navigate(-1);
```

---

# 24. `useParams`

`useParams` is used to access **dynamic route parameters**.

### Route:

```jsx
<Route
    path="/users/:id"
    element={<User />}
/>
```

### URL:

```text
/users/101
```

### Component:

```jsx
import { useParams } from "react-router-dom";

function User() {
    const { id } = useParams();

    return (
        <h2>User ID: {id}</h2>
    );
}
```

Output:

```text
User ID: 101
```

---

# 25. `useLocation`

`useLocation` provides information about the current URL.

```jsx
import { useLocation } from "react-router-dom";

function Page() {
    const location = useLocation();

    return (
        <h2>
            Current Path: {location.pathname}
        </h2>
    );
}
```

It can provide information such as:

* `pathname`
* `search`
* `hash`
* `state`

---

# 26. Dynamic Routes

Dynamic routes allow a single route to handle multiple values.

```jsx
<Route
    path="/products/:productId"
    element={<Product />}
/>
```

These URLs can all use the same component:

```text
/products/101
/products/102
/products/103
```

Access the parameter using `useParams`:

```jsx
function Product() {
    const { productId } = useParams();

    return (
        <h2>
            Product ID: {productId}
        </h2>
    );
}
```

---

# 27. 404 / Not Found Route

React Router can display a custom page when the requested URL does not match any defined route.

Use `*` as the path.

```jsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route
        path="*"
        element={<NotFound />}
    />
</Routes>
```

### Not Found Component:

```jsx
function NotFound() {
    return (
        <div>
            <h1>404</h1>

            <p>Page Not Found</p>
        </div>
    );
}
```

The `*` route acts as the **fallback route**.

---