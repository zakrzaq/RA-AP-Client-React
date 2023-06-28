import { useState, useEffect } from 'react';
import { fetchClientData } from '../api/index';

export default function HistoryPage() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchClientData('/api/all');
      setMaterials(data);
    })();
  }, []);

  return (
    <div>
      {materials.map((item, index) => (
        <p key={index}>{item.matnr}</p>
      ))}
    </div>
  );
}
