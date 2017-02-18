import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';

// Components
import Paper from 'material-ui/Paper';
import Header from 'components/Preview/Header';
import LeftBlock from 'components/Preview/LeftBlock';
import RightBlock from 'components/Preview/RightBlock';

// Config
import * as id from 'config/idElements.config';

// JS
import { selector } from 'libs/selector';

// Actions
import { injectActionsToComponent } from 'components/SidebarEditor/actions';

// Styles
import styles from './Preview.css';


class Preview extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        // const {
        //     windowBg
        // } = this.props;

        // style={{
        // ...getActiveStyle(windowBg)
        // }}
        // {...injectActionsToComponent({
        //     id: windowBg.id,
        //     dispatch: this.props.dispatch
        // })}

        return (
            <Paper
                zDepth={3}
                rounded={true}
                className={styles.container}
            >
                <div>
                    <Header />

                    <LeftBlock />

                    <RightBlock />
                </div>
            </Paper>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // windowBg: selector({ id: id.WINDOW_BG, editor: state.editor }),
    }
};

export default connect(mapStateToProps)(CSSModules(Preview, styles));