import { createStore, combineReducers } from 'redux';

import cartReducer from './cartReducer';
import categoriesReducer from './CategoriesReducer';
import productReducer from './productsReducer';

let reducers = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productReducer
});

export default createStore(reducers);