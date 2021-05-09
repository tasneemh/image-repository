### IMAGE REPOSITORY

This is a full stack web application where users can upload an image to the database and view all images that are available.

## Screenshots

!["Screenshot of home page"](https://github.com/tasneemh/image-repository/blob/master/screenshots/home.png?raw=true)
!["Screenshot of uploaded message"](https://github.com/tasneemh/image-repository/blob/master/screenshots/uploading.png?raw=true)
!["Screenshot of images"](https://github.com/tasneemh/image-repository/blob/master/screenshots/images.png?raw=true)
!["Screenshot of missing attachment"](https://github.com/tasneemh/image-repository/blob/master/screenshots/missing.png?raw=true)
!["Screenshot of duplicate images error"](https://github.com/tasneemh/image-repository/blob/master/screenshots/duplicate.png?raw=true)

# Dependencies

- React (17.0.2)
- CSS
- Node.js (10.16.1)
- Bootstrap
- Express (4.17.1)
- pg (8.6.0)
- Multer (1.4.2)
- Form-data (2.3.3)
- Axios (0.21.1)
- Nodemon (2.0.7)
- Cors (2.8.5)
- Bootstrap

# Technology

This full stack web application is built by using React and CSS on front-end, Express, Node.js and Postgre SQL on the back-end.

# Getting Started

- Install all dependencies (using the npm install command).
- My laptop has vagrant and virtual machine preinstalled. The database has been created inside vagrant.

  - Commands for vagrant in the terminal on Mac OS.
  - vagrant up
  - vagrant ssh
  - psql -U development
  - CREATE DATABASE image_db
  - \c image_db to connect to the database
  - Run command \i back-end/sqlDatabase/migrations/create.sql to create images table
  - \dt to check if the images table is created
  - All the username and password details about the database are available in db.js inside back-end folder.

- Start the back-end server using the npm start command. The app will be served at http://localhost:8080/.
- Start the front-end server using the npm start command. The app will be served at http://localhost:3000/

# How To Use the App?

- Users can upload the image by clicking on 'SUBMIT' button. Once the image is successfully uploaded they will see a message indicating the same.
- If users upload duplicate image or fail to upload the image they will get an error message.
- Users can view all the images available in the database by clicking on 'CLICK HERE!' button.
