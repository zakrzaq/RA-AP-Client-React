import { useState, useEffect } from 'react';

import { useClientStore } from '../../state/client';

import './TagButton.scss';

type Props = {
  label: string;
  url: string;
  color?: string;
};

export default function TagButton({ label, url, color }: Props) {
  const clientStore = useClientStore();
  const [tagClass, setTagClass] = useState('tag-option');

  const handleClick = () => {
    clientStore.getClientData(url);
  };

  useEffect(() => {
    setTagClass(`tag-option ${color ? 'tag-option-' + color : ''}`);
  }, [color]);

  return (
    <button onClick={handleClick} className={tagClass}>
      {label}
    </button>
  );
}
