
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Employee Dashboard
        </Link>

        <div className="navbar-nav ms-auto flex-row gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? "active fw-bold" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/employee-form"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active fw-bold" : ""}`
            }
          >
            Employee Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
