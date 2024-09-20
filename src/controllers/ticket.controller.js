import { Ticket } from "../models/ticket.model.js";
import { ApiError } from "../utils/ApiError.util.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";

// Create a new ticket
const createTicket = asyncHandler(async (req, res) => {
  // Extract ticket details from the request body
  const { title, description, status } = req.body;  

  // Create a new ticket in the database
  const newTicket = await Ticket.create({           
    title,
    description,
    status
  });

  // If ticket creation fails, throw an error
  if(!newTicket){                                   
    throw new ApiError(500,"Internal server error while creating ticket.")
  }

  // If successful, respond with the created ticket and a success message
  return res
    .status(200)
    .json(new ApiResponse(200, newTicket, "Ticket created successfully."));
});

// Get all tickets
const getAllTicket = asyncHandler(async (req, res) => {
  let tickets;
  try {
    // Retrieve all tickets from the database
    tickets = await Ticket.find();  
  } catch (error) {
    throw new ApiError(500, "Internal server error !!", error);  // Handle any server errors
  }  

  // If no tickets are found, respond with an empty array and a message
  if (!tickets.length) {   
    return res.status(200).json(new ApiResponse(200, [], "No tickets found."));
  }

  // If tickets are found, return response with the list of tickets and a success message
  return res
    .status(200)
    .json(new ApiResponse(200, tickets, "Tickets retrieved successfully."));
});

// Get a single ticket by its ID
const getTicketById = asyncHandler(async (req, res) => {
  // Extract the ticket ID from the request parameters
  const { ticketId } = req.params;

  // Find the ticket by its ID in the database  
  const ticket = await Ticket.findById(ticketId);  

  // If the ticket is not found, throw error
  if (!ticket) {   
    throw new ApiError(404, "Invalid ticket Id");
  }

  // If the ticket is found, respond with the ticket data and a success message
  return res
    .status(200)
    .json(new ApiResponse(200, ticket, "Ticket retrieved successfully."));
});

// Update an existing ticket by its ID
const updateTicket = asyncHandler(async (req, res) => {
  // Extract the ticket ID from the request parameters
  const { ticketId } = req.params;  

  // Extract updated ticket details from the request body
  const { title, description, status } = req.body;  
  let ticket;
  try {
    // Find the ticket by its ID and update it with new values, return the updated document
    ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      {
        title,
        description,
        status,
      },
      {
        new: true
      }
    );
  } catch (error) {
    throw new ApiError(500, "Internal server error ", error);
  }

  // If the ticket is not found, throw a 404 error
  if(!ticket){  
    throw new ApiError(404, "Invalid ticket Id");
  }

  // If the ticket is successfully updated, respond with the updated ticket and a success message
  return res 
    .status(200)
    .json(
      new ApiResponse(200, ticket, "Ticket updated successfully.")
    );
});

// Delete a ticket by its ID
const deleteTicket = asyncHandler(async (req, res) => {
  // Extract the ticket ID from the request parameters
  const { ticketId } = req.params;  
  try {
    // Find and delete the ticket by its ID
    await Ticket.findByIdAndDelete(ticketId);  
  } catch (error) {
    throw new ApiError(400, "Invalid ticket id."); 
  }

  // If the ticket is successfully deleted, respond with a success message
  return res
    .status(200)
    .json(
      new ApiResponse(200, null, "Ticket deleted successfully.")
    );
});


export {
  createTicket,
  getAllTicket,
  getTicketById,
  updateTicket,
  deleteTicket
};
