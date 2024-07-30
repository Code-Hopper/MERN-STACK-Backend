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

        // check for duplicate enrty if found do not save into database
        // unique phone and email

        let checkIfUnique = await DataModel.findOne({ $or: [{ phone: data.phone }, { email: data.email }] })

        if (checkIfUnique) {

            // if we get data back that is true, so we won't save data

            throw ("duplicate enrty !")

        } else {

            // if we dint't get data back that is false, so we save data (this indicate a unique entry)

            let instanceDataModel = new DataModel(data)

            await instanceDataModel.save()

            console.log("data has been saved into database")

            res.status(202).json({ message: "data has been saved into Database !" })

        }

    } catch (err) {
        console.log("unable to save the data in database", err)
        res.status(200).json({ message: err })

    }
}

let FetchData = async () => {
    try {
        // fetch un conditional data from database
        let result = await DataModel.find()

        res.status(200).json({ message: "Got Data From Database !", database: result })

    } catch (err) {

    }
}

export { GetHome, PostAcceptForm }