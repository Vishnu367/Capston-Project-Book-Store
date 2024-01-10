import React from 'react'
import '../Login.css'
import { useFormik } from 'formik'
import { NavLink, useNavigate } from 'react-router-dom'

const CreateAccount = () => {

    const navigate = useNavigate()
    
    const formikData = useFormik({
        initialValues: {
            userFirstName:'',
            userSecondName:'',
            userEmail: '',
            userPassword1: '',
            userPassword2:'',
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
            <h1 className='mb-2'>Sign Up</h1>
            <form
                onSubmit={formikData.handleSubmit}
                className='d-flex flex-column'
            >
                <input
                    required 
                    className='user-input'
                    name='userFirstName' 
                    type='text'
                    placeholder='First Name'
                    value={formikData.values.userFirstName}
                    onChange={formikData.handleChange}
                ></input>
                <input
                    required 
                    className='user-input'
                    name='userSecondName' 
                    type='text'
                    placeholder='Second Name'
                    value={formikData.values.userSecondName}
                    onChange={formikData.handleChange}
                ></input>
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
                    placeholder='Password'
                    value={formikData.values.userPassword1}
                    onChange={formikData.handleChange}
                ></input>
                <input
                    required 
                    className='user-input'
                    name='userPassword' 
                    type='password'
                    placeholder='Confrom Password'
                    value={formikData.values.userPassword2}
                    onChange={formikData.handleChange}
                ></input>
                <div className='d-flex justify-content-between align-items-center'>
                    <NavLink to='/userId/:id/login' className=''>Signup instead</NavLink>
                    <button 
                        className='login-btn' 
                        type='submit'
                    >
                        LogIn
                    </button>
                </div>
            </form>
            <div className='d-flex justify-content-end my-4'>
                <button onClick={() => navigate('/')} className='this-btn'>Skip<i class="ms-2 fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    </div>
  )
}

export default CreateAccount
