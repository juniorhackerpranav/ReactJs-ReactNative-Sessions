# Session 4: React Context API
 
```
1. Introduction to Context API

2. What is Context API?

3. Why Context API?

4. What is Prop Drilling?

5. Understanding Context API Architecture

6. Creating a Context

7. Context Provider

8. useContext Hook

9. Passing Data Between Components

10. Updating Context Data

11. Context API with useState

12. Context API with Multiple Components

13. Advantages and Limitations of Context API 
```

## 1. Introduction to Context API

The Context API is a built-in feature of React that allows components to share data without passing props manually through every level of the component tree.

It is commonly used for managing global data such as user authentication, themes, language preferences, and application settings.

## 2. What is Context API?

* Built-in React Feature: Context API is provided by React and does not require installing external libraries.

* Global Data Sharing: Allows multiple components to access shared data from a common context.

* Avoids Prop Drilling: Eliminates the need to pass props through intermediate components that do not use the data.

* Provider and Consumer: Uses a Context Provider to supply values and the `useContext` hook to access them.

* Component Communication: Makes sharing data between deeply nested components easier.

## 3. Why Context API?

* Avoid Prop Drilling: Reduces unnecessary prop passing across multiple component levels.

* Centralized Data: Keeps commonly shared data in one context.

* Code Maintainability: Makes components cleaner by reducing repeated prop declarations.

* Easy Data Access: Allows deeply nested components to access shared data directly.

* Reusable Architecture: Helps organize applications that require shared state across multiple components.

## 4. What is Prop Drilling?

Prop drilling is the process of passing data from a parent component to deeply nested child components through intermediate components that do not directly need that data.

Example: Without Context API


```
function App() {
  const username = "Pranav";

  return <Parent username={username} />;
}

function Parent({ username }) {
  return <Child username={username} />;
}

function Child({ username }) {
  return <h2>Welcome, {username}</h2>;
}

export default App;
```

Explanation:

* `App` contains the username.

* `Parent` receives the username only to pass it further.

* `Child` actually uses the username.

* As the application grows, passing props through multiple levels can become difficult to maintain.

Solution: Context API allows `Child` to access the username directly without passing it through `Parent`.

## 5. Understanding Context API Architecture

Context API mainly consists of three parts:

* createContext(): Creates a context object used to share data.

* Provider: Makes the context value available to components within its tree.

* useContext(): Allows functional components to read the context value.

Basic Architecture:

```
             App
              |
       Context Provider
              |
           Parent
              |
           Child
              |
       useContext()
              |
       Shared Context Data
```

## 6. Creating a Context

The `createContext()` function is used to create a context object.

Syntax:


```
import { createContext } from "react";

const MyContext = createContext();
```

Example:


```
import { createContext } from "react";

export const UserContext = createContext();
```

Explanation:

* `createContext()` creates a context object.

* `UserContext` can be imported into different components.

* The context object provides a `Provider` to share values with child components.

* An optional default value can be passed to `createContext()`.

## 7. Context Provider

A Context Provider supplies data to all components within its subtree.

In modern React, the context itself can be used as a provider. In React 18 and earlier, use `Context.Provider`.

Syntax:


```
<MyContext.Provider value={data}>
  <ChildComponent />
</MyContext.Provider>
```

Example:


```
import { createContext } from "react";

export const UserContext = createContext();

function App() {
  const username = "Pranav";

  return (
    <UserContext.Provider value={username}>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
```

Explanation:

* `UserContext.Provider` provides the context value.

* The `value` prop contains the data to be shared.

* `Profile` and its descendants can access the provided value.

* Components outside the provider cannot access that provider's value.

## 8. useContext Hook

The `useContext()` hook allows functional components to access values from a context.

Syntax:


```
const value = useContext(MyContext);
```

Example:


```
import { useContext } from "react";
import { UserContext } from "./App";

function Profile() {
  const username = useContext(UserContext);

  return <h2>Welcome, {username}</h2>;
}

export default Profile;
```

Explanation:

* `useContext()` reads the nearest matching context provider's value.

* It eliminates the need to receive the data through props.

* Components automatically receive updated context values when the provider value changes.

## 9. Passing Data Between Components

Context API allows data to be shared between components even when they are deeply nested.

Example:


```
// UserContext.jsx

import { createContext } from "react";

export const UserContext = createContext();
```


```
// App.jsx

import { UserContext } from "./UserContext";
import Profile from "./Profile";

function App() {
  const user = {
    name: "Pranav",
    role: "Developer"
  };

  return (
    <UserContext value={user}>
      <Profile />
    </UserContext>
  );
}

export default App;
```


```
// Profile.jsx

import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </div>
  );
}

export default Profile;
```

Explanation:

* `App` provides the user object through `UserContext`.

* `Profile` accesses the shared object using `useContext()`.

* No intermediate component needs to receive or forward the user object.

* The example uses the React 19 provider syntax.

## 10. Updating Context Data

Context API can share functions along with data, allowing child components to update shared state.

Example:


```
// ThemeContext.jsx

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext>
  );
}
```


```
// App.jsx

import { ThemeProvider } from "./ThemeContext";
import Dashboard from "./Dashboard";

function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
```


```
// Dashboard.jsx

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Dashboard() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Dashboard;
```

Explanation:

* `useState()` manages the theme state.

* `ThemeProvider` shares both the current theme and the update function.

* `toggleTheme()` changes the theme.

* Any component using this context can read or update the theme.

* Updating the context value triggers updates in components that consume it.

## 11. Context API with useState

Context API is commonly combined with `useState()` to manage shared application state.

Example: Counter Context


```
// CounterContext.jsx

import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext
      value={{ count, increment, decrement, reset }}
    >
      {children}
    </CounterContext>
  );
}
```


```
// App.jsx

import { CounterProvider } from "./CounterContext";
import Counter from "./Counter";

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
```


```
// Counter.jsx

import { useContext } from "react";
import { CounterContext } from "./CounterContext";

function Counter() {
  const { count, increment, decrement, reset } =
    useContext(CounterContext);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
```

Explanation:

* `useState()` stores the shared counter value.

* The provider shares the counter and its update functions.

* Components can access and modify the counter without prop drilling.

* This approach is useful for small and medium-sized shared state requirements.

## 12. Context API with Multiple Components

A single context can be accessed by multiple components within the same provider tree.

Example:


```
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext
      value={{ isLoggedIn, login, logout }}
    >
      {children}
    </AuthContext>
  );
}

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <p>Please log in</p>
      )}
    </nav>
  );
}

function Login() {
  const { login } = useContext(AuthContext);

  return <button onClick={login}>Login</button>;
}

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Login />
    </AuthProvider>
  );
}

export default App;
```

Explanation:

* `AuthProvider` manages the authentication state.

* `Navbar` reads the login state and provides a logout action.

* `Login` accesses the login function.

* Both components share the same state through the context.

* This example demonstrates basic UI state sharing, not complete secure authentication.

## 13. Advantages and Limitations of Context API

Advantages

* Reduces prop drilling.

* Provides centralized access to shared data.

* Built into React without additional dependencies.

* Makes deeply nested component communication easier.

* Can be combined with hooks such as `useState` and `useReducer`.

Limitations

* Frequent context updates can cause many consuming components to re-render.

* Large applications may become difficult to manage if all state is placed in a single context.

* Context does not provide built-in advanced features such as middleware or Redux-style action handling.

* It is not a replacement for every type of state management.

* Context values should be structured carefully to avoid unnecessary updates.

--- 
--- 
--- 

# Express 
 
```
# 1. Introduction to Backend Development

# 2. What is Express.js?

# 3. Why Express.js?

# 4. Features of Express.js

# 5. Node.js and Express.js

# 6. Create First Express Project

# 7. Understand the Project Structure

# 8. Creating an Express Server

# 9. HTTP Methods

# 10. Routing in Express

# 11. Request and Response Objects

# 12. Middleware in Express

# 13. Handling JSON Data

# 14. Handling Route Parameters and Query Parameters

# 15. Error Handling in Express

# 16. REST API Basics
 
```

## 1. Introduction to Backend Development

Backend development refers to the server-side part of an application that handles business logic, processes requests, manages data, and communicates with databases.

* Server-Side Logic: Processes user requests and executes application logic.

* Database Management: Stores, retrieves, updates, and deletes application data.

* API Development: Provides endpoints through which frontend applications communicate with the backend.

* Authentication: Handles user identity verification and access control.

* Data Processing: Validates, transforms, and processes incoming data.

## 2. What is Express.js?

Express.js is a lightweight and flexible web application framework built on top of Node.js. It simplifies the development of web servers and REST APIs.

* Node.js Framework: Express runs on Node.js and provides additional tools for handling HTTP requests and responses.

* Minimal and Flexible: Offers essential web development features without enforcing a strict application structure.

* Routing: Supports defining endpoints for different HTTP methods and URL paths.

* Middleware: Allows executing functions during the request-response cycle.

* API Development: Commonly used to create REST APIs for frontend applications such as React.

## 3. Why Express.js?

* Simplified Server Development: Reduces the amount of code required to create HTTP servers.

* Easy Routing: Makes it simple to define and manage multiple API endpoints.

* Middleware Support: Provides a flexible mechanism for request processing.

* Database Integration: Works with databases such as MongoDB and PostgreSQL through suitable libraries.

* Scalability: Supports modular application structures that can grow with project requirements.

* Large Ecosystem: Offers a wide range of middleware and third-party packages.

## 4. Features of Express.js

* Routing: Defines application endpoints for handling client requests.

* Middleware: Executes functions for tasks such as logging, validation, and authentication.

* Request and Response Handling: Provides convenient methods for processing HTTP requests and sending responses.

* Template Engine Support: Supports template engines for generating dynamic HTML.

* Error Handling: Provides mechanisms for handling application errors.

* REST API Development: Simplifies the creation of API endpoints for frontend and mobile applications.

## 5. Node.js and Express.js

| Node.js                                              | Express.js                                               |
| ---------------------------------------------------- | -------------------------------------------------------- |
| JavaScript runtime environment.                      | Web framework built on Node.js.                          |
| Provides core HTTP server functionality.             | Simplifies HTTP server and routing development.          |
| Can create servers using the built-in `http` module. | Provides convenient routing and middleware features.     |
| Offers lower-level server APIs.                      | Provides higher-level abstractions for web applications. |

Example:

Node.js HTTP server:

 

```
import http from "node:http";

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js");
});

server.listen(3000);
```

Express.js server:

 

```
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(3000);
```

## 6. Create First Express Project

We use Node.js and npm to create an Express.js project.

Commands to Run:

Bash

```
# Create a project directory
mkdir express-app

# Navigate into the project
cd express-app

# Initialize the Node.js project
npm init -y

# Install Express
npm install express

# Install development dependency
npm install --save-dev nodemon
```

Configure `package.json`:

JSON

```
{
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

Run the project:

Bash

```
npm run dev
```

## 7. Understand the Project Structure

A basic Express.js project can have the following structure:

```
express-app/
│
├── node_modules/
│
├── src/
│   ├── routes/
│   │   └── userRoutes.js
│   │
│   ├── controllers/
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   └── logger.js
│   │
│   └── app.js
│
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

Explanation:

* node_modules: Contains installed npm packages.

* routes: Defines API endpoints and connects them to controllers.

* controllers: Contains request-handling and business logic.

* middleware: Stores reusable request-processing functions.

* app.js: Configures Express, middleware, and routes.

* server.js: Starts the HTTP server.

* package.json: Stores project metadata, dependencies, and scripts.

This is an example of a modular structure. Small projects can begin with a single `server.js` file.

## 8. Creating an Express Server

An Express server listens for incoming HTTP requests and sends appropriate responses.

Example:

 

```
import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Explanation:

* `express()` creates an Express application.

* `app.get()` defines a GET endpoint.

* `req` represents the incoming request.

* `res` is used to send a response.

* `app.listen()` starts the server on the specified port.

Output:

```
Server running on port 3000
```

Opening `http://localhost:3000` displays:

```
Welcome to Express.js
```

## 9. HTTP Methods

HTTP methods specify the type of operation a client wants to perform on a server resource.

| Method | Purpose                       | Example                |
| ------ | ----------------------------- | ---------------------- |
| GET    | Retrieve data.                | Get all users.         |
| POST   | Create new data.              | Add a user.            |
| PUT    | Replace an existing resource. | Update a user.         |
| PATCH  | Partially update a resource.  | Update a user's email. |
| DELETE | Delete a resource.            | Remove a user.         |

Example:

 

```
app.get("/users", (req, res) => {
  res.send("Get all users");
});

app.post("/users", (req, res) => {
  res.send("Create user");
});

app.put("/users/:id", (req, res) => {
  res.send("Replace user");
});

app.patch("/users/:id", (req, res) => {
  res.send("Update user partially");
});

app.delete("/users/:id", (req, res) => {
  res.send("Delete user");
});
```

## 10. Routing in Express

Routing determines how an application responds to requests made to a particular URL and HTTP method.

Syntax:

 

```
app.METHOD(PATH, HANDLER);
```

Example:

 

```
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" }
  ]);
});
```

Explanation:

* `METHOD` specifies the HTTP method.

* `PATH` specifies the endpoint URL.

* `HANDLER` defines what happens when the route matches the request.

Express also supports modular routing through `express.Router()`.

## 11. Request and Response Objects

Express provides request and response objects to handle client-server communication.

Request Object (`req`):

* `req.params`: Accesses route parameters.

* `req.query`: Accesses query string parameters.

* `req.body`: Accesses parsed request body data.

* `req.headers`: Accesses request headers.

* `req.method`: Returns the HTTP method.

Response Object (`res`):

* `res.send()`: Sends a response.

* `res.json()`: Sends a JSON response.

* `res.status()`: Sets the HTTP status code.

* `res.sendStatus()`: Sends a status code with its standard message.

* `res.redirect()`: Redirects the client to another URL.

Example:

 

```
app.get("/user", (req, res) => {
  res.status(200).json({
    message: "User details fetched",
    name: "Pranav"
  });
});
```

## 12. Middleware in Express

Middleware functions execute during the request-response cycle. They can access the request and response objects and can either pass control to the next middleware or send a response.

Types of Middleware:

* Application-Level Middleware: Applied to the Express application using `app.use()`.

* Router-Level Middleware: Applied to specific routers.

* Built-in Middleware: Includes `express.json()` and `express.static()`.

* Third-Party Middleware: Includes packages such as `cors` and `morgan`.

* Error-Handling Middleware: Handles errors passed through the Express error-handling mechanism.

Example:

 

```
import express from "express";

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Middleware Example");
});

app.listen(3000);
```

Explanation:

* `logger` is a custom middleware function.

* It logs the HTTP method and request URL.

* `next()` passes control to the next middleware or route handler.

* Middleware can be used for logging, validation, authentication, and more.

## 13. Handling JSON Data

Express provides built-in middleware to parse incoming JSON request bodies.

Example:

 

```
import express from "express";

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const user = req.body;

  res.status(201).json({
    message: "User created",
    data: user
  });
});

app.listen(3000);
```

Example Request:

http

```
POST /users
Content-Type: application/json
```

JSON

```
{
  "name": "Pranav",
  "email": "pranav@example.com"
}
```

Response:

JSON

```
{
  "message": "User created",
  "data": {
    "name": "Pranav",
    "email": "pranav@example.com"
  }
}
```

## 14. Handling Route Parameters and Query Parameters

Express supports route parameters and query parameters for passing information through URLs.

Route Parameters:

Route parameters are named URL segments used to identify specific resources.

Example:

 

```
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    message: "User details",
    id: userId
  });
});
```

Request:

```
GET /users/101
```

Query Parameters:

Query parameters are key-value pairs included after the `?` symbol in a URL.

Example:

 

```
app.get("/products", (req, res) => {
  const category = req.query.category;

  res.json({
    category
  });
});
```

Request:

```
GET /products?category=electronics
```

Difference:

* Route parameters usually identify a specific resource.

* Query parameters commonly support filtering, searching, sorting, and pagination.

## 15. Error Handling in Express

Error handling helps an application respond properly when unexpected situations occur.

Example:

 

```
import express from "express";

const app = express();

app.get("/data", (req, res, next) => {
  try {
    throw new Error("Something went wrong");
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    message: "Internal Server Error"
  });
});

app.listen(3000);
```

Explanation:

* `next(error)` passes an error to error-handling middleware.

* Error-handling middleware accepts four arguments: `err`, `req`, `res`, and `next`.

* It logs the error and sends an appropriate response.

* Centralized error handling avoids repeating error-response logic across routes.

## 16. REST API Basics

REST (Representational State Transfer) is an architectural style for designing networked applications. REST APIs commonly use HTTP methods and resource-based URLs.

Key Principles:

* Resource-Based URLs: Represent resources using endpoints such as `/users` and `/products`.

* HTTP Methods: Use methods such as GET, POST, PUT, PATCH, and DELETE.

* Stateless Communication: Each request contains the information needed to process it.

* JSON Data: JSON is commonly used for exchanging data.

* HTTP Status Codes: Use suitable status codes to communicate request outcomes.

Example User API:

| Method | Endpoint         | Operation      |
| ------ | ---------------- | -------------- |
| GET    | `/api/users`     | Get all users  |
| GET    | `/api/users/:id` | Get a user     |
| POST   | `/api/users`     | Create a user  |
| PUT    | `/api/users/:id` | Replace a user |
| PATCH  | `/api/users/:id` | Update a user  |
| DELETE | `/api/users/:id` | Delete a user  |
 