import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Images
import defaultBackgroundImage from './images/background.png';

// Config
import * as id from 'config/idElements.config';

// Actions
import { injectActionsToElement } from 'components/Editor/actions';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './Chat.css';


class Chat extends Component {

    render() {
        const {
            backgroundChat: {
                backgroundBase64,
                hovered,
                editing
            }
        } = this.props;

        return (
            <div
                styleName='container'
                style={{
                    ...getActiveStyle(hovered || editing),
                    background: `url(${backgroundBase64 ? backgroundBase64 : defaultBackgroundImage}) no-repeat`,
                }}
                {...injectActionsToElement({
                    id: id.BACKGROUND,
                    dispatch: this.props.dispatch
                })}
            >

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    const elemnt = _.filter(state.editor.elements, { id: id.BACKGROUND })[0];

    return {
        backgroundChat: {
            backgroundBase64: state.editor.backgroundData,
            hovered: _.find(state.editor.elements, { id: id.BACKGROUND }).hovered,
            editing: _.find(state.editor.elements, { id: id.BACKGROUND }).editing
        }
    }
};

export default connect(mapStateToProps)(CSSModules(Chat, styles));
