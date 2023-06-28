import { useState } from 'react';
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default HamburgerMenu;
