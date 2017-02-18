import React, { Component } from 'react';
import {
    greenA700,
    greenA200,
    grey100,
    lightBlue800
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Styles
import 'normalize.css';
import './App.css';

// JS
import { isSafari } from 'libs/browser';


const muiTheme = getMuiTheme({
    palette: {
        accent1Color: lightBlue800,
        primary1Color: greenA700,
    },
    tabs: {
        backgroundColor: '#fff',
        selectedTextColor: greenA700,
        textColor: '#000'
    },
    ripple: {
        color: '#000',
    }
});


class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                {isSafari() ?
                    <div
                        style={{
                            margin: 10
                        }}
                    >
                        Theme Customizer doesn't support <strong>Safari</strong> browser. Please, open it in Chrome or any other browsers. <br />
                        Join to our <a target="blank" href="https://t.me/theme_customizer"><strong>group in Telegram</strong></a> to get help with your theme and don't skip the next update.
                    </div>
                : this.props.children}
            </MuiThemeProvider>
        );
    }
}

export default App;