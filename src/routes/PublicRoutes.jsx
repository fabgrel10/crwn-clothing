import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);

export default PublicRoutes;
