import express from 'express'
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getToursCount, updateTour } from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// create new tour
router.post('/', verifyAdmin,createTour)

// update tour
router.put('/:id',verifyAdmin,updateTour)

// delete tour
router.delete('/:id',verifyAdmin,deleteTour)

// get single tour
router.get('/:id',getSingleTour)

// get all tour
router.get('/',getAllTour)

//get tour by search
router.get('/search/getTourBySearch',getTourBySearch)

//get featured
router.get('/search/getFeaturedTour',getFeaturedTour)

//get tours count
router.get('/search/getToursCount',getToursCount)


export default router;