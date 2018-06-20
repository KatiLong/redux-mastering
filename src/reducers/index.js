import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = combineReducers({ //passing in reducers to combine
    todos
})

export default rootReducer;
