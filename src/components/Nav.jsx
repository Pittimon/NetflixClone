import React, { useState } from 'react'
import { useEffect } from 'react'
import '../styles/Nav.css'

function Nav() {

    const [show , handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });
    },[]);

  return (
        <div className={`logo ${show && "nav-black"}`}>
            <img
                className='nav-logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
                alt='netflix logo'
            />

            <img
                className='nav-avatar'
                src="https://i.pinimg.com/474x/c0/8e/6c/c08e6c9595e03202a46a95f66578799f--netflix-girly-things.jpg"
                alt='netflix logo'
            />
        </div>
  )
}

export default Nav