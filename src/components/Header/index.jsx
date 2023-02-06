import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
      	<header className="header">

          <h1 className="header__title">Trivia Quiz</h1>

          <nav className="menu">
            <NavLink to="/" className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}>Intro</NavLink>
            <NavLink to="/kvizy" className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}>Quizzes</NavLink>
            <NavLink to="/zebricek" className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}>Rankings</NavLink>
          </nav>

        </header>
  )
}

export default Header;