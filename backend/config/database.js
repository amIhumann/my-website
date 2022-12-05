import { Sequelize } from 'sequelize'

const db = new Sequelize('backend', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: false
    }
})

export { db }