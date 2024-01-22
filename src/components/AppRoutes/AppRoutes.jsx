import React, { useEffect } from 'react'
import HomePage from '../../pages/HomePage/HomePage.jsx';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import AllBooks from '../../pages/AllBooks/AllBooks.jsx';
import Product from '../../pages/Product/Product.jsx';
import CheckOut from '../../pages/CheckOut/CheckOut.jsx'
import FavoritesPage from '../../pages/FavoritesPage/Favorites.jsx'
import DevelopmentPage from '../../pages/DevelopmentPage/DevelopmentPage.jsx'
import AppLayout from '../AppLayout/AppLayout.jsx';
import NavBar1 from '../NavBar/NavBar_1/NavBar1.jsx';
import Footer from '../Footer/Footer.jsx';
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage.jsx'
import Login from '../../pages/Login/Login.jsx'
import CreateAccount from '../../pages/Login/CreateAccount/CreateAccount.jsx';
import MyOrders from '../../pages/MyOrders/MyOrders.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';

const AppRoutes = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div>
        <AppLayout>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='allBooks/:id' element={<AllBooks/>} />
                <Route path='/allBooks/:id/product/:id' element={<Product />} />
                <Route path='/categories' element={<CategoriesPage />} />
                <Route path='/userId/:id/checkout' element={<CheckOut />} />
                <Route path='/userId/:id/favorites' element={<FavoritesPage />} />
                <Route path='/development-message' element={<DevelopmentPage />} />
                <Route path='/userId/:id/login' element={<Login />} /> 
                <Route path='/userId/:id/login/createAccount' element={<CreateAccount />} /> 
                <Route path='/userId/:id/userOrders' element={<MyOrders />} />
                <Route path='*' element={<PageNotFound/>} /> 
            </Routes>
        </AppLayout>
    </div>
  )
}

export default AppRoutes
