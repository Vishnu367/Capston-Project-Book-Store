import React,{ useState } from 'react'
import './Categories.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userSearch } from '../../redux/action'

const Categories = () => {

    const [categoriesArr, setCategoriesArr] = useState(['Fiction', 'Action', 'Adventure', 'Thriller', 'Comic', 'Mystery', 'History', 'Biography', 'Mystery', 'Romace', 'Fantasy', 'Non-Fiction', 'Horror'])

    const bookStore = useSelector(data => data.bookStore)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleCategorie = (categorie) => {
        dispatch(userSearch(categorie))
        navigate(`/allBooks/${categorie}`)
    }

  return (
    <div className='categorie-conatiner py-5'>
        <div className='this-container'>
            <h1 className='text-center text-white mb-5'>Seacrh by Categories:</h1>
            <div className='categorie-card-container'>
                {
                    categoriesArr.map(categorie => {
                        return <h3 
                                    className='categorie-card text-center this-btn this-btn-primary'
                                    onClick={() => handleCategorie(categorie)}
                                >   
                                    {categorie} 
                                    <i class="fa-solid fa-arrow-right ms-2"></i>
                                </h3>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Categories
