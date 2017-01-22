import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';


function configureStore(initialState, ...middleware) {
	const store = createStore(rootReducer, initialState, compose(
			applyMiddleware(thunk, ...middleware),
			window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
		)
	);

	return store;
}

export default configureStore;
