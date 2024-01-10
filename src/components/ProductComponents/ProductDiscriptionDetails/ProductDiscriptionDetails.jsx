import React, { useState } from 'react'
import './ProductDiscriptionDetails.css'
import { BrowserRouter as Router, NavLink, Outlet, Route, Routes, Switch } from 'react-router-dom'
import ProductDiscription from './ProductDiscription/ProductDiscription'
import ProductAdditionalInformaton from './ProductAdditionalInformation/ProductAdditionalInformaton'

const ProductDiscriptionDetails = (props) => {

    const bookObject = props.value
    const { volumeInfo } = bookObject
    const [toggleClass, setToggleClass] = useState(true)

    const handleToggleNavClass = () => {
        setToggleClass(!toggleClass)
    }

    // console.log(bookObject)

  return (
    <div className='product-discription-details'>
        <ul className=' d-flex justify-content-center align-items-center'>
            <li 
                className={toggleClass ? 'me-3 underline this-nav-link' : 'me-3 this-nav-link'}
                onClick={handleToggleNavClass}
            >
                Discription
            </li>
            <li 
                className={!toggleClass ? 'underline this-nav-link' : 'this-nav-link'}
                onClick={handleToggleNavClass}
            >
                Additional Information
            </li>
        </ul>
        {
            toggleClass 
            ? 
            <ProductDiscription value={volumeInfo}/> 
            : 
            <ProductAdditionalInformaton value={bookObject}/>
        }
    </div>
  )
}

export default ProductDiscriptionDetails
