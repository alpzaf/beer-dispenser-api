import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import api from "./router/api";
import errorHandlerMiddleware from "./middlewares/error-handler";

const PORT = process.env.PORT ?? 3000

const app = express()
app.use(express.json())
app.use(cors)
app.set("port", PORT)

// Routes
app.use('/api', api);

// Error handling middleware
app.use(errorHandlerMiddleware);

export default app;
