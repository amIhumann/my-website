import { getTables } from '../models/backendModel.js'
import { db } from "../config/database.js"

const getAll = async (req, res) => {
    try {
        const item = await db.getQueryInterface().showAllSchemas()
        res.json(item)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export { getAll }