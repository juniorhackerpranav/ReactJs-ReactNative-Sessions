import React, { createContext, useState } from 'react'
import Navbar from './component/Navbar'

export const UserData = createContext();

export default function App() {
  const [data, setData] = useState("First Data");

  return (
    <>
      <UserData.Provider value={{ data, setData }}>
        <Navbar />
      </UserData.Provider>
    </>
  )
}
