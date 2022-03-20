import { Link, Outlet } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="navbar">
      <Link className="navbar__logo-container" to="/">
        <div>Logo</div>
      </Link>
      <div className="navbar__links">
        <Link className="navbar__link" to="/">
          Home
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navbar;
