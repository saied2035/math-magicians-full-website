import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div
      id="Navbar"
      className="flex flex-row-ns flex-column-m flex-column items-center justify-between-ns
    pl3-ns pr6-ns pa0-m pa0"
    >
      <h1 className="f2-ns f3-m f3">Math Magicians</h1>
      <nav id="NavbarList" className="self-center f4-ns f4-m f5 b">
        <ul className="links-container list flex pa0">
          <li className="">
            <NavLink className={`NavLink no-underline ${pathname === '/' ? 'red' : ''}`} to="/">
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink className={`NavLink no-underline ${pathname === '/Calculator' ? 'red' : ''}`} to="Calculator">
              Calculator
            </NavLink>
          </li>
          <li className="">
            <NavLink className={`NavLink no-underline ${pathname === '/Quote' ? 'red' : ''}`} to="Quote">
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>

  );
};
export default Navbar;
