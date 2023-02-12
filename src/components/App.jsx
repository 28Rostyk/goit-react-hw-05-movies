import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';
import MovieDetails from './MovieDetails';
import Reviews from './Reviews';
import Cast from './Cast';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:movieId/" element={<MovieDetails />}>
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
        </Route>
      </Routes>
    </>
  );
};
