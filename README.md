# Tidal Regear Management System
React Frontend for the Tidal Regear Management System

## Project Goals
The number one goal with this project was to eliminate the manual entry of code and management of documents that go into managing a guild's regear system.
I set out to create a smooth and seamless application that works in conjuction with the Albion Player Info application ([repo here](https://github.com/MatthewGammon/Albion-Player-Info), [Live application](https://albion-player-info.vercel.app/home))
to create and manage builds and regear requests. 

## Important Note
The Albion Player Info application linked above is deployed and working with an Express backend. Any regear request made from that web app will point to the /regears endpoint which runs validation (that is hardcoded) on the request and if successful, persists that request to a hosted PostgreSQL database. 
The Express application was modified to included a new endpoint, /generateRegearRequest, which takes the request body, performs look ups to get the plain English name of every item, parses the item name to get appropriate item level information, and generates a new, more detailed, and easier to read request body.
This request body gets sent to the Spring Boot backend which then performs additional validation and saves to a local db.
The above deployed application is unable to have it's requests redirected to these new endpoints because the Spring Boot app and the DB are not hosted and only currently running locally. 
This will be remedied in the coming days.

## Key Functionality
An guild officer with sufficient admin perms will be able to:
* Create a new build from a form that contains all of the weapons and armor in the game
* Edit and Delete created builds
* View all currently pending regear requests that have been submitted by guild members
* Approve or Reject regear requests

A regular user will be able to:
* Register an account and log in
* View information about the guild (useful for new and potential members)
* View requirements for joining the guild as well as requirements for getting an approved regear request
* View all builds that have been approved and created by the guild officers/admin


## Tech and Tools
* JavaScript
* React
* HTML
* CSS
* Bootstrap


## Project Backend
[Tidal Regears Backend](https://github.com/MatthewGammon/Tidal-Regears-Backend)

