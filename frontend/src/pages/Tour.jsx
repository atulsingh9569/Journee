import CommonSection from "../shared/CommonSection";
import '../styles/tour.css'
import TourCard from '../shared/TourCard'
import SearchBar from "../shared/SearchBar";
import NewsLetter from '../shared/NewsLetter'
import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/config";
import useFetch from '../hooks/useFetch.js'

const Tour = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
    const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getToursCount`);

    useEffect(() => {
        setPageCount(Math.ceil(tourCount / 8));
    }, [page, tourCount]);

    return (
        <>
            <CommonSection title={"All Tours"} />
            <section>
                <SearchBar />
            </section>
            <section>
                {loading && <h1 className="text-center">Loading...........</h1>}
                {error && <h1 className="text-center">Error while fetching...........</h1>}
                {!loading && !error &&
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {tours?.map(tour => (
                                <div key={tour._id}>
                                    <TourCard tour={tour} />
                                </div>
                            ))}
                        </div>
                        <div className="pagination flex items-center justify-center mt-6 gap-4">
                            {[...Array(pageCount).keys()].map(number => (
                                <span key={number} onClick={() => setPage(number)} className={page === number ? 'active__page' : ''}>
                                    {number + 1}
                                </span>
                            ))}
                        </div>
                    </>
                }
            </section>
            <NewsLetter />
        </>
    );
}

export default Tour;
