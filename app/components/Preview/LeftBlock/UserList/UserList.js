// Global
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import _ from 'lodash';

// Components
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Badge from 'material-ui/Badge';

// Actions
import { injectActionsToElement } from 'components/Editor/actions';

// JS
import userDataList from './content';
import { selector } from 'components/Editor/selector';

// Config
import * as id from 'config/idElements.config';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './User-list.css';


class UserList extends Component {

    render() {
        const {
            dialogsBgActive,
            dialogsNameFgActive,
            dialogsTextFgActive,
            dialogsUnreadBg,
            dialogsUnreadBgMuted,
            dialogsNameFg,
            dialogsTextFg,
            dialogsDateFg,
            dialogsDateFgActive,
            windowActiveTextFg,
            dialogsTextFgServiceActive,
            historyPeerUserpicFg
        } = this.props;

        console.log(dialogsBgActive)


        return (
            <div styleName='user-list'>

                <List
                    style={{
                        padding: '0 0 6px'
                    }}
                >
                    {userDataList.map(({
                        avatarBackgroundColor,
                        avatarText,
                        primaryText,
                        receivedDate,
                        secondaryText,
                        badgeContent,
                        itemIsUnreaded,
                        textService,
                        itemIsActive = false,
                    }, index) => {

                        return <ListItem
                            key={index}
                            hoverColor="rgba(0,0,0,0.05)"
                            leftAvatar={
                                <Avatar
                                    style={{
                                        top: 12,
                                        fontSize: 16,
                                        color: historyPeerUserpicFg.element.color,
                                        ...getActiveStyle(historyPeerUserpicFg.state.editing || historyPeerUserpicFg.state.hovered)
                                    }}
                                    backgroundColor={avatarBackgroundColor}
                                    {...injectActionsToElement({
                                        id: id.HISTORY_PEER_USER_PIC_FG,
                                        dispatch: this.props.dispatch
                                    })}
                                >
                                    {avatarText}
                                </Avatar>
                            }
                            rightIcon={<div
                                    style={{
                                        width: 'auto',
                                        height: 'auto',
                                        padding: 0,
                                        margin: 0,
                                        right: 0
                                    }}
                                >
                                <div className={styles.receivedDate}
                                    style={{
                                        color: itemIsActive ? dialogsDateFgActive.element.color : dialogsDateFg.element.color,
                                        ...getActiveStyle(itemIsActive && (dialogsDateFgActive.state.editing || dialogsDateFgActive.state.hovered) ||
                                                            !itemIsActive && (dialogsDateFg.state.editing || dialogsDateFg.state.hovered))
                                    }}
                                     {...injectActionsToElement({
                                         id: itemIsActive ? id.DIALOGS_DATE_FG_ACTIVE : id.DIALOGS_DATE_FG,
                                         dispatch: this.props.dispatch
                                     })}
                                >
                                    {receivedDate}
                                </div>
                                {badgeContent ? <Badge
                                    badgeContent={badgeContent}
                                    secondary={true}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        padding: 0,
                                        margin: 0,
                                        top: 20,
                                        right: 10,
                                        ...getActiveStyle(itemIsUnreaded && (dialogsUnreadBg.element.editing || dialogsUnreadBg.element.hovered) ||
                                            !itemIsUnreaded && (dialogsUnreadBgMuted.state.editing || dialogsUnreadBgMuted.state.hovered))
                                    }}
                                    badgeStyle={{
                                        backgroundColor: itemIsUnreaded ? dialogsUnreadBg.element.color : dialogsUnreadBgMuted.element.color,
                                        width: 20,
                                        height: 20,
                                        fontSize: 10
                                    }}
                                    {...injectActionsToElement({
                                        id: itemIsUnreaded ? id.DIALOGS_UNREAD_BG : id.DIALOGS_UNREAD_BG_MUTED,
                                        dispatch: this.props.dispatch
                                    })}
                                /> : null}
                            </div>}
                            style={{
                                height: 62,
                                ...getActiveStyle(itemIsActive && (dialogsBgActive.state.editing || dialogsBgActive.state.hovered))
                            }}
                            innerDivStyle={{
                                padding: '13px 36px 13px 72px',
                                background: itemIsActive ? dialogsBgActive.element.color : '',
                                position: 'inherit'
                            }}
                            primaryText={<div
                                {...injectActionsToElement({
                                    id: itemIsActive ? id.DIALOGS_NAME_FG_ACTIVE : id.DIALOGS_NAME_FG,
                                    dispatch: this.props.dispatch
                                })}
                                style={{
                                    color: itemIsActive ? dialogsNameFgActive.element.color : dialogsNameFg.element.color,
                                    fontSize: 12,
                                    letterSpacing: 0.5,
                                    fontWeight: 'bold',
                                    display: 'inline-block',
                                    ...getActiveStyle(itemIsActive && (dialogsNameFgActive.state.editing || dialogsNameFgActive.state.hovered) ||
                                                        !itemIsActive && (dialogsNameFg.state.editing || dialogsNameFg.state.hovered))
                                }}
                            >{primaryText}</div>}
                            secondaryText={<div
                                style={{
                                    fontSize: 12,
                                    letterSpacing: 0.5,
                                }}
                            >
                                {textService ? <span
                                    className={styles.textService}
                                    style={{
                                        color: itemIsActive ? dialogsTextFgServiceActive.element.color : windowActiveTextFg.element.color,
                                        ...getActiveStyle(itemIsActive && (dialogsTextFgServiceActive.state.editing || dialogsTextFgServiceActive.state.hovered) ||
                                                            !itemIsActive && (windowActiveTextFg.state.editing || windowActiveTextFg.state.hovered))
                                    }}
                                    {...injectActionsToElement({
                                        id: itemIsActive ? id.DIALOGS_TEXT_FG_SERVICE_ACTIVE : id.WINDOW_ACTIVE_TEXT_FG,
                                        dispatch: this.props.dispatch
                                    })}
                                >{textService}</span> : null}
                                <span
                                    className={styles.secondaryText}
                                    style={{
                                        color: itemIsActive ? dialogsTextFgActive.element.color : dialogsTextFg.element.color,
                                        ...getActiveStyle(itemIsActive && (dialogsTextFgActive.state.editing || dialogsTextFgActive.state.hovered) ||
                                                            !itemIsActive && (dialogsTextFg.state.editing || dialogsTextFg.state.hovered))
                                    }}
                                    {...injectActionsToElement({
                                        id: itemIsActive ? id.DIALOGS_TEXT_FG_ACTIVE : id.DIALOGS_TEXT_FG,
                                        dispatch: this.props.dispatch
                                    })}
                                >{secondaryText}</span>
                            </div>}
                            {...injectActionsToElement({
                                id: id.DIALOGS_BG_ACTIVE,
                                condition: itemIsActive,
                                dispatch: this.props.dispatch
                            })}
                        />
                    })}
                </List>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

    return {
        historyPeerUserpicFg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, editor: state.editor }),
        dialogsTextFgServiceActive: selector({ id: id.DIALOGS_TEXT_FG_SERVICE_ACTIVE, editor: state.editor }),
        windowActiveTextFg: selector({ id: id.WINDOW_ACTIVE_TEXT_FG, editor: state.editor }),
        dialogsDateFgActive: selector({ id: id.DIALOGS_DATE_FG_ACTIVE, editor: state.editor }),
        dialogsDateFg: selector({ id: id.DIALOGS_DATE_FG, editor: state.editor }),
        dialogsTextFg: selector({ id: id.DIALOGS_TEXT_FG, editor: state.editor }),
        dialogsNameFg: selector({ id: id.DIALOGS_NAME_FG, editor: state.editor }),
        dialogsUnreadBgMuted: selector({ id: id.DIALOGS_UNREAD_BG_MUTED, editor: state.editor }),
        dialogsUnreadBg: selector({ id: id.DIALOGS_UNREAD_BG, editor: state.editor }),
        dialogsTextFgActive: selector({ id: id.DIALOGS_TEXT_FG_ACTIVE, editor: state.editor }),
        dialogsNameFgActive: selector({ id: id.DIALOGS_NAME_FG_ACTIVE, editor: state.editor }),
        dialogsBgActive: selector({ id: id.DIALOGS_BG_ACTIVE, editor: state.editor }),
        hoveredElementCount: state.editor.hoveredElementCount
    }
};

export default connect(mapStateToProps)(CSSModules(UserList, styles));
