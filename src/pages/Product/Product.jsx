import React, { useState, useEffect, useMemo } from 'react'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetails from '../../components/ProductComponents/ProductDetails/ProductDetails'
import ProductCta from '../../components/ProductComponents/ProductCta/ProductCta'
import ProductCategories from '../../components/ProductComponents/ProductCategories/ProductCategories'
import { NavLink, Outlet, Routes, Route } from 'react-router-dom'
import ProductDiscriptionDetails from '../../components/ProductComponents/ProductDiscriptionDetails/ProductDiscriptionDetails'
import ProductDiscription from '../../components/ProductComponents/ProductDiscriptionDetails/ProductDiscription/ProductDiscription'
import Carousel from '../../components/Carousel/Carousel'
import { setNavColor } from '../../redux/action'

const Product = (props) => {

    const bookStore = useSelector(data => data.bookStore && data.bookStore)
    const { allBooks, userSelectedBook, cartBookAndQunatity } = bookStore && bookStore

    const dispatch = useDispatch()
    const { volumeInfo } = userSelectedBook && userSelectedBook

    const carouselData = {
        title: 'You May also Like:',
        data: allBooks
    }

    useEffect(() => {
        dispatch(setNavColor(true))
    }, [])

  return (
    <div className='product-container'>
        <div className='this-container'>
            <div className='product-data-container'>
                <img className='product-thumbnail' src={volumeInfo.imageLinks.thumbnail}></img>
                <div className='product-details'>
                    <ProductDetails value={userSelectedBook}/>
                    <hr></hr>
                    <ProductCta value={userSelectedBook}/>
                    <hr></hr>
                    <ProductCategories value={volumeInfo}/>
                </div>
            </div> 
            <ProductDiscriptionDetails value={userSelectedBook}/>
            <br></br>
            <hr></hr>
            <br></br>
            <Carousel value={carouselData}/>
            <br></br>
            <br></br>
        </div>
        
    </div>
  )
}

export default Product
