import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

// Components
import Paper from 'material-ui/Paper';
import Header from 'components/Preview/Header';
import LeftBlock from 'components/Preview/LeftBlock';
import RightBlock from 'components/Preview/RightBlock';

// Styles
import styles from './Preview.css';


class Preview extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        return (
            <Paper zDepth={3} rounded>
                <div styleName='container'>
                    <Header />

                    <LeftBlock />

                    <RightBlock />
                </div>
            </Paper>
        );
    }
}

export default CSSModules(Preview, styles);