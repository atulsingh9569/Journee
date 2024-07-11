import '../styles/tour-detail.css'
import {Form, ListGroup, Container, Row, Col} from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import { useState, useRef } from 'react'
import Booking from '../components/Booking/Booking'
import NewsLetter from '../shared/NewsLetter'
const TourDetail = () => {
    const {id} = useParams()
    const avgTourRef = useRef('');
    const [tourRating, setTourRating] = useState(0);

    const tour = tourData.find(tour => tour.id === id)

    const {photo, title, desc, price, reviews, city, address, distance, maxGroupSize} = tour;

    const {avgRating, totalRating} = calculateAvgRating(reviews);

    const options = {
        year: 'numeric',
        day: 'numeric',
        month: 'long',
    }

    const submitHandler = e => {
        e.preventDefault();
        const rating = avgTourRef.current.value;
        setTourRating(rating);

        // Handle the submission of the review form
    }

    return (
        <>
        <section className='pt-4 pl-4'>
            <Container>
                <Row>
                    <Col lg='8' className='d-flex flex-column justify-content-center align-items-center'>
                        <div className="tour-detail-container pl-16 pr-16">
                            <img src={photo} alt="" className='pb-8'/>
                            <div className="tour__info p-10">
                                <h1>{title}</h1>
                                <div className="flex gap-8">
                                    <span className='tour__rating flex items-center gap-1'>
                                        <i className="ri-star-s-fill" style={{ 'color': 'var(--secondary-color)' }}></i>{avgRating == 0 ? null : avgRating}
                                        {totalRating === 0 ? ('Not Rated') : (<span>({tour.reviews.length})</span>)}
                                    </span>
                                    <span><i className="ri-map-pin-line"></i>{address}</span>
                                </div>
                                <div className="tour__extra flex mt-2 gap-8">
                                    <span><i className="ri-map-pin-line"></i>{city}</span>
                                    <span><i className="ri-money-dollar-circle-line"></i>${price} per person</span>
                                    <span><i className="ri-map-pin-line"></i>{distance} km</span>
                                    <span><i className="ri-group-line"></i>{maxGroupSize} people</span>
                                </div>
                                <h5>Description</h5>
                                <p>{desc}</p>
                            </div>
                            <div className="tour__reviews p-10">
                                <h1>Reviews{" "}({reviews.length} reviews)</h1>
                                <Form onSubmit={submitHandler}>
                                    <div className='flex items-center gap-3 mt-4 mb-4 rating__group'>
                                        <span onClick={() => {setTourRating(1);}}>
                                            1 <i className={tourRating === 1 ? 'ri-star-s-fill rating' : 'ri-star-s-fill'}></i>
                                        </span>
                                        <span onClick={() => setTourRating(2)}>
                                            2 <i className={tourRating === 2 ? 'ri-star-s-fill rating' : 'ri-star-s-fill'}></i>
                                        </span>
                                        <span onClick={() => setTourRating(3)}> 
                                            3 <i className={tourRating === 3 ? 'ri-star-s-fill rating' : 'ri-star-s-fill'}></i>
                                        </span>
                                        <span onClick={() => setTourRating(4)}>
                                            4 <i className={tourRating === 4 ? 'ri-star-s-fill rating' : 'ri-star-s-fill'}></i>
                                        </span>
                                        <span onClick={() => setTourRating(5)}>
                                            5 <i className={tourRating === 5 ? 'ri-star-s-fill rating' : 'ri-star-s-fill'}></i>
                                        </span>
                                    </div>
                                    <div className='flex justify-between input'>
                                        <input ref={avgTourRef} required type="text" placeholder='Write your views about tour'/>
                                        <button className='btn primary__btn'>Submit</button>
                                    </div>
                                </Form>

                                <ListGroup className='user__reviews'>
                                    {reviews?.map(review => (
                                        <div className='flex items-center justify-between w-full p-10 border-b-2 border-gray-300'>
                                            <div className='flex items-center justify-between'>
                                                <img src={avatar} alt=""/>
                                                <div>
                                                    <h5>Aryan</h5>
                                                    <p>{new Date('01-18-2024').toLocaleDateString(
                                                        'en-US',
                                                        options
                                                    )}</p>
                                                    <h4>Amazing Tour</h4>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between ">
                                                <span className='flex items-center justify-center'>
                                                    5 <i className="ri-star-s-fill"></i>
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </ListGroup>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" className=''>
                        <div className="sticky top-4">
                            <Booking tour={tour} avgRating={avgRating}/>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
        <NewsLetter/>
        </>
    )
}
export default TourDetail;
