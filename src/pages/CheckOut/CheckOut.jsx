import { useNavigate } from 'react-router-dom'
import ProductQuantityInput from '../../components/ProductComponents/ProductCta/ProductQuantityInput/ProductQuantityInput'
import { purchased, removeCartBook, setNavColor, purchasedBooks } from '../../redux/action'
import './CheckOut.css'
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

const CheckOut = () => {

    const { cartList } = useSelector(data => data.bookStore)
    const [isPurchased, setIsPurchased] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const totalPrice = cartList && cartList.reduce((accumulator, { quantity, book }) => {
        const price = book.saleInfo.listPrice.amount
        return accumulator + quantity * price
    }, 0)

    const handleCartBooks = (id) => {
        dispatch(removeCartBook(id))
    }

    useEffect(() => {
        dispatch(setNavColor(true))
    }, [])

    const handlePurchase =() => {
        const purchaseInfo = cartList.map(item => ({
                                
                                    books: item,
                                    dateTime: new Date().toLocaleString()
                                
                            }))
        
        dispatch(purchasedBooks(purchaseInfo))

        dispatch(purchased())
        setIsPurchased(true)

        const timeout = setTimeout(() => {
            setIsPurchased(false)
            clearTimeout(timeout)
        }, 3000)
    }

  return (
    <div className='cart-container'>
        <div className='this-container'>
            <h1 className='text-center mb-4'>Your Cart!</h1>
            { cartList.length !== 0 ? <div>
                <ul className='cart-list ps-0'>
                    {
                        cartList && cartList.map(element => {
                            return <li className='cart-item d-flex gap-4 mb-4'>
                                        <img className='cart-thumbnail' src={element.book.volumeInfo.imageLinks.thumbnail} alt='book-image'/>
                                        <div className='title-quantity flex-grow-1'>
                                            <h4 className='cart-title'>{element.book.volumeInfo.title}</h4>
                                            <ProductQuantityInput id={element.book.id}/>
                                        </div>
                                        <div className='me-5 d-flex flex-column justify-content-evenly align-items-end gap-2'>
                                            <div className='d-flex justify-content-end align-items-end gap-2'>
                                                { element.book.saleInfo.retailPrice.amount !== element.book.saleInfo.listPrice.amount && <h4><s className='text-danger'>{element.book.saleInfo.retailPrice.amount}</s></h4>}
                                                <h2>{element.book.saleInfo.listPrice.amount}</h2>
                                                <h5>{element.book.saleInfo.listPrice.currencyCode}</h5>
                                            </div>
                                            <button 
                                                onClick={() => handleCartBooks(element.book.id)}
                                                className='this-btn'
                                            >
                                                Remove</button>
                                        </div>
                                    </li>
                        })
                    }
                </ul>
                <div className='cart-cta px-5 d-flex justify-content-between align-items-center'>
                    <div className='fs-4 mb-2'>Total Amount: <b>{totalPrice}</b></div>
                    <button onClick={handlePurchase} className='this-btn this-btn-primary purchase-btn'>Purchase</button>
                </div>
                
            </div>
            
            :
            <div className='d-flex flex-column justify-content-center align-items-center gap-4 mt-5'>
                <div className='fs-5 text-center'>Looks like your Cart is Empty!</div>
                <button 
                    className='this-btn'
                    onClick={() => navigate('/')}
                >
                    Shop Now <i class="fa-solid fa-arrow-right"></i>
                </button>
                {
                    isPurchased && <div class="alert alert-success alert-pop-up" role="alert">
                            <i class="fa-solid fa-circle-check me-2"></i>Succesfully Purchased
                          </div>
                }
            </div> }
        </div>
    </div>
  )
}

export default CheckOut
