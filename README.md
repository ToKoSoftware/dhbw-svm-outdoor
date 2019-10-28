# DHBW SVM Outdoor Website
DHBW Semester 1 Group Assignment


## Conventions:

- Branches with improvements shall be named `improvement/branch-name`
- Branches with imports from assigned doc files shall be named `import/branch-name`
- All commits, comments, pull requests, ... shall be created in english

## Pull Requests
- Pull requests must contain an explanation/list of changes and must be reviewed by at least one other team member.

## Folder Structure

- `assets`        All stylesheets, images, ... shall be put here
- `assignment`    The files provided by the university containing tasks, content, etc.
- `structure`     The doc files in converted to html
- `site`          The site's content files
- `combiner`      NodeJS Script combining the site's template files
- `dist`          This folder contains the finalized website. These files shall be published later on / given to the teacher 

## Deployment

This repository's `master` branch and all pull requests are automatically deployed to heroku.

## Starting local server
1. Install `npm`
2. Run `npm install`
3. Run `npm start`
4. Visit the website in the browser on ``http://localhost:80`
