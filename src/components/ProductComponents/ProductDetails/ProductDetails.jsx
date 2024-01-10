import React from 'react'
import './ProductDetails.css'

const ProductDetails = (props) => {
    
    const { volumeInfo, saleInfo } = props.value && props.value
    const {title,subtitle, language, averageRating, authors} = volumeInfo
    const {listPrice, retailPrice} = saleInfo

    const rattingStars = (avgRating) => {
        const starList = []
        for (let i = 1; i <= 5; i++) {
            if ( i <= avgRating) {
                starList.push(<i className="fa-solid fa-star this-star"></i>)
            } else {
                starList.push(<i className="fa-regular fa-star this-star"></i>)
            }
        }
        return starList
    } 

  return (
    <div>
        <h2 className='mb-1'>{title}</h2>
        {subtitle && <p className='mb-1'>{subtitle}</p>}
        {language && <p className='mb-1'>Language: {language}</p>}
        {averageRating && rattingStars(averageRating)}
        {listPrice.amount && 
            <div className='d-flex align-items-end gap-2 my-2'>
                {listPrice.amount === retailPrice.amount ? null : <h4><s className='text-danger'>{retailPrice.amount}</s></h4>}
                <h2>{listPrice.amount}</h2>
                <h5>{listPrice.currencyCode}</h5>
            </div>}
        {authors && <h5 className='d-inline'>Authors: </h5>}
        {authors && authors.map(author => 
                <p
                    className='me-2 d-inline text-decoration-underline'
                >
                    {author}
                </p>
            )}
    </div>
  )
}

export default ProductDetails
