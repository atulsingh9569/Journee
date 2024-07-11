import TourCard from '../../shared/TourCard.jsx';
import tourdata from '../../assets/data/tours.js';
import useFetch from '../../hooks/useFetch.js';
import { BASE_URL } from '../../utils/config.js';

const FeaturedTourList = () => {

    const {data: featuredTours} = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)

    console.log(featuredTours);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                featuredTours?.map(tour => (
                    <div key={tour.id} className="mb-4">
                        <TourCard tour={tour} />
                    </div>
                ))
            }
        </div>
    );
};

export default FeaturedTourList;
