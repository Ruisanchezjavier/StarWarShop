import { AppDispatcher } from '../dispatcher/AppDispatcher';
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/ActionTypes';

export const addToCart = (pcard) => {
  AppDispatcher.dispatch({
    actionType: ADD_TO_CART,
    pcard,
  });
};

export const removeFromCart = (productId) => {
  AppDispatcher.dispatch({
    actionType: REMOVE_FROM_CART,
    productId,
  });
};

export const clearCart = () => {
  AppDispatcher.dispatch({
    actionType: CLEAR_CART,
  });
};
