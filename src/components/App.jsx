import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Home';
import Movie from './Movie';
import MovieDetails from './MovieDetails';
import Reviews from './Reviews';
import Cast from './Cast';
import Navigation from './Navigation';

export const App = () => {
  return (
    <>
      <Navigation />
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:movieId/" element={<MovieDetails />}>
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
