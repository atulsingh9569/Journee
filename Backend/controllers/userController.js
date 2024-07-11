import User from "../models/User.js";

//create new User

export const createUser = async (req,res) =>{
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()

        console.log(savedUser);

        res.status(200).json({
            success: true, 
            message: 'Successfully created', 
            data: savedUser
        })
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: 'failed to created. Try again'
        })

    }
}

//update User

export const updateUser = async (req,res) =>{

    const id = req.params.id

    try {
        
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            $set: req.body
        },{new:true})

        res.status(200).json({
            success: true, 
            message: 'Successfully Updated', 
            data: updatedUser
        })

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: 'failed to update'
        })
    }
}

// delete User

export const deleteUser = async (req,res) => {
    const id = req.params.id

    try {
        
        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true, 
            message: 'Successfully Deleted', 
        })

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: 'failed to delete'
        })
    }
}

//get single User

export const getSingleUser = async (req,res) => {
    const id = req.params.id

    try {
        
        const user = await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true, 
            message: 'Successfully fetched', 
            data: user
        })

    } catch (error) {
        
        res.status(404).json({
            success: false, 
            message: 'not found'
        })
    }
}

//get all User

export const getAllUser = async (req,res) => {


    try {
        const users = await User.find({})
        
        res.status(200).json({
            success: true, 
            message: 'Successfully fetched', 
            data: users
        })
    } catch (error) {
        res.status(404).json({
            success: false, 
            message: 'data not found', 
        })
    }
}
