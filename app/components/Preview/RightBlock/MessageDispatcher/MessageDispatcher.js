import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

// Components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

// Images
import MicIcon from 'material-ui/svg-icons/av/mic';
import AttachFileIcon from 'material-ui/svg-icons/editor/attach-file';
import InsertEmoticonIcon from 'material-ui/svg-icons/editor/insert-emoticon';

// Config
import * as id from 'config/idElements.config';

// JS
import { selector } from 'components/Editor/selector';

// Actions
import { injectActionsToElement } from 'components/Editor/actions';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './MessageDispatcher.css';


class MessageDispatcher extends Component {

    render() {
        const {
            menuIconFg,
            historyComposeAreaBg
        } = this.props;


        return (
            <AppBar
                zDepth={0}
                title='Write a message...'
                titleStyle={{
                    color: '#999',
                    fontSize: 14,
                    height: 46,
                    lineHeight: '46px',
                }}
                style={{
                    background: historyComposeAreaBg.element.color,
                    borderTop: '1px solid #E7E7E7',
                    height: 46,
                    ...getActiveStyle(historyComposeAreaBg.state.editing || historyComposeAreaBg.state.hovered)
                }}
                iconElementLeft={
                    <IconButton
                        style={{
                            height: 'auto',
                            width: 'auto',
                            padding: 0,
                            margin: '3px 2px 0',
                            ...getActiveStyle(menuIconFg.state.editing || menuIconFg.state.hovered)
                        }}
                        iconStyle={{
                            fill: menuIconFg.element.color,
                            transform: 'rotate(-145deg)'
                        }}
                    >
                        <AttachFileIcon
                            {...injectActionsToElement({
                                id: id.MENU_ICON_FG,
                                dispatch: this.props.dispatch
                            })}
                        />
                    </IconButton>
                }
                iconElementRight={
                    <div>
                        <IconButton
                            style={{
                                height: 40,
                                width: 40,
                                padding: 0,
                                marginTop: -6,
                            }}
                            iconStyle={{
                                fill: menuIconFg.element.color,
                                ...getActiveStyle(menuIconFg.state.editing || menuIconFg.state.hovered)
                            }}
                        >
                            <InsertEmoticonIcon
                                {...injectActionsToElement({
                                    id: id.MENU_ICON_FG,
                                    dispatch: this.props.dispatch
                                })}
                            />
                        </IconButton>
                        <IconButton
                            style={{
                                height: 40,
                                width: 40,
                                padding: 0,
                                marginTop: -6,
                            }}
                            iconStyle={{
                                fill: menuIconFg.element.color,
                                ...getActiveStyle(menuIconFg.state.editing || menuIconFg.state.hovered)
                            }}
                        >
                            <MicIcon
                                {...injectActionsToElement({
                                    id: id.MENU_ICON_FG,
                                    dispatch: this.props.dispatch
                                })}
                            />
                        </IconButton>
                    </div>
                }
                {...injectActionsToElement({
                    id: id.HISTORY_COMPOSE_AREA_BG,
                    dispatch: this.props.dispatch
                })}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        historyComposeAreaBg: selector({ id: id.HISTORY_COMPOSE_AREA_BG, editor: state.editor }),
        menuIconFg: selector({ id: id.MENU_ICON_FG, editor: state.editor }),
    }
};

export default connect(mapStateToProps)(CSSModules(MessageDispatcher, styles));
