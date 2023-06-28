import { useState } from 'react';
import { useClientStore } from '../state/client';
import './ErrorMessage.scss';

type Props = {
  message: string;
};

function ErrorMessage({ message }: Props) {
  const clientStore = useClientStore();
  const [isDisplayed, setIsDisplayed] = useState(true);

  const handleClose = () => {
    clientStore.resetClientData();
  };

  if (!isDisplayed) {
    return null;
  }

  return (
    <div className="error-message">
      <p>{message}</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
}

export default ErrorMessage;
