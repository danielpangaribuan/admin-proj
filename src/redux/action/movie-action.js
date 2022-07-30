import Axios from "axios";

export const getListMovie = ( pageID) => {
    return async ( dispatch ) => {
        try {
            const API_LIST_MOVIE = "https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=" + pageID;
            const respond = await Axios.get(API_LIST_MOVIE);
            dispatch({ type: "GET_LIST_MOVIE", payload: respond.data });
        } catch ( err ) {
            console.log(err);
        };
    };
};

export const getDetailMovie = ( id ) => {
    return async ( dispatch ) => {
        try {
            const API_URL = "https://api.themoviedb.org/3/movie/" + id + "?api_key=2fccde01a371b106b09a241d6d1d5b49";
            const respond = await Axios.get(API_URL);
            dispatch({ type: "GET_DETAIL_MOVIE", payload: respond.data });
        } catch ( err ) {
            console.log(err);
        };
    };
};