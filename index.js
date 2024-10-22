import express from 'express'
import "dotenv/config"

const port = process.env.port

const app = express()

app.get("/", (_req, res) => {
    return res.send("AlexGoat")
})

app.get("/alex", (_req, res) => {
    return res.send("merci")
})


app.listen(port, () => console.log(`Server is running on ${port}`))