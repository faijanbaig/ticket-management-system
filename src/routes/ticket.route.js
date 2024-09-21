import { Router } from "express";
import { createTicket, deleteTicket, getAllTicket, getTicketById, updateTicket } from "../controllers/ticket.controller.js";

const router = Router();

router.route("/tickets").post(createTicket);
router.route("/tickets").get(getAllTicket);
router.route("/tickets/:ticketId").get(getTicketById);
router.route("/tickets/:ticketId").patch(updateTicket);
router.route("/tickets/:ticketId").delete(deleteTicket);

export default router;