import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Images
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';

// Config
import chatMessages from 'config/chatMessages.config';
import * as id from 'config/idElements.config';

// Actions
import { injectActionsToComponent } from 'components/SidebarEditor/actions';

// JS
import { selector } from 'components/SidebarEditor/helpers/selector';

// Styles
import styles from './Messages.scss';


@CSSModules(styles, { allowMultiple: true })
class Messages extends Component {

    render() {
        const {
            msgServiceFg,
            historyOutIconFg,
            msgOutServiceFg,
            msgInServiceFg,
            msgInReplyBarColor,
            msgOutReplyBarColor,
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
                historyOutIcon,
                inlineCSSRules,
                reply,
                msgIn,
                dateTitle,
            }) => {

                switch(type) {

                    case 'date' :
                        return <div styleName="item date-item">
                                <div
                                    styleName="date-block"
                                    style={{
                                        color: msgServiceFg.element.color,
                                        ...msgServiceFg.styles
                                    }}
                                    {...injectActionsToComponent({
                                        id: msgServiceFg.id,
                                        dispatch: this.props.dispatch
                                    })}
                                >
                                    {dateTitle}
                                </div>
                            </div>

                    case 'text' :
                        return <div styleName="item">
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
                                            style={{
                                                borderLeftColor: msgIn ? msgInReplyBarColor.element.color : msgOutReplyBarColor.element.color,
                                                ...msgIn ? msgInReplyBarColor.styles : msgOutReplyBarColor.styles
                                            }}
                                            {...injectActionsToComponent({
                                                id: msgIn ? msgInReplyBarColor.id : msgOutReplyBarColor.id,
                                                dispatch: this.props.dispatch
                                            })}
                                        >
                                            <div
                                                styleName="reply-title"
                                                style={{
                                                    color: msgIn ? msgInServiceFg.element.color : msgOutServiceFg.element.color
                                                }}
                                            >{reply.title}</div>

                                            <div
                                                className="reply-text"
                                                style={{
                                                    color: windowFg.element.color
                                                }}
                                            >{reply.text}</div>
                                        </div> : null}
                                        <div
                                            className="message"
                                            style={{
                                                marginRight: inlineCSSRules ? 60 : 0,
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
                                                marginRight: inlineCSSRules ? 22 : 0,
                                                ...msgIn ? msgInDateFg.styles : msgOutDateFg.styles
                                            }}
                                            {...injectActionsToComponent({
                                                id: msgIn ? msgInDateFg.id : msgOutDateFg.id,
                                                dispatch: this.props.dispatch
                                            })}
                                        >
                                            {receivedDate}
                                        </span>

                                        {historyOutIcon ? <span styleName="icon-checked">
                                            <DoneAllIcon
                                                style={{
                                                    color: historyOutIconFg.element.color,
                                                    width: 16,
                                                    height: 16,
                                                    ...historyOutIconFg.styles
                                                }}
                                                {...injectActionsToComponent({
                                                    id: historyOutIconFg.id,
                                                    dispatch: this.props.dispatch
                                                })}
                                            />
                                        </span> : null}
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
        msgServiceFg: selector({ id: id.MSG_SERVICE, key: 'msgServiceFg', editor: state.editor }),
        historyOutIconFg: selector({ id: id.HISTORY_OUT_ICON_FG, key: 'historyOutIconFg', editor: state.editor }),
        msgOutServiceFg: selector({ id: id.MSG_OUT_REPLY, key: 'msgOutServiceFg', editor: state.editor }),
        msgOutReplyBarColor: selector({ id: id.MSG_OUT_REPLY, key: 'msgOutReplyBarColor', editor: state.editor }),
        msgInServiceFg: selector({ id: id.MSG_IN_REPLY, key: 'msgInServiceFg', editor: state.editor }),
        msgInReplyBarColor: selector({ id: id.MSG_IN_REPLY, key: 'msgInReplyBarColor', editor: state.editor }),
        msgInDateFg: selector({ id: id.MSG_IN_DATE_FG, key: 'msgInDateFg', editor: state.editor }),
        msgOutDateFg: selector({ id: id.MSG_OUT_DATE_FG, key: 'msgOutDateFg', editor: state.editor }),
        windowFg: selector({ id: id.MSG_TEXT, key: 'windowFg', editor: state.editor }),
        msgInBg: selector({ id: id.MSG_IN, key: 'msgInBg', editor: state.editor }),
        msgOutBg: selector({ id: id.MSG_OUT, key: 'msgOutBg', editor: state.editor }),
    }
};

export default connect(mapStateToProps)(Messages);
