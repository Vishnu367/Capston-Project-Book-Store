import React, { useEffect, useState } from 'react'
import './MyOrders.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchById } from '../../redux/action';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {

    const bookStore = useSelector(data => data.bookStore)
    const [purchasedBooks, setPurchasedBooks] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const orderHistory = bookStore.orderHistory

  return (
    <div className='my-orders-container'>
        <div className='this-container'>
            <h1 className='text-center'>Your Orders!</h1>
            {
                orderHistory.length !== 0 ? <div>
                <ul className='hytory-list'>
                    {
                        orderHistory.map(item => {
                            return item.map(element => {
                                console.log(element.books)
                                return <li className='order-card'>
                                            <div className='d-flex gap-3'>
                                                <img src={element.books.book.volumeInfo.imageLinks.thumbnail}/>
                                                <div>
                                                    <h3>{element.books.book.volumeInfo.title}</h3>
                                                    <div>Quantity: <b>{element.books.quantity}</b></div>
                                                </div>
                                            </div>
                                            <div className='text-end'>{element.dateTime}</div>
                                        </li>
                           })
                        })
                    }
                </ul>
            </div>
            :
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h5 className='text-center mt-3'>No Order History</h5>
                <button onClick={() => navigate('/')} className='this-btn'>Continue Shopping</button>
            </div>
            }
        
        </div>
    </div>
  )
}

export default MyOrders

