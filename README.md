# BeliefMeToo
CS 506 Software Engineering Project

To start:
1. Make sure MongoDB and nodejs are installed on your machine
2. Open cmd as administrator and input command 'net start MongoDB'. This will start mongodb server.
3. Open git bash or whatever other bash you prefer.
4. Go to directory housing this project (for me this is Documents/GitHub/BeliefMeToo)
5. Install each required nodejs subfamily if you haven't already by inputting 'npm install [family] --save'
   where family is express, morgan, mongoose, bcrypt-nodejs, mongoose-title-case, jsonwebtoken, mongoose-validator, nodemailer, or nodemailer-sendgrid-transport
   (you'll have to install all of them) npm install mongoose --save for example
6. Input 'node server.js' into the bash. This will connect you to the server and should output something like:
   Server is running on port: 8080
   Successfully connected to MongoDB
7. Now go into your browser and go to localhost:[port] where port is the number displayed in step 6. This will be
   the working version of our website so far
8. To shut everything down, enter ctrl+c in the bash you ran node server.js in and enter net stop 'MongoDB' in the cmd
   with mongo running

To set up testing:
1. Install the Karma tool via the NPM package manager with command 'npm install karma --save-dev'
2. Install karma-cli with command 'npm install -g karma-cli'
3. Install karma plug-ins to enable us to use the Jasmine test framework and Google Chrome as the target browser with the command 'npm install karma-jasmine karma-chrome-launcher --save-dev'
4. Configure the test using the step by step wizard with command 'karma init karma.conf.js'
5. Run tests using the command 'karma start karma.conf.js'
6. Optionally, set up code coverage analysis with the command 'npm install karma karma-coverage'
7. Ensure your karma.conf.js file has files listed in the following order:
```
files: [
  'public/assets/js/angular.js',
  'public/assets/js/angular-*.js',
  'public/app/app.js',
  'public/app/routes.js',
  'public/app/controllers/*.js',
  'public/app/services/*.js',
  'test/test/*.js'
],
```


Reference

Login and user creation references:
http://jasonwatmore.com/post/2015/12/09/mean-stack-user-registration-and-login-example-tutorial#services-user-service
