import express from 'express'
import {getAll, findPortfolio} from '../controller/Frontend.js'

const router=express.Router()

router.get('/',getAll)
router.post('/portfolio',findPortfolio)

export default router