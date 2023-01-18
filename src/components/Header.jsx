import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header>
      <a href='/'>
        <img
          className='logo'
          src='https://cdn.pixabay.com/photo/2023/01/12/21/43/paw-7714934_1280.png'
          alt='logo'
        ></img>
      </a>

      <div className='menu-icon-container'>
        <BiMenu className='menu-icon' onClick={toggleMenu}></BiMenu>
      </div>

      <nav className={showMenu ? 'menu-show' : 'menu-hide'}>
        <Link to='/'>
          <button className='header-btn' onClick={toggleMenu}>
            Home
          </button>
        </Link>

        <Link to='/profile'>
          <button className='header-btn' onClick={toggleMenu}>
            Profile
          </button>
        </Link>
      </nav>
    </header>
  )
}

export default Header