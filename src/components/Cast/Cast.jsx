import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';

import 'react-toastify/dist/ReactToastify.css';
import css from './cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const movieCast = async () => {
      try {
        const results = await getMovieCast(movieId);
        setCast(results);
      } catch (error) {
        setError(toast.error('Ooops. Something went wrong...'));
      } finally {
        setLoading(false);
        setError(null);
      }
    };
    movieCast();
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
      {error && <p>{error}</p>}
      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(castItem => {
            return (
              <li className={css.list_item} key={castItem.id}>
                {
                  <img
                    width="200"
                    src={`https://image.tmdb.org/t/p/w200${castItem.profile_path}`}
                    alt={`${castItem.name} portrait`}
                  />
                }

                <div>
                  <p>Name: {castItem.name}</p>
                  <p>Character: {castItem.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.title}>We don't have any reviews for this movie</p>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Cast;
