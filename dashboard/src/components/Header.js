import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/List">List</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;