import React, { Component } from 'react';
import { deepOrange500, pink500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: pink500,
    },
});

class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}

export default App;