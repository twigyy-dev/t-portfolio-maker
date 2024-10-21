import React from 'react'
import "../../app/sass/navstyle.scss"

const Navbar = () => {
  return (
    <div className='nav'>

    <ul className='nav-child border-rounded-white'>
        <li><h1 className='nav-h1'>Home</h1></li> 
        <li><h1 className='nav-h1'>Services</h1> </li>
        <li><h1 className='nav-h1'>Pricing</h1></li> 
        <li><h1 className='nav-h1'>FAQs</h1> </li>
        <li><h1 className='nav-h1'>Contact Us</h1> </li>
    </ul>
    </div>
  )
}

export default Navbar