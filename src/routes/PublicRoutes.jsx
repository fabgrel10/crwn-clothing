import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import SignIn from './SignIn';

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Route>
  </Routes>
);

export default PublicRoutes;
