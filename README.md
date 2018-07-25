# Michael Waye Productions Booking Application

[![Build Status](https://travis-ci.org/ShaunSpinelli/mikew-server.svg?branch=master)](https://travis-ci.org/ShaunSpinelli/mikew-server)![](https://david-dm.org/ShaunSpinelli/ca-collab-server.svg)

Below is the documentation for Michael's Production booking platform that was created as part of assessment for Coder Academy.

This application was created by [Caroline Evans](https://github.com/CaroEvans), [Fraser Solomon](https://github.com/fraserisland), [Shaun Spinelli](https://github.com/ShaunSpinelli) and [Isaac Powell](https://github.com/DeezyE) under the [GWSS](https://github.com/Global-Worldwide-Synergetic-Solutions) orginisation.

The site can be viewed [here](https://suspicious-bhabha-21b6a1.netlify.com/) and the back end is being hosted [here](https://mikewserver.herokuapp.com) by heroku.

## Table of Contents

- [Summary](#summary)
  - [Problem Definition](#problem-definition)
  - [Solution](#solution)
- [Application Design](#application-design)
  - [Conceptual Design and Review](#conceptual-design-and-review)
  - [User Stories](#user-stories)
  - [User Journeys](#user-journeys)
  - [Wire Frames](#wire-frames)
- [Project Management](#project-management)
  - [Working with the Client](#working-with-the-client)
  - [Manage Project](#manage-project)
  - [Team Management](#team-management)
  - [Post Project Review](#post-project-review)
- [Project Management Tools](#project-management-tools)
  - [Trello](#trello)
  - [Github](#github)
  - [Agile](#agile)
  - [Code Review](#code-review)

## Summary

### Problem Definition

Our client is Michael Waye, a local musician and producer. Currently Michael collects appointment details by phone and social media, keeping track of upcoming appointments in Google Calendar and saving customers details in his phone contacts.This as many issues such has .....

### Solution

The client needs a place online where customers can get an idea of his music writing and production services, contact him and book appointments.

Broken down into features, the client should be able to:

- Log in and out of their account securely

- Update the information displayed (MVP+)

- View, accept, decline and cancel appointments

- View their calendar of upcoming and past appointments

- Edit their available appointments (MVP+)

While customers should be able to:

- Create an account with their email address (Google and  Facebook are MVP+)

- Log in and out of their account securely

- Get an idea of our client’s services

- View our client’s contact details

- Make and cancel bookings (within a reasonable time frame)

- Receive a confirmation message for each booking

## Application Design

**Overview**

![overview of application](./assests/overview.png)

### Conceptual Design and Review

Review the conceptual design with the client and edit based on their feedback

### User Stories

[Link To Trello Board](https://trello.com/c/e1WejkLj/4-receive-a-confirmation-email-with-all-details-when-booking-confirmed-by-producer)

![users stories](./assests/userstories.png)

### User Journeys

need to draw diagram for this

### Wire Frames

[Wire Frames](https://balsamiq.cloud/s6j7lng/pwumg1f)

**About**

![about](./assests/about.png)

**Account**

![account](./assests/account.png)

**Contact**

![contact](./assests/contact.png)

**Packages**

![packages](./assests/pp.png)

**Sign Up**

![sign up](./assests/signup.png)

**Booking**

![booking](./assests/ppcopy.png)

## Project Management

Below is an overview on how the project was managed.

### Working with the Client

1,2

show communication with client

### Project Charter


### Project Schedule

### reassess project scope

### Team Management

Roles where divided based on skill set, availability and interest in certain areas.

**Fraser** - Front end development direction, styling, API integration, Test design- front end

**Caroline** - Design Direction, front end development,client relations, Authentication and authorization on the server and client.

**Shaun** - Server side development, Dev Ops, CI & CD, Test design- back end ,Front end when needed.

**Isaac** - Security and data, documentation, Quality and user testing, Front end when needed.

Work was monitored through Trello. See [Trello](#trello) for more information.

### Post Project review

### Questionnaire from client

## Project Management tools

### Trello

[Board](https://trello.com/b/OFAmrk4Z/producer-app)

Trello was used  to divide tasks, prioritise them and estimate how long they will take to complete. This is achieved through Backlog, To Do, In Progress, Done and Approved cards. Each card was assigned to specific team member who would complete them. Each card also had a check list of related jobs that needed to be fnished in order for the card to be completed.

**Card Example**

![trello board card](./assests/trello.png)

### Github

An organization was created on github under Global-Worldwide-Synergetic-Solutions. In there we have the master repository for our client and server application, these will serve as the production source code for the project. Team members will fork from these repositories and create feature branches from their fork.

![git flow](./assests/gitflow.png)

Each feature being developed will be on a feature branch, when done merge with your fork , then open pull request on master.

For back end, ensure all continuous integration tests pass on your fork before opening a pull requests.

For front end  after making a pull request another team member will do a code review to make sure everything looks good then accepts the pull requests and merges with master.

**Feature Branches**

Shaun - [back end](https://github.com/ShaunSpinelli/mikew-server/branches), [front end](https://github.com/ShaunSpinelli/mikew-client/branches)

Fraser -  [front end](https://github.com/fraserisland/mikew-client/branches)

Caroline - [back end](https://github.com/CaroEvans/mikew-server/branches), [front end](https://github.com/CaroEvans/mikew-client/branches)

Isaac - [front end](https://github.com/DeezyE/mikew-client)

### Agile

A call between two colleagues over slack.

![slack call screen shot](./assests/call.png)

### Code Review


