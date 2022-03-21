# Backend implementation of the Metamask authentication web app

This project aims to connect a user via Metamask and then redirect him to a home page while displaying his address if connected successfully

## RQs
In this part, our aim is to save the current connected user with Metamask in a DB, and integrate assure the communication between the backend and frontend of our project

** to run the backend project use the cmd "npm start"

Used tools/libraries:
- express: Fast, unopinionated, minimalist web framework for Node.js.
- dotenv: Zero-dependency module that loads environment variables from a .env file into process.env.
- cors: Express middleware to enable CORS with various options.
- helmet: Express middleware to secure your apps by setting various HTTP headers, which mitigate common attack vectors.
- nodemon: restarts a target Node.js process when any of the required files change and significantly decreases the time it takes to restart the application when you make a change.
- body-parser: a module that parses the request (of various content types) and creates a req.body object that we can access in our routes.
