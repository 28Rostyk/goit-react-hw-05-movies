// import css from './Home.module.css';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/Api';
import { ColorRing } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import MovieList from 'components/MovieList';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const trendingMovies = async () => {
      try {
        const results = await getTrendingMovies();
        setItems(results);
      } catch (error) {
        setError(toast.error('Ooops. Something went wrong...'));
      } finally {
        setLoading(false);
        setError(null);
      }
    };
    trendingMovies();
  }, []);

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
      <h2>Trending Movies</h2>
      {items && <MovieList movies={items} />}
      {error && <p>{error}</p>}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Home;
