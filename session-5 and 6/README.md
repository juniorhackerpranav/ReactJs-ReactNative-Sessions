# Session 5 & 6: Redux Toolkit, authentication using JWT and deployment
 

```
1. Introduction to State Management
 
2. What is Redux?

3. What is Redux Toolkit?

4. Why Redux Toolkit?

5. Redux Architecture

6. Core Concepts of Redux

7. Create a Redux Toolkit Project

8. Understanding the Redux Store

9. Creating a Slice

10. Reducers and Actions

11. configureStore()

12. Provider Component

13. useSelector() Hook

14. useDispatch() Hook

15. Updating State Using Redux Toolkit

16. Redux Toolkit with Multiple Components

17. Asynchronous Operations Using createAsyncThunk

18. Advantages and Limitations of Redux Toolkit
```

## 1. Introduction to State Management

State management refers to the process of storing, updating, and sharing application data in a predictable way.

* Application State: Data that changes during application execution.

* Local State: Data managed within an individual component.

* Global State: Data shared across multiple components.

* State Updates: Mechanisms for modifying application data.

* State Management Libraries: Tools that help organize and manage shared application state.

Examples of application state:

* User authentication details.

* Shopping cart items.

* Theme preferences.

* Product lists.

* Notifications.

* Application settings.

## 2. What is Redux?

Redux is a predictable state management library used to manage and centralize application state.

* Centralized Store: Stores shared application state in a single store.

* Predictable Updates: State changes through defined actions and reducers.

* Unidirectional Data Flow: Data flows through a structured update cycle.

* Debugging Support: Supports Redux DevTools for inspecting state changes.

* Framework Independent: Redux can be used with React and other JavaScript applications.

Redux is commonly used with React through the React Redux library.

## 3. What is Redux Toolkit?

Redux Toolkit (RTK) is the official recommended approach for writing Redux logic.

It simplifies Redux development by reducing boilerplate code and providing utilities for common state management tasks.

* configureStore(): Simplifies Redux store configuration.

* createSlice(): Generates reducers and action creators together.

* createAsyncThunk(): Handles asynchronous operations such as API requests.

* Immer Integration: Allows writing reducer logic using mutation-like syntax while maintaining immutable state updates.

* DevTools Integration: Provides Redux DevTools support by default when configuring the store.

## 4. Why Redux Toolkit?

* Reduced Boilerplate: Avoids manually writing many action types and action creators.

* Simplified Configuration: Provides an easier way to configure the Redux store.

* Predictable State Management: Maintains a consistent state update process.

* Asynchronous Support: Simplifies API calls using `createAsyncThunk`.

* Better Maintainability: Organizes state logic into manageable slices.

* Debugging: Integrates with Redux DevTools for debugging state changes.

## 5. Redux Architecture

Redux follows a unidirectional data flow architecture.

Architecture:

```
        React Component
               |
          useDispatch()
               |
            Action
               |
            Reducer
               |
         Redux Store
               |
         useSelector()
               |
        React Component
```

Explanation:

1. A component dispatches an action.

2. The action identifies the operation to perform.

3. A reducer processes the action and calculates the next state.

4. The Redux store saves the updated state.

5. Components subscribed to the affected state receive updated values.

## 6. Core Concepts of Redux

* Store: Holds the application's shared state.

* Action: Describes an event or operation that should occur.

* Reducer: Determines how the state changes in response to an action.

* Dispatch: Sends an action to the Redux store.

* Selector: Reads data from the Redux store.

* Slice: Groups related state, reducers, and generated actions.

## 7. Create a Redux Toolkit Project

Redux Toolkit can be added to an existing React project or installed when creating a new project.

Commands:

Bash

```
# Create a React project using Vite
npm create vite@latest redux-app -- --template react

# Navigate into the project
cd redux-app

# Install dependencies
npm install

# Install Redux Toolkit and React Redux
npm install @reduxjs/toolkit react-redux

# Start the development server
npm run dev
```

Suggested Project Structure:

```
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── counter/
│       └── counterSlice.js
│
├── components/
│   └── Counter.jsx
│
├── App.jsx
└── main.jsx
```

## 8. Understanding the Redux Store

The Redux store holds the shared application state and coordinates state updates.

Syntax:


```
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {}
});

export default store;
```

Explanation:

* `configureStore()` creates and configures the Redux store.

* `reducer` defines the reducers responsible for managing application state.

* The store can combine multiple reducers for different application features.

* The store is made available to React components using the `Provider` component.

## 9. Creating a Slice

A slice represents a specific part of the application state.

The `createSlice()` function automatically generates action creators and action types from the reducers defined inside it.

Syntax:


```
import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example",
  initialState: {},
  reducers: {}
});

export default exampleSlice.reducer;
```

Example:


```
// counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0
  },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    reset: (state) => {
      state.count = 0;
    }
  }
});

export const { increment, decrement, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
```

Explanation:

* `name` identifies the slice.

* `initialState` defines the starting state.

* `reducers` contains functions that describe state updates.

* `counterSlice.actions` contains automatically generated action creators.

* `counterSlice.reducer` is registered with the Redux store.

The mutation-like syntax is made safe by Redux Toolkit's Immer integration.

## 10. Reducers and Actions

Actions describe what happened, while reducers determine how the state changes.

Example:


```
const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0
  },

  reducers: {
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});
```

Dispatching an Action:


```
dispatch(incrementByAmount(5));
```

Explanation:

* `incrementByAmount` is an action creator.

* The value `5` becomes the action's `payload`.

* The reducer receives the action and updates the counter.

* The store publishes the updated state to its subscribers.

## 11. configureStore()

`configureStore()` is used to create the Redux store and register one or more reducers.

Example:


```
// store.js

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
```

Explanation:

* The `counter` key defines where the counter state is stored.

* `counterReducer` handles updates for the counter slice.

* The state can be accessed through `state.counter`.

* Multiple reducers can be registered in the same store.

## 12. Provider Component

The `Provider` component makes the Redux store available to the React component tree.

Example:


```
// main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

Explanation:

* `Provider` connects React to the Redux store.

* The `store` prop supplies the configured store.

* All descendant components can access the store using React Redux hooks.

* Components outside the provider cannot access this store through its context.


## 13. useSelector() Hook

The `useSelector()` hook is used to access specific values from the Redux store.

Syntax:


```
const value = useSelector((state) => state.sliceName.value);
```

Example:


```
// Counter.jsx

import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector(
    (state) => state.counter.count
  );

  return <h2>Count: {count}</h2>;
}

export default Counter;
```

Explanation:

* `useSelector()` reads data from the Redux store.

* The selector function receives the complete Redux state.

* `state.counter.count` accesses the counter value.

* The component re-renders when the selected value changes according to the selector's equality comparison.

## 14. useDispatch() Hook

The `useDispatch()` hook provides access to the Redux store's dispatch function.

Syntax:


```
const dispatch = useDispatch();
```

Example:


```
// Counter.jsx

import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset
} from "../features/counter/counterSlice";

function CounterActions() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default CounterActions;
```

Explanation:

* `useDispatch()` returns the dispatch function.

* `dispatch()` sends an action to the Redux store.

* The reducer processes the dispatched action.

* The updated state becomes available to subscribed components.

## 15. Updating State Using Redux Toolkit

Redux Toolkit allows components to update shared state by dispatching actions.

Complete Counter Example:


```
// Counter.jsx

import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset
} from "../features/counter/counterSlice";

function Counter() {
  const count = useSelector(
    (state) => state.counter.count
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
```

Explanation:

* `useSelector()` reads the current counter value.

* `useDispatch()` sends actions to the store.

* The counter slice handles the updates.

* React displays the new value when the selected state changes.

## 16. Redux Toolkit with Multiple Components

Redux Toolkit allows multiple components to share and update the same application state.

Example:


```
// CounterDisplay.jsx

import { useSelector } from "react-redux";

function CounterDisplay() {
  const count = useSelector(
    (state) => state.counter.count
  );

  return <h2>Current Count: {count}</h2>;
}

export default CounterDisplay;
```


```
// CounterControls.jsx

import { useDispatch } from "react-redux";
import {
  increment,
  decrement
} from "../features/counter/counterSlice";

function CounterControls() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default CounterControls;
```


```
// App.jsx

import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

function App() {
  return (
    <div>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
}

export default App;
```

Explanation:

* `CounterDisplay` reads the counter state.

* `CounterControls` dispatches actions.

* Both components interact with the same Redux store.

* The display updates automatically when the counter changes.

## 18. Advantages and Limitations of Redux Toolkit

Advantages

* Centralized state management.

* Less boilerplate than traditional Redux.

* Predictable and structured state updates.

* Built-in support for Redux DevTools.

* Supports asynchronous logic through `createAsyncThunk`.

* Organizes state into feature-based slices.

* Suitable for complex shared state requirements.

Limitations

* Requires initial setup and understanding of Redux concepts.

* Can introduce unnecessary complexity for small applications.

* Components may re-render when selected state changes.

* State organization requires careful planning.

* Does not automatically solve server-state caching and synchronization; Redux Toolkit Query can help with these tasks.
 


# Authentication Using JWT

```
1. Introduction to Authentication

2. What is Authentication?

3. Authentication vs Authorization

4. What is JWT?

5. Why JWT?

6. JWT Structure

7. How JWT Authentication Works

8. Introduction to bcrypt

9. Create Authentication Backend Project

10. User Registration API

11. Password Hashing Using bcrypt

12. User Login API

13. Generating JWT Tokens

14. Verifying JWT Tokens

15. Authentication Middleware

16. Protected Routes

17. JWT Authentication with React

18. Token Storage and Security

19. Logout Functionality

20. Advantages and Limitations of JWT 
```

## 1. Introduction to Authentication

Authentication is the process of verifying the identity of a user or system before granting access to an application.

It is an essential part of applications that require user accounts and personalized access.

* User Identity: Identifies the user attempting to access an application.

* Credential Verification: Validates credentials such as email and password.

* Session Management: Maintains an authenticated user's access across requests.

* Secure Access: Prevents unauthorized users from accessing restricted resources.

* User Account Management: Supports registration, login, logout, and account-related operations.

Examples:

* Logging into a banking application.

* Accessing a personal dashboard.

* Viewing private user information.

* Managing account settings.

## 2. What is Authentication?

Authentication is the process of confirming that a user is who they claim to be.

Common authentication methods include:

* Password-Based Authentication: Uses a username or email and password.

* Token-Based Authentication: Uses tokens to prove that a user has authenticated.

* Session-Based Authentication: Uses server-managed sessions and session identifiers.

* Multi-Factor Authentication: Uses multiple verification factors, such as a password and a one-time code.

* OAuth-Based Authentication: Allows users to authenticate through an external identity provider.

JWT is commonly used in token-based authentication systems.

## 3. Authentication vs Authorization

Authentication and authorization are related but different security concepts.

| Authentication                               | Authorization                                          |
| -------------------------------------------- | ------------------------------------------------------ |
| Verifies user identity.                      | Determines what an authenticated user can access.      |
| Answers: Who are you?                        | Answers: What are you allowed to do?                   |
| Usually happens before access is granted.    | Usually follows identity verification.                 |
| Example: Logging in with email and password. | Example: Checking whether a user has admin privileges. |

Example:

Consider an employee management application.

* An employee logs in using their credentials. This is authentication.

* The application checks whether the employee can access administrative reports. This is authorization.

## 4. What is JWT?

JWT stands for JSON Web Token. It is a compact, URL-safe format for representing claims that can be transmitted between parties.

JWTs are commonly used to implement token-based authentication.

* Token-Based: A server can issue a token after successful authentication.

* Self-Contained Claims: A token can carry information such as a user identifier and expiration time.

* Digitally Signed: A JWT can be signed to verify its integrity and authenticity.

* Stateless Verification: A server can verify a signed token without looking up a traditional server-side session for every request.

* Cross-Platform: JWTs can be used by web applications, mobile apps, and backend services.

A signed JWT is not automatically encrypted. Its payload can usually be decoded and read, so sensitive information such as passwords must never be stored inside it.

## 5. Why JWT?

* Stateless Authentication: Supports authentication without maintaining traditional server-side session records.

* API Integration: Works well with REST APIs.

* Scalability: Can simplify authentication across multiple backend services.

* Cross-Platform Support: Can be used by web, mobile, and other clients.

* Expiration Support: Tokens can include expiration claims to limit their lifetime.

* Request Authentication: Clients can send tokens with API requests to access protected endpoints.

JWT is not inherently more secure than session-based authentication. The security of a system depends on token handling, expiration, signing, storage, and other implementation details.

## 6. JWT Structure

A standard JWT consists of three parts separated by dots.

```
header.payload.signature
```

JWT Structure:

```
xxxxx.yyyyy.zzzzz
  |      |      |
  |      |      |
Header  Payload Signature
```

1. Header

The header contains metadata about the token, including the signing algorithm and token type.

Example:

JSON

```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

2. Payload

The payload contains claims or information associated with the token.

Example:

JSON

```
{
  "userId": "12345",
  "email": "user@example.com",
  "role": "user",
  "iat": 1791024000,
  "exp": 1791027600
}
```

* `userId`: Identifies the user.

* `email`: Represents the user's email.

* `role`: Represents the user's role.

* `iat`: Indicates when the token was issued.

* `exp`: Indicates when the token expires.

3. Signature

The signature verifies that the token has not been modified and was signed using the expected signing key.

For an HMAC-based JWT, the signature is conceptually calculated using:

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
```

The server verifies the signature when receiving the token.

## 7. How JWT Authentication Works

Authentication Flow:

```
        React Application
               |
               |
         Login Request
               |
               v
       Express Backend
               |
               |
       Verify Credentials
               |
               v
       Generate JWT Token
               |
               |
         Return Token
               |
               v
        React Application
               |
               |
     Send Token with Request
               |
               v
       Express Middleware
               |
               |
        Verify JWT Token
               |
          /         \
         /           \
      Valid         Invalid
        |               |
        v               v
   Allow Access      Reject
        |
        v
  Protected API
```

Explanation:

1. The user enters their email and password.

2. The frontend sends credentials to the login API.

3. The backend verifies the user's credentials.

4. The backend generates a JWT after successful authentication.

5. The frontend receives the token or an authentication cookie, depending on the chosen architecture.

6. The client sends the token with requests to protected endpoints when using bearer-token authentication.

7. Middleware verifies the token.

8. The server allows or rejects access based on the authentication result and any required authorization checks.

## 8. Introduction to bcrypt

`bcrypt` is a password-hashing algorithm commonly used to securely store user passwords.

Instead of storing plain-text passwords, applications store password hashes.

* Password Hashing: Converts a password into a one-way hash.

* Salt: Uses a random salt to make identical passwords produce different hashes.

* Work Factor: Allows developers to control the computational cost of hashing.

* Password Verification: Provides a comparison function to check a submitted password against its stored hash.

Installation:

Bash

```
npm install bcrypt
```

Example:


```
import bcrypt from "bcrypt";

const password = "MySecurePassword123";

// Hash the password
const hashedPassword = await bcrypt.hash(
  password,
  12
);

console.log(hashedPassword);

// Verify the password
const isValid = await bcrypt.compare(
  password,
  hashedPassword
);

console.log(isValid);
```

Explanation:

* `bcrypt.hash()` generates a password hash.

* `12` represents the bcrypt cost factor.

* `bcrypt.compare()` checks a password against the stored hash.

* Passwords should never be stored in plain text.

The appropriate cost factor should be selected based on deployment hardware and performance requirements.

## 9. Create Authentication Backend Project

We use Node.js, Express, MongoDB, Mongoose, bcrypt, and JWT to build an authentication backend.

Commands:

Bash

```
# Create a project directory
mkdir jwt-auth-app

# Navigate into the project
cd jwt-auth-app

# Initialize the project
npm init -y

# Install dependencies
npm install express mongoose bcrypt jsonwebtoken dotenv cors

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

Suggested Project Structure:

```
jwt-auth-app/
│
├── config/
│   └── db.js
│
├── models/
│   └── User.js
│
├── controllers/
│   └── authController.js
│
├── routes/
│   └── authRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── .env
├── .gitignore
├── app.js
├── server.js
└── package.json
```

Environment Variables (`.env`):

env

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/jwt_auth
JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRES_IN=1h
```

The JWT secret must be generated securely and kept private. Never commit `.env` files or hardcode production secrets in source code.


## 10. User Registration API

User registration allows new users to create an account by submitting details such as name, email, and password.

User Model:


```
// models/User.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

export default User;
```

Explanation:

* `name` stores the user's name.

* `email` stores a unique email address.

* `password` stores the password hash, not the original password.

* `timestamps` automatically adds `createdAt` and `updatedAt`.

* `unique` creates a unique index for email addresses; application-level error handling is still needed for duplicate entries.

## 11. Password Hashing Using bcrypt

During registration, the password must be hashed before saving the user to the database.

Example:


```
// controllers/authController.js

import bcrypt from "bcrypt";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered"
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      12
    );

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed"
    });
  }
};
```

Explanation:

* The backend receives registration details through `req.body`.

* It validates required fields.

* It checks whether the email is already registered.

* It hashes the password using `bcrypt.hash()`.

* It creates the user record in MongoDB.

* It returns the registered user's non-sensitive details.

For a production application, additional validation, duplicate-key error handling, rate limiting, and password policy checks should be included.

## 12. User Login API

The login API verifies a user's credentials and allows successful users to obtain an authentication token.

Example:


```
// Add to controllers/authController.js

import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const user = await User.findOne({
      email: email.toLowerCase()
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      {
        userId: user._id.toString()
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1h"
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed"
    });
  }
};
```

Explanation:

* The backend searches for the user using the submitted email.

* `bcrypt.compare()` verifies the submitted password.

* If the credentials are invalid, the server rejects the request.

* `jwt.sign()` generates a signed token after successful login.

* The response includes the token and basic user details.

In production, validate and normalize email addresses consistently during both registration and login.

## 13. Generating JWT Tokens

The `jsonwebtoken` package provides functions for creating and verifying JWTs.

Installation:

Bash

```
npm install jsonwebtoken
```

Syntax:


```
jwt.sign(payload, secret, options);
```

Example:


```
import jwt from "jsonwebtoken";

const payload = {
  userId: "12345"
};

const token = jwt.sign(
  payload,
  process.env.JWT_SECRET,
  {
    expiresIn: "1h"
  }
);

console.log(token);
```

Explanation:

* `payload` contains the claims to include in the token.

* `secret` is the signing key.

* `expiresIn` sets the token expiration period.

* The returned value is a signed JWT string.

A token is generally created after verifying user credentials, not simply from an unverified user ID supplied by a client.

## 14. Verifying JWT Tokens

JWT verification confirms the token's signature and checks relevant registered claims such as expiration.

Syntax:


```
jwt.verify(token, secret);
```

Example:


```
import jwt from "jsonwebtoken";

const token = "your_jwt_token";

try {
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET
  );

  console.log(decoded);
} catch (error) {
  console.log("Invalid or expired token");
}
```

Explanation:

* `jwt.verify()` checks the token's signature.

* It validates the token's expiration when the `exp` claim is present.

* On success, it returns the decoded claims.

* On failure, it throws an error.

* Verification should use an explicitly permitted algorithm and the correct trusted signing key.

Decoding a token is not the same as verifying it. A decoded token alone must never be trusted.

## 15. Authentication Middleware

Authentication middleware verifies a JWT before allowing access to protected endpoints.

Example:


```
// middleware/authMiddleware.js

import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Access token required"
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
      {
        algorithms: ["HS256"]
      }
    );

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};
```

Explanation:

* The middleware reads the `Authorization` header.

* It expects the `Bearer` authentication scheme.

* It extracts the JWT from the header.

* `jwt.verify()` checks the token.

* If valid, the decoded claims are attached to `req.user`.

* `next()` passes control to the next middleware or route handler.

* Invalid or missing tokens result in an HTTP 401 response.

This example assumes tokens are signed using HS256. The algorithm configuration must match the application's token issuance policy.

## 16. Protected Routes

Protected routes restrict access to authenticated users.

Example:


```
// routes/userRoutes.js

import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", authenticate, (req, res) => {
  res.status(200).json({
    message: "Profile fetched successfully",
    user: req.user
  });
});

export default router;
```

Registering Routes:


```
// app.js

import express from "express";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;
```

Example Request:

http

```
GET /api/users/profile
Authorization: Bearer your_jwt_token
```

Expected Response:

JSON

```
{
  "message": "Profile fetched successfully",
  "user": {
    "userId": "12345",
    "iat": 1791024000,
    "exp": 1791027600
  }
}
```

Explanation:

* The client sends a JWT in the authorization header.

* The `authenticate` middleware verifies the token.

* A valid token allows the request to reach the route handler.

* The route can use `req.user` to identify the authenticated user.

For an actual profile endpoint, use the authenticated user ID to fetch the user's profile from the database rather than returning token claims as the complete profile.


## 17. JWT Authentication with React

React can communicate with the authentication backend using `fetch` or Axios.

Login Component:


```
// Login.jsx

import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      sessionStorage.setItem("token", data.token);

      console.log("Login successful", data.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
```

Accessing a Protected API:


```
const token = sessionStorage.getItem("token");

const response = await fetch(
  "http://localhost:5000/api/users/profile",
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);

const data = await response.json();

console.log(data);
```

Explanation:

* React collects login credentials using form state.

* The login request is sent to the Express backend.

* On successful login, the frontend receives the JWT.

* The example stores the token in `sessionStorage`.

* The token is sent through the `Authorization` header when accessing protected APIs.

This is a teaching example of bearer-token authentication. For production browser applications, consider an `HttpOnly`, `Secure`, appropriately configured `SameSite` cookie-based approach or another architecture that limits exposure to token theft.

## 18. Token Storage and Security

Token storage determines where an application keeps authentication tokens between requests.

Common Storage Options:

| Storage           | Description                                      | Considerations                                                           |
| ----------------- | ------------------------------------------------ | ------------------------------------------------------------------------ |
| Local Storage     | Stores data persistently in the browser.         | Accessible to JavaScript and exposed if an XSS attack occurs.            |
| Session Storage   | Stores data for the current browser tab session. | Also accessible to JavaScript and vulnerable to XSS.                     |
| HttpOnly Cookies  | Stores cookies inaccessible to JavaScript.       | Requires appropriate cookie and CSRF protections.                        |
| In-Memory Storage | Stores tokens in application memory.             | Cleared on page reload unless another mechanism restores authentication. |

Important Security Practices:

* Always use HTTPS in production.

* Never store passwords in browser storage.

* Use short-lived access tokens where appropriate.

* Validate token signatures, expiration, and expected claims.

* Keep signing secrets secure.

* Implement suitable refresh-token rotation and revocation strategies when needed.

* Protect cookie-based authentication against CSRF.

* Use appropriate CORS policies.

* Avoid including sensitive information in JWT payloads.

* Apply rate limiting to login and registration endpoints.

## 19. Logout Functionality

Logout ends the user's authenticated experience on the client.

Example:


```
function Logout() {
  const handleLogout = () => {
    sessionStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
```

Explanation:

* The client removes its stored token.

* The application redirects the user to the login page.

* Subsequent protected requests no longer include that stored token.

* Removing a JWT from the browser does not invalidate a copy of the token that an attacker may already possess.

For systems requiring immediate token invalidation, implement an appropriate revocation mechanism, short token lifetimes, or refresh-token rotation.

## 20. Advantages and Limitations of JWT

Advantages

* Supports stateless token verification.

* Works well with REST APIs and distributed services.

* Supports expiration claims.

* Can carry identity and authorization-related claims.

* Can be used across web and mobile applications.

* Reduces the need for traditional session lookups in some architectures.

Limitations

* A signed JWT is not encrypted by default.

* Immediate token revocation requires additional mechanisms.

* Stolen tokens may be used until they expire or are otherwise invalidated.

* Token storage introduces security considerations.

* Long-lived tokens increase the impact of token theft.

* JWT-based authentication requires careful key management and verification configuration.
 