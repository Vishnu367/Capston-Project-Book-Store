import React from 'react'
import './ProductCategories.css'

const ProductCategories = (props) => {

    const { categories } = props.value && props.value

  return (
    <div>
        {categories && <h4 className='mb-3'>Categories:</h4>}
        {
            categories && categories.map(categorie => {
            return <div className='chip'>
                    {categorie}
                    </div>
            })
        }
    </div>
  )
}

export default ProductCategories
