import React,{ useEffect, useState } from 'react'
import './CategoriesPage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import CategoriesComponent from '../../components/CategoriesComponent/Categories'
import { useDispatch } from 'react-redux'
import { setNavColor } from '../../redux/action'

const Categories = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setNavColor(false))
  }, [])

  return (
    <div className='categories-page-container'>
      <div className='position-relative z-2'>
        <br></br>
        <CategoriesComponent/>
        <hr className='text-white'></hr>
        <div className='categorie-search-container mt-5 d-flex flex-column align-items-center'>
            <h2 className='text-white mb-4'>Search Your Own Categorie:</h2>
            <SearchBar/>
        </div>
      </div>
    </div>
  )
}

export default Categories
