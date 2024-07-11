import CommonSection from "../shared/CommonSection";
import '../styles/tour.css'
import TourCard from '../shared/TourCard'
import SearchBar from "../shared/SearchBar";
import NewsLetter from '../shared/NewsLetter'
import { useState, useEffect } from "react";
import tourData from '../assets/data/tours'




const Tour = () => {

    const [pageCount,setPageCount] = useState(0);
    const [page,setPage] = useState(0);

    useEffect(() => {
        setPageCount(Math.ceil(5/4));
    }, [page])

    return(
        <>
            <CommonSection title={"All Tours"}/>
            <section>
                <SearchBar/>
            </section>
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        tourData?.map(tour => (
                            <div key={tour.id}>
                                {" "}
                                <TourCard tour={tour} />
                            </div>
                        ))
                    }

                    <div className="pagination flex items-center justify-center mt-6 gap-4">
                        {[...Array(pageCount).keys()].map(number => (
                            <span key={number} onClick={() => setPage(number)} className={page === number ? 'active__page' : ''}>

                                {number + 1}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
            <NewsLetter/>
        </>
    )
}
export default Tour;