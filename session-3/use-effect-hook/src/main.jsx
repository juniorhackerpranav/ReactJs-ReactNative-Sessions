import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)


import { useEffect, useState } from "react"

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    // axios

    const response = await fetch(API_URL);
    const apiRes = await response.json();
    console.log(apiRes)
    setData(apiRes);
  }

  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  useEffect(() => {
    console.log(`State 1 Hook : ${state1} `)
  }, [state1]);

  useEffect(() => {
    console.log(`State 2 Hook : ${state2} `)
  }, [state2]);

  // 1. No dep array
  // 2. Empty Dependency
  // 3. Some dependency

  return (
    <div>
      <h1>This is some User data</h1>

      <button onClick={() => {
        setState1(state1 + 1);
      }}>
        Cange State 1:  {state1}
      </button>
      <button onClick={() => {
        setState2(state2 + 1);
      }}>
        Cange State 2:  {state2}
      </button>
    </div>
  )
}