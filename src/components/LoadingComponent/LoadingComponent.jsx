import React from 'react'

const LoadingComponent = () => {
  return (
    <div className=''>
        <div class="vh-100 d-flex justify-content-center align-items-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
    </div>
  )
}

export default LoadingComponent
