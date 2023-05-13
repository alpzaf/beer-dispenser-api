import express from "express";
import cors from "cors";
import {loadEndpoints} from "./router/api";

const PORT = process.env.PORT ?? 8000

const app = express()
app.use(express.json())
app.use(cors)
app.set("port", PORT)

loadEndpoints(app)

export default app;
