import { Users } from "../models/backendModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken
        console.log(refreshToken)
        if (!refreshToken) return res.sendStatus(401)
        const user = await Users.findAll({
            where: {
                refreshToken: refreshToken
            }
        })
        if (!user[0]) return res.sendStatus(403)
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403)
            const [userId, username] = [user[0].id, user[0].username]
            const accessToken = jwt.sign({ userId, username }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "20s"
            })
            res.json({ accessToken })
        })
    } catch (error) {
        console.log(error)
    }
}