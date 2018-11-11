# BeliefMeToo
CS 506 Software Engineering Project

To start:
1. Make sure MongoDB and nodejs are installed on your machine
2. Open cmd as administrator and input command 'net start MongoDB'. This will start mongodb server.
3. Open git bash or whatever other bash you prefer.
4. Go to directory housing this project (for me this is Documents/GitHub/BeliefMeToo)
5. Install each required nodejs subfamily if you haven't already by inputting 'npm install [family] --save'
   where family is express, morgan, mongoose, bcrypt-nodejs, mongoose-title-case, jsonwebtoken, or mongoose-validator
   (you'll have to install all of them) npm install mongoose --save for example
6. Input 'node server.js' into the bash. This will connect you to the server and should output something like:
   Server is running on port: 8080
   Successfully connected to MongoDB
7. Now go into your browser and go to localhost:[port] where port is the number displayed in step 6. This will be
   the working version of our website so far
8. To shut everything down, enter ctrl+c in the bash you ran node server.js in and enter net stop 'MongoDB' in the cmd
   with mongo running


Login and user creation references:
http://jasonwatmore.com/post/2015/12/09/mean-stack-user-registration-and-login-example-tutorial#services-user-service
