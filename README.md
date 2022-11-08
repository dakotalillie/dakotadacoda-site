# DakotaDaCoda Site

This repository contains the source code for my personal website, dakotadacoda.com.

## Local Setup

Pull down this repo, run `npm install`, then `npm run dev`. This will start a local development server on port 5137. You
can also run `npm run build` followed by `npm run preview` in order to view the production-optimized build on port 4137.

## Deploying Updates

The site is updated by pushing to the `main` branch. Doing so triggers a Github Action which runs a build and pushes the
resulting assets up to the `production` branch, which is then used as the base branch for Github Pages.
