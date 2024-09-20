import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}))
app.use(express.json());
app.use(express.urlencoded());
// app.use(bodyParser.json())

import ticketRoutes from "./routes/ticket.route.js"

app.use("/api/v0",ticketRoutes)

export {app};