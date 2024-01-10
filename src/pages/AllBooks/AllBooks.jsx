import React, { useEffect } from 'react'
import './AllBooks.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setNavColor, userSelectedBook } from '../../redux/action'
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent'

const AllBooks = (props) => {

    const  {viewAll}  = useSelector(data => data.bookStore)

    const bookStore = useSelector(data => data.bookStore)
    const { allBooks, loading } = bookStore

    const books = allBooks ? allBooks : viewAll

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const params = useParams()
    const title = params.id

    const bookObject = (book) => {
        dispatch(userSelectedBook(book))
        navigate(`product/${book.id}`)
    }

    useEffect(() => {
        dispatch(setNavColor(true))
    }, [])

  return (
    <div className='all-books-container'>
        <div className=''>
            <h1 className='mb-5'>{title}</h1>
            {
                loading ? <LoadingComponent/>
                :
                <ul className='all-books-list'>
                {
                    books && books.map(element => {
                        return <li 
                                    className='card-item all-books-card-item col mb-5'
                                    onClick={() => bookObject(element)}
                                    >
                                    <img 
                                        className='card-item-thumbnail' 
                                        src={element.volumeInfo.imageLinks && element.volumeInfo.imageLinks.thumbnail} 
                                        alt='book-image'/>
                                    <div className='card-details'>
                                        <div className='card-item-title'>{element.volumeInfo.title}</div>
                                        <div className='card-item-price'>
                                            <b>
                                                {element.saleInfo.listPrice && element.saleInfo.listPrice?.amount}
                                            </b>
                                            <span className='card-item-original-price'>
                                                {element.saleInfo.listPrice?.amount === element.saleInfo.retailPrice.amount 
                                                    ? null : element.saleInfo.retailPrice.amount 
                                                }
                                            </span>
                                            {element.saleInfo.listPrice && element.saleInfo.listPrice?.currencyCode}
                                        </div>
                                    </div>
                                </li>
                    })
                }
            </ul>
            }
        </div>
    </div>
  )
}

export default AllBooks
