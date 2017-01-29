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
import { injectActionsToComponent } from 'components/Editor/actions';

// Images
import GroupIcon from 'material-ui/svg-icons/social/group';
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';
import PinnedIcon from 'material-ui/svg-icons/content/create';
import VolumeMuteIcon from 'material-ui/svg-icons/av/volume-mute';
import BrightnessLowIcon from 'material-ui/svg-icons/device/brightness-low';
import DoneIcon from 'material-ui/svg-icons/action/done';

// JS
import userDataList from './content';
import { selector } from 'components/Editor/selector';

// Config
import * as id from 'config/idElements.config';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './User-list.css';


class UserList extends Component {

    _getAvatarColor(key) {
        const {
            historyPeer1UserpicBg,
            historyPeer2UserpicBg,
            historyPeer3UserpicBg,
            historyPeer4UserpicBg,
            historyPeer5UserpicBg,
            historyPeer6UserpicBg,
            historyPeer7UserpicBg,
            historyPeer8UserpicBg
        } = this.props;

        switch(key) {

            case 'historyPeer1UserpicBg' :
                return historyPeer1UserpicBg.element.color;

            case 'historyPeer2UserpicBg' :
                return historyPeer2UserpicBg.element.color;

            case 'historyPeer3UserpicBg' :
                return historyPeer3UserpicBg.element.color;

            case 'historyPeer4UserpicBg' :
                return historyPeer4UserpicBg.element.color;

            case 'historyPeer5UserpicBg' :
                return historyPeer5UserpicBg.element.color;

            case 'historyPeer6UserpicBg' :
                return historyPeer6UserpicBg.element.color;

            case 'historyPeer7UserpicBg' :
                return historyPeer7UserpicBg.element.color;

            case 'historyPeer8UserpicBg' :
                return historyPeer8UserpicBg.element.color;
        }
    }

    render() {
        const {
            dialogsDraftFgActive,
            dialogsDraftFgOver,
            dialogsDraftFg,
            dialogsVerifiedIconFgActive,
            dialogsVerifiedIconBgActive,
            dialogsVerifiedIconFgOver,
            dialogsVerifiedIconBgOver,
            dialogsVerifiedIconFg,
            dialogsVerifiedIconBg,
            dialogsSentIconFgOver,
            dialogsChatIconFgOver,
            dialogsUnreadBgMutedOver,
            dialogsDateFgOver,
            dialogsTextFgServiceOver,
            dialogsTextFgOver,
            dialogsNameFgOver,
            dialogsUnreadBgMutedActive,
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
                        colorKey,
                        avatarText,
                        primaryText,
                        receivedDate,
                        secondaryText,
                        badgeContent,
                        itemIsUnreaded,
                        textService,
                        itemIsActive = false,
                        isDraft,
                        isGroup,
                        isChannel,
                        verified,
                        hovered,
                        sentIcon,
                        pinned,
                    }, index) => {

                        let PrimaryTextIcon = null;

                        if(isGroup) {
                            PrimaryTextIcon = GroupIcon;
                        } else if (isChannel) {
                            PrimaryTextIcon = VolumeMuteIcon;
                        }

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
                                    backgroundColor={::this._getAvatarColor(colorKey)}
                                    {...injectActionsToComponent({
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

                                <div className={styles.receivedDate}>
                                    {sentIcon ? <DoneAllIcon
                                        style={{
                                            width: 15,
                                            height: 15,
                                            verticalAlign: 'bottom',
                                            marginRight: 2,
                                            color: itemIsActive ?
                                                    dialogsSentIconFgActive.element.color :
                                                    hovered ? dialogsSentIconFgOver.element.color : dialogsSentIconFg.element.color,

                                            ...getActiveStyle(itemIsActive ?
                                                                dialogsSentIconFgActive :
                                                                hovered ? dialogsSentIconFgOver : dialogsSentIconFg)
                                        }}
                                        {...injectActionsToComponent({
                                            id: itemIsActive ?
                                                dialogsSentIconFgActive.id :
                                                hovered ? dialogsSentIconFgOver.id : dialogsSentIconFg.id,

                                            dispatch: this.props.dispatch,
                                        })}
                                    /> : null}

                                    <span
                                        style={{
                                            color: itemIsActive ?
                                                    dialogsDateFgActive.element.color :
                                                    hovered ? dialogsDateFgOver.element.color : dialogsDateFg.element.color,

                                            ...getActiveStyle(itemIsActive ?
                                                                dialogsDateFgActive :
                                                                hovered ? dialogsDateFgOver : dialogsDateFg)
                                        }}
                                        {...injectActionsToComponent({
                                            id: itemIsActive ?
                                                dialogsDateFgActive.id :
                                                hovered ? dialogsDateFgOver.id : dialogsDateFg.id,
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
                                    {...injectActionsToComponent({
                                        id: dialogsUnreadBg.id,
                                        dispatch: this.props.dispatch
                                    })}
                                /> : null}

                                {pinned ?
                                    <div
                                        className={styles.iconRightBottom}
                                    >
                                        <PinnedIcon
                                            styleName="pinned-icon"
                                            style={{
                                                width: 16,
                                                height: 16,
                                                color: itemIsActive ? dialogsUnreadBgMutedActive.element.color : dialogsUnreadBgMuted.element.color,
                                                ...getActiveStyle(itemIsActive ? dialogsUnreadBgMutedActive : dialogsUnreadBg)
                                            }}
                                            {...injectActionsToComponent({
                                                id: itemIsActive ? dialogsUnreadBgMutedActive.id : dialogsUnreadBg.id,
                                                dispatch: this.props.dispatch
                                            })}
                                        />
                                    </div>
                                : null}
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
                            >{PrimaryTextIcon ?
                                <PrimaryTextIcon
                                    style={{
                                        width: isGroup ? 15 : 16,
                                        height: isGroup ? 15 : 16,
                                        verticalAlign: 'bottom',
                                        marginRight: isGroup ? 4 : 2,
                                        color: itemIsActive ?
                                                dialogsChatIconFgActive.element.color :
                                                hovered ? dialogsChatIconFgOver.element.color : dialogsChatIconFg.element.color,

                                        ...getActiveStyle(itemIsActive ?
                                                            dialogsChatIconFgActive :
                                                            hovered ? dialogsChatIconFgOver : dialogsChatIconFg)
                                    }}
                                    {...injectActionsToComponent({
                                        id: itemIsActive ?
                                            dialogsChatIconFgActive.id :
                                            hovered ? dialogsChatIconFgOver.id : dialogsChatIconFg.id,
                                        dispatch: this.props.dispatch,
                                    })}
                                /> : null}

                                <span
                                    {...injectActionsToComponent({
                                        id: itemIsActive ? dialogsNameFgActive.id : hovered ? dialogsNameFgOver.id : dialogsNameFg.id,
                                        dispatch: this.props.dispatch
                                    })}
                                    style={{
                                        color: itemIsActive ?
                                                dialogsNameFgActive.element.color :
                                                hovered ? dialogsNameFgOver.element.color : dialogsNameFg.element.color,
                                        
                                        ...getActiveStyle(itemIsActive ? dialogsNameFgActive : hovered ? dialogsNameFgOver : dialogsNameFg)
                                    }}
                                >
                                    {primaryText}
                                </span>

                                {verified ?
                                    <span
                                        className={styles.verifiedIcon}
                                        style={{
                                            ...getActiveStyle(itemIsActive ?
                                                                dialogsVerifiedIconBgActive :
                                                                hovered ? dialogsVerifiedIconBgOver : dialogsVerifiedIconBg),

                                            outlineOffset: 0
                                        }}
                                        {...injectActionsToComponent({
                                            id: itemIsActive ?
                                                dialogsVerifiedIconBgActive.id :
                                                hovered ? dialogsVerifiedIconBgOver.id : dialogsVerifiedIconBg.id,

                                            dispatch: this.props.dispatch
                                        })}
                                    >
                                        <BrightnessLowIcon
                                            style={{
                                                width: 14,
                                                height: 14,
                                                color: itemIsActive ?
                                                        dialogsVerifiedIconBgActive.element.color :
                                                        hovered ? dialogsVerifiedIconBgOver.element.color : dialogsVerifiedIconBg.element.color
                                            }}
                                        />

                                        <div
                                            className={styles.checkIcon}
                                            style={{
                                                background: itemIsActive ?
                                                                dialogsVerifiedIconBgActive.element.color :
                                                                hovered ? dialogsVerifiedIconBgOver.element.color : dialogsVerifiedIconBg.element.color
                                            }}
                                        >
                                            <DoneIcon
                                                style={{
                                                    width: 8,
                                                    height: 8,
                                                    color: itemIsActive ?
                                                            dialogsVerifiedIconFgActive.element.color :
                                                            hovered ? dialogsVerifiedIconFgOver.element.color : dialogsVerifiedIconFg.element.color,

                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0
                                                }}
                                            />
                                        </div>
                                    </span>
                                    : null}
                            </div>}
                            secondaryText={<div
                                style={{
                                    fontSize: 12,
                                    letterSpacing: 0.5,
                                }}
                            >
                                {isDraft ?
                                    <span
                                        className={styles.draftText}
                                        style={{
                                            color: itemIsActive ?
                                                    dialogsDraftFgActive.element.color :
                                                    hovered ? dialogsDraftFgOver.element.color : dialogsDraftFg.element.color,
                                            ...getActiveStyle(itemIsActive ?
                                                                dialogsDraftFgActive :
                                                                hovered ? dialogsDraftFgOver : dialogsDraftFg)
                                        }}
                                        {...injectActionsToComponent({
                                            id: itemIsActive ?
                                                dialogsDraftFgActive.id :
                                                hovered ? dialogsDraftFgOver.id : dialogsDraftFg.id,

                                            dispatch: this.props.dispatch
                                        })}
                                    >
                                        Draft:
                                    </span>
                                    : null}
                                {textService ? <span
                                    className={styles.textService}
                                    style={{
                                        color: itemIsActive ? dialogsTextFgServiceActive.element.color :
                                                hovered ? dialogsTextFgServiceOver.element.color : windowActiveTextFg.element.color,

                                        ...getActiveStyle(itemIsActive ?
                                                            dialogsTextFgServiceActive :
                                                            hovered ? dialogsTextFgServiceOver : windowActiveTextFg)
                                    }}
                                    {...injectActionsToComponent({
                                        id: itemIsActive ?
                                            dialogsTextFgServiceActive.id :
                                            hovered ? dialogsTextFgServiceOver.id : windowActiveTextFg.id,

                                        dispatch: this.props.dispatch
                                    })}
                                >{textService}</span> : null}

                                <span
                                    className={styles.secondaryText}
                                    style={{
                                        color: itemIsActive ?
                                                dialogsTextFgActive.element.color :
                                                hovered ? dialogsTextFgOver.element.color : dialogsTextFg.element.color,
                                        ...getActiveStyle(itemIsActive ?
                                                            dialogsTextFgActive :
                                                            hovered ? dialogsTextFgOver : dialogsTextFg)
                                    }}
                                    {...injectActionsToComponent({
                                        id: itemIsActive ?
                                            dialogsTextFgActive.id :
                                            hovered ? dialogsTextFgOver.id : dialogsTextFg.id,

                                        dispatch: this.props.dispatch
                                    })}
                                >{secondaryText}</span>
                            </div>}
                            {...injectActionsToComponent({
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
        historyPeer8UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, childId: id.HISTORY_PEER_8_USER_PIC_BG, editor: state.editor }),
        historyPeer7UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, childId: id.HISTORY_PEER_7_USER_PIC_BG, editor: state.editor }),
        historyPeer6UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, childId: id.HISTORY_PEER_6_USER_PIC_BG, editor: state.editor }),
        historyPeer5UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, childId: id.HISTORY_PEER_5_USER_PIC_BG, editor: state.editor }),
        historyPeer4UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, childId: id.HISTORY_PEER_4_USER_PIC_BG, editor: state.editor }),
        historyPeer3UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, childId: id.HISTORY_PEER_3_USER_PIC_BG, editor: state.editor }),
        historyPeer2UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, childId: id.HISTORY_PEER_2_USER_PIC_BG, editor: state.editor }),
        historyPeer1UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, childId: id.HISTORY_PEER_1_USER_PIC_BG, editor: state.editor }),
        dialogsDraftFgActive: selector({ id: id.DIALOGS_DRAFT_FG_ACTIVE, editor: state.editor }),
        dialogsDraftFgOver: selector({ id: id.DIALOGS_DRAFT_FG_OVER, editor: state.editor }),
        dialogsDraftFg: selector({ id: id.DIALOGS_DRAFT_FG, editor: state.editor }),
        dialogsVerifiedIconFgActive: selector({ id: id.DIALOGS_VERIFIED_ICON_BG_ACTIVE, childId: id.DIALOGS_VERIFIED_ICON_FG_ACTIVE, editor: state.editor }),
        dialogsVerifiedIconBgActive: selector({ id: id.DIALOGS_VERIFIED_ICON_BG_ACTIVE, editor: state.editor }),
        dialogsVerifiedIconFgOver: selector({ id: id.DIALOGS_VERIFIED_ICON_BG_OVER, childId: id.DIALOGS_VERIFIED_ICON_FG_OVER, editor: state.editor }),
        dialogsVerifiedIconBgOver: selector({ id: id.DIALOGS_VERIFIED_ICON_BG_OVER, editor: state.editor }),
        dialogsVerifiedIconFg: selector({ id: id.DIALOGS_VERIFIED_ICON_BG, childId: id.DIALOGS_VERIFIED_ICON_FG, editor: state.editor }),
        dialogsVerifiedIconBg: selector({ id: id.DIALOGS_VERIFIED_ICON_BG, editor: state.editor }),
        dialogsSentIconFgOver: selector({ id: id.DIALOGS_SENT_ICON_FG_OVER, editor: state.editor }),
        dialogsUnreadBgMutedOver: selector({ id: id.DIALOGS_UNREAD_BG, childId: id.DIALOGS_UNREAD_BG_MUTED_OVER, editor: state.editor }),
        dialogsChatIconFgOver: selector({ id: id.DIALOGS_CHAT_ICON_FG_OVER, editor: state.editor }),
        dialogsDateFgOver: selector({ id: id.DIALOGS_DATE_FG_OVER, editor: state.editor }),
        dialogsTextFgServiceOver: selector({ id: id.DIALOGS_TEXT_FG_SERVICE_OVER, editor: state.editor }),
        dialogsTextFgOver: selector({ id: id.DIALOGS_TEXT_FG_OVER, editor: state.editor }),
        dialogsNameFgOver: selector({ id: id.DIALOGS_NAME_FG_OVER, editor: state.editor }),
        dialogsUnreadBgMutedActive: selector({ id: id.DIALOGS_UNREAD_BG_MUTED_ACTIVE, editor: state.editor }),
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
