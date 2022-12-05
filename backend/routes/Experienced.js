import express from 'express'
import {getAll,create,getById,update,deleted,getColumn} from '../controller/Experienced.js'

const router=express.Router()

router.get('/',getAll)
router.get('/column',getColumn)
router.get('/:id',getById)
router.post('/',create)
router.patch('/:id',update)
router.delete('/:id',deleted)

export default router