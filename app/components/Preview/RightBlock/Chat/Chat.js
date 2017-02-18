import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import Messages from './Messages';

// Images
import defaultBackgroundImage from './background.png';

// Config
import * as id from 'config/idElements.config';

// Actions
import { injectActionsToComponent } from 'components/SidebarEditor/actions';

// JS
import { selector } from 'libs/selector';

// Styles
import styles from './Chat.css';


// https://placehold.it/650x456/f5f5f5?text=Image
@CSSModules(styles)
class Chat extends Component {

    _isBackgroundType() {
        return this.props.backgroundType === 'background' ? true : false;
    }

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
                    ...background.styles,
                    background: `url(${backgroundBase64 ? backgroundBase64 : defaultBackgroundImage}) ${backgroundParams}`,
                }}
                {...injectActionsToComponent({
                    id: id.BACKGROUND,
                    dispatch: this.props.dispatch
                })}
            >
                <Messages />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        backgroundBase64: state.editor.backgroundData,
        background: selector({ id: id.BACKGROUND, key: 'background', editor: state.editor }),
        backgroundType: state.editor.backgroundType,
    }
};

export default connect(mapStateToProps)(Chat);
