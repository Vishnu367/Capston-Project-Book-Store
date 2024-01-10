import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import NavBar1 from '../NavBar/NavBar_1/NavBar1'
import { useDispatch, useSelector } from 'react-redux'
import NavBar2 from '../NavBar/NavBar_2/NavBar2'
import { inLoginPage } from '../../redux/action'


const AppLayout = (props) => {

  const bookStore = useSelector(data => data.bookStore)
  const { isNavColored, isInLoginPage } = bookStore

  const dispatch = useDispatch()
  
  const { children } = props

  useEffect(() => {
    dispatch(inLoginPage(true))
  }, [])
    
  return (
    <div>
       {
        isInLoginPage ? (children)
        :
         <div>
            {isNavColored ? <NavBar2/> : <NavBar1/>}
              {children}
            <Footer/>
         </div>
       }
    </div>
  )
}

export default AppLayout
