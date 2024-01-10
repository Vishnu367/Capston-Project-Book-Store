import React, {useEffect, useState} from 'react'
import '../ProductCta.css'
import { setBookQuantity, updateCartBookQuantity } from '../../../../redux/action'
import { useDispatch, useSelector } from 'react-redux'

const ProductQuantityInput = ({ id }) => {
    
    const {cartBookAndQunatity} = useSelector(data => data.bookStore)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const handleIncrement = () => {
        if(quantity < 5) {
            setQuantity(quantity + 1)
        } else {
            return
        }
    }

    const handleDecrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1) 
        } else {
            return
        }
    }

    useEffect(() => {
        dispatch(setBookQuantity(quantity))
        id && dispatch(updateCartBookQuantity({quantity: quantity, id: id}))
    }, [quantity])

  return (
    <div>
        <div className='d-flex justify-content-center align-items-center cart-quantity-container'>
            <button 
                className='quantity-btn'
                onClick={handleDecrement}
            >
                -
            </button>
            <input 
                className='cart-quantity-input' 
                value={quantity}
            ></input>
            <button 
                className='quantity-btn'
                onClick={handleIncrement}
            >
                +
            </button>
        </div>
    </div>
  )
}

export default ProductQuantityInput
