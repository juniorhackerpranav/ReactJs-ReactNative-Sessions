import React from 'react'

export default function Footer() {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderTop: '1px solid #ddd', marginTop: '2rem', backgroundColor: '#f8f9fa' }}>
      <p style={{ margin: 0, color: '#666' }}>&copy; 2026 My App. All rights reserved.</p>
      <div>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0 }}>
          <li><a href="/privacy" style={{ textDecoration: 'none', color: '#555' }}>Privacy Policy</a></li>
          <li><a href="/terms" style={{ textDecoration: 'none', color: '#555' }}>Terms of Service</a></li>
          <li><a href="/contact" style={{ textDecoration: 'none', color: '#555' }}>Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}