import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import {Link, useNavigate} from 'react-router-dom'
import '../styles/login.css'
import { useState, useContext } from "react";
import userImg from '../assets/images/user.png'
import loginImg from '../assets/images/login.png'
import { AuthContext} from "../context/AuthContext";
import { BASE_URL } from "../utils/config";


const Login = () => {

    const [credentials, setCredentials] = useState({
        email:undefined,
        password:undefined
    })
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: 'LOGIN_START'})
        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: "post",
                headers: {
                    "content-type": "application/json",
                },
                credentials:"include",
                body: JSON.stringify(credentials),
            });
            const result = await res.json();
            if(!res.ok) alert(result.message);

            dispatch({type:'LOGIN_SUCCESS', payload : result.data});
            navigate('/');
        } catch (error) {
            dispatch({type:'LOGIN_FAILURE', payload: error.message})
        }

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