import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import api from "./router/api";

const PORT = process.env.PORT ?? 8000

const app = express()
app.use(express.json())
app.use(cors)
app.set("port", PORT)

// Routes
app.use('/api', api);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

export default app;
