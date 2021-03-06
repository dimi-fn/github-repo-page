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
            <p>Provide a GitHub username and get a list of the associated repositories! You can also get extra information regarding the repository's creation date, the stars, the number of forks, as well as the number of issues for those repositories!</p>
            <p class="p-click-repo">You can additionally click upon the repo name and visit it!</p>
            <br></br>
                <form className="searchbar"
                    onSubmit={handleSubmit}
                    role="" 
                    aria-label="Search Form" 
                >
                    <input required
                        type="search"
                        onChange={updateInput}
                        aria-label="GitHub username" 
                        className="search-repos"
                        placeholder="Type a valid GitHub Username..." 
                        value={username}
                    />
                    <button type="submit" className='submit-search'>Search</button>
                </form>
        </section>
    );
}
