import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import {Link} from 'react-router-dom'
import '../styles/login.css'
import { useState } from "react";
import userImg from '../assets/images/user.png'
import loginImg from '../assets/images/login.png'
const Login = () => {

    const [credentials, setCredentials] = useState({
        email:undefined,
        password:undefined
    })

    const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log(credentials)

    }

    return(
        <section className="pt-6">
            <Container>
                <Row className="">
                    <div className="login-form">
                        <div className="login-form-inner flex items-center justify-center">
                            <div className="login__img">
                                <img src={loginImg} alt="login" className="login-img" />
                            </div>
                            <div className="login__form">
                                <div className="user">
                                    <img src={userImg} alt="user" className="user-img" />
                                </div>
                                <h2>Login</h2>
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup className="">
                                        <input type="email" placeholder="email" required id="email" onChange={handleChange}/>
                                    </FormGroup>
                                    <FormGroup className="">
                                        <input type="password" placeholder="password" required id="password" onChange={handleChange}/>
                                    </FormGroup>
                                    <Button className="btn secondary__btnbg">Login</Button>
                                </Form>
                                <p>Don't have an acoount ? <Link to='/register'>Register</Link></p>

                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}
export default Login;