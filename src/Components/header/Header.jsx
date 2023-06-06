import React, { useState } from "react"
import "./header.css"

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className='container Ebook'>
          <nav className='Ebook'>
            <div className='logo'>
              <img src='./images/logo.png' alt='' />
            </div>
           
            <ul className={Mobile ? "navMenu-list" : "Ebook"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Collection</a>
              </li>
              <li>
                <a href='/'>Language</a>
              </li>
              <li>
                <a href='/'>Artist</a>
              </li>
              <li>
                <a href='/'>login</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i class='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Search</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header