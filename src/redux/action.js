import Axios  from "axios";

const bookAPI = 'AIzaSyANf3P522Ru5bfagVVUX5b5jQy3YfQTXjY';
const bookApiUrl = `https://www.googleapis.com/books/v1/volumes?q=+intitle:&maxResults=40&key=${bookAPI}`;

export const SET_NAV_COLOR = 'SET_NAV_COLOR'
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const SET_VIEW_ALL = 'SET_VIEW_ALL'
export const USER_SELECTED_BOOK = 'USER_SELECTED_BOOK'
export const BOOK_QUANTITY = 'BOOK_QUANTITY'
export const CART_BOOK_QUANTITY = 'CART_BOOK_QUANTITY'
export const UPDATE_CART_BOOK_QUANTITY = 'UPDATE_CART_BOOK_QUANTITY'
export const REMOVE_CART_BOOK = 'REMOVE_CART_BOOK'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FAVORITES_BOOK = 'REMOVE_FAVORITES_BOOK'
export const USER_SERCHED_BOOKS = 'USER_SERCHED_BOOKS'
export const IN_LOGIN_PAGE = 'IN_LOGIN_PAGE'
export const PURCHASED = 'PURCHASED'
export const SET_PURCHASED_BOOKS = 'SET_PURCHASED_BOOKS'

export const setNavColor = (data) => ({type: SET_NAV_COLOR, payload: data})
export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST })
export const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data})
export const fetchDataFailure = (data) => ({ type: FETCH_DATA_FAILURE, payload: data})
export const setViewAll = (data) => ({type: SET_VIEW_ALL, payload: data})
export const userSelectedBook = (data) => ({type: USER_SELECTED_BOOK, payload: data})
export const setBookQuantity = (data) => ({type: BOOK_QUANTITY, payload: data})
export const setCartBookAndQuantity = (data) => ({type: CART_BOOK_QUANTITY, payload: data})
export const updateCartBookQuantity = (data) => ({type: UPDATE_CART_BOOK_QUANTITY, payload: data})
export const removeCartBook = (data) => ({type: REMOVE_CART_BOOK, payload: data})
export const addToFavorites = (data) => ({type: ADD_TO_FAVORITES, payload: data})
export const removeFavoritesBook = (data) => ({type: REMOVE_FAVORITES_BOOK, payload: data})
export const userSerchBooks = (data) => ({type: USER_SERCHED_BOOKS, payload: data})
export const inLoginPage = (data) => ({type: IN_LOGIN_PAGE, payload: data})
export const purchased = () => ({type: PURCHASED})
export const purchasedBooks = (data) => ({type: SET_PURCHASED_BOOKS, payload: data})

export const fetchBooks = () => {
  return async (dispatch) => {
      dispatch(fetchDataRequest())
    try {
      const responce = await Axios.get(bookApiUrl)
      const data = responce.data.items
      const filterdBooks = data.filter(book => {
        const saleInfo = book.saleInfo || {}
        return saleInfo.saleability !== 'NOT_FOR_SALE' && saleInfo.listPrice?.amount > 0
      })
      dispatch(fetchDataSuccess(filterdBooks))
    } catch(error) {
        dispatch(fetchDataFailure(error.message))
    }
  }
}

export const userSearch = (key) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest())
  try {
    const responce = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${key}&key=${bookAPI}`)
    const data = responce.data.items
    const filterdBooks = data.filter(book => {
      const saleInfo = book.saleInfo || {}
      return saleInfo.saleability !== 'NOT_FOR_SALE' && saleInfo.listPrice?.amount > 0
    })
    dispatch(fetchDataSuccess(filterdBooks))
  } catch(error) {
      dispatch(fetchDataFailure(error.message))
  }
}
}