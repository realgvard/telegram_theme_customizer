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

// JS
import { selector } from 'components/Editor/selector';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './Chat.css';


class Chat extends Component {

    _isBackgroundType() {
        return this.props.backgroundType === 'background' ? true : false;
    }

    // componentWillReceiveProps(nextProps) {
    //
    //     if(nextProps.backgroundChat.backgroundBase64 !== this.props.backgroundChat.backgroundBase64) {
    //
    //
    //     }
    // }

    render() {
        const {
            background,
            backgroundBase64
        } = this.props;

        const backgroundParams = this._isBackgroundType() ? '0 0 / cover no-repeat' : 'repeat';


        return (
            <div
                styleName='container'
                style={{
                    ...getActiveStyle(background),
                    background: `url(${backgroundBase64 ? backgroundBase64 : defaultBackgroundImage}) ${backgroundParams}`,
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

    return {
        backgroundBase64: state.editor.backgroundData,
        background: selector({ id: id.BACKGROUND, editor: state.editor }),
        backgroundType: state.editor.backgroundType,
    }
};

export default connect(mapStateToProps)(CSSModules(Chat, styles));
