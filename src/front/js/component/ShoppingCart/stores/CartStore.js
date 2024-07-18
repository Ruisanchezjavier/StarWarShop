import { EventEmitter } from 'events';
import { AppDispatcher } from '../dispatcher/AppDispatcher';
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/ActionTypes';

const CHANGE_EVENT = 'change';

let _cart = [];

export const CartStore = Object.assign({}, EventEmitter.prototype, {
  getCart() {
    return _cart;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case ADD_TO_CART:
      const existingProduct = _cart.find((item) => item.id === action.product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        _cart.push({ ...action.product, quantity: 1 });
      }
      CartStore.emitChange();
      break;

    case REMOVE_FROM_CART:
      _cart = _cart.filter((item) => item.id !== action.productId);
      CartStore.emitChange();
      break;

    case CLEAR_CART:
      _cart = [];
      CartStore.emitChange();
      break;

    default:
    // no op
  }
});


