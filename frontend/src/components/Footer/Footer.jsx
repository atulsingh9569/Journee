import './footer.css'
import { Link} from 'react-router-dom'
import {Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/logo.png'

const quick__links = [
    {
        path :'/home',
        display:'Home'
    },
    {
        path :'/about',
        display:'About'
    },
    {
        path :'/tours',
        display:'Tours'
    },
]
const quick__links2 = [
    {
        path :'/gallery',
        display:'Gallery'
    },
    {
        path :'/login',
        display:'Login'
    },
    {
        path :'/register',
        display:'Register'
    },
]


const Footer = () => {
    return(
        <div className='mt-10 pl-8 pr-8'>
            <div className="footer-col1">
                <div className="logo w-1/4">
                    <Link to="/"><img src={logo} alt="logo" className='h-12 '/></Link>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, inventore?</p>
                    <div className="social__links flex justify-center gap-6 mt-4">
                        <span>
                            <Link to ="#"><i className="ri-youtube-line"></i></Link>
                        </span>
                        <span>
                            <Link to ="#"><i className="ri-github-fill"></i></Link>
                        </span>
                        <span>
                            <Link to ="#"><i className="ri-instagram-line"></i></Link>
                        </span>
                        <span>
                            <Link to ="#"><i className="ri-facebook-fill"></i></Link>
                        </span>
                    </div>
                </div>
                <div className="quick__links flex flex-col gap-4 mt-4 w-1/4">
                    <h3 className='text-xl font-semibold'>Quick Links</h3>
                    <ul className='flex flex-col gap-2'>
                        {quick__links.map((link, index) => {
                            return(
                                <li key={index}><Link to={link.path}>{link.display}</Link></li>
                                )
                                })
                                }
                        
                    </ul>
                </div>
                <div className="quick__links2 flex flex-col gap-4 mt-4 w-1/4">
                    <h3 className='text-xl font-semibold'>Discover</h3>
                    <ul className='flex flex-col gap-2'>
                        {quick__links2.map((link, index) => {
                            return(
                                <li key={index}><Link to={link.path}>{link.display}</Link></li>
                                )
                            })
                        }
                        
                    </ul>
                </div>
                <div className="contacts flex flex-col gap-4 mt-4 w-1/4">
                    <h3 className='text-xl font-semibold'>Contact</h3>
                    <p><i className="ri-map-pin-line"></i> <span>Address: </span> Lucknow, India</p>
                    <p><i class="ri-mail-line"></i> <span>Email: </span> aryankesharwani@gmail.com</p>
                    <p><i class="ri-phone-fill"></i> <span>Phone No: </span> +91 957939</p>
                </div>

            </div>
        </div>
    )
}
export default Footer;