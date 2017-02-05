import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Images
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import SearchIcon from 'material-ui/svg-icons/action/search';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

// Config
import chatMessages from 'config/chatMessages';
import * as id from 'config/idElements.config';

// Actions
import { injectActionsToComponent } from 'components/SidebarEditor/actions';

// JS
import { selector } from 'components/SidebarEditor/selector';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './Messages.css';


@CSSModules(styles, { allowMultiple: true })
class Messages extends Component {

    render() {
        const {
            msgInBg,
            msgOutBg,
        } = this.props;

        const messagesView = chatMessages.map(({
                type,
                message,
                meSender,
            }, index) => {

                switch(type) {

                    case 'text' :
                        return <div styleName={`item`}>
                                    <div
                                        styleName={`item-inner-block ${meSender ? '' : 'interlocutor-sender'}`}
                                        style={{
                                            background: meSender ? msgInBg.element.color : msgOutBg.element.color,
                                            ...meSender ? msgInBg.styles : msgOutBg.styles
                                        }}
                                        {...injectActionsToComponent({
                                            id: meSender ? msgInBg.id : msgOutBg.id,
                                            dispatch: this.props.dispatch
                                        })}
                                    >
                                        {message}
                                    </div>
                                </div>;

                }
            });


        return (
            <div styleName="container">
                <div styleName="inner-container">
                    {messagesView}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        msgInBg: selector({ id: id.MSG_IN, key: 'msgInBg', editor: state.editor }),
        msgOutBg: selector({ id: id.MSG_OUT, key: 'msgOutBg', editor: state.editor }),
    }
};

export default connect(mapStateToProps)(Messages);
