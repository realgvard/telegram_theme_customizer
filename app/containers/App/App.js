import React, { Component } from 'react';
import {
    greenA700,
    greenA200,
    lightBlue800
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: greenA700,
        accent2Color: lightBlue800,
        primary1Color: greenA700,
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