import { Portfolio, Gallery, Experienced, Experiences, Cv, Services } from '../models/backendModel.js'
import { Sequelize } from "sequelize"
import { db } from "../config/database.js"
const { QueryTypes  } = Sequelize

const getAll = async (req, res) => {
    try {
        const cv = await Cv.findOne();
        const about = await Experienced.findOne();
        const dataExperience = await Experiences.findAll();
        const experiences = dataExperience.reduce((x, y) => {
            (x[y.status] = x[y.status] || []).push(y);
            return x;
        }, {});
        const dataServices = await Services.findAll();
        const services = dataServices.reduce((x, y) => {
            (x[y.type] = x[y.type] || []).push(y);
            return x;
        }, {});
        const gallery = await Gallery.findAll();
        const dataPortfolio = await db.query(`
        SELECT * 
        FROM 
            (
                SELECT *, ROW_NUMBER() OVER (PARTITION BY status ORDER BY id ASC) as row 
                FROM portfolio
            ) as main
        WHERE row <= 6`, {
            plain: false,
            type: QueryTypes.SELECT,
        });
        const portfolio = dataPortfolio.reduce((x, y) => {
            (x[y.status] = x[y.status] || []).push(y);
            return x;
        }, {});
        const data = {cv, about, experiences, gallery, portfolio, services};
        res.json(data)
    } catch (error) {
        res.json({ message: error.message })
    }
}

const findPortfolio = async (req, res) => {
    try {
        const data = await Portfolio.findAll({
            where: {
                status: req.body.status
            },
            offset : req.body.offset,
            limit : 3,
            order : ['id']
        });
        res.json(data)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export { getAll, findPortfolio }