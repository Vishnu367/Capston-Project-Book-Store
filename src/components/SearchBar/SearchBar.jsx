import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import './SearchBar.css'
import { userSearch } from '../../redux/action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    const [isBotterBottom, setBotterBottom] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        document.addEventListener('click', (event) => {
            event.target.id === 'user-input' 
            || 
            event.target.className === 'search-box' 
            || 
            event.target.id === 'user-search-btn'
            ?
            setBotterBottom(true)
            :
            setBotterBottom(false)
        })
    })

    const formik = useFormik({
        initialValues: {
            userInput: ''
        },
        validate: (data) => {
            let errors = {}
            if(data.userInput == '') {
                errors.userInput='please enter book'
            }
            setTimeout(() => {
                errors = {}
            }, 3000)
            return errors
        },
        onSubmit: (values) => {
            dispatch(userSearch(values.userInput))
            navigate(`allBooks/${values.userInput}`)
        },
    })


  return (
    <div>
        <div 
            className={!isBotterBottom ? 'search-box' : 'search-box this-border-bottom'}
            >
            <form 
                onSubmit={formik.handleSubmit}
                className='d-flex align-items-center gap-2'
            >
                <input 
                    id='user-input' 
                    name='userInput' 
                    value={formik.values.userInput} 
                    onChange={formik.handleChange}
                    placeholder='Search your Book'
                />
                <button 
                    id='user-search-btn'
                    type='submit'
                    style={{
                        background:'transparent',
                        border:'none',
                        outline:'none'
                    }}
                    >
                    <i 
                        class="fa-solid fa-magnifying-glass text-white"
                        // onClick={handleUserSearch}
                    ></i>
                </button>
            </form>
        </div>
        {
            formik.errors.userInput && <div class="alert alert-warning alert-pop-up" role="alert">
                            <i class="fa-solid fa-triangle-exclamation me-2"></i>{formik.errors.userInput}
                        </div>
        }
    </div>
  )
}

export default SearchBar
