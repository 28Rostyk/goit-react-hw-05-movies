import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const results = await getMovieReviews(movieId);
        console.log(results);
        setReviews(results);
      } catch (error) {
        setError(toast.error('Ooops. Something went wrong...'));
      } finally {
        setError(null);
      }
    };
    movieReviews();
  }, [movieId]);

  return (
    <>
      {error && <div>{error}</div>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
};
export default Reviews;
