import axios from 'axios';

export const getRepos = (gitUsername) => {
    return async (dispatch) => {
        
        try {

            const {data} = await axios.get(`https://api.github.com/users/${gitUsername}/repos`
            )

            dispatch({
                type: "LOADED_REPOS",
                payload: data
            });

        } catch (err) {
            dispatch({ type: 'SET_ERROR',
                        payload: err.message 
                    })
            console.warn(`Got error while dispatching, error: ${err.message}`);                    
        }
    }

};
