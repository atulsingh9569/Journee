import React from 'react'
import { Form, FormGroup } from 'reactstrap'
import {useRef} from 'react'

import './search-bar.css'

const SearchBar = () => {
    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxPeopleRef = useRef(0);

    const SearchHandler = () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxPeople = maxPeopleRef.current.value;
        if(location === '' || distance === '' || maxPeople === '')
            return alert('All Fields are required');
    }



    return (
            <div className='search-bar'>
                <Form className='flex gap-8 items-center' >
                    <FormGroup className='flex justify-center form-group form-group-fast'>
                        <span>
                            <i className="ri-map-pin-line"></i>
                        </span>
                        <div>
                            <h4>Location</h4>
                            <input type="text" placeholder='Where are you going ?' ref={locationRef}/>
                        </div>
                    </FormGroup>
                    <FormGroup className='flex justify-center form-group form-group-fast'>
                        <span>
                            <i className="ri-map-pin-time-line"></i>
                        </span>
                        <div>
                            <h4>Distance</h4>
                            <input type="Number" placeholder='distance k/m' ref={distanceRef}/>
                        </div>
                    </FormGroup>
                    <FormGroup className='flex justify-center form-group'>
                        <span>
                            <i className="ri-group-line"></i>
                        </span>
                        <div>
                            <h4>Max People</h4>
                            <input type="Number" placeholder='0' ref={maxPeopleRef}/>
                        </div>
                    </FormGroup>
                    <span className="text-3xl text-[#ee6e6e] text-center" type="submit" onClick={SearchHandler}>
                        <i className="ri-search-line"></i>
                    </span>
                </Form>
            </div>
    )
}
export default SearchBar