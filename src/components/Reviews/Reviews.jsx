import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import css from './reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const movieReviews = async () => {
      try {
        const results = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(toast.error('Ooops. Something went wrong...'));
      } finally {
        setLoading(false);
        setError(null);
      }
    };
    movieReviews();
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
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(({ id, author, content }) => (
            <li className={css.list_item} key={id}>
              <p className={css.title}>Author: {author}</p>
              <p className={css.text}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.title}>We don't have any reviews for this movie</p>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
};
export default Reviews;
