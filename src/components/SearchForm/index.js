import React, { useState } from 'react';

// https://dev.to/bangash1996/introduction-react-redux-using-hooks-useselector-usedispatch-26ch
import { useDispatch } from 'react-redux';


export default function SearchForm() {
    
    const [username, setUsername] = useState("");

    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "LOADING_REPOS",
                  payload: username});
    };

    const updateInput = (e) => {
        const input = e.target.value;
        setUsername(input);
    };

    return (
        <section className="">
            <h1>Welcome to the GitHub Repo Search!</h1>
            <p>Give a GitHub username and get a list of the repositories and extra information linked to that account!</p>
            <br></br>
                <form 
                    onSubmit={handleSubmit}
                    role="" 
                    aria-label="Search Form" 
                >
                    <input 
                        type="search"
                        onChange={updateInput}
                        aria-label="GitHub username" 
                        className=""
                        placeholder="Type a valid GitHub Username..." 
                        value={username}
                    />
                    <button type="submit" className=''>Search</button>
                </form>
        </section>
    );
}
