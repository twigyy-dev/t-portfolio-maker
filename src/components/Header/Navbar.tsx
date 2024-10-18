import React from 'react'
import "../../app/sass/navstyle.scss"

const Navbar = () => {
  return (
    <div className='nav'>

    <div className='nav-child '>
        <h1 className='nav-h1'>Home</h1> 
        <h1 className='nav-h1'>Services</h1> 
        <h1 className='nav-h1'>Pricing</h1> 
        <h1 className='nav-h1'>FAQs</h1> 
        <h1 className='nav-h1'>Contact Us</h1> 
    </div>
    </div>
  )
}

export default Navbar