# WEEK6-CADO :dog: :cat:

Web link: http://btch-purrlease.herokuapp.com/

## Introduction

App for single dogs ANd cats, the app displays users looking for friends/partners, users have to sign up and log in to post.

## Install Locally:

1. Git clone this repo
2. Run `npm install` to get all the node modules
3. Initialise a local database
4. Create .env file in the root folder and with DATABASE_URL variable with initialise database
5. Run `npm start`

## Running Tests Locally:

1. Complete _Installed Locally_
2. Run `npm test` for server tests
3. Run `npm test-db` for database connection tests

## User Process

1. The page loads to show all the posts and any previous messages are loaded
2. Pup can view posts, and try to post in the form.
3. The form will only post if the user is signed in.
4. Form will detect if user is signed in or not. If not, there will be a link to direct you to signin/log
5. Relocates you to the login/signup page
6. Login or sign up will redirect you to the home page where you can now post
7. Messages are ordered by newest first

## User Stories

1. As a pup, I want to be able to put information out there about what I am looking for in another pup so that I can find love
2. As a pup I want to scroll through all the messages so that I can looked for my special one
3. As a feline, I want to: be the only person allowed to delete my stuff

## Acceptance Criteria

-   [x] Enter main page it loads previous posts
-   [ ] Stretch Goal - to have a time stamp and image loaded as well
-   [x] Tests for server routes
-   [ ] Test for database access
-   [x] Modularisation of db queries
-   [x] Forms for users to sign up and log in
-   [x] A form for users to submit data only accessible to logged in users
-   [x] A page showing all the data
-   [ ] A way for logged in users to delete their own data
-   [ ] Semantic form elements with correctly associated labels
-   [x] A Postgres database hosted on Heroku
-   [ ] Not process user input as SQL commands
-   [x] Hidden environment variables (i.e. not on GitHub)

## Known Bugs

-   [ ] Same username cannot be put in twice for sign up
-   [ ] Login username cannot be something not already on the database

## Database Schema


![](https://user-images.githubusercontent.com/59407030/90888639-90b7ca00-e3ae-11ea-974d-1fee647cb151.png)

## Non-tech Stack

-   Hand-drawings
-   Food

## Tech Stack

-   Miro
-   Heroku
-   Node
-   Postgres

## Team

-   Jessica - Deployment
-   Aishah - Scrum Facilitator
-   Jennifer - Quality
-   My Hoa - Design
