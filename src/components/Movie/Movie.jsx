import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import { ColorRing } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { getMovieSearch } from 'services/Api';
import MovieList from 'components/MovieList';
import 'react-toastify/dist/ReactToastify.css';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) {
      return;
    }
    const movieSearch = async () => {
      try {
        setLoading(true);
        const results = await getMovieSearch(searchRequest);

        setMovies(results);
      } catch (error) {
        setError(toast.error('Ooops. Something went wrong...'));
      } finally {
        setLoading(false);
      }
    };
    movieSearch();
  }, [searchRequest, setLoading]);

  function onSubmit(value) {
    setSearchParams({ query: `${value}` });
  }

  return (
    <>
      <SearchBar onSearch={onSubmit} />
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
      {error && <p>{error}</p>}
      {movies.length > 0 && (
        <MovieList movies={movies} prevLocation={location} />
      )}
    </>
  );
};
export default Movie;
