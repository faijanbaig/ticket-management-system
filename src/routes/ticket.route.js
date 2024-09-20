import { Router } from "express";
import { createTicket, deleteTicket, getAllTicket, getTicketById, updateTicket } from "../controllers/ticket.controller.js";

const router = Router();

router.route("/ticket").post(createTicket);
router.route("/ticket").get(getAllTicket);
router.route("/ticket/:ticketId").get(getTicketById);
router.route("/ticket/:ticketId").patch(updateTicket);
router.route("/ticket/:ticketId").delete(deleteTicket);

export default router;