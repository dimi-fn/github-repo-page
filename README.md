# Github Repo Page

@ [UCEHenry](https://github.com/UCEHenry), [dimi-fn](https://github.com/dimi-fn)

-----------

# Project Description

This is a project about constructing a minimalist version of a GitHub repository page. The user can provide a GitHub username and get a list of the associated repositories. Users can also get extra information regarding the repository's creation date, the stars, the number of forks, as well as the number of issues for those repositories.

You can check the deployment version on Netlify here: https://github-repos.netlify.app/


# Functionalities

The user can submit their GitHub username or any other valid GitHub username and retrieve the respective list of repositories for that username. This is achieved the [GitHub API](https://developer.github.com/v3/repos/#list-repositories-for-a-user). You can have a look at how it works: `https://api.github.com/users/<type-your-username-here>/repos`

Users can also get information about the following repository's pieces of information:
* date creation of the repo
* number of stars
* number of forks
* number of issues 

# Installation & Usage

* Clone the repo or download the files
* Navigate to the root project directory of the *github-repo-page* folder, and run:
    * `npm install` to install packages and dependencies
    * `npm run dev` to run the project in development mode
    * `npm run build` to run the project in production mode by generating a bundle.js file hosted on a *build* directory
* Open your browser and navigate to localhost:8080 to use the app    

----

# Technologies

* HTML, CSS, JavaScript
* Webpack, React, Redux

# Future features

* Testing implementation
* Mobile responsiveness

# Licence

* [MIT License](https://opensource.org/licenses/mit-license.php)
