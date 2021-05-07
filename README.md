database name: image_db

This database has been created in virtual environment of vagrant
Steps:
vagrant up
vagrant ssh
go to folder
run command psql -U development. All the details are available in db.js along with the password
CREATE DATABASE image_db
\c image_db to connect to the database
run command \i back-end/sqlDatabase/migrations/create.sql to create table
\dt to check if the table is created
