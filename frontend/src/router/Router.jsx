import {Routes, Route, Navigate} from  'react-router-dom'
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import TourDetail from './../pages/TourDetail';
import Tour from './../pages/Tour'
import SearchResultList from '../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';




const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to = '/home'/>} />
            <Route path="/home" element= {<Home/>}/>
            <Route path="/login" element= {<Login/>}/>
            <Route path="/register" element= {<Register/>}/>
            <Route path="/thank-you" element= {<ThankYou/>}/>
            <Route path="/tours" element= {<Tour/>}/>
            <Route path="/tours/:id" element= {<TourDetail/>}/>
            <Route path="/tours/search" element= {<SearchResultList/>}/>
        </Routes>
    )
} 

export default Router;