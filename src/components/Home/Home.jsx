// import css from './Home.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/Api';
import { ColorRing } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
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
      <ul>
        {items.map(({ id, title }) => (
          <li key={Number(id)}>
            <Link to={`/movies/${id}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      {error && <p>{error}</p>}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Home;
