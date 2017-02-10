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
import chatMessages from 'config/chatMessages.config';
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
            windowFg,
            msgInBg,
            msgOutBg,
            msgInDateFg,
            msgOutDateFg
        } = this.props;

        const messagesView = chatMessages.map(({
                type,
                receivedDate,
                message,
                inlineCSSRules,
                reply,
                msgIn,
            }) => {

                switch(type) {

                    case 'text' :
                        return <div styleName={`item`}>
                                    <div
                                        styleName={`item-inner-block ${msgIn ? '' : 'interlocutor-sender'}`}
                                        style={{
                                            background: msgIn ? msgInBg.element.color : msgOutBg.element.color,
                                            ...msgIn ? msgInBg.styles : msgOutBg.styles
                                        }}
                                        {...injectActionsToComponent({
                                            id: msgIn ? msgInBg.id : msgOutBg.id,
                                            dispatch: this.props.dispatch
                                        })}
                                    >
                                        {reply ? <div
                                            styleName="reply"
                                        >
                                            <div styleName="reply-title">{reply.title}</div>
                                            <div styleName="reply-text">{reply.text}</div>
                                        </div> : null}
                                        <div
                                            styleName="message"
                                            style={{
                                                paddingRight: inlineCSSRules ? 30 : 0,
                                                color: windowFg.element.color,
                                                ...windowFg.styles
                                            }}
                                            {...injectActionsToComponent({
                                                id: windowFg.id,
                                                dispatch: this.props.dispatch
                                            })}
                                        >
                                            {message}
                                        </div>
                                        <span
                                            styleName="received-date"
                                            style={{
                                                color: msgIn ? msgInDateFg.element.color : msgOutDateFg.element.color,
                                                ...msgIn ? msgInDateFg.styles : msgOutDateFg.styles
                                            }}
                                            {...injectActionsToComponent({
                                                id: msgIn ? msgInDateFg.id : msgOutDateFg.id,
                                                dispatch: this.props.dispatch
                                            })}
                                        >
                                            {receivedDate}
                                        </span>
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
        msgInDateFg: selector({ id: id.MSG_IN_DATE_FG, key: 'msgInDateFg', editor: state.editor }),
        msgOutDateFg: selector({ id: id.MSG_OUT_DATE_FG, key: 'msgOutDateFg', editor: state.editor }),
        windowFg: selector({ id: id.MSG_TEXT, key: 'windowFg', editor: state.editor }),
        msgInBg: selector({ id: id.MSG_IN, key: 'msgInBg', editor: state.editor }),
        msgOutBg: selector({ id: id.MSG_OUT, key: 'msgOutBg', editor: state.editor }),
    }
};

export default connect(mapStateToProps)(Messages);
