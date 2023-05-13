import express from "express";
import cors from "cors";

const PORT = process.env.PORT ?? 3000

const app = express()
app.use(express.json())
app.use(cors)
app.set("port", PORT)

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})
