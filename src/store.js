import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import axios from 'axios';

// state DS 'diagram'
// const initialState = {
//   products: [],
//   topProduct: {}
// }

// action constants
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CREATE_PRODUCT = 'CREATE_PRODUCT';

// action creators
const _loadProducts = products => {
  return {
    type: LOAD_PRODUCTS,
    products
  }
}

const _deleteProduct = product => {
  return {
    type: DELETE_PRODUCT,
    product
  }
}

const _createProduct = product => {
  return {
    type: CREATE_PRODUCT,
    product
  }
}


// thunks
const loadProducts = () => {
  return (dispatch) => {
    axios.get('/api/products')
      .then(response => response.data)
      .then(products => dispatch(_loadProducts(products)))
      .catch(error => console.log(error))
  }
}

const deleteProduct = (product) => {
  return (dispatch) => {
    axios.delete(`/api/products/${product.id}`)
      .then(() => dispatch(_deleteProduct(product)))
      .catch(error => console.log(error))
  }
}

const createProduct = (product) => {
  return (dispatch) => {
    axios.post('api/products', product)
      .then(response => response.data)
      .then(product => dispatch(_createProduct(product)))
      .catch(error => console.log(error))
  }
}

const productsReducer = (state = [], action) => {

  switch(action.type) {

    case LOAD_PRODUCTS:
      state = [...state];
      state = action.products;
      break;

    case DELETE_PRODUCT:
      state = [...state]
      state = state.filter(product => product.id !== action.product.id);
      break;

    case CREATE_PRODUCT:
      state = [...state, action.product]
      break;
  }

  return state;
}

// action constant
const TOP_RATED_FILTER = 'TOP_RATED_FILTER';

// action creator
const _topRatedFilter = (filter) => {
  type: TOP_RATED_FILTER,
  filter
}

const topRatedFilterReducer = (state = '', action) => {

  switch(action.type) {
    case TOP_RATED_FILTER:
    state = action.filter
  }

}

// main reducer variable for all reducers
const reducer = (combineReducers({
  products: productsReducer
}))


const store = createStore(reducer, applyMiddleware(logger, thunk));






export {
  store,
  loadProducts,
  deleteProduct,
  createProduct,
  _topRatedFilter
}
