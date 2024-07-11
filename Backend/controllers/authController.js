import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//user registration
export const register = async (req,res)=> {

    // hashing password

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    

    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        })

        await newUser.save()
        res.status(200).json({success: true, message: "Successfully Registered"})

    } catch (error) {
        res.status(500).json({success: false, message: "Failed to Register"})
        
    }
}

//user login

export const login = async (req,res)=> {

    const email  = req.body.email
    try {
        const user = await User.findOne({email})

        //is user dosent exist

        if(!user) {
            return res.status(400).json({success: false, message: "User does not exist"})
        }

        //is user exist then check pass is correct or not

        const checkPassword = await bcrypt.compare(req.body.password,user.password)
        //if pass is incorrect
        if(!checkPassword) { 
            return res.status(401).json({success: false, message: "Password is incorrect"})
        }

        const {password, role, ...rest} = user._doc

        const token = jwt.sign({id: user._id, role: user.role},
            process.env.JWT_SECRET_KEY,
            {expiresIn: "15d"})

        //set token in the browser cookies and send the response to the client

        res.cookie('accessToken', token, {
            httpOnly: true,
            expires:token.expiresIn
        }).status(200).json({
            success: true, 
            token,
            message: "Successfully login", 
            role,
            data: {...rest}})

    } catch (error) {
         
        return res.status(500).json({success: false, message: "Failed to login"})
        
    }
}