import { Experienced } from '../models/backendModel.js'

const getColumn = async (req, res) => {
    try {
        const result = []
        const data = Experienced.rawAttributes
        const width = 800 / Object.keys(data).length
        for (let key in Experienced.rawAttributes) {
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
        const item = await Experienced.findAll({ attributes: ['id', 'year'] })
        res.json(item)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const getById = async (req, res) => {
    try {
        const item = await Experienced.findAll({
            where: {
                id: req.params.id
            }, attributes: ['id', 'year']
        })
        res.json(item)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const create = async (req, res) => {
    try {
        await Experienced.create(req.body)
        res.json({
            'message': "Experiences Created"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

const update = async (req, res) => {
    try {
        await Experienced.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': "Experienced Updated"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
const deleted = async (req, res) => {
    let id = Buffer.from(req.params.id, 'base64').toString('ascii');
    try {
        await Experienced.destroy({
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