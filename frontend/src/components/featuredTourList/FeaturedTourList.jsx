import TourCard from '../../shared/TourCard.jsx';
import useFetch from '../../hooks/useFetch.js';
import { BASE_URL } from '../../utils/config.js';

const FeaturedTourList = () => {

    const {data: getFeaturedTours, loading, error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                loading && <h4> Loading................</h4>
            }
            {
                error && <h4> Error</h4>
            }
            {!loading && !error &&
                getFeaturedTours?.map(tour => (
                    <div key={tour._id} className="mb-4">
                        <TourCard tour={tour} />
                    </div>
                ))
            }
        </div>
    );
};

export default FeaturedTourList;
