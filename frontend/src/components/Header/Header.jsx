import './header.css'
import {Container, Row, Button} from "reactstrap";
import {NavLink, Link} from "react-router-dom";
import React, { useEffect } from "react";
import logo from '../../assets/images/logo.png'
import {useRef} from 'react';



const nav__links = [
    {
        path :'/home',
        display:'Home'
    },
    {
        path :'/about',
        display:'About'
    },
    {
        path :'/tour',
        display:'Tour'
    },
]

const Header = () => {

    const headerRef = useRef(null);
    const sticktyHeaderFunc = () => {
        window.addEventListener('scroll', ()=> {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header')
            }else{
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        sticktyHeaderFunc()
        return window.removeEventListener('scroll', sticktyHeaderFunc)
    })

    return(
        <div className='header' ref={headerRef}>
            
            <div className='sticky__header'>
                <div className="flex items-center justify-around">
                    <div className="logo">
                        <img src= {logo} className='w-full h-16'alt="logo image"/>
                    </div>
                    <div className="navigation">
                        <ul className="flex gap-4">
                            {
                                nav__links.map((item, index) => (
                                    <li className="nav__item" key = {index}>
                                        <NavLink to ={item.path} className={navClass =>navClass.isActive ? 'active__link' : '' } >{item.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="nav__right flex items-center">
                        <div className="nav__btns flex item-center gap-4">
                            <Button className='btn secondary__btn'>
                                <Link to="/login">Login</Link>
                            </Button>
                            <Button className='btn primary__btn'>
                                <Link to="/register">Register</Link>
                            </Button>
                            <span>
                                <i className="ri-menu-line mobile__menu"></i>
                            </span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;