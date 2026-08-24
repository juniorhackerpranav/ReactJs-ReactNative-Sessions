# Session 2 : Effects, Data Fetching and React Router

```text
# 1. Effects in React
# 2. useEffect Hook
# 3. useEffect Syntax and Dependency Array
# 4. useEffect with Different Dependencies
# 5. Data Fetching in React
# 6. Fetch API
# 7. Axios
# 8. Async / Await with Fetch and Axios
# 9. Handling Loading and Error States
# 10. React Router
# 11. BrowserRouter, Routes and Route
# 12. Link
# 13. useNavigate
# 14. useParams
# 15. useLocation
# 16. Dynamic Routes
# 17. 404 / Not Found Route
# 18. Mini Project to implement all learning
```

---

## 1. Effects in React

An **effect** is a piece of code that performs a task outside the normal process of rendering a React component.

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

### Example:

```jsx
import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Component rendered");
  }, []);

  return <h1>Hello React</h1>;
}
```

---

## 3. `useEffect` Syntax and Dependency Array

The second argument of `useEffect` is called the **dependency array**.

It controls when the effect should execute.

```jsx
useEffect(() => {
  // Effect
}, [dependencies]);
```

### Three Common Cases

**1. No dependency array**

```jsx
useEffect(() => {
  console.log("Runs after every render");
});
```

Runs after **every render**.

**2. Empty dependency array**

```jsx
useEffect(() => {
  console.log("Runs once");
}, []);
```

Runs after the **initial render**.

**3. Dependency array with values**

```jsx
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
```

Runs whenever `count` changes.

---

## 4. `useEffect` with Different Dependencies

### Example:

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

### Important Points:

* Effects execute after rendering.
* Dependencies determine when an effect runs.
* Avoid unnecessary effects.
* Effects should not be used for normal calculations that can be done during rendering.

---

## 5. Data Fetching in React

**Data fetching** means retrieving data from an external API or server and displaying it inside a React application.

A common approach is to perform API requests inside `useEffect`.
   
## 6. Fetch API

The **Fetch API** is a built-in browser API used to make HTTP requests.

It returns a **Promise**.

### GET Request:

```jsx
useEffect(() => {

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });

}, []);
```

### Using `async/await`:

```jsx
useEffect(() => {

  const fetchUsers = async () => {

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  };
  fetchUsers();
}, []);
```

---

## 7. Axios

**Axios** is a popular JavaScript library used to make HTTP requests.

### Installation:

```bash
npm install axios
```

### Basic GET Request:

```jsx
import axios from "axios";

const response = await axios.get(
  "https://jsonplaceholder.typicode.com/users"
);

console.log(response.data);
```

### Using Axios with `useEffect`:

```jsx
useEffect(() => {
  const fetchUsers = async () => {

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchUsers();
}, []);
```

---

## 8. Async / Await with Fetch and Axios

`async/await` provides a cleaner way to work with asynchronous operations.

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

### Important Difference:

| Fetch                      | Axios                        |
| -------------------------- | ---------------------------- |
| Built into browser         | External library             |
| Requires `response.json()` | Automatically parses JSON    |
| More manual configuration  | Easier request handling      |
| No installation required   | Requires `npm install axios` |

---

## 9. Handling Loading and Error States

When fetching data, the UI should handle three common states:

```text
Loading
   ↓
Success → Display Data

or

Error → Display Error Message
```

### Example:

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

function Users() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);

      } catch (error) {

        setError("Failed to fetch users");

      } finally {

        setLoading(false);

      }

    };

    fetchUsers();

  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

---

# 10. React Router

React Router is a library used to implement **routing and navigation** in React applications.

It allows different URLs to display different components **without completely reloading the page**.

### Installation:

```bash
npm install react-router-dom
```

### Example Routes:

```text
/              → Home
/about         → About
/contact       → Contact
/products      → Products
```

---

## 11. `BrowserRouter`, `Routes` and `Route`

React Router provides several important components for defining routes.

### `BrowserRouter`

Provides routing functionality to the application.

### `Routes`

Contains all the application routes.

### `Route`

Defines a URL path and the component that should be displayed.

### Example:

```jsx
import { BrowserRouter,  Routes,  Route} from "react-router-dom";

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

## 12. `Link`

The `Link` component is used to navigate between pages without reloading the browser.

### Example:

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

### Why use `Link` instead of `<a>`?

```jsx
<a href="/about">About</a>
```

can cause a full page reload.

Whereas:

```jsx
<Link to="/about">About</Link>
```

performs client-side navigation.

---

## 13. `useNavigate`

`useNavigate` is a React Router Hook used to navigate programmatically.

It is useful when navigation needs to happen after an action such as:

* Login
* Form submission
* Logout
* Button click
* Successful API request

### Example:

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

### Navigate Back:

```jsx
navigate(-1);
```

---

## 14. `useParams`

`useParams` is used to access **dynamic route parameters**.

### Route:

```jsx
<Route path="/users/:id" element={<User />} />
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

## 15. `useLocation`

`useLocation` provides information about the current URL.

### Example:

```jsx
import { useLocation } from "react-router-dom";

function Page() {
  const location = useLocation();
  console.log(location);

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

## 16. Dynamic Routes

Dynamic routes allow a single route to handle multiple values.

### Example:

```jsx
<Route path="/products/:productId" element={<Product />} />
```

These URLs can all use the same component:

```text
/products/101
/products/102
/products/103
```

### Access the Parameter:

```jsx
import { useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();

  return (
    <h2>Product ID: {productId}</h2>
  );
}
```

---

## 17. 404 / Not Found Route

React Router can display a custom page when the requested URL does not match any defined route.

Use `*` as the path.

### Example:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
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