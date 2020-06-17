# personal-website

This is the monorepo for my personal website. It contains the following repos:

 - `app` - A Gatsby-powered web app. It renders the static parts of the app into HTML files and uses JavaScript to pull in content at run-time instead of build-time. Similar to an isomorphic/universal JavaScript web app.
 - `sanity` - The web app pulls in content from [Sanity](https://www.sanity.io/), a headless CMS. This repo defines the document types for content such as blog posts and authors.
 - `yorha` - A React component library. The aesthetic is taken from the video game Nier: Automata.

## Setting up

After cloning this repo, create a `.env` file in the root folder and add the necessary environment variables. You can find these in the Netlify project settings.

## Running tasks

This project uses Gulp as its task runner. To check available tasks, run `yarn run task --tasks` or check `gulpfile.js`.

To run a task, use `yarn run task <task-name>`.