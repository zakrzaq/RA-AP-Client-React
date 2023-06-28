import { useState, useEffect } from 'react';

import { useClientStore } from '../../state/client'

import './MenuOption.scss';

type Props = {
  label: string;
  url: string;
  color?: string;
};

export default function MenuOption({ label, url, color }: Props) {
  const clientStore = useClientStore();
  const [buttonClass, setButtonClass] = useState('tag-option');

  const handleClick = () => {
    console.log('here')
    clientStore.getClientData(url)
  }

  useEffect(() => {
    setButtonClass(`menu-option ${color ? 'menu-option-' + color : ''}`);
  }, [color]);

  return (
    <button className={buttonClass} onClick={handleClick}>
      {label}
    </button>
  );
}
