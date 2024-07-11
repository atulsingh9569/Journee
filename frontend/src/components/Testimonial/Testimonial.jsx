import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed:2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }

    


    return (
        <Slider {...settings}>
            <div className="testimonial-item">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, illo illum architecto ut officia consequatur sed maiores ex vel sunt autem sit nisi.
                    <br />
                Eveniet fugit ut ear</p>
                <div className='flex items-center gap-5 mt-3>'>
                    <img src={ava01} className="w-20 h-16 rounded-2" alt=""/>
                    <div>
                        <h4 className='mb-0 mt-3'>John Doe</h4>
                        <p>Customer</p>  
                    </div>

                </div>
            </div>
            <div className="testimonial-item">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, illo illum architecto ut officia consequatur sed maiores ex vel sunt autem sit nisi.
                    <br />
                Eveniet fugit ut ear</p>
                <div className='flex items-center gap-5 mt-3>'>
                    <img src={ava02} className="w-20 h-16 rounded-2" alt=""/>
                    <div>
                        <h4 className='mb-0 mt-3'>John Doe</h4>
                        <p>Customer</p>  
                    </div>

                </div>
            </div>
            <div className="testimonial-item">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, illo illum architecto ut officia consequatur sed maiores ex vel sunt autem sit nisi.
                    <br />
                Eveniet fugit ut ear</p>
                <div className='flex items-center gap-5 mt-3>'>
                    <img src={ava03} className="w-20 h-16 rounded-2" alt=""/>
                    <div>
                        <h4 className='mb-0 mt-3'>John Doe</h4>
                        <p>Customer</p>  
                    </div>

                </div>
            </div>
        </Slider>
    )
}
export default Testimonial;