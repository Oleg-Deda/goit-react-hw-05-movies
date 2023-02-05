import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = 'b78238cdc81751fa548b93a11051a80f';
export const fetchDayTrend = async (endpoints = 'trending/movie/day', options) => {
    const resp = await axios.get(`${endpoints}?api_key=${apiKey}`, options);
    return resp.data;
};
export const fetchMovieByQuery = async (query, options) => {
    const resp = await axios.get(`search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`, options);
    return resp.data;
};
export const fetchMovieDetsById = async (id, detailEndpoint = '', options) => {
    const resp = await axios.get(`movie/${id}${detailEndpoint}?api_key=${apiKey}&language=en-US`, options);
    return resp.data;
};