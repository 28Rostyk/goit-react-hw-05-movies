import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './movieList.module.css';

const MovieList = ({ movies, prevLocation }) => {
  return (
    <>
      <ul className={css.list}>
        {movies.map(({ id, original_title }) => (
          <li className={css.listItem} key={id}>
            <Link
              className={css.link}
              to={`/movies/${id}`}
              state={{ from: prevLocation }}
            >
              <h3 className={css.title}>{original_title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
