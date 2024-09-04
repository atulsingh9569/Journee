import React, { useState } from 'react'
import CommonSection from './../shared/CommonSection'
import {useLocation} from 'react-router-dom'
import TourCard from '../shared/TourCard'
import NewsLetter from '../shared/NewsLetter'

const SearchResultList = () => {
    const location = useLocation()
    const [data] = useState(location.state)
    return (
        <>
            <CommonSection title="Tour Search Result" />
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        data.length === '0' ? (<h1 className='text-center'>No tour found</h1>) : data?.map(tour => (
                            <div key={tour._id} className="mb-4">
                                <TourCard tour = {tour}/>
                            </div>
                        ))
                    }
                </div>
            </section>
            <NewsLetter />
        </>
  )
}

export default SearchResultList;