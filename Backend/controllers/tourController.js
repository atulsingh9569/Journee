import Tour from "../models/Tour.js";

//create new tour

export const createTour = async (req,res) =>{
    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()

        console.log(savedTour);

        res.status(200).json({
            success: true, 
            message: 'Successfully created', 
            data: savedTour
        })
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: 'failed to created. Try again'
        })

    }
}

//update tour

export const updateTour = async (req,res) =>{

    const id = req.params.id

    try {
        
        const updatedTour = await Tour.findByIdAndUpdate(id, req.body, {
            $set: req.body
        },{new:true})

        res.status(200).json({
            success: true, 
            message: 'Successfully Updated', 
            data: updatedTour
        })

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: 'failed to update'
        })
    }
}

// delete tour

export const deleteTour = async (req,res) => {
    const id = req.params.id

    try {
        
        await Tour.findByIdAndDelete(id);

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

//get single tour

export const getSingleTour = async (req,res) => {
    const id = req.params.id

    try {
        
        const tour = await Tour.findById(id).populate("reviews");

        res.status(200).json({
            success: true, 
            message: 'Successfully fetched', 
            data: tour
        })

    } catch (error) {
        
        res.status(404).json({
            success: false, 
            message: 'not found'
        })
    }
}

//get all tour

export const getAllTour = async (req,res) => {

    //for pagination

    const page = parseInt(req.query.page);

    try {
        const tours = await Tour.find({})
        .populate("reviews")
        .skip(page*8)
        .limit(8)
        
        res.status(200).json({
            success: true, 
            count: tours.length,
            message: 'Successfully fetched', 
            data: tours
        })
    } catch (error) {
        res.status(404).json({
            success: false, 
            message: 'data not found', 
        })
    }
}

//get tour by search

export const getTourBySearch = async(req,res) => {
    const city = new RegExp(req.query.city,'i')
    const distance =  parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)


    try {
        //gte means greater than equal to
        const tours = await Tour.find({city, distance:{$gte: distance}, maxGroupSize:{$gte:maxGroupSize}}).populate("reviews")

        res.status(200).json({
            success: true, 
            message: 'Successful', 
            data: tours
        })


    } catch (error) {
        res.status(404).json({
            success: false, 
            message: 'data not found', 
        })
    }
}

//get featured tour
export const getFeaturedTour = async (req,res) => {


    try {
        const tours = await Tour.find({featured:true}).populate("reviews").limit(8)
        
        res.status(200).json({
            success: true, 
            message: 'Successfully fetched', 
            data: tours
        })
    } catch (error) {
        res.status(404).json({
            success: false, 
            message: 'data not found', 
        })
    }
}

//get tours count
export const getToursCount = async (req,res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({
            success: true, 
            message: 'Successful', 
            data: tourCount
        })
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: 'failed to fetch', 
        })
    }
}