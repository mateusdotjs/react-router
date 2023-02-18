import React from 'react'
import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <NavLink to="/"
            className={({ isActive }) =>
              isActive ? styles.active : undefined}>
            Home
          </NavLink>
        </li>
        <NavLink to="/contact"
          className={({ isActive }) =>
            isActive ? styles.active : undefined}>
          Contact
        </NavLink>
        <li>
          <NavLink to="/about"
            className={({ isActive }) =>
              isActive ? styles.active : undefined}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}


export default Header