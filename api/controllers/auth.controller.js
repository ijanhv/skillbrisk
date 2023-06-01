import User from '../models/User.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import createError from '../utils/error.js'

export const register = async (req, res, next) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10)
        const newUser = new User({
            ...req.body,
            password: hash
        })

        await newUser.save()
        res.status(201).send("User created")
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })

        if(!user) return next(createError(404, "User not found!"))

        const isCorrect = bcrypt.compareSync(req.body.password, user.password)
        if(!isCorrect) return next(createError(404, "Wrong password or username!!"))

        const token = jwt.sign({ 
            id: user._id,
            isSeller: user.isSeller
        },  process.env.JWT_KEY
        )
        
        const { password, ...info } = user._doc
        res.cookie('accessToken', token, {
            httpOnly: true,
        }).status(200)
        .send(info)
    } catch {
        next(error)
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie('accessToken', {
            sameSite: 'none',
            secure: true
        })
        .status(200)
        .send("Logged out")
        debugger
    } catch (error) {
        console.log(error)
    }
     
}
