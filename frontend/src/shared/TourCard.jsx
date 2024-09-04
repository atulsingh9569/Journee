import {Button, Card, CardBody} from 'reactstrap'

import {Link} from "react-router-dom"
import './tour-card.css'
import calculateAvgRating from '../utils/avgRating'


const TourCard = ({tour}) => {

    const {avgRating, totalRating} = calculateAvgRating(tour.reviews);

    return (
        <>
        <div  className='card'>
            <Card>
                <div className='tour__img'>
                    <img src={tour.photo} alt="" />
                    {tour.featured && <span> Featured</span>}
                </div>
            </Card>
            <CardBody className='card__details flex-column justify-center items-between'>
                <div className="card__top flex justify-between items-center">
                    <span className='tour__location'>
                        <i className="ri-map-pin-2-line"></i>{" "}{tour.city}
                    </span>
                    <span className='tour__rating'>
                        <i className="ri-star-line"></i>{avgRating == 0 ? null : avgRating}
                        {totalRating === 0 ? ('Not Rated') : (<span>({tour.reviews.length})</span>)}
                    </span>
                </div>
                <h5 className='tour__title'><Link to={`/tours/${tour._id}`}>{tour.title}</Link></h5>
                <div className='tour__price flex justify-between font-medium'>
                    <h5>${tour.price}<span>/per person</span></h5>
                <Button className='btn booking__btn'>
                    <Link to={`/tours/${tour._id}`}>Book Now</Link>
                </Button>
                </div>
            </CardBody>
        </div>
        </>
    );
}
export default TourCard;