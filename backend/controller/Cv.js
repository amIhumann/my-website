import { Cv } from '../models/backendModel.js'
import Buffer from 'buffer'

const getColumn = async (req, res) => {
    try {
        const result = []
        const data = Cv.rawAttributes
        const width = 800 / Object.keys(data).length
        for (let key in Cv.rawAttributes) {
            if (key.includes('At')) break;
            result.push({
                field: key,
                headerName: key[0].toUpperCase() + key.substring(1),
                width: width,
                type: {
                    name: data[key].type.key,
                    value: data[key]['values']
                }
            });
        }
        res.json(result)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const getAll = async (req, res) => {
    try {
        const item = await Cv.findAll()
        res.json(item)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const getById = async (req, res) => {
    try {
        const item = await Cv.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(item)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const create = async (req, res) => {
    try {
        await Cv.create(req.body)
        res.json({
            'message': "Cv Created"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
const update = async (req, res) => {
    try {
        await Cv.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': "Cv Updated"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
const deleted = async (req, res) => {
    let id = Buffer.from(req.params.id, 'base64').toString('ascii').split(',');
    try {
        await Cv.destroy({
            where: {
                id: id
            }
        })
        res.json({
            'message': 'Delete Success'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
export { getAll, create, getById, update, deleted, getColumn }