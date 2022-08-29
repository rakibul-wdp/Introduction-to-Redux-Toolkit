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

### Summary of middleware concept(5.6)

- We can use middleware with redux toolkit in configureStore.
- In configureStore after reducer we can use middleware and middleware is a callback function and have some own middleware that we bring by getDefaultMiddlewares and then call it.
- After call getDefaultMiddlewares we concat() our own middleware. In this case we use redux-logger middleware for understand name property of createSlice object.

### Extra Reducers (5.7)

#### Respond to other slice reducers

### Summary of extra reducers (5.7)

- (Vanilla Redux)
- If we want to like dispatch one action and it work another action like click counter increment and it works also dynamic counter feature then we need use Increment case in dynamic reducer function and then it's work.
- (Redux Toolkit)
- This same work we can do with extraReducers after reducers in createSlice section.
- There are two way to use extraReducer one way is hardcoded action name and second way is dynamic action with builder.addCase using.

### Async thunks - Part 1 (5.8)

#### Using asynchronous thunk functions - Old way

### Summary of async thunks (5.8)

- As usual create initialState, action, reducer, thunk function, create store, subscribe state change, and dispatch action.
- In thunk function use try catch and try to load jsonplaceholder fake data.
- In thunk function three difference case like requested, succeeded, failed. If succeed fetch data else give error. In this case we use try catch.

### Async thunks - Part 2 (5.9)

#### Using asynchronous thunk functions - Modern way

### Summary of async thunks (5.9)

- In redux toolkit if you want to use thunk function for any data fetch you need follow just few think like initialState, create thunk function, and in createSlice and extraReducer follow three think like pending, fulfilled, and rejected.
- We already know in extraReducer have callback function and parameter is builder and also we use it for data fetching.
- And in store put this reducer and lastly dispatch thunk function.
