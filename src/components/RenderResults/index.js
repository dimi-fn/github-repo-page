import React from 'react';

export default function RenderResults({data}) {
    return (
        <section role="" className="">

            {/* 
            - html_url: the url of the repo
            - name: the repo name
            */}
            <h2><a href={data.html_url} target="_blank">{data.name}</a></h2>

            <p>Created at: {data.created_at}</p>
            <p>Stars: {data.stargazers_count}</p>
            <p>Number of Forks: {data.forks_count}</p>
            <p>Number of Issues: {data.open_issues_count}</p>

        </section>
    );
}
