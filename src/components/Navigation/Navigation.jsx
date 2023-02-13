import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.list}>
        <li className={css.listItem}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.listItem}>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
