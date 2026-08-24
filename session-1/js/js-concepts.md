
---

# 1. Variables

```js
let name = "Pranav";   // Can be reassigned
const age = 22;        // Cannot be reassigned
```

**Use `const` by default. Use `let` only when the value changes.**

---

# 2. Data Types

```js
let name = "John";      // String
let age = 25;           // Number
let isStudent = true;   // Boolean
let person = {};        // Object
let colors = [];        // Array
let value = null;
let data;
```

---

# 3. Functions

### Normal Function

```js
function greet(name) {
    return "Hello " + name;
}

console.log(greet("John"));
```

---

### Arrow Function ⭐ (Most Used in React)

```js
const greet = (name) => {
    return `Hello ${name}`;
}
```

Single line

```js
const greet = (name) => `Hello ${name}`;
```

No parameter

```js
const greet = () => {
    console.log("Hello");
}
```

Multiple parameters

```js
const add = (a, b) => a + b;
```

---

# 4. Template Literals

Old

```js
let name = "John";

console.log("Hello " + name);
```

New

```js
let name = "John";

console.log(`Hello ${name}`);
```

Multiple variables

```js
let name = "John";
let age = 22;

console.log(`${name} is ${age} years old`);
```

---

# 5. Objects

```js
const student = {
    name: "John",
    age: 22,
    city: "Mumbai"
};

console.log(student.name);
console.log(student.age);
```

Adding property

```js
student.course = "React";
```

Updating

```js
student.age = 23;
```

---

# 6. Arrays

```js
const fruits = ["Apple", "Banana", "Orange"];
```

Access

```js
console.log(fruits[0]);
```

Add

```js
fruits.push("Mango");
```

Remove

```js
fruits.pop();
```

---

# 7. Array Methods (Very Important)

## map()

Used for rendering lists in React.

```js
const numbers = [1,2,3];

const result = numbers.map((num) => {
    return num * 2;
});

console.log(result);
```

Output

```
[2,4,6]
```

React Example

```jsx
const fruits = ["Apple", "Banana", "Orange"];

return (
    <>
        {fruits.map((fruit) => (
            <h1>{fruit}</h1>
        ))}
    </>
);
```

---

## filter()

```js
const numbers = [10,20,30,40];

const result = numbers.filter((num) => num > 20);

console.log(result);
```

Output

```
[30,40]
```

---

## find()

```js
const users = [
    {id:1,name:"John"},
    {id:2,name:"Alex"}
];

const user = users.find((u) => u.id === 2);

console.log(user);
```

---

## forEach()

```js
const numbers = [1,2,3];

numbers.forEach((num)=>{
    console.log(num);
});
```

---

# 8. Destructuring ⭐

Object

```js
const user = {
    name:"John",
    age:22
};

const {name, age} = user;

console.log(name);
```

Array

```js
const colors = ["Red","Blue"];

const [first, second] = colors;
```

React Props

```jsx
function Card({title, price}) {
    return <h1>{title}</h1>;
}
```

---

# 9. Spread Operator (...)

Copy Array

```js
const arr1 = [1,2,3];

const arr2 = [...arr1];
```

Merge Arrays

```js
const a = [1,2];
const b = [3,4];

const c = [...a,...b];
```

Objects

```js
const user = {
    name:"John",
    age:22
};

const updatedUser = {
    ...user,
    city:"Mumbai"
};
```

React State Example

```js
setUser({
    ...user,
    age:25
});
```

---

# 10. Rest Operator (...)

```js
const sum = (...numbers) => {
    console.log(numbers);
};

sum(1,2,3,4);
```

Output

```
[1,2,3,4]
```

---

# 11. Ternary Operator ⭐

Instead of

```js
if(age >= 18){
    console.log("Adult");
}else{
    console.log("Minor");
}
```

Use

```js
age >= 18 ? "Adult" : "Minor";
```

React

```jsx
{
    isLoggedIn ? <Home /> : <Login />
}
```

---

# 12. Optional Chaining

Without

```js
console.log(user.address.city);
```

May throw an error.

With

```js
console.log(user?.address?.city);
```

---

# 13. Nullish Check (??)

```js
const name = userName ?? "Guest";
```

If `userName` is `null` or `undefined`, `"Guest"` is used.

---

# 14. Logical AND (&&)

```jsx
{
    isLoggedIn && <Dashboard />
}
```

Render only if the condition is `true`.

---

# 15. Import & Export

### Default Export

```js
export default App;
```

Import

```js
import App from "./App";
```

---

### Named Export

```js
export const add = () => {};
```

Import

```js
import { add } from "./utils";
```

---

# 16. Modules

```text
App.jsx
Navbar.jsx
Footer.jsx
```

Import components where needed.

```jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
```

---

# 17. Promises

```js
const promise = new Promise((resolve, reject) => {
    resolve("Success");
});
```

---

# 18. Async/Await ⭐

```js
const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();

    console.log(data);
};
```

---

# 19. Fetch API

```js
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
```

Async Version

```js
const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log(data);
}
```

---

# 20. ES Modules  

```js
// Export
export default Home;

export const add = () => {};
```

```js
// Import
import Home from "./Home";

import { add } from "./utils";
```

---
 