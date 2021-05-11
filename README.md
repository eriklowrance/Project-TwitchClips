# Project-TwitchClips

https://project-twitchclips.herokuapp.com/

## Table of Contents
* [Project Description](#Project-Description)
* [User Story](#User-Story)
* [Wireframe](#Wireframe)
* [APIs Used](#APIs-Used)
* [Technology Used](#Technology-Used)
* [Demo Video](#Demo-Video)


## Project Description

This application allows users to create an account, search clips from Twitch's API by game or streamer name, and save desired clips to their account. saved clips are accessible at anytime after login as long as the clip is still available by Twitch. 
A little breakdown on the User Interface:
    - User is presented with a sign up page.
    - If already a member, a login page is available.
    - Search by game or streameer name using user input (text).
    - User is presented with the top clips with the option to save for each clip
    - A "saved clips" section is displayed that will store saved clips
    - Saved clips are always accessible (even after logging out) unless deleted by user their origin (Twitch)
    - Ability to log out after user is done using the application

## User Story

As an avid gamer, I want to find the top clips of my favorite games and streamers. 

## Wireframe
![Project2SS](https://user-images.githubusercontent.com/73148818/103259064-1fd48000-4955-11eb-9398-89f3e14347c4.png)

## APIs Used

We used Twitch's API to provide users popular clips.

## Technology Used
    - Express
    - Express-Handlebars
    - MySQL
    - Sequelize
    - Axios
    - Bcrypt
    - dotenv
    - passport

## Demo Video
![twitchclips](https://user-images.githubusercontent.com/73148818/103260027-341a7c00-4959-11eb-8dd4-f91bae4a8378.gif)
