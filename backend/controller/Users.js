import { Users } from '../models/backendModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getUser = async (req, res) => {
    try {
        const user = await Users.findAll({ attributes: ['id', 'username'] })
        res.json(user)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const register = async (req, res) => {
    const { username, password, confirmPassword } = req.body
    if (password !== confirmPassword) return res.status(400).json({ message: "Password dan Confirm Password tidak sama!" })
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await Users.create({
            username: username,
            password: hashPassword
        })
        res.json({ message: "Registrasi Berhasil" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                username: req.body.username
            }
        })
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if (!match) return res.status(400).json({ message: "Wrong Password" })
        const [userId, username] = [user[0].id, user[0].username]
        const accessToken = jwt.sign({ userId, username }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "20s"
        })
        const refreshToken = jwt.sign({ userId, username }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "1d"
        })
        await Users.update({ refreshToken: refreshToken }, {
            where: {
                id: userId
            }
        })
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            // secure:true  "Https"
        })
        res.json({ accessToken })
    } catch (error) {
        res.status(404).json({ message: "Username Tidak Ditemukan" })
    }
}

export const logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken
    if (!refreshToken) return res.sendStatus(204)
    const user = await Users.findAll({
        where: {
            refreshToken: refreshToken
        }
    })
    if (!user[0]) return res.sendStatus(204)
    const userId = user[0].id
    await Users.update({ refreshToken: null }, {
        where: {
            id: userId
        }
    })
    res.clearCookie('refreshToken')
    return res.sendStatus(200)
}