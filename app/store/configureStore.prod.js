import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

function configureStore(initialState, ...middleware) {
	return createStore(rootReducer, initialState, applyMiddleware(thunk, ...middleware));
}

export default configureStore;
