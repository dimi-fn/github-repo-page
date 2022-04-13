import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RenderResults } from "..";
import { getRepos } from '../../actions';

export default function SearchUser() {
    const username = useSelector(state => state.username);
    const repoResults = useSelector(state => state.repoResults);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    const renderOutput = repoResults.map(result => (
        <RenderResults key={result.id} data={result} />
    ));

    useEffect(() => {
        username && dispatch(getRepos(username));
    }, [username])

    return (
        <>
        {username && <h2>Username: '{username}' | Number of repositories found: {repoResults.length}</h2>}

        <section className="">
            {
                loading ?
                <h2><i>Loading the Repo Results . . .</i></h2>
                :
                (
                    error ?
                    <h2 role="alert">Error: {error}</h2> 
                    : renderOutput
                )
            }
        </section>
        </>
    );
};
