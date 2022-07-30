const initial_state = {
    data: [],
    loading: false
}

export const GenreReducer = ( state = initial_state, action ) => {
    switch ( action.type ) {
        case "GET_LIST_GENRE" :
            return { ...state, data: action.payload }
        case "START_GET_LIST_GENRE":
            return { ...state, loading: true }
        case "END_GET_LIST_GENRE":
            return { ...state, loading: false }
        default :
            return state;
    };
};
