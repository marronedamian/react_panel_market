import thunk from "redux-thunk"
import throttle from 'lodash/throttle';
import { createStore, applyMiddleware, compose } from "redux"
import RootReducer from "./reducers/RootReducer"

export function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors
  }
}

const initialState = loadState()
const middlewares = [thunk]
let devtools = (x) => x

if (
  process.env.NODE_ENV !== "production" &&
  process.browser &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

const store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(...middlewares), devtools),
)

store.subscribe(throttle(() => saveState({
  user: store.getState().user,
})), 1000);

export default store
