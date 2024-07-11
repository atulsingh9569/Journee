import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import {Link} from 'react-router-dom'
import '../styles/register.css'
import { useState } from "react";
import userImg from '../assets/images/user.png'
import registerImg from '../assets/images/register.png'
const Register = () => {
    const [credentials, setCredentials] = useState({
        fullName:undefined,
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
                    <div className="register-form">
                        <div className="register-form-inner flex items-center justify-center">
                            <div className="register__img">
                                <img src={registerImg} alt="register" className="register-img" />
                            </div>
                            <div className="register__form">
                                <div className="user">
                                    <img src={userImg} alt="user" className="user-img" />
                                </div>
                                <h2>Register</h2>
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup className="">
                                        <input type="username" placeholder="username" required id="userName" onChange={handleChange}/>
                                    </FormGroup>
                                    <FormGroup className="">
                                        <input type="email" placeholder="email" required id="email" onChange={handleChange}/>
                                    </FormGroup>
                                    <FormGroup className="">
                                        <input type="password" placeholder="password" required id="password" onChange={handleChange}/>
                                    </FormGroup>
                                    <Button className="btn secondary__btnbg">Create Account</Button>
                                </Form>
                                <p>Already have an acoount ? <Link to='/login'>Login</Link></p>

                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}
export default Register;