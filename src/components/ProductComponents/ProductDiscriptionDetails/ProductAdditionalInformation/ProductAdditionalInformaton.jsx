import React from 'react'
import './ProductAdditionalInformaton.css'

const ProductAdditionalInformaton = (props) => {

  const bookObject = props.value && props.value
  const { saleInfo, volumeInfo, accessInfo } = bookObject

  return (
    <div className='ms-5 discription-container d-flex gap-5'>
        <h5>
          <div className='mb-3'>Book Volume:</div>
          <div className='mb-3'>Publisher:</div>
          <div className='mb-3'>Pusblished Date:</div>
          <div className='mb-3'>Country:</div>
          <div className='mb-3'>Categories:</div>
          <div className='mb-3'>Language:</div>
          <div className='mb-3'>Print Type</div>
        </h5>
        <div>
          <div className='mb-3'>{volumeInfo.pageCount}</div>
          <div className='mb-3'>{volumeInfo.publisher}</div>
          <div className='mb-3'>{volumeInfo.publishedDate}</div>
          <div className='mb-3'>{accessInfo.country}</div>
          <div className='mb-3'>
            {
            volumeInfo.categories && volumeInfo.categories.map(categorie => 
              <span className='me-2'>{categorie}</span>
              )
            }
          </div>
          <div className='mb-3'>{volumeInfo.language}</div>
          <div className='mb-3'>{volumeInfo.printType}</div>
        </div>
    </div>
  )
}

export default ProductAdditionalInformaton
