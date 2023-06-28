import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LogPage from '../pages/LogPage';
import HistoryPage from '../pages/HistoryPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/log" element={<LogPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
};

export default AppRoutes;
