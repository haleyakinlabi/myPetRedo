import React, { useState } from 'react'


const Header = () => {
  

  return (
    <header>
      <a href='/'>
        <img
          className='logo'
          src='https://cdn.pixabay.com/photo/2023/01/12/21/43/paw-7714934_1280.png'
          alt='logo'
        ></img>
      </a>

      <a href='/'>
          <button className='header-btn'>
            Home
          </button>
      </a>

      <a href='/profile'>
          <button className='header-btn'>
            Profile
          </button>
      </a>

    


    </header>
  )
}

export default Header