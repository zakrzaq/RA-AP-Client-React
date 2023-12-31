import { useEffect } from 'react';

import { useClientStore } from '../../state/client';

import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

import './OutputView.scss';

export default function OutputView() {
  const clientStore = useClientStore();
  const handleReturn = () => {
    clientStore.resetClientData();
  };

  return (
    <div>
      {clientStore.loading && (
        <div className="code-output">
          <Loader />
        </div>
      )}
      {clientStore.error && <ErrorMessage message={clientStore.error} />}
      {clientStore.output.length > 0 ? (
        <>
          <div className="code-output">
            {clientStore.output.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <button onClick={handleReturn} className="menu-option">
            Return
          </button>
        </>
      ) : null}
    </div>
  );
}
