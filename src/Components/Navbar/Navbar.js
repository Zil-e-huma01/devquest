import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='main'>
    <div className='navbar'>
      <nav>
        
        <ul>
        <h1>DevquestPK</h1>
            <li>About</li>
            <li>Courses</li>
            <li>Events</li>
        </ul>
        
        <ul className='second-ul'>
          <li>Login</li>
          <li><button>Enroll Now</button></li>
        </ul>
        

      </nav>
    </div>
    </div>
  )
}

export default Navbar
