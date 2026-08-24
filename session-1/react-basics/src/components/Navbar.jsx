import React from 'react'

// Accepting props
export default function Navbar(props) {
  // We can also accept data form the props by directly destructuring and getting the only variable that we want 
  // export default function Navbar({ title }) {
  return (
    <nav style={{ display: 'flex', color: "#fff", justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #ddd' }}>
      <h3>{props.title}</h3>
      <div>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0 }}>
          <li><a href="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</a></li>
          <li><a href="/about" style={{ textDecoration: 'none', color: '#fff' }}>About</a></li>
        </ul>
      </div>
    </nav>
  )
}
