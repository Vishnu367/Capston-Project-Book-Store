import React, { useEffect } from 'react'
import './Login.css'
import { useFormik } from 'formik'
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import CreateAccount from './CreateAccount/CreateAccount'
import { useDispatch } from 'react-redux'
import { inLoginPage } from '../../redux/action'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(inLoginPage(true))
    }, [])

    const formikData = useFormik({
        initialValues: {
            userEmail: '',
            userPassword: '',
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

  return (
    <div className='login-component p-3'>
        <div className='login-image d-flex flex-column justify-content-center align-items-center text-white'>
            <h1>Welcomme to Ohara!</h1>
            <h5>The Library on One Piece knowledge.</h5>
        </div>
        <div className='login-container'>
            <h1 className='mb-2'>Login</h1>
            <p className='mb-4'>Login with your Email nad Password</p>
            <form
                onSubmit={formikData.handleSubmit}
                className='d-flex flex-column'
            >
                <input 
                    required
                    className='user-input'
                    name='userEmail' 
                    type='email'
                    placeholder='Enter Email'
                    value={formikData.values.userEmail}
                    onChange={formikData.handleChange}
                ></input>
                <input 
                    required
                    className='user-input'
                    name='userPassword' 
                    type='password'
                    placeholder='Enter Password'
                    value={formikData.values.userPassword}
                    onChange={formikData.handleChange}
                ></input>
                <div className='d-flex justify-content-between'>
                    <div>
                        <input 
                            type='checkbox' className='me-2'></input>
                        Remeber Me
                    </div>
                    <NavLink>Forget Password</NavLink>
                </div>
                <button 
                    className='login-btn' 
                    type='submit'
                >
                    LogIn
                </button>
            </form>
            <div>
                <div className='d-flex align-items-center mb-2'>
                    <div className='hr me-2'></div> or <div className='hr ms-2'></div>
                </div>
                <div className='text-center'>
                    Not a member yet? <NavLink to='/userId/:id/login/createAccount'>SignUp</NavLink>
                </div>
            </div>
            <div className='d-flex justify-content-end my-4'>
                <button onClick={() => navigate('/')} className='this-btn'>Skip<i class="ms-2 fa-solid fa-angle-right"></i></button>
            </div>
        </div>  
    </div>
  )
}

export default Login
