import { useState, useEffect } from 'react';
import './TagButton.scss';

type Props = {
  label: string;
  url: string;
  color?: string;
};

export default function TagButton({ label, url, color }: Props) {
  const [tagClass, setTagClass] = useState('tag-option');

  useEffect(() => {
    setTagClass(`tag-option ${color ? 'tag-option-' + color : ''}`);
  }, [color]);

  return (
    <a href={url} className={tagClass}>
      {label}
    </a>
  );
}
