import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/thank-you.css'

const ThankYou = () => {
  return (
    <section>
        <div className='thank-you'>
            <span className='m-2'>
                <i className='ri-checkbox-circle-line'></i>
            </span>
            <h1 className='font-bold text-5xl m-2'>Thank You</h1>
            <p className='m-2 font-medium text-xl'>Your tour is booked</p>
            <Button className='m-2'><Link to='/home' className="btn primary__btn" >Back to home</Link></Button>
        </div>
    </section>
  )
}

export default ThankYou;