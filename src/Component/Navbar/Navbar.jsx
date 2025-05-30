import React from 'react'
import '../Navbar/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="nav-title">
            <h4>DORSA POURMAND</h4>
        </div>
        <div className="nav-part">
            <ul>
                <li><a href="#">MY PROJECTS</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar