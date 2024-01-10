import React, { useEffect } from 'react'
import './Favorites.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFavoritesBook, setNavColor } from '../../redux/action'
import { useNavigate } from 'react-router-dom'

const Favorites = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const bookStore = useSelector(data => data.bookStore)
    const { favoritesList } = bookStore

    const handleRemoveFavoritesBook = (id) => {
        dispatch(removeFavoritesBook(id))
    }

    useEffect(() => {
        dispatch(setNavColor(true))
    }, [])

  return (
    <div className='cart-container'>
        <div className='this-container'>
            <h1 className='text-center mb-4'>Your Favorites!</h1>
            { favoritesList.length !== 0 ?
                <div>
                <ul className='cart-list ps-0'>
                    {
                        favoritesList && favoritesList.map(item => {
                            return <li className='cart-item d-flex gap-4 mb-4'>
                                        <img className='cart-thumbnail' src={item.volumeInfo.imageLinks.thumbnail} alt='book-image'/>
                                        <div className='title-quantity flex-grow-1'>
                                            <h4 className='cart-title'>{item.volumeInfo.title}</h4>
                                        </div>
                                        <div className='me-5 d-flex flex-column justify-content-evenly align-items-end gap-2'>
                                            <div className='d-flex justify-content-end align-items-end gap-2'>
                                                { item.saleInfo.listPrice.amount!== item.saleInfo.listPrice.amount && <h4><s className='text-danger'>{item.saleInfo.retailPrice.amount}</s></h4> }
                                                <h2>{item.saleInfo.listPrice.amount}</h2>
                                                <h5>{item.saleInfo.listPrice.currencyCode}</h5>
                                            </div>
                                            <button 
                                                className='this-btn'
                                                onClick={() => handleRemoveFavoritesBook(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                        })
                    }
                </ul>
            </div>
            :
            <div className='d-flex flex-column justify-content-center align-items-center gap-4 mt-5'>
                <div className='fs-5 text-center'>Looks like your Favorites is Empty!</div>
                <button 
                    className='this-btn'
                    onClick={() => navigate('/')}
                >
                    Shop Now <i class="fa-solid fa-arrow-right"></i
                ></button>
            </div>}
        </div>
    </div>
  )
}

export default Favorites
