 import Login from './Login'
import { useState } from 'react';

export default function App() {

  const [isUserLogin, setIsUserLogin] = useState(false);

  return (
    <div>
      {
        isUserLogin ?
          <div className="">
            {
              JSON.stringify(isUserLogin)
            }
          </div>
          :
          <Login setLogin={setIsUserLogin} />
      }

    </div>
  )
}