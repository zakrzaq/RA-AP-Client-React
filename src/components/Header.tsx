import { useClientStore } from '../state/client';
import { useLocation } from 'react-router-dom';

import HamburgerMenu from './HamburgerMenu';

import './Header.scss';

export default function Header() {
  const clientStore = useClientStore();
  const location = useLocation().pathname;

  return (
    <header className="header">
      <div className="logo">
        <h2>
          APMM <br />
          Process
        </h2>
      </div>
      <div className="title">
        <h2 className="title-text">
          {location === '/' && !!clientStore.script
            ? clientStore.script
            : 'Main menu'}
          {location === '/log' && ' Active Log'}
          {location === '/history' && ' Action History'}
        </h2>
      </div>
      <HamburgerMenu />
    </header>
  );
}
