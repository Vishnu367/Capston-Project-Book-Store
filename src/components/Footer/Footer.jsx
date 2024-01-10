import React, { useState } from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer d-flex align-items-end'>
        <div className='footer-container bg-dark m-0'>
            <div className='this-container'>
                <div className='footer-links-container'>
                    <ul className='p-0'>
                        <li>
                            <NavLink to='/development-message' className='footer-link'>Gift Cards</NavLink>
                        </li>
                        <li>
                            <NavLink className='footer-link'>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/development-message' className='footer-link'>Journal</NavLink>
                        </li>
                        <li>
                            <NavLink to='/development-message' className='footer-link'>Contact</NavLink>
                        </li>
                    </ul>
                    <ul className='p-0'>
                        <li>
                            <NavLink to='/development-message' className='footer-link'>FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink to='/development-message' className='footer-link'>Returns</NavLink>
                        </li>
                        <li>
                            <NavLink to='/userId/:id/userOrders' className='footer-link'>Shipping</NavLink>
                        </li>
                        <li>
                            <NavLink to='/development-message' className='footer-link'>Privacy Policy</NavLink>
                        </li>
                    </ul>
                    <ul className='p-0'>
                        <li>
                            <a className='footer-link' target='blank' href='https://www.facebook.com/'>
                                <i class="me-2 fa-brands fa-facebook"></i>Facebook
                            </a></li>
                        <li>
                            <a className='footer-link' target='blank' href='https://twitter.com/home'>
                                <i class="me-2 fa-brands fa-twitter"></i>Twitter
                            </a></li>
                        <li>
                            <a className='footer-link' target='blank' href='https://in.pinterest.com/'>
                                <i class="me-2 fa-brands fa-pinterest"></i>Pinterest
                            </a></li>
                        <li>
                            <a className='footer-link' target='blank' href='https://www.instagram.com/'>
                                <i class="me-2 fa-brands fa-instagram"></i>Instagram
                            </a></li>
                    </ul>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae commodi ullam id possimus optio voluptates aspernatur magni? Dolor animi optio repellat porro, tempore voluptates?</p>
                </div>
                <div className='text-secondary'>Copyright © 2023 Ohara</div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer
