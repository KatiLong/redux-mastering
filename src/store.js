import { createStore } from 'redux'; //import create store method from redux
import rootReducer from './reducers'; // import reducers

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //passing in reducers to store so that they can update state from within

export default store; //tell React about it
