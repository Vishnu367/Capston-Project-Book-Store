import React, { useEffect } from 'react'
import SearchComponent from '../SearchComponent/SearchComponent'
import { useDispatch, useSelector } from 'react-redux'
import LoadingComponent from '../LoadingComponent/LoadingComponent'
import Footer from '../Footer/Footer'
import Carousel from '../Carousel/Carousel'
import CategoriesComponent from '../CategoriesComponent/Categories'
import { fetchBooks } from '../../redux/action'
import { all } from 'axios'
import Categories from '../CategoriesComponent/Categories'
import AllBooks from '../../pages/AllBooks/AllBooks'
import NavBar2 from '../NavBar/NavBar_2/NavBar2'

const HomePageLayout = (props) => {
  const bookStore = props.value
  // console.log(bookStore)

  return (
    <div>
         {
          bookStore.loading ? <LoadingComponent/> 
          : 
          <div>
            <SearchComponent/>
            <br></br>
            <Carousel value={{title: 'Featured Books:', data: bookStore.allBooks}}/>
            <br></br>
            <Categories/>
            <br></br>
            <Carousel value={{title: 'Best Selling:', data: [...bookStore.allBooks].reverse()}}/>
          </div>
        } 
    </div>
  )
}

export default HomePageLayout
