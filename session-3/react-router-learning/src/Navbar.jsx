import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>

            <p>
                This is a navbar
            </p>

            <ol>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/about'>About</Link> </li>
                <li> <Link to='/contact'>Contact</Link> </li>
                <li> <Link to='/product'>Products</Link> </li>
            </ol>
        </div>
    )
}