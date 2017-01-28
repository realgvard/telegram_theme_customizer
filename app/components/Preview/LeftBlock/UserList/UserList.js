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

// Images
import GroupIcon from 'material-ui/svg-icons/social/group';
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';

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
            dialogsSentIconFgActive,
            dialogsSentIconFg,
            dialogsBgOver,
            dialogsChatIconFgActive,
            dialogsChatIconFg,
            windowBgOver,
            dialogsBgActive,
            dialogsNameFgActive,
            dialogsTextFgActive,
            dialogsUnreadFg,
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
                        group,
                        hovered,
                        sentIcon,
                        pinned,
                    }, index) => {

                        return <ListItem
                            key={index}
                            hoverColor={dialogsBgOver.element.color}
                            leftAvatar={
                                <Avatar
                                    style={{
                                        top: 12,
                                        fontSize: 16,
                                        color: historyPeerUserpicFg.element.color,
                                        ...getActiveStyle(historyPeerUserpicFg)
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

                                >
                                    {sentIcon ? <DoneAllIcon
                                        style={{
                                            width: 15,
                                            height: 15,
                                            verticalAlign: 'bottom',
                                            marginRight: 2,
                                            color: itemIsActive ? dialogsSentIconFgActive.element.color : dialogsSentIconFg.element.color,
                                            ...getActiveStyle(itemIsActive ? dialogsSentIconFgActive : dialogsSentIconFg)
                                        }}
                                        {...injectActionsToElement({
                                            id: itemIsActive ? dialogsSentIconFgActive.id : dialogsSentIconFg.id,
                                            dispatch: this.props.dispatch,
                                        })}
                                    /> : null}

                                    <span
                                        style={{
                                            color: itemIsActive ? dialogsDateFgActive.element.color : dialogsDateFg.element.color,
                                            ...getActiveStyle(itemIsActive ? dialogsDateFgActive : dialogsDateFg)
                                        }}
                                        {...injectActionsToElement({
                                            id: itemIsActive ? dialogsDateFgActive.id : dialogsDateFg.id,
                                            dispatch: this.props.dispatch
                                        })}
                                    >
                                        {receivedDate}
                                    </span>
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
                                        ...getActiveStyle(dialogsUnreadBg)
                                    }}
                                    badgeStyle={{
                                        backgroundColor: itemIsUnreaded ? dialogsUnreadBg.element.color : dialogsUnreadBgMuted.element.color,
                                        width: 20,
                                        height: 20,
                                        fontSize: 10,
                                        color: dialogsUnreadFg.element.color
                                    }}
                                    {...injectActionsToElement({
                                        id: dialogsUnreadBg.id,
                                        dispatch: this.props.dispatch
                                    })}
                                /> : null}
                            </div>}
                            style={{
                                height: 62,
                                ...getActiveStyle(itemIsActive ? dialogsBgActive : null || hovered ? dialogsBgOver : null)
                            }}
                            innerDivStyle={{
                                padding: '13px 36px 13px 72px',
                                background: itemIsActive ? dialogsBgActive.element.color : hovered ? dialogsBgOver.element.color : '',
                                position: 'inherit'
                            }}
                            primaryText={<div
                                style={{
                                    fontSize: 12,
                                    letterSpacing: 0.5,
                                    fontWeight: 'bold',
                                    display: 'inline-block',
                                }}
                            >{group ?
                                <GroupIcon
                                    style={{
                                        width: 15,
                                        height: 15,
                                        verticalAlign: 'bottom',
                                        marginRight: 4,
                                        color: itemIsActive ? dialogsChatIconFgActive.element.color : dialogsChatIconFg.element.color,
                                        ...getActiveStyle(itemIsActive ? dialogsChatIconFgActive : dialogsChatIconFg)
                                    }}
                                    {...injectActionsToElement({
                                        id: itemIsActive ? dialogsChatIconFgActive.id : dialogsChatIconFg.id,
                                        dispatch: this.props.dispatch,
                                    })}
                                />
                                : null}

                                <span
                                    {...injectActionsToElement({
                                        id: itemIsActive ? id.DIALOGS_NAME_FG_ACTIVE : id.DIALOGS_NAME_FG,
                                        dispatch: this.props.dispatch
                                    })}
                                    style={{
                                        color: itemIsActive ? dialogsNameFgActive.element.color : dialogsNameFg.element.color,
                                        ...getActiveStyle(itemIsActive ? dialogsNameFgActive : dialogsNameFg)
                                    }}
                                >
                                    {primaryText}
                                </span>
                            </div>}
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
                                        ...getActiveStyle(itemIsActive ? dialogsTextFgServiceActive : windowActiveTextFg)
                                    }}
                                    {...injectActionsToElement({
                                        id: itemIsActive ? dialogsTextFgServiceActive.id : windowActiveTextFg.id,
                                        dispatch: this.props.dispatch
                                    })}
                                >{textService}</span> : null}
                                <span
                                    className={styles.secondaryText}
                                    style={{
                                        color: itemIsActive ? dialogsTextFgActive.element.color : dialogsTextFg.element.color,
                                        ...getActiveStyle(itemIsActive ? dialogsTextFgActive : dialogsTextFg)
                                    }}
                                    {...injectActionsToElement({
                                        id: itemIsActive ? dialogsTextFgActive.id : dialogsTextFg.id,
                                        dispatch: this.props.dispatch
                                    })}
                                >{secondaryText}</span>
                            </div>}
                            {...injectActionsToElement({
                                id: itemIsActive ? id.DIALOGS_BG_ACTIVE : false || hovered ? id.DIALOGS_BG_OVER : false,
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
        dialogsSentIconFgActive: selector({ id: id.DIALOGS_SENT_ICON_FG_ACTIVE, editor: state.editor }),
        dialogsSentIconFg: selector({ id: id.DIALOGS_SENT_ICON_FG, editor: state.editor }),
        dialogsBgOver: selector({ id: id.DIALOGS_BG_OVER, editor: state.editor }),
        dialogsChatIconFgActive: selector({ id: id.DIALOGS_CHAT_ICON_FG_ACTIVE, editor: state.editor }),
        dialogsChatIconFg: selector({ id: id.DIALOGS_CHAT_ICON_FG, editor: state.editor }),
        windowBgOver: selector({ id: id.WINDOW_BG_OVER, editor: state.editor }),
        historyPeerUserpicFg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, editor: state.editor }),
        dialogsTextFgServiceActive: selector({ id: id.DIALOGS_TEXT_FG_SERVICE_ACTIVE, editor: state.editor }),
        windowActiveTextFg: selector({ id: id.WINDOW_ACTIVE_TEXT_FG, editor: state.editor }),
        dialogsDateFgActive: selector({ id: id.DIALOGS_DATE_FG_ACTIVE, editor: state.editor }),
        dialogsDateFg: selector({ id: id.DIALOGS_DATE_FG, editor: state.editor }),
        dialogsTextFg: selector({ id: id.DIALOGS_TEXT_FG, editor: state.editor }),
        dialogsNameFg: selector({ id: id.DIALOGS_NAME_FG, editor: state.editor }),
        dialogsUnreadBgMuted: selector({ id: id.DIALOGS_UNREAD_BG, childId: id.DIALOGS_UNREAD_BG_MUTED, editor: state.editor }),
        dialogsUnreadFg: selector({ id: id.DIALOGS_UNREAD_BG, childId: id.DIALOGS_UNREAD_FG, editor: state.editor }),
        dialogsUnreadBg: selector({ id: id.DIALOGS_UNREAD_BG, editor: state.editor }),
        dialogsTextFgActive: selector({ id: id.DIALOGS_TEXT_FG_ACTIVE, editor: state.editor }),
        dialogsNameFgActive: selector({ id: id.DIALOGS_NAME_FG_ACTIVE, editor: state.editor }),
        dialogsBgActive: selector({ id: id.DIALOGS_BG_ACTIVE, editor: state.editor }),
        hoveredElementCount: state.editor.hoveredElementCount
    }
};

export default connect(mapStateToProps)(CSSModules(UserList, styles));
