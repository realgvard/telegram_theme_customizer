import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import App from 'containers/App';
import EditorContainer from 'containers/EditorContainer';


// React-Redux
import { Provider } from 'react-redux';
import { getStoredState, createPersistor } from 'redux-persist';
import { Router, useRouterHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { createHistory } from 'history';

// Store
import configureStore from './store';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


getStoredState({}, (err, restoredState) => {
    const routerHistory = useRouterHistory(createHistory)({
        basename: PUBLIC_PATH || '/'
    }),
    store = configureStore(restoredState, routerMiddleware(routerHistory)),
    history = syncHistoryWithStore(routerHistory, store),
    routes = {
            path: '/',
            component: App,
            indexRoute: {
                component: EditorContainer
            },
            childRoutes: [
            ]
        };

    createPersistor(store, {
        blacklist: ['editor']
    });

    // Render the main app react component into the app div.
    // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
    render(
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>,
        document.getElementById('app')
    );
});