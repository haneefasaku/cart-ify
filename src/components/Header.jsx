import React from 'react'

const Header = () => {
  return (
    <header className="header container">
         <a className='logo' href="#">Cartify</a>
        <ul className='nav-menu'>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Products</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
        <div className="head-icon">
            <span class="material-symbols-outlined">
                favorite
            </span>
            <span class="material-symbols-outlined">
                local_mall
            </span>
        </div>
    </header>
  )
}

export default Header