import React from "react";
import { ListGroup, ListGroupItem, FormGroup,Button } from "reactstrap";
import './booking.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Booking = ({tour, avgRating}) => {

    const {price, reviews} = tour;

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize:1,
        bookAt: '' 
    })

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);
    const navigate = useNavigate();

    const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    };

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/thank-you');
    }
    return (
        <div className="booking">
            <div> 
                <div className="booking__top flex items-center justify-between w-full">
                    <h3>${price} <span>/per person</span></h3>
                    <span className="flex items-center">
                        <i className="ri-star-s-fill"></i>
                        {avgRating === 0 ? null : avgRating} ({reviews.length})

                    </span>
                </div>
                <div className="booking__form">
                    <h5>Information</h5>
                    <form action="" className="" onSubmit={handleSubmit}>
                        <FormGroup className="flex items-center justify-between w-full">
                            <input type="text" id='fullName' placeholder="Full Name" className="booking__input" required onChange={handleChange}/>
                        </FormGroup>
                        <FormGroup className="flex items-center justify-between w-full">
                            <input type="number" id="phone" placeholder="Phone" className="booking__input w-full" required onChange={handleChange} />
                        </FormGroup>
                        <FormGroup className="flex items-center justify-between w-full">
                            <input type="date" placeholder="" id="bookAt" className="booking__input" required onChange={handleChange} />
                            <input type="number" placeholder="Guest" id="guestSize" className="booking__input" required onChange={handleChange} />
                        </FormGroup>
                    </form>
                </div>
            </div>
            <div className="booking__button">
                <ListGroup>
                    <ListGroupItem className="flex justify-between p-2">
                        <h5>${price} <i className="ri-close-line"></i> 1 person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="flex justify-between p-2">
                        <h5>Service Charge</h5>
                        <span>$ 10</span>
                    </ListGroupItem>
                    <ListGroupItem className="flex justify-between total p-2">
                        <h5>Total</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className="btn primary__btn mt-2" onClick={handleSubmit}>Book Now</Button>
            </div>
        </div>
    )
}
export default Booking;