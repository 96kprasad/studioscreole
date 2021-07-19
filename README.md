# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Title-

Creole Studios Machine Test

Status -

Complete -1) Log-In Authentication Completed with default with Default user and Registered users. 2) List of the Users are displayed , which is stored in db.json file. 3) User can View , Edit and Delete the user details . 5) When we want to delete using notification the Delete not Work 6) Not Found page Added , if user enter worng page request.

Installation -

1- We need node to create and run React project Install - npm install-g create-react-app create-react-app app-name

Use npm or Yarn (We use yarn)
Other Modules we required - npm install react-router-dom / yarn add react-router-dom npm install react-bootstrap / yarn add react-bootstrap npm install react-modal / yarn add react-modal npm i react-toastify / yarn add react-toastify npm install json-server / yarn add json-server ( To store the Data )

Project Screeshots -

              ![Home Page with login](https://user-images.githubusercontent.com/68418436/126146156-4379b96a-02c6-4f6d-8ec8-8778a765d722.png)
              
              ![SignUp-1](https://user-images.githubusercontent.com/68418436/126146440-6b225db5-bba9-4aae-869f-d4605af9c3b7.png)
To Start json Server- After creating project with create-react-app and run npm start command Run Json server with set json-server --watch 'path/db.json' --port 3004 ( Add this command to package.json file ) run - npm run json-server comand to start json server

This task took 2 days to complete , the main goals i achieve in this task is - 1) user authentication with login with default user and registered user and also perform the crud operation on the list of the users .

I started with adding navbar to react-router for routing between pages , tostify and react-modal are the new features are used in the apllication , i used bootstrap to design web page. the main challenge which i faced is user authentication for login, it took 1 day to compelete this task but the Redirect function still cant work after login sucessfully. I also add beautiful not page found file in the project for wrong routing or request.

To delete the record from the list -please remove comments from 1st delete link in ListUser.js file and add comment on 2nd delete link in ListUser.jsx file.
