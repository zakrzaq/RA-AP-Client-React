import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import AppRoutes from './router/AppRoutes';

import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
