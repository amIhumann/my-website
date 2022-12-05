import { Gallery } from '../models/backendModel.js'
import path from "path";
import fs from "fs";

const getColumn = async (req,res) => {
    try {
        const data=[]
        for( let key in Gallery.rawAttributes ){
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
        const item = await Gallery.findAll({ attributes: ['id', 'title', 'description'] })
        res.json(item)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const getById = async (req, res) => {
    try {
        const item = await Gallery.findAll({
            where: {
                id: req.params.id
            }, attributes: ['id', 'title', 'description','img','createdAt', 'updatedAt']
        })
        res.json(item)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const create = async (req, res) => {
    if(req.files === null) return res.status(400).json({message: "No File Uploaded"});
    var input = req.body;
    let file = req.files.file;
    const ext = path.extname(file.name);
    const fileSize = file.data.length;
    const fileName = file.md5 + ext;
    // const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];
    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({message: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({message: "Image must be less than 5 MB"});
    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({message: err.message});
        try {
            console.log(req.body.title);
            await Gallery.create({title: input.title, description: input.description, img: fileName,});
            res.status(200).json({message: "Product Created Successfuly"});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    })
}
const update = async (req, res) => {
    try {
        await Gallery.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': "Gallery Updated"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
const deleted = async (req, res) => {
    const data = req.params.id.split(',')
    const result = data.map(Number)
    try {
        await Gallery.destroy({
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
export { getAll, create, getById, update, deleted, getColumn }