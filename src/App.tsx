import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import AppLinks from './components/AppLinks';
import AppRoutes from './router/AppRoutes';

import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <AppLinks />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
