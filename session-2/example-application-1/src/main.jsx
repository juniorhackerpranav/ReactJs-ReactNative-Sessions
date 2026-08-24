
import Products_Interactive from './Products_Interactive.jsx';
import Products_Static from './Products_Static.jsx';
import { createRoot } from 'react-dom/client';
import Todo_App from './Todo_App.jsx';
import { StrictMode } from 'react';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {

      window.location.pathname === "/" ? <Todo_App /> :
        (
          window.location.pathname === "/s" ? <Products_Static /> :
            (
              window.location.pathname === "/i" ?
                <Products_Interactive />
                : <></>
            )
        )
    }
  </StrictMode>,
)