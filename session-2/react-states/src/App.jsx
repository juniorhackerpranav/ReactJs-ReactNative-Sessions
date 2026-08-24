import { useState } from 'react'
//  The use state hook is imported form the package react

export default function App() {

  // The useState(0) => Here in the argument of this function we pass the initial value of the state
  const [counter, setCounter] = useState(0);
  // First value = A state variable
  // Second value = A function. The value of state can be changed only using this function. The naming convention usually follows to add hte word 'set' before the function

  return (
    <div>
      <h1>This is a basic Counter Application</h1>
      
      <br />

      <p>Click the respective buttone to increase or decrease the counter value</p>

      <br />
      <br />

      <p>Counter Value : {counter}</p>

      <br />
      <br />

      <button onClick={() => {
        setCounter(counter + 1)
      }}>Increment Counter</button>

      <br />
      <br />

      <button onClick={() => {
        setCounter(counter - 1)
      }}>Decrement Counter</button>

    </div>
  )
}