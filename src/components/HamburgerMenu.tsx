import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.scss';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="hamburger-btn" onClick={toggleMenu}>
        <span className={`line ${isOpen ? 'open1' : ''}`}></span>
        <span className={`line ${isOpen ? 'open2' : ''}`}></span>
        <span className={`line ${isOpen ? 'open3' : ''}`}></span>
      </button>

      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/log" onClick={toggleMenu}>
              Log
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HamburgerMenu;
