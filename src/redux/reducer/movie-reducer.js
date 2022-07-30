const initial_state = {
    data: [],
    detail: {}
}

export const MovieReducer = ( state = initial_state, action ) => {
    switch ( action.type ) {
        case "GET_LIST_MOVIE" :
            return { ...state, data: action.payload }
        case "GET_DETAIL_MOVIE" :
            return { ...state, detail: action.payload }
        default :
            return state;
    };
};