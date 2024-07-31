import express from "express"

import { GetHome , PostAcceptForm, FetchData } from "../controllers/apicontroller.js"

let ApiRouter = express()

ApiRouter.get("/api", GetHome)

ApiRouter.post("/acceptform", PostAcceptForm)

ApiRouter.get("/fetchData", FetchData)


export { ApiRouter }