import { Experiences } from '../models/backendModel.js'
import {Buffer} from 'buffer'

const getColumn = async (req, res) => {
    try {
        const result = []
        const data = Experiences.rawAttributes
        const width = 800 / Object.keys(data).length
        for (let key in data) {
            if (key.includes('At')) break;
            let headerName = key[0].toUpperCase() + key.substring(1);
            result.push({
                field: key,
                headerName: headerName.replace(/_/g, " "),
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
        const item = await Experiences.findAll()
        res.json(item)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const getById = async (req, res) => {
    try {
        const item = await Experiences.findAll({
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
        await Experiences.create(req.body)
        res.json({
            'message': "Experiences Created"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
const update = async (req, res) => {
    try {
        await Experiences.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': "Experiences Updated"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

const deleted = async (req, res) => {
    try {
        let id = Buffer.from(req.params.id, 'base64').toString('ascii').split(',');
        await Experiences.destroy({
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