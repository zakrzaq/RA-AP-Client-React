import Header from './components/Header';
import AppLinks from './components/AppLinks';
import AppRoutes from './router/AppRoutes';

import './App.scss';

export default function App() {
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
