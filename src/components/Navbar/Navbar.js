import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="flex justify-between">
    <h1 className="ml3">Math Magicians</h1>
    <nav className="mr5 self-center f4 b">
      <ul className="list flex">
        <li className="mr5">
          <NavLink className="no-underline gold" to="/">
            Home
          </NavLink>
        </li>
        <li className="mr5">
          <NavLink className="no-underline gold" to="Calculator">
            Calculator
          </NavLink>
        </li>
        <li className="mr5">
          <NavLink className="no-underline gold" to="Quote">
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>

);
export default Navbar;
