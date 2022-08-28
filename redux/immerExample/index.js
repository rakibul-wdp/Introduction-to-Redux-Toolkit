const { default: produce } = require('immer');
const { createStore } = require('redux');

// initial state
const initialState = {
  name: 'Md. Rakibul Islam',
  address: {
    street: 'Mamurshahi',
    city: 'Bogura',
    country: 'Bangladesh',
  },
};

// action creator
const updateStreet = (street) => {
  return {
    type: 'street_updated',
    payload: street,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'street_updated':
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };

      return produce(state, (draftState) => {
        draftState.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(updateStreet('Sherpur'));
