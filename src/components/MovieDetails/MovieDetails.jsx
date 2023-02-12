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

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
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
        console.log(results);
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
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
      {movie && (
        <div>
          <button onClick={handleClick}>Go back</button>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>
            {movie.title}({getYear()})
          </h3>
          <p>User Score: {movie.popularity}</p>
          <div className="movie_overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            {movie.genres.map(({ id, name }) => (
              <p key={id}>{name}</p>
            ))}
          </div>
        </div>
      )}
      <hr />
      <div>
        <h2>Additional Information</h2>
        <NavLink
          to={`/movies/${movieId}/reviews`}
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
          state={location.state}
        >
          <p>Reviews</p>
        </NavLink>

        <NavLink
          to={`/movies/${movieId}/cast`}
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
          state={location.state}
        >
          <p>Cast</p>
        </NavLink>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
