# Blog-Backend-Image
Project uses Express API and Postman for blog-backend. This repository contains required folders and files for the blog backend.

# Crud Opeartions

Base Url-- http://localhost:3000/blogs

- Get all blogs:

Url-- http://localhost:3000/blogs/ . Select GET request on postman and click on send.All the blog data will be fetched.

- Find a blog by blogId:

Url-- http://localhost:3000/blogs/:id. Enter the /:id that you need to find. Eg./blogs/2rvqpdbpka3n3fhf. Select GET request on postman and click on send.The specific blog will be available.

- Create a blog:

Url-- http://localhost:5000/blogs/ . Select POST request on postman and mention in body the following parameters required to create a blog and then click on send.

- Delete a blog by blogId:

Url-- http://localhost:3000/blogs/:id. Enter the /:id that you need to delete. Eg./blogs/2rvqpdbpka3n3fhf. Select DELETE request on postman and click on send.The specific blog will be deleted.

# Steps To Run The Project

Configure(config.env)-- PORT="Write port number on which you want to start the app server."

Execution(Terminal)-- npm run start.

Use POSTMAN for performing the CRUD operations.
