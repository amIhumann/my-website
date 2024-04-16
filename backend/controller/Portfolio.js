import { Portfolio } from '../models/backendModel.js'
import path from "path";
import {Buffer} from 'buffer'

const getColumn = async (req, res) => {
    try {
        const result = []
        const data = Portfolio.rawAttributes
        const width = 800 / Object.keys(data).length
        for (let key in Portfolio.rawAttributes) {
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
        const item = await Portfolio.findAll()
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
            }
        })
        res.json(item)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const create = async (req, res) => {
    try {
        let input = req.body;

        if (req.files !== null) {
            let file = req.files.file;
            const ext = path.extname(file.name);
            const fileSize = file.data.length;
            const fileName = file.md5 + ext;
            // const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
            const allowedType = ['.jpg', '.jpeg', '.png'];
            if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ message: "Invalid Images" });
            if (fileSize > 5000000) return res.status(422).json({ message: "Image must be less than 5 MB" });

            await file.mv(`./public/images/${fileName}`, (err) => {
                if (err) return res.status(500).json({ message: err.message });
            })

            input = { ...input, img: fileName };
        }
        
        await Portfolio.create(input);
        res.status(200).json({ message: "Portfolio Created Successfuly" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const update = async (req, res) => {
    try {
        let input = req.body;

        if (req.files !== null) {
            let file = req.files.file;
            const ext = path.extname(file.name);
            const fileSize = file.data.length;
            const fileName = file.md5 + ext;
            // const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
            const allowedType = ['.jpg', '.jpeg', '.png'];
            if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ message: "Invalid Images" });
            if (fileSize > 5000000) return res.status(422).json({ message: "Image must be less than 5 MB" });

            await file.mv(`./public/images/${fileName}`, (err) => {
                if (err) return res.status(500).json({ message: err.message });
            })

            input = { ...input, img: fileName };
        }

        await Portfolio.update(input, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: "Portfolio Updated Successfuly" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const deleted = async (req, res) => {
    let id = Buffer.from(req.params.id, 'base64').toString('ascii').split(',');
    try {
        await Portfolio.destroy({
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