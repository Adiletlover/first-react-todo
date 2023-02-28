import React from 'react';
import './header.css';

const Header = ({ items }) => {
  console.log(items);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Zhusupov
        </a>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a className='nav__link active-link' href="/">About</a>
            </li>
            {items.map((name, index) => (
              <li className="nav__item">
                <a className='nav__link' href="/" key={`${name}_${index}`}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
