import { DataModel } from "../models/dataSchema.js"

let GetHome = async (req, res) => {
    try {

        let result = await DataModel.find()

        console.log(result)

        res.status(200).json({ message: "this is home router for api this is backend !", databaseStatus: "connected !" })

    } catch (err) {
        res.status(500).json({ message: "some error in backend", databaseStatus: "N/A !" })
        console.log("error in home function", err)
    }
}

let PostAcceptForm = async (req, res) => {
    console.log(req.body)

    let data = req.body

    try {

        let instanceDataModel = new DataModel(data)

        await instanceDataModel.save()

        console.log("data has been saved into database")

        res.status(202).json({message:"data has been saved into Database !"})

    } catch (err) {
        console.log("unable to save the data in database", err)
    }
}

export { GetHome, PostAcceptForm }