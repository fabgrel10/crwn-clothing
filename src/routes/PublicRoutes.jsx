import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home';

const PublicRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
);

export default PublicRoutes;
