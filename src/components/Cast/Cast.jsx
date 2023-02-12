import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const results = await getMovieCast(movieId);
        console.log(results);
        setCast(results);
      } catch (error) {}
    };
    movieCast();
  }, [movieId]);
  return (
    <>
      <ul>
        {cast.map(castItem => {
          return (
            <li key={castItem.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${castItem.profile_path}`}
                alt={`${castItem.name} portrait`}
              />
              <div>
                <p>Name: {castItem.name}</p>
                <p>Character: {castItem.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
