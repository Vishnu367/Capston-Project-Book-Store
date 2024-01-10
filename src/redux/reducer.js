import { combineReducers } from "redux"
import { SET_PURCHASED_BOOKS, PURCHASED, IN_LOGIN_PAGE, SET_NAV_COLOR, USER_SERCHED_BOOKS, REMOVE_FAVORITES_BOOK, ADD_TO_FAVORITES,REMOVE_CART_BOOK, UPDATE_CART_BOOK_QUANTITY, CART_BOOK_QUANTITY, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SET_VIEW_ALL, USER_SELECTED_BOOK, BOOK_QUANTITY } from "./action"

const initialState = {
    isInLoginPage: null,
    isNavColored: null,
    allBooks: null,
    loading: false,
    error: null,
    viewAll: null,
    userSelectedBook: null,
    bookQuantity: null,
    cartList: [],
    favoritesList: [],
    userSerchedBooks: null,
    orderHistory: []
}

export const bookStoreReducer = (state = initialState, action) => {
    switch(action.type) {
      case IN_LOGIN_PAGE:
        return {
          ...state,
          isInLoginPage: action.payload
        }
      case SET_NAV_COLOR:
        return {
          ...state,
          isNavColored: action.payload
        }
      case FETCH_DATA_REQUEST:
          return {
            ...state,
            loading: true,
            error: null,
          }
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          allBooks: action.payload,
          error: null,
        }
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }
      case SET_VIEW_ALL:
        return {
          ...state,
          viewAll: action.payload,
        }
      case USER_SELECTED_BOOK:
        return {
          ...state,
          userSelectedBook: action.payload
        }
      case BOOK_QUANTITY:
        return {
          ...state,
          bookQuantity: action.payload
        }
      case CART_BOOK_QUANTITY:
        return {
          ...state,
          cartList: [...state.cartList, action.payload]
        }
      case UPDATE_CART_BOOK_QUANTITY:
        const updatedCart = state.cartList.map(ele => {
          if (ele.book.id === action.payload.id) {
            return { ...ele, quantity:action.payload.quantity }
          }
          return ele
        })
        return {
          ...state,
          cartList: updatedCart
        }
      case REMOVE_CART_BOOK:
        const updatedCartAfterRemove = state.cartList.filter(item => item.book.id !== action.payload)
        return {
          ...state,
          cartList: updatedCartAfterRemove
        }
      case PURCHASED:
        return {
          ...state,
          cartList: []
        }
      case ADD_TO_FAVORITES:
        return {
          ...state,
          favoritesList: [...state.favoritesList, action.payload]
        }
      case REMOVE_FAVORITES_BOOK:
        const updatedFavoritesList = state.favoritesList.filter(item => item.id !== action.payload)
        return{
          ...state,
          favoritesList: updatedFavoritesList
        }
      case USER_SERCHED_BOOKS:
        return {
          ...state,
          loading: false,
          userSerchedBooks: action.payload,
          error: null,
        }
      case SET_PURCHASED_BOOKS:
        return {
          ...state,
          orderHistory: [...state.orderHistory, action.payload]
        }

      default :
        return state
    }
}
  
export const rootReducers = combineReducers({
    bookStore: bookStoreReducer,
})
