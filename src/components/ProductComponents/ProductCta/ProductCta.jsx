import React, { useState, useMemo } from 'react'
import './ProductCta.css'
import ProductQuantityInput from './ProductQuantityInput/ProductQuantityInput'
import { useDispatch, useSelector } from 'react-redux'
import { setCartBookAndQuantity, addToFavorites } from '../../../redux/action'
import { useNavigate } from 'react-router-dom'

const ProductCta = ({ value }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { bookQuantity, cartBookAndQunatity, favoritesList }  = useSelector(data => data.bookStore)
    const [isBookAddedToCart, setBookAddedToCart] = useState(false)
    const [message, setMessage] = useState('')

    const messageTimeout = () => {
        setBookAddedToCart(true)
        const timeout = setTimeout(() => {
            setBookAddedToCart(false)
            clearTimeout(timeout)
        }, 2500)
    }

    const addToCart = () => {
        dispatch(setCartBookAndQuantity({quantity: bookQuantity, book: value}))
        setMessage('Cart')

        messageTimeout()
    }

    const handleFavorites = () => {
        dispatch(addToFavorites(value))
        setMessage('Favorites')

        messageTimeout()
    }

  return (
    <div className='d-flex gap-3 justify-content-between align-items-center'>
        <ProductQuantityInput/>
        <button 
            className='product-cta-cart-btn this-btn this-btn-primary'
            onClick={addToCart}
        >
            Add to Cart</button>
        <i 
            class="fa-regular fa-heart product-cta-cart-favourites"
            onClick={handleFavorites}    
        ></i>
        { 
            isBookAddedToCart && <div class="alert alert-success alert-pop-up" role="alert">
                                    <i class="fa-solid fa-circle-check me-2"></i>Book Added to {message}
                                </div>
        }
    </div>
  )
}

export default ProductCta
