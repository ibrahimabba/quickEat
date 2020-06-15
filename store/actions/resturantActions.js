import moment from 'moment';

export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (item, quantity) => {
  return async (dispatch) => {
    const dateUnFormatted = new Date();
    const date = moment(dateUnFormatted).format('MMMM Do YYYY, hh:mm');

    dispatch({
      type: ADD_ORDER,
      orderData: { item, quantity, date },
    });
  };
};
