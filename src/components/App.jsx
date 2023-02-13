import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';

import Navigation from './Navigation';

import css from './app.module.css';

const Home = lazy(() => import('./Home'));
const Movie = lazy(() => import('./Movie'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <>
      <Navigation />

      <Suspense
        fallback={
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass={css.blocks_wrapper}
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movies/:movieId/" element={<MovieDetails />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>

        <ToastContainer autoClose={3000} />
      </Suspense>
    </>
  );
};
