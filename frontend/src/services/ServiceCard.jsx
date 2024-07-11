import './serviceCard.css'


const ServiceCard = ({item}) => {
    const {imgUrl, title, description} = item;
    return (
        <div className="service__item">
            <div>
                <img className="service__img" src={imgUrl} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard;