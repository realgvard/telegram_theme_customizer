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

// Actions
import { injectActionsToElement } from 'components/Editor/actions';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './MessageDispatcher.css';


class MessageDispatcher extends Component {

    render() {
        const menuIconFg = _.head(this.props.menuIconFg);
        const historyComposeAreaBg = _.head(this.props.historyComposeAreaBg);


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
                    background: historyComposeAreaBg.color,
                    borderTop: '1px solid #E7E7E7',
                    height: 46,
                    ...getActiveStyle(historyComposeAreaBg.editing || historyComposeAreaBg.hovered)
                }}
                iconElementLeft={
                    <IconButton
                        style={{
                            height: 'auto',
                            width: 'auto',
                            padding: 0,
                            margin: '3px 2px 0',
                            ...getActiveStyle(menuIconFg.editing || menuIconFg.hovered)
                        }}
                        iconStyle={{
                            fill: menuIconFg.color,
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
                                fill: menuIconFg.color,
                                ...getActiveStyle(menuIconFg.editing || menuIconFg.hovered)
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
                                fill: menuIconFg.color,
                                ...getActiveStyle(menuIconFg.editing || menuIconFg.hovered)
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
        historyComposeAreaBg: _.filter(state.editor.elements, { id: id.HISTORY_COMPOSE_AREA_BG }),
        menuIconFg: _.filter(state.editor.elements, { id: id.MENU_ICON_FG }),
    }
};

export default connect(mapStateToProps)(CSSModules(MessageDispatcher, styles));
