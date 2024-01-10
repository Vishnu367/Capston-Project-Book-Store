import { Link, NavLink } from 'react-router-dom'
import '../NavBar.css'

import React from 'react'
import { useSelector } from 'react-redux'

const NavBar = () => {

  const bookStore = useSelector(data => data.bookStore)
  const { cartList } = bookStore

  return (
    <div>
        <nav id='nav-bar-1'>
          <div className='d-flex justify-content-between align-tems-center this-container'>
            <div className='d-flex'>
              <h2 className='brand'>
                Ohara
              </h2>
              <ul className='d-flex mt-2 ps-2'>
                <li>
                  <NavLink to='/' className='this-nav-link'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/categories' className='this-nav-link'>Categories</NavLink>
                </li>
              </ul>
            </div>
            <div className='d-flex'>
              <ul className='nav-cart-user d-flex mt-2 gap-4'>
                <li>
                  <NavLink to='/userId/:id/checkout' className='this-nav-link position-relative'><i class="me-2 fa-solid fa-bag-shopping"></i>Cart
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartList.length}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <div class="dropdown">
                    <button class="this-nav-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="me-2 fa-regular fa-user"></i>User  
                    </button>
                    <ul class="dropdown-menu p-3">
                      <li><NavLink to='/userId/:id/login' class="dropdown-item">My Account</NavLink></li>
                      <li><NavLink to='/userId/:id/favorites' class="dropdown-item">My Whistlist</NavLink></li>
                      <li><NavLink to='/userId/:id/userOrders' class="dropdown-item">My Orders</NavLink></li>
                      <li><NavLink class="dropdown-item">Logout</NavLink></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavBar
