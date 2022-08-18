# Todo Application
React, Hooks and typescript 

## Requirements to run using npm

For development, you will need Node.js installed in your system a node global package, npm , installed in your environment.
- #### Install Node.js in your system
   You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    ex: v14.18.1

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
---

## Application Set up and test steps
## Install
    $ cd YOUR_PATH/src
    $ npm install

## Build
    $ npm run build

## Running the project using npm

    $ npm run start
## Testing the project
    $ npm run test

## Service Overview
1. The Application is built with React, Typescript and it runs on port 3000

2. It uses containerised react architecture wherein the UI components are encapsulated with container to have standalone       implementations

3. The use of the application is perform crud operation for todo list

4. You can do the following:
    a. Add an issue
    b. edit an issue, 
    c. delete an issue and
    d. verify an issue
By default there are two tasks added

5. Validation are in place, for example you cannot add an issue with empty name

6. Test cases are written using Jest library

7. The Code is linted and formatted using Prettier.

8. To perform test cases, run --> npm run test
