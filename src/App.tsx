import Header from './components/Header';
import AppRoutes from './router/AppRoutes';

import './App.scss';

export default function App() {
  return (
    <>
      <Header script="test script" />
      <AppRoutes />
    </>
  );
}
