Book Shop Management System
===========================

Project Overview
----------------
This project is a simple Book Shop Management System built using FastAPI and PostgreSQL.
It supports full CRUD (Create, Read, Update, Delete) operations and includes a basic
HTML + Bootstrap frontend integrated with the backend.

The goal of this project is to demonstrate backend–frontend integration,
database operations using SQLAlchemy ORM, and REST API development using FastAPI.

--------------------------------------------------

Technology Stack
----------------
Backend:
- FastAPI (Python)

Database:
- PostgreSQL

ORM:
- SQLAlchemy

Frontend:
- HTML
- Bootstrap
- JavaScript (Fetch API)

--------------------------------------------------

Book Data Model
---------------
Each book contains the following fields:

- id (Integer, Primary Key, Auto-generated)
- name (String)
- author (String)
- pages (Integer)
- price (Float)

--------------------------------------------------

API Endpoints
-------------
POST   /books          -> Create a new book
GET    /books          -> Retrieve all books
GET    /books/{id}     -> Retrieve a book by ID
PUT    /books/{id}     -> Update a book
DELETE /books/{id}     -> Delete a book

--------------------------------------------------

Project Structure
-----------------
bookshop/
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── crud.py
│   └── frontend/
│       ├── index.html
│       └── script.js
├── README.txt

--------------------------------------------------

Setup Instructions
------------------
1. Clone the repository
2. Create and activate a virtual environment
3. Install dependencies:
   pip install fastapi uvicorn sqlalchemy psycopg2-binary python-dotenv

4. Configure PostgreSQL and set environment variables in `.env`
5. Run the backend server:
   uvicorn main:app --reload --port 8001

6. Open browser:
   http://127.0.0.1:8001/

--------------------------------------------------

Frontend Features
-----------------
- Display all books in a table
- Create new books
- Update existing books
- Delete books
- Dynamic UI updates without page reload

--------------------------------------------------

Author
------
Name: Aononto Jahan Junnurain
University: IUBAT-International University of Business Agriculture and Technology
Contact:
    number: +8801723740704
    email: aonontojahan@gmail.com
    linkedin: aonontojahan
    facebook: aonontojahan
