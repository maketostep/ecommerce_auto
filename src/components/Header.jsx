import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'> Car Staff</span>
            <ul className='nav'>
              <NavLink to="/" end>
                <li>Главная</li>
              </NavLink>
              <NavLink to="/contacts" end>
              <li>Контакты</li>
              </NavLink>
              <NavLink to="/cabinet" end>
              <li>Кабинет</li>
              </NavLink>
            </ul>
        </div>

        <div className='presentation'>

        </div>
    </header>
  )
}
