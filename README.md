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

### Configure Redux store (5.3)

#### configureStore() method & dispatch actions

### Summary of Configure Redux store (5.3)

- By configureStore we can create store and it's take object.
- In this configureStore we can put store and also, this reducer take multiple store.
- And index.js file with counterAction (that we export from counterSlice) we can dispatch.

### Introduction to immer (5.4)

#### Immutable state update in a mutable way

### Summary of immer (5.4)

- By immer we can update state mutable way.
- At first we need install immer (npm i immer) and you need to use produce (that come from immer) and produce take two thing like main state and a function this function parameter is draftState.
- Now you can update state mutable way by draftState.
- Basically, under the hood immer update state immutable way because it's also take main state.

### Add new feature or slice (5.5)

#### Add dynamic counter feature/slice

### Summary of add new feature or slice (5.5)

- We can easily add another feature in our application. Just go feature file and create another file that you want add any kind of feature like dynamicCounter and create slice for it.
- And then go to store add this slice in reducer object. And lastly dispatch it in index file.

### Middleware concept (5.6)

#### How to apply middleware to Redux Toolkit
