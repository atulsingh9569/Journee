import './commonsection.css'
import { Container, Row, Col } from 'reactstrap';


const CommonSection = ({title}) => {
    return (
        <section className='common-section'>
            <Container>
                <Row>
                    <Col lg={12} md={6} sm={12} xs={12}>
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CommonSection;