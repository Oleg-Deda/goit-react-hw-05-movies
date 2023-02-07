import axios from 'axios';


export const API_KEY = 'b78238cdc81751fa548b93a11051a80f';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrandingMovies = async (pageNumber = 1, options) => {
  try {
    const response = await axios.get(
      `trending/all/day?api_key=${API_KEY}&page=${pageNumber}`,
      options
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovies = async (searchQuery, pageNumber, options) => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${pageNumber}&include_adult=false`,
      options
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async (filmId, options) => {
  try {
    const response = await axios.get(
      `movie/${filmId}?api_key=b78238cdc81751fa548b93a11051a80f&language=en-US`,
      options
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async (filmId, options) => {
  try {
    const response = await axios.get(
      `movie/${filmId}/reviews?api_key=b78238cdc81751fa548b93a11051a80f&language=en-US`,
      options
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCredits = async (filmId, options) => {
  try {
    const response = await axios.get(
      `movie/${filmId}/credits?api_key=b78238cdc81751fa548b93a11051a80f&language=en-US`,
      options
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
