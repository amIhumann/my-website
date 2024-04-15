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
    },
    status: {
        type: DataTypes.ENUM('Website','Mobile Apps','Game','CLI','CV','BOT','AI')
    },
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
        type: DataTypes.ENUM('Basic','Intermediate','Experienced','Advanced')
    },
    status: {
        type: DataTypes.ENUM('Frontend','Backend','Databases','Game Development','Language')
    },
    icon: {
        type: DataTypes.STRING
    },
})
const Experienced = db.define('experienced', {
    year: {
        type: DataTypes.INTEGER
    },
    education: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    facebook: {
        type: DataTypes.STRING
    },
    instagram: {
        type: DataTypes.STRING
    },
    linkedin: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    messenger: {
        type: DataTypes.STRING
    },
    github: {
        type: DataTypes.STRING
    },
    twitter: {
        type: DataTypes.STRING
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

const Services = db.define('services', {
    desc: {
        type: DataTypes.TEXT
    },
    type: {
        type: DataTypes.ENUM('Digital Marketing','Software Development','Data Analyst')
    }
})

export { Portfolio, Gallery, Experienced, Experiences, Users, Cv, Services }