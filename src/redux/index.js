import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

import { GenreReducer } from "./reducer/genre-reducer";
import { MovieReducer } from "./reducer/movie-reducer";

const Reducers = combineReducers({
    genre: GenreReducer,
    movie: MovieReducer
});

export const createReduxStore = () => 
    createStore(Reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));