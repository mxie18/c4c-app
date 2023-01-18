# Project Overview

This project is a simple message board enabling members of the C4C community to post their thoughts online anonymously.
Users must enter messages more than 0 characters and less than 128 characters long for the functionality to work. Additionally,
there is real time data sending, allowing multiple users that are connected to the server to dynamically see new posts.

# Components and Interactions

The tech stack for this project consists of a simple frontend with html/css/js and a backend utilizing node/express/socket.io. The main component is the post button, which when pressed, is initially processed for its length. Then, the message is shown and we emit an event from the socket to the server. When the server gets this request, it then emits the event to all other sockets. This is what enables users to see new posts dynamically show up on the page.

# Requirements

Messages are checked for character length, ensuring empty posts and posts more than 128 characters aren't allowed. Users are also able to see messages from most recent to least recent since we use the javascript prepend function when adding to our message list. Lastly, multiple users who are connected to the application can all see their message boards update as new messages are added. Thus, all requirements are fulfilled.

# Starting the Application

First run `npm install` to get the necessary dependencies for this project.
Then, run `npm start` to start the express server.
Navigate to `http://localhost:3000` to then test the application. Opening 2 of these tabs will allow you to observe sockets at work.
