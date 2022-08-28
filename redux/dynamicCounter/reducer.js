const { DINCREMENT, DDECREMENT } = require('./actionTypes');

// initial state
const initialState = {
  count: 0,
};

// reducer
const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case DDECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };

    default:
      return state;
  }
};

module.exports = dynamicCounterReducer;
