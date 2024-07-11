import { Container, Col, Row } from "reactstrap";
import './NewsLetter.css'
import maleTourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
    return (
        <Container className="mt-16 bg-blue-400 ">
            <Row>
                <Col lg="6" className="w-1/2 p-4">
                    <h1 className="text-4xl font-medium mb-4">Subscribe to our newsletter</h1>
                    <form className="flex gap-8 mb-4 bg-white p-2 justify-between">
                        <input type="email" className=" w-80" placeholder="Email Address" />
                        <button type="submit" className="btn subscribe__btn">Subscribe</button>
                    </form>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error dolorum deserunt ut sunt quo blanditiis, ullam ea numquam reprehenderit corrupti </p>
                </Col>
                <Col lg="6" className="w-1/2">
                    <img src={maleTourist} alt="" />
                </Col>
            </Row>
        </Container>
    )
}
export default NewsLetter;