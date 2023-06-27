import { useState, useEffect } from 'react';
import './MenuOption.scss';

type Props = {
  label: string;
  url: string;
  color?: string;
};

export default function MenuOption({ label, url, color }: Props) {
  const [buttonClass, setButtonClass] = useState('tag-option');

  useEffect(() => {
    setButtonClass(`
      menu-option 
      ${color === 'red' ? 'menu-option-red' : ''}
      ${color === 'orange' ? 'menu-option-orange' : ''}
      ${color === 'green' ? 'menu-option-green' : ''}
      `);
  }, [color]);

  return (
    <a href={url} className={buttonClass}>
      {label}
    </a>
  );
}
