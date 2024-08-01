import express from "express"

import { GetHome , PostAcceptForm, FetchData , DeleteData} from "../controllers/apicontroller.js"

let ApiRouter = express()

ApiRouter.get("/api", GetHome)

ApiRouter.post("/acceptform", PostAcceptForm)

ApiRouter.get("/fetchData", FetchData)

ApiRouter.delete("/delete/:id", DeleteData)


export { ApiRouter }