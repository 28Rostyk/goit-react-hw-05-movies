import axios from 'axios';

const API_KEY = 'bc1d17da9749fdffed6664a4ab50ba73';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US&include_adult=false`
  );
  return results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};

export const getMovieReviews = async id => {
  const {
    data: { results },
  } = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return results;
};

export const getMovieCast = async id => {
  const {
    data: { cast },
  } = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`
  );
  return cast;
};
