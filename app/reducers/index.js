import { combineReducers } from 'redux';

// Reducers
import editor from 'components/Editor/reducer';
import { routerReducer } from 'react-router-redux';


export default combineReducers({
    routing: routerReducer,
    editor
});