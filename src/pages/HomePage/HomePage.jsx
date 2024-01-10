import React, { useEffect } from 'react'
import './HomePage.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, inLoginPage, setNavColor } from '../../redux/action'
import NavBar_1 from '../../components/NavBar/NavBar_1/NavBar1'
import NavBar_2 from '../../components/NavBar/NavBar_2/NavBar2'
import HomePageLayout from '../../components/HomePageLayout/HomePageLayout'
import Footer from '../../components/Footer/Footer'
import Layout from '../../components/AppLayout/AppLayout'

const HomePage = () => {

  const bookStore = useSelector(data => data.bookStore.allBooks && data.bookStore)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
    dispatch(setNavColor(false))
    dispatch(inLoginPage(false))
  }, [])


  return (
    <div>
        { bookStore && <HomePageLayout value={bookStore}/> }
    </div>
  )
}

export default HomePage