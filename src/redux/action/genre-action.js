import Axios from "axios";

const API_GENRE = "https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49";

export const getListGenre = () => {
    return async ( dispatch ) => {
        try {
            dispatch({ type: "START_GET_LIST_GENRE" });

            const respond = await Axios.get(API_GENRE);
            dispatch({ type: "GET_LIST_GENRE", payload: respond.data.genres });

            dispatch({ type: "END_GET_LIST_GENRE" });
        } catch ( err ) {
            dispatch({ type: "END_GET_LIST_GENRE" });
            console.log(err);
        }
    }
}