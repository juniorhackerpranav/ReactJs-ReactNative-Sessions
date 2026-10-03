import React, { useContext } from 'react'
import { UserData } from '../App';

export default function Profile(props) {
  const user = useContext(UserData);

  console.log(user)

  return (
    <div>
      <p>This is profile component</p>
      <p>Data : {user.data}</p>
      <br />
      <button onClick={() => {
        user.setData("New Data");
      }}>Change Data</button>
    </div>
  )
}
