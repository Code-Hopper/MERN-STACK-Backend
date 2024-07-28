import express from "express"

import { GetHome , PostAcceptForm } from "../controllers/apicontroller.js"

let ApiRouter = express()

ApiRouter.get("/api", GetHome)

ApiRouter.post("/acceptform", PostAcceptForm)


export { ApiRouter }