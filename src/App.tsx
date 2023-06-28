import { useEffect } from 'react';
import { useClientStore } from './state/client'

import Header from './components/Header';
import AppLinks from './components/AppLinks';
import AppRoutes from './router/AppRoutes';

import './App.scss';

export default function App() {
  const clientStore = useClientStore();

  useEffect(() => {
    clientStore.getClientData('/check_daily_report')
  }, [])

  return (
    <>
      <Header script="test script" />
      <div className="wrapper">
        <AppLinks />
        <AppRoutes />
      </div>
    </>
  );
}
