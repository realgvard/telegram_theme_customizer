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

    render() {
        const {
            // windowBg,
            shadowFg
        } = this.props;

        return (
            <div
                styleName="wrapper"
                style={{
                    ...shadowFg.styles
                }}
                {...injectActionsToComponent({
                    id: shadowFg.id,
                    dispatch: this.props.dispatch
                })}
            >
                <Paper
                    zDepth={3}
                    rounded={true}
                    styleName="container"
                >
                    <div>
                        <Header />

                        <LeftBlock />

                        <RightBlock />
                    </div>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        shadowFg: selector({ id: id.PREVIEW, key: 'shadowFg', editor: state.editor }),
        // windowBg: selector({ id: id.WINDOW_BG, editor: state.editor }),
    }
};

export default connect(mapStateToProps)(CSSModules(Preview, styles));