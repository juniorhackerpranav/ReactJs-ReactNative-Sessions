
---

# 1. Variables

```jsx
let name = "Pranav";   // Can be reassigned
const age = 22;        // Cannot be reassigned
```

**Use `const` by default. Use `let` only when the value changes.**

---

# 2. Data Types

```jsx
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

```jsx
function greet(name) {
    return "Hello " + name;
}

console.log(greet("John"));
```

---

### Arrow Function ⭐ (Most Used in React)

```jsx
const greet = (name) => {
    return `Hello ${name}`;
}
```

Single line

```jsx
const greet = (name) => `Hello ${name}`;
```

No parameter

```jsx
const greet = () => {
    console.log("Hello");
}
```

Multiple parameters

```jsx
const add = (a, b) => a + b;
```

---

# 4. Template Literals

Old

```jsx
let name = "John";

console.log("Hello " + name);
```

New

```jsx
let name = "John";

console.log(`Hello ${name}`);
```

Multiple variables

```jsx
let name = "John";
let age = 22;

console.log(`${name} is ${age} years old`);
```

---

# 5. Objects

```jsx
const student = {
    name: "John",
    age: 22,
    city: "Mumbai"
};

console.log(student.name);
console.log(student.age);
```

Adding property

```jsx
student.course = "React";
```

Updating

```jsx
student.age = 23;
```

---

# 6. Arrays

```jsx
const fruits = ["Apple", "Banana", "Orange"];
```

Access

```jsx
console.log(fruits[0]);
```

Add

```jsx
fruits.push("Mango");
```

Remove

```jsx
fruits.pop();
```

---

# 7. Array Methods (Very Important)

## map()

Used for rendering lists in React.

```jsx
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

```jsx
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

```jsx
const users = [
    {id:1,name:"John"},
    {id:2,name:"Alex"}
];

const user = users.find((u) => u.id === 2);

console.log(user);
```

---

## forEach()

```jsx
const numbers = [1,2,3];

numbers.forEach((num)=>{
    console.log(num);
});
```

---

# 8. Destructuring ⭐

Object

```jsx
const user = {
    name:"John",
    age:22
};

const {name, age} = user;

console.log(name);
```

Array

```jsx
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

```jsx
const arr1 = [1,2,3];

const arr2 = [...arr1];
```

Merge Arrays

```jsx
const a = [1,2];
const b = [3,4];

const c = [...a,...b];
```

Objects

```jsx
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

```jsx
setUser({
    ...user,
    age:25
});
```

---

# 10. Rest Operator (...)

```jsx
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

```jsx
if(age >= 18){
    console.log("Adult");
}else{
    console.log("Minor");
}
```

Use

```jsx
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

```jsx
console.log(user.address.city);
```

May throw an error.

With

```jsx
console.log(user?.address?.city);
```

---

# 13. Nullish Check (??)

```jsx
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

```jsx
export default App;
```

Import

```jsx
import App from "./App";
```

---

### Named Export

```jsx
export const add = () => {};
```

Import

```jsx
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

```jsx
const promise = new Promise((resolve, reject) => {
    resolve("Success");
});
```

---

# 18. Async/Await ⭐

```jsx
const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();

    console.log(data);
};
```

---

# 19. Fetch API

```jsx
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
```

Async Version

```jsx
const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log(data);
}
```

---

# 20. ES Modules  

```jsx
// Export
export default Home;

export const add = () => {};
```

```jsx
// Import
import Home from "./Home";

import { add } from "./utils";
```

---
 