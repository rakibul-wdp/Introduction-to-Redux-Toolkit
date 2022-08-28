const store = require('./app/store');
const { counterActions } = require('./features/counter/counterSlice');
const { dynamicCounterActions } = require('./features/dynamicCounter/dynamicCounterSlice');

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe  to state changes
store.subscribe(() => {
  // console.log(store.getState());
});

// dispatch actions
store.dispatch(counterActions.increment());
