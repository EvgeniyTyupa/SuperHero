import heroesReducer from './heroesReducer';
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddlware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    heroesReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddlware));

window.store = store;

export default store;


