const initState = {
     username: "",
     repoResults: [],
     loading: false}

const resultsReducer = (state = initState, action) => {
    switch(action.type) {

        case 'LOADING_REPOS':
            return { ...state,
                    username: action.payload,
                    loading: true,
                    // error: false --> use that if testing?!
                };

        case 'LOADED_REPOS':
            return { ...state,
                    repoResults: action.payload,
                    loading: false }; // error: false

        case 'SET_ERROR':
            return { ...state,
                    error: action.payload,
                    loading: false};

        default: 
            return state; 
    };
};

export default resultsReducer;
