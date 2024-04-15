import { db } from "../config/database.js"

const getAll = async (req, res) => {
    try {
        const item = await db.getQueryInterface().showAllSchemas()
        const data = item.reduce((output, {Tables_in_backend}) => (!['user', 'messages'].includes(Tables_in_backend)) ? output.concat(Tables_in_backend) : output, []);
        res.json(data)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export { getAll }