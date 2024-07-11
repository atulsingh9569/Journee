import ServiceCard from "./ServiceCard";
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import { Col } from "reactstrap";

const servicesData = [
    {
        imgUrl : weatherImg,
        title: "Calculate weather",
        description : 'lorem ifh fih trhiiah  ghhgugbab' 
    },
    {
        imgUrl : guideImg,
        title: "Best tour guide",
        description : 'lorem ifh fih trah  ghhgugbab' 
    },
    {
        imgUrl : customizationImg,
        title: "Customisation image",
        description : 'lorem ifh fih trhiiah  ghhguab' 
    }
]


const ServiceList =  () => {
    return (
        <>
        {
            servicesData.map((item, index) => (
                <Col lg="3" key={index}>
                    <ServiceCard item={item}/>
                </Col>
            ))
        } 
        </>
    )
}
export default ServiceList;