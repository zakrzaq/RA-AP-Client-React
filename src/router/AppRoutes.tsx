import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LogPage from '../pages/LogPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/log" element={<LogPage />} />
    </Routes>
  );
};

export default AppRoutes;
