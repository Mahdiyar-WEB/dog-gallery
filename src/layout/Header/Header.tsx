import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <ul className="d-flex justify-content-center gap-4 py-3  px-0 bg-primary decoration-none">
        <li>
          <NavLink
            className={({isActive}) => isActive? styles.activeLink:styles.links}
            to=""
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive}) => isActive? styles.activeLink:styles.links}
            to="/favorites"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;
