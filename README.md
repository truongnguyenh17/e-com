# E - commerce
This is the backend of the website written in Node JS language

Library :
 - Node.js: is an open-source development platform built on JavaScript to run on servers and support building complex network applications.
 - Bcrypt: is a password hashing algorithm used for password protection.
 - Body-parser: is commonly used for handling HTTP POST requests.
 - Cloudinary: is a cloud-based image and video management platform
 - Cookie-parser: is a middleware for Node.js that allows you to parse cookies attached to the client request object.
 - Crypto: is a built-in module in Node.js that provides cryptographic functionality, such as cryptographic hash functions, cipher algorithms, digital signatures, and a secure random number generator.
 - Dotenv: is a Node.js module that allows you to load environment variables from a .env file into process.env.
 - Express: is a popular web application framework for Node.js that provides a set of features and tools for building web applications, APIs, and other HTTP-based services.
 - Express-async-handler is a middleware for Express that simplifies error handling in asynchronous request handlers.
 - fs is a built-in module in Node.js that provides file system-related functionality.
 - JWT is a Node.js module that allows you to create and verify JSON web tokens.
 - Mongoose is an Object Data Modeling (ODM) library for Node.js that provides a way to interact with MongoDB databases.
 - Morgan is a middleware for Node.js that provides logging functionality for HTTP requests and responses.
 - Multer is a middleware for Node.js that provides a way to handle multipart/form-data, which is commonly used for uploading files in web applications.
 - Path is a built-in module in Node.js that provides utilities for working with file and directory paths.
 - Sharp is a high-performance Node.js module that provides image processing functionality, such as resizing, cropping, and converting between image formats.
 - Slugify is a Node.js module that provides a way to create URL-friendly slugs from a given string. It removes any special characters, replaces spaces with dashes, and converts the string to lowercase.
 - Uniqid is a Node.js module that provides a way to generate unique identifiers (IDs) based on the current time, process ID and a random number.
 - Nodemon is a utility for Node.js that monitors changes in your source code and automatically restarts your application when changes are detected.

...

### RUN
To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:
- MONGO_URI: this is the connection string of your MongoDB Atlas database.
- PORT: a communication endpoint that identifies a specific process or service running on a computer.
- JWT_SECRET: is an environment variable that is commonly used in Node.js applications for securely signing and verifying JSON Web Tokens (JWT)
- CLOUD_NAME, API_KEY, SECRET_KEY: it to establish a connection to the cloud.

Now you can run "npm start" in the terminal and the application should work.

### Technology
The application is built with:
- Node JS v16.14.0
- MongoDB version 4.2.0
...

### Features
Users can do the following:
- Browse available products added by the admin
- User can pay without login
- Display blog
Admins can do the following:
- Login or logout to the admin panel
- View all the information stored in the database. They can view/add/edit/delete orders, users, products and categories, blog,...
- 
## Database
All the models can be found in the models directory created using mongoose.

Blog
- title
- description
- categoryBlog
- numViews
- author
- images
- time

Brand
- title
- time

CategoryProduct
- title
- time

Color
- title
- time

Order
- products
- paymentIntent
- statusPayment
- orderStatus
- sex
- address
- name
- email
- phone
- time

Product
- title
- slug
- description
- price
- category
- brand
- quantity
- sold
- images
- numViews
- color
- time
