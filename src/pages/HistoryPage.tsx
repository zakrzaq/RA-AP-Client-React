import { useState, useEffect } from 'react';
import { fetchClientData } from '../api/index';

export default function LogPage() {
  const [log, setLog] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchClientData('/api/action_log');
      setLog(data);
    })();
  }, []);

  return (
    <div>
      {log.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
