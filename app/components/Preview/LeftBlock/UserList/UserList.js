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

// Config
import * as id from 'config/idElements.config';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './User-list.css';


class UserList extends Component {

    render() {
        const dialogsBgActive = _.head(this.props.dialogsBgActive);
        const dialogsNameFgActive = _.head(this.props.dialogsNameFgActive);
        const dialogsTextFgActive = _.head(this.props.dialogsTextFgActive);
        const dialogsUnreadBg = _.head(this.props.dialogsUnreadBg);
        const dialogsUnreadBgMuted = _.head(this.props.dialogsUnreadBgMuted);
        const dialogsNameFg = _.head(this.props.dialogsNameFg);
        const dialogsTextFg = _.head(this.props.dialogsTextFg);
        const dialogsDateFg = _.head(this.props.dialogsDateFg);
        const dialogsDateFgActive = _.head(this.props.dialogsDateFgActive);
        const windowActiveTextFg = _.head(this.props.windowActiveTextFg);
        const dialogsTextFgServiceActive = _.head(this.props.dialogsTextFgServiceActive);
        const historyPeerUserpicFg = _.head(this.props.historyPeerUserpicFg);


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
                                        color: historyPeerUserpicFg.color,
                                        ...getActiveStyle(historyPeerUserpicFg.editing || historyPeerUserpicFg.hovered)
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
                                        color: itemIsActive ? dialogsDateFgActive.color : dialogsDateFg.color,
                                        ...getActiveStyle(itemIsActive && (dialogsDateFgActive.editing || dialogsDateFgActive.hovered) ||
                                                            !itemIsActive && (dialogsDateFg.editing || dialogsDateFg.hovered))
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
                                        ...getActiveStyle(itemIsUnreaded && (dialogsUnreadBg.editing || dialogsUnreadBg.hovered) ||
                                            !itemIsUnreaded && (dialogsUnreadBgMuted.editing || dialogsUnreadBgMuted.hovered))
                                    }}
                                    badgeStyle={{
                                        backgroundColor: itemIsUnreaded ? dialogsUnreadBg.color : dialogsUnreadBgMuted.color,
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
                                ...getActiveStyle(itemIsActive && (dialogsBgActive.editing || dialogsBgActive.hovered))
                            }}
                            innerDivStyle={{
                                padding: '13px 36px 13px 72px',
                                background: itemIsActive ? dialogsBgActive.color : '',
                                position: 'inherit'
                            }}
                            primaryText={<div
                                {...injectActionsToElement({
                                    id: itemIsActive ? id.DIALOGS_NAME_FG_ACTIVE : id.DIALOGS_NAME_FG,
                                    dispatch: this.props.dispatch
                                })}
                                style={{
                                    color: itemIsActive ? dialogsNameFgActive.color : dialogsNameFg.color,
                                    fontSize: 12,
                                    letterSpacing: 0.5,
                                    fontWeight: 'bold',
                                    display: 'inline-block',
                                    ...getActiveStyle(itemIsActive && (dialogsNameFgActive.editing || dialogsNameFgActive.hovered) ||
                                                        !itemIsActive && (dialogsNameFg.editing || dialogsNameFg.hovered))
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
                                        color: itemIsActive ? dialogsTextFgServiceActive.color : windowActiveTextFg.color,
                                        ...getActiveStyle(itemIsActive && (dialogsTextFgServiceActive.editing || dialogsTextFgServiceActive.hovered) ||
                                                            !itemIsActive && (windowActiveTextFg.editing || windowActiveTextFg.hovered))
                                    }}
                                    {...injectActionsToElement({
                                        id: itemIsActive ? id.DIALOGS_TEXT_FG_SERVICE_ACTIVE : id.WINDOW_ACTIVE_TEXT_FG,
                                        dispatch: this.props.dispatch
                                    })}
                                >{textService}</span> : null}
                                <span
                                    className={styles.secondaryText}
                                    style={{
                                        color: itemIsActive ? dialogsTextFgActive.color : dialogsTextFg.color,
                                        ...getActiveStyle(itemIsActive && (dialogsTextFgActive.editing || dialogsTextFgActive.hovered) ||
                                                            !itemIsActive && (dialogsTextFg.editing || dialogsTextFg.hovered))
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
        historyPeerUserpicFg: _.filter(state.editor.elements, { id: id.HISTORY_PEER_USER_PIC_FG }),
        dialogsTextFgServiceActive: _.filter(state.editor.elements, { id: id.DIALOGS_TEXT_FG_SERVICE_ACTIVE }),
        windowActiveTextFg: _.filter(state.editor.elements, { id: id.WINDOW_ACTIVE_TEXT_FG }),
        dialogsDateFgActive: _.filter(state.editor.elements, { id: id.DIALOGS_DATE_FG_ACTIVE }),
        dialogsDateFg: _.filter(state.editor.elements, { id: id.DIALOGS_DATE_FG }),
        dialogsTextFg: _.filter(state.editor.elements, { id: id.DIALOGS_TEXT_FG }),
        dialogsNameFg: _.filter(state.editor.elements, { id: id.DIALOGS_NAME_FG }),
        dialogsUnreadBgMuted: _.filter(state.editor.elements, { id: id.DIALOGS_UNREAD_BG_MUTED }),
        dialogsUnreadBg: _.filter(state.editor.elements, { id: id.DIALOGS_UNREAD_BG }),
        dialogsTextFgActive: _.filter(state.editor.elements, { id: id.DIALOGS_TEXT_FG_ACTIVE }),
        dialogsNameFgActive: _.filter(state.editor.elements, { id: id.DIALOGS_NAME_FG_ACTIVE }),
        dialogsBgActive: _.filter(state.editor.elements, { id: id.DIALOGS_BG_ACTIVE }),
        hoveredElementCount: state.editor.hoveredElementCount
    }
};

export default connect(mapStateToProps)(CSSModules(UserList, styles));
