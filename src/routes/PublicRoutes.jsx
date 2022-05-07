import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Authentication from './Authentication';

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/auth" element={<Authentication />} />
    </Route>
  </Routes>
);

export default PublicRoutes;
