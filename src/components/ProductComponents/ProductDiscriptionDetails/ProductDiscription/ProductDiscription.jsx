import React from 'react'
import './ProductDiscription.css'
import * as DOMPurify from 'dompurify'

const ProductDiscription = (props) => {

    const volumeInfo = props.value
    const { description } = volumeInfo

  return (
    <div>
        <div 
            className='discription-container discription'
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description)
            }}
        >
        </div>
    </div>
  )
}

export default ProductDiscription
