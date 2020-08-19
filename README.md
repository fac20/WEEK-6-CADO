# WEEK5-ACDO :dog:
Web link: https://week5-dog-app.herokuapp.com/

## Introduction
App for single dogs, the app displays dogs looking for friends/partners

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
1. The page loads and any previous messages are loaded as well
2. The pup can insert a message in the form input, and clicking submit will automatically display the new message.
3. Messages are ordered by newest first

## User Stories
1. As a pup, I want to be able to put information out there about what I am looking for in another pup so that I can find love
2. As a pup I want to scroll through all the messages so that I can looked for my special one

## Acceptance Criteria
- [x] Enter main page it loads previous posts
- [x] Form to submit data
- [x] When data is submitted data will be shown
- [ ] Stretch Goal - to have a time stamp and image loaded as well
- [x] Tests for server routes
- [ ] Test for database access
- [ ] Modularisation of db queries
- [ ] Not have .env file

## Known Bugs
- [ ] Same username cannot be put in twice

## Database Schema
![](https://user-images.githubusercontent.com/59407030/90230786-fc7bbf00-de11-11ea-8141-0aa1f2c97cce.png)

## Tech Stack
* Miro
* Heroku
* Node
* Postgres

## Team
* Jessica - Scrum Facilitator
* Aishah - Design
* Jennifer - Deployment
* My Hoa - Quality

