import { useClientStore } from '../state/client';

import HamburgerMenu from './HamburgerMenu';

import './Header.scss';

export default function Header() {
  const clientStore = useClientStore();

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
          {clientStore.script ? clientStore.script : 'Main menu'}
        </h2>
      </div>
      <HamburgerMenu />
    </header>
  );
}
