# Why Redux Toolkit

## and example project setup

### Redux Concerns

#### What's the problem using Redux?

#### Problem using Redux

##### Redux requires too much boilerplate code

- Action Types
- Action Creator
- Switch statements in reducer
- Too much modular file structure

#### Other packages need to be installed

- redux-thunk
- redux-devtools

### Biggest Concern

- Immutable state updates

### Immer Package

- Immutable state updates in a mutable way

### Redux Toolkit

- The official, opinionated, batteries-included toolset for efficient Redux development

### Summary of Why Redux Toolkit(5.1)

- Initial project setup for using RTK(Redux Toolkit)
- We use RTK for avoiding extra boilerplate like actionTypes, actions, etc.

### Creating Slice (5.2)

#### Using Redux Toolkit createSlice() method

### Summary of Creating Slice (5.2)

- Redux toolkit provide createSlice and it's take object.
- In this createSlice object have three thing like name, initialState, and reducers.
- In reducers object take function like our previous reducer case system.
- reducer exports as a default like counterSlice.reducer;
- actions exports as a name like counterSlice.actions;
