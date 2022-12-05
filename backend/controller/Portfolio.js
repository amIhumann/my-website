import { Portfolio } from '../models/backendModel.js'

const getColumn = async (req,res) => {
    try {
        const data=[]
        for( let key in Portfolio.rawAttributes ){
            if(key.includes('At') || key=='img')break;
            data.push({
                field:key,
                headerName:key[0].toUpperCase() + key.substring(1),
            });
        }
        const width=800/data.length
        const result=data.map(v => ({...v, width: width}))
        res.json(result)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const getAll = async (req, res) => {
    try {
        const item = await Portfolio.findAll({ attributes: ['id', 'title', 'github', 'demo'] })
        res.json(item)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const getById = async (req, res) => {
    try {
        const item = await Portfolio.findAll({
            where: {
                id: req.params.id
            }, attributes: ['id', 'title', 'github','demo','img','createdAt', 'updatedAt']
        })
        res.json(item)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const create = async (req, res) => {
    try {
        await Portfolio.create(req.body)
        res.json({
            'message': "Portfolio Created"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
const update = async (req, res) => {
    try {
        await Portfolio.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': "Portfolio Updated"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
const deleted = async (req, res) => {
    const data = req.params.id.split(',')
    const result = data.map(Number)
    try {
        await Portfolio.destroy({
            where: {
                id: result
            }
        })
        res.json({
            'message': 'Delete Success'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
export { getAll, create, getById, update, deleted, getColumn}