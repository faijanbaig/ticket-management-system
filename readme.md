
# Ticket Management System

The **Ticket Management System** is a simple web application designed to help users create, read, update, and delete support tickets efficiently. Built with Node.js and MongoDB, this system follows RESTful API principles to ensure seamless interaction between the client and server.


## Features

- **Create Tickets**: Users can submit new tickets with relevant details such as title, description, and status of the tickets.
- **Read Tickets**: Users can view all submitted tickets or a specific ticket with the help of ticketId.
- **Update Tickets**: Users can update ticket information, including changing the status or modifying ticket details.
- **Delete Tickets**: Users have the option to remove tickets they no longer need, helping to keep the ticket system organized.


## Technology Stack

- **Backend**: Node.js with Express for handling API requests.
- **Database**: MongoDB for storing ticket information.
## Objectives

This project aims to assess and demonstrate skills in:

- Building RESTful APIs using Node.js.
- Managing data with MongoDB.
- Implementing CRUD (Create, Read, Update, Delete) operations.
- Structuring a project for scalability and maintainability.
## Setup and Installation

### Prerequisites

- Install [Node.js](https://nodejs.org/)
- Install MongoDB locally or set up a MongoDB Atlas account

### Installation Steps

1. Clone the repository:
  ```bash
   git clone https://github.com/faijanbaig/ticket-management-system.git
   ``` 

2. Navigate into the project directory:
   ```bash
   cd ticket-management-system
   ```


3. Install dependencies:
   ```bash
   npm install
   ```

4. Navigate into the src directory:
   ```bash
   cd src
   ```

5. Set up environment variables:
   ```env
   CORS_ORIGIN=*
   PORT=8000
   MONGODB_URI= Your MongoDB connection string with database name
    ```

6. Start the server:
   ```bash
   node index.js
   ```
## Usage
## API Endpoints
1. POST /api/v0/ticket: Create a new ticket.
    Example :POST  http://localhost:8000/api/v0/ticket 
      
      Request Body:
      ```json
      {
      "title":"test ticket",
      "description":"this is a test description.",
      "status":"confirm"
      }
      ```
2. GET /api/v0/ticket: Retrieve all tickets.
     Example :GET  http://localhost:8000/api/v0/ticket 
      
3. GET /api/v0/ticket/: Retrieve a specific ticket by ID.
     Example :GET  http://localhost:8000/api/v0/ticket/:ticketId
  
4. PATCH /api/v0/ticket/: Update a specific ticket by ID.
     Example :PATCH  http://localhost:8000/api/v0/ticket/:ticketId

     Request Body:
      ```json
      {
      "title":"test ticket",
      "description":"this is a test description.",
      "status":"confirm"
      }
      ```

5. DELETE /api/v0/ticket/: Delete a specific ticket by ID.
     Example :DELETE  http://localhost:8000/api/v0/ticket/:ticketId

Note : Here :ticketId in an example is the objectId of the created ticket, use that id .