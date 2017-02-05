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
import { injectActionsToComponent } from 'components/SidebarEditor/actions';

// Images
import GroupIcon from 'material-ui/svg-icons/social/group';
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';
import VolumeMuteIcon from 'material-ui/svg-icons/av/volume-mute';
import BrightnessLowIcon from 'material-ui/svg-icons/device/brightness-low';
import DoneIcon from 'material-ui/svg-icons/action/done';
import PinnedIcon from './images/pinned.svg';

// JS
import userDataList from './content';
import { selector } from 'components/SidebarEditor/selector';

// Config
import * as id from 'config/idElements.config';

// Styles
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
                                        ...historyPeerUserpicFg.styles
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

                                            ...itemIsActive ? dialogsSentIconFgActive.styles :
                                                                hovered ? dialogsSentIconFgOver.styles : dialogsSentIconFg.styles
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

                                            ...itemIsActive ? dialogsDateFgActive.styles :
                                                                hovered ? dialogsDateFgOver.styles : dialogsDateFg.styles
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
                                        width: 18,
                                        height: 18,
                                        padding: 0,
                                        margin: 0,
                                        top: 22,
                                        right: 10,
                                        ...dialogsUnreadBg.styles
                                    }}
                                    badgeStyle={{
                                        backgroundColor: itemIsUnreaded ? dialogsUnreadBg.element.color : dialogsUnreadBgMuted.element.color,
                                        width: 18,
                                        height: 18,
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
                                                width: 10,
                                                height: 10,
                                                fill: itemIsActive ? dialogsUnreadBgMutedActive.element.color : dialogsUnreadBgMuted.element.color,
                                                ...itemIsActive ? dialogsUnreadBgMutedActive.styles : dialogsUnreadBg.styles
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
                                ...itemIsActive ? dialogsBgActive.styles : null || hovered ? dialogsBgOver.styles : null
                            }}
                            {...injectActionsToComponent({
                                id: itemIsActive ? dialogsBgActive.id : false || hovered ? dialogsBgOver.id : false,
                                dispatch: this.props.dispatch
                            })}
                            innerDivStyle={{
                                padding: '13px 36px 13px 72px',
                                background: itemIsActive ? dialogsBgActive.element.color : hovered ? dialogsBgOver.element.color : '',
                                position: 'inherit'
                            }}
                            primaryText={<div
                                style={{
                                    fontSize: 12,
                                    letterSpacing: 0.5,
                                    fontWeight: '500',
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

                                        ...itemIsActive ? dialogsChatIconFgActive.styles :
                                                            hovered ? dialogsChatIconFgOver.styles : dialogsChatIconFg.styles
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
                                        
                                        ...itemIsActive ? dialogsNameFgActive.styles : hovered ? dialogsNameFgOver.styles : dialogsNameFg.styles
                                    }}
                                >
                                    {primaryText}
                                </span>

                                {verified ?
                                    <span
                                        className={styles.verifiedIcon}
                                        style={{
                                            ...itemIsActive ? dialogsVerifiedIconBgActive.styles :
                                                                hovered ? dialogsVerifiedIconBgOver.styles : dialogsVerifiedIconBg.styles,

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
                                                position: 'absolute',
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

                                            ...itemIsActive ? dialogsDraftFgActive.styles :
                                                                hovered ? dialogsDraftFgOver.styles : dialogsDraftFg.styles
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

                                        ...itemIsActive ? dialogsTextFgServiceActive.styles :
                                                            hovered ? dialogsTextFgServiceOver.styles : windowActiveTextFg.styles
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

                                        ...itemIsActive ?dialogsTextFgActive.styles :
                                                            hovered ? dialogsTextFgOver.styles : dialogsTextFg.styles
                                    }}
                                    {...injectActionsToComponent({
                                        id: itemIsActive ?
                                            dialogsTextFgActive.id :
                                            hovered ? dialogsTextFgOver.id : dialogsTextFg.id,

                                        dispatch: this.props.dispatch
                                    })}
                                >{secondaryText}</span>
                            </div>}
                        />
                    })}
                </List>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

    return {
        historyPeer8UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, key: 'historyPeer8UserpicBg', editor: state.editor }),
        historyPeer7UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, key: 'historyPeer7UserpicBg', editor: state.editor }),
        historyPeer6UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, key: 'historyPeer6UserpicBg', editor: state.editor }),
        historyPeer5UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, key: 'historyPeer5UserpicBg', editor: state.editor }),
        historyPeer4UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, key: 'historyPeer4UserpicBg', editor: state.editor }),
        historyPeer3UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, key: 'historyPeer3UserpicBg', editor: state.editor }),
        historyPeer2UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, key: 'historyPeer2UserpicBg', editor: state.editor }),
        historyPeer1UserpicBg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, key: 'historyPeer1UserpicBg', editor: state.editor }),
        historyPeerUserpicFg: selector({ id: id.HISTORY_PEER_USER_PIC_FG, key: 'historyPeerUserpicFg', editor: state.editor }),
        dialogsDraftFgActive: selector({ id: id.DIALOGS_DRAFT_FG_ACTIVE, key: 'dialogsDraftFgActive', editor: state.editor }),
        dialogsDraftFgOver: selector({ id: id.DIALOGS_DRAFT_FG_OVER, key: 'dialogsDraftFgOver', editor: state.editor }),
        dialogsDraftFg: selector({ id: id.DIALOGS_DRAFT_FG, key: 'dialogsDraftFg', editor: state.editor }),
        dialogsVerifiedIconFgActive: selector({ id: id.DIALOGS_VERIFIED_ICON_BG_ACTIVE, key: 'dialogsVerifiedIconFgActive', editor: state.editor }),
        dialogsVerifiedIconBgActive: selector({ id: id.DIALOGS_VERIFIED_ICON_BG_ACTIVE, key: 'dialogsVerifiedIconBgActive', editor: state.editor }),
        dialogsVerifiedIconFgOver: selector({ id: id.DIALOGS_VERIFIED_ICON_BG_OVER, key: 'dialogsVerifiedIconFgOver', editor: state.editor }),
        dialogsVerifiedIconBgOver: selector({ id: id.DIALOGS_VERIFIED_ICON_BG_OVER, key: 'dialogsVerifiedIconBgOver', editor: state.editor }),
        dialogsVerifiedIconFg: selector({ id: id.DIALOGS_VERIFIED_ICON_BG, key: 'dialogsVerifiedIconFg', editor: state.editor }),
        dialogsVerifiedIconBg: selector({ id: id.DIALOGS_VERIFIED_ICON_BG, key: 'dialogsVerifiedIconBg', editor: state.editor }),
        dialogsSentIconFgOver: selector({ id: id.DIALOGS_SENT_ICON_FG_OVER, key: 'dialogsSentIconFgOver', editor: state.editor }),
        dialogsUnreadBgMutedOver: selector({ id: id.DIALOGS_UNREAD_BG, key: 'dialogsUnreadBgMutedOver', editor: state.editor }),
        dialogsChatIconFgOver: selector({ id: id.DIALOGS_CHAT_ICON_FG_OVER, key: 'dialogsChatIconFgOver', editor: state.editor }),
        dialogsDateFgOver: selector({ id: id.DIALOGS_DATE_FG_OVER, key: 'dialogsDateFgOver', editor: state.editor }),
        dialogsTextFgServiceOver: selector({ id: id.DIALOGS_TEXT_FG_SERVICE_OVER, key: 'dialogsTextFgServiceOver', editor: state.editor }),
        dialogsTextFgOver: selector({ id: id.DIALOGS_TEXT_FG_OVER, key: 'dialogsTextFgOver', editor: state.editor }),
        dialogsNameFgOver: selector({ id: id.DIALOGS_NAME_FG_OVER, key: 'dialogsNameFgOver', editor: state.editor }),
        dialogsUnreadBgMutedActive: selector({ id: id.DIALOGS_UNREAD_BG_MUTED_ACTIVE, key: 'dialogsUnreadBgMutedActive', editor: state.editor }),
        dialogsSentIconFgActive: selector({ id: id.DIALOGS_SENT_ICON_FG_ACTIVE, key: 'dialogsSentIconFgActive', editor: state.editor }),
        dialogsSentIconFg: selector({ id: id.DIALOGS_SENT_ICON_FG, key: 'dialogsSentIconFg', editor: state.editor }),
        dialogsBgOver: selector({ id: id.DIALOGS_BG_OVER, key: 'dialogsBgOver', editor: state.editor }),
        dialogsChatIconFgActive: selector({ id: id.DIALOGS_CHAT_ICON_FG_ACTIVE, key: 'dialogsChatIconFgActive', editor: state.editor }),
        dialogsChatIconFg: selector({ id: id.DIALOGS_CHAT_ICON_FG, key: 'dialogsChatIconFg', editor: state.editor }),
        windowBgOver: selector({ id: id.WINDOW_BG_OVER, key: 'windowBgOver', editor: state.editor }),
        dialogsTextFgServiceActive: selector({ id: id.DIALOGS_TEXT_FG_SERVICE_ACTIVE, key: 'dialogsTextFgServiceActive', editor: state.editor }),
        windowActiveTextFg: selector({ id: id.WINDOW_ACTIVE_TEXT_FG, key: 'windowActiveTextFg', editor: state.editor }),
        dialogsDateFgActive: selector({ id: id.DIALOGS_DATE_FG_ACTIVE, key: 'dialogsDateFgActive', editor: state.editor }),
        dialogsDateFg: selector({ id: id.DIALOGS_DATE_FG, key: 'dialogsDateFg', editor: state.editor }),
        dialogsTextFg: selector({ id: id.DIALOGS_TEXT_FG, key: 'dialogsTextFg', editor: state.editor }),
        dialogsNameFg: selector({ id: id.DIALOGS_NAME_FG, key: 'dialogsNameFg', editor: state.editor }),
        dialogsUnreadBgMuted: selector({ id: id.DIALOGS_UNREAD_BG, key: 'dialogsUnreadBgMuted', editor: state.editor }),
        dialogsUnreadFg: selector({ id: id.DIALOGS_UNREAD_BG, key: 'dialogsUnreadFg', editor: state.editor }),
        dialogsUnreadBg: selector({ id: id.DIALOGS_UNREAD_BG, key: 'dialogsUnreadBg', editor: state.editor }),
        dialogsTextFgActive: selector({ id: id.DIALOGS_TEXT_FG_ACTIVE, key: 'dialogsTextFgActive', editor: state.editor }),
        dialogsNameFgActive: selector({ id: id.DIALOGS_NAME_FG_ACTIVE, key: 'dialogsNameFgActive', editor: state.editor }),
        dialogsBgActive: selector({ id: id.DIALOGS_BG_ACTIVE, key: 'dialogsBgActive', editor: state.editor }),
        hoveredElementCount: state.editor.hoveredElementCount
    }
};

export default connect(mapStateToProps)(CSSModules(UserList, styles));
