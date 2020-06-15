import dummy from './../../dataBase/dummy';
import { ADD_ORDER } from '../actions/resturantActions';

const initialState = {
  resturants: dummy,
  orders: [],
};

const resturantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const item = action.orderData.item;
      const quantity = action.orderData.quantity;
      const date = action.orderData.date;
      return {
        ...state,
        orders: state.orders.concat({ item, quantity, date }),
      };
    default:
      return state;
  }
};

export default resturantsReducer;
