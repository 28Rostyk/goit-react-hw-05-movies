import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { getMovieDetails } from 'services/Api';
import css from './movieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const getYear = () => new Date(movie.release_date).getFullYear();
  let activeClassName = {
    color: '#2196f3',
  };

  const handleClick = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    const movieDetails = async () => {
      try {
        setLoading(true);
        const results = await getMovieDetails(movieId);
        setMovie(results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    movieDetails();
  }, [movieId]);

  return (
    <>
      {loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass={css.blocks_wrapper}
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
      {movie && (
        <>
          <button className={css.button} onClick={handleClick}>
            Go back
          </button>
          <div className={css.container}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div>
              <h3 className={css.title}>
                {movie.title}({getYear()})
              </h3>
              <p className={css.popularity}>User Score: {movie.popularity}</p>
              <div className="movie_overview">
                <h3 className={css.title_overview}>Overview</h3>
                <p className={css.overview_text}>{movie.overview}</p>
              </div>
              <div>
                <h3 className={css.title_genres}>Genres</h3>
                <div className={css.genres_container}>
                  {movie.genres.map(({ id, name }) => (
                    <p className={css.genres_text} key={id}>
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {!loading && (
        <>
          <hr />
          <h2 className={css.additional_title}>Additional Information</h2>
          <ul className={css.additional_container}>
            <li className={css.additional_container_item}>
              <NavLink
                to={`/movies/${movieId}/cast`}
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                state={location.state}
              >
                <p className={css.cast}>Cast</p>
              </NavLink>
            </li>
            <li className={css.additional_container_item}>
              <NavLink
                to={`/movies/${movieId}/reviews`}
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                state={location.state}
              >
                <p className={css.reviews}>Reviews</p>
              </NavLink>
            </li>
          </ul>
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
