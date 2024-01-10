import './SearchComponent.css'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

const SearchComponent = () => {

   

  return (
    <div id='search-bar-container'>
        {/* <img id='search-bar-background' src={image}></img> */}
        <div id='search-bar' className='d-flex justify-content-center align-items-center'>
            <div  className='d-flex flex-column justify-content-center align-items-center'>
              <h1>Ohara</h1>
              <div className='mb-5'>The Library on One Piece knowledge</div>
              <h3 className='pb-2'>May I know What Book You Require!</h3>
              <SearchBar/>
            </div>
        </div>
    </div>
  )
}

export default SearchComponent 
