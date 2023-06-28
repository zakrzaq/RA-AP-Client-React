import { useEffect} from 'react';

import { useClientStore } from '../../state/client';

import './OutputView.scss';

export default function OutputView() {
  const clientStore = useClientStore();
  const handleReturn = () => {
    clientStore.resetClientData()
  }


  useEffect(() => {}, [])

  return clientStore.output.length > 0 
    ? (
    <div>
      <div className="code-output">
          {clientStore.output.map((line, index) => <p key={index}>{line}</p>)}
        </div>
      <button onClick={handleReturn} className="menu-option">
        Return
      </button>
    </div>
  )
  : (<div></div>)
}
