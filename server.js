import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"

import "./database/conn.js"

dotenv.config({ path: "./config.env" })

// router 
import { ApiRouter } from "./routers/apirouter.js"

let port = process.env.PORT

let app = express()

let corsOption = {
    origin: "*"
}

app.use(cors(corsOption))


app.use(bodyParser.urlencoded({ extended: false }))

// to recieve form object from frontend use use bodyParser.json() | express.json() 
app.use(bodyParser.json())

app.use(ApiRouter)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})