import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div id="Navbar" className="flex justify-between">
    <h1 className="ml3">Math Magicians</h1>
    <nav id="NavbarList" className="mr5 self-center f4 b">
      <ul className="list flex">
        <li className="mr5">
          <NavLink className="NavLink no-underline" to="/">
            Home
          </NavLink>
        </li>
        <li className="mr5">
          <NavLink className="NavLink no-underline" to="Calculator">
            Calculator
          </NavLink>
        </li>
        <li className="mr5">
          <NavLink className="NavLink no-underline" to="Quote">
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>

);
export default Navbar;
