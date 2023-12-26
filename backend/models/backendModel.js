import { Sequelize } from "sequelize"
import { db } from "../config/database.js"

const { DataTypes } = Sequelize

const Portfolio = db.define('portfolio', {
    title: {
        type: DataTypes.STRING
    },
    github: {
        type: DataTypes.STRING
    },
    demo: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    }
})
const Gallery = db.define('gallery', {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    }
})
const Experiences = db.define('experiences', {
    language: {
        type: DataTypes.STRING
    },
    level: {
        type: DataTypes.ENUM('basic', 'intermediate', 'experienced', 'expert')
    },
    status: {
        type: DataTypes.ENUM('frontend', 'backend', 'devops', 'data engineer')
    }
})
const Experienced = db.define('experienced', {
    year: {
        type: DataTypes.INTEGER
    }
})

const Users = db.define('user', {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refreshToken: {
        type: DataTypes.TEXT
    }
})
const Cv = db.define('cv', {
    name: {
        type: DataTypes.STRING
    },
    imgCv: {
        type: DataTypes.STRING
    }
})

const getTables = db.query('show tables');

export { Portfolio, Gallery, Experienced, Experiences, Users, getTables, Cv }