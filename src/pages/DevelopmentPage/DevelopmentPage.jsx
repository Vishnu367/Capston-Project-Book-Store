import React, { useEffect } from 'react'
import './DevelopmentPage.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setNavColor } from '../../redux/action'

const DevelopmentPage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setNavColor(true))
  }, [])

  return (
    <div className='development-page-container mt-5 d-flex justify-content-center'>
        <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
            <h3 className='my-4'>This Page is in still Development</h3>
            <button onClick={() => navigate('/')} className='this-btn'>Return to Home Page<i className='fa-solid fa-arrow-right ms-2'></i></button>
        </div>
    </div>
  )
}

export default DevelopmentPage
