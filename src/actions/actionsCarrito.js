
import {
    ADD_TO_CART,

  } from '../Types/index';
  
  export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });
