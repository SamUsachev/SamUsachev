import React from 'react'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <nav className={style.nav}>
      <ul className={style.text}>
        <ol>
          <NavLink to='profile'>Profile</NavLink>
        </ol>
        <ol>
          <NavLink to='messages'>Messages</NavLink>
        </ol>
        <ol>
          <a href='news'>News</a>
        </ol>
        <ol>
          <a href='music'>Music</a>
        </ol>
        <ol>
          <a href='settings'>Settings</a>
        </ol>
      </ul>
    </nav>
  )
}
export default NavBar
