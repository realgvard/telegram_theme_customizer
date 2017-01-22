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
import {
    injectActionsToElement,
    setHoverOnElement,
    unsetHoverOnElement,
    setEditingElement
} from 'components/Editor/actions';

// JS
import userDataList from './content';

// Config
import * as id from 'components/config/idElements.config';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './User-list.css';


class UserList extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const dialogsBgActive = _.head(this.props.dialogsBgActive);
        const dialogsNameFgActive = _.head(this.props.dialogsNameFgActive);
        const dialogsTextFgActive = _.head(this.props.dialogsTextFgActive);
        const dialogsUnreadBg = _.head(this.props.dialogsUnreadBg);
        const dialogsUnreadBgMuted = _.head(this.props.dialogsUnreadBgMuted);
        const dialogsNameFg = _.head(this.props.dialogsNameFg);
        const dialogsTextFg = _.head(this.props.dialogsTextFg);


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
                        secondaryText,
                        badgeContent,
                        itemIsUnreaded,
                        itemIsActive = false,
                    }, index) => {

                        return <ListItem
                            key={index}
                            hoverColor="rgba(0,0,0,0.05)"
                            leftAvatar={
                                <Avatar
                                    style={{
                                        top: 12
                                    }}
                                    backgroundColor={avatarBackgroundColor}
                                >
                                    {avatarText}
                                </Avatar>
                            }
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
                                    ...getActiveStyle(itemIsActive && (dialogsNameFgActive.editing || dialogsNameFgActive.hovered) ||
                                                        !itemIsActive && (dialogsNameFg.editing || dialogsNameFg.hovered))
                                }}
                            >{primaryText}</div>}
                            secondaryText={<div
                                {...injectActionsToElement({
                                    id: itemIsActive ? id.DIALOGS_TEXT_FG_ACTIVE : id.DIALOGS_TEXT_FG,
                                    dispatch: this.props.dispatch
                                })}
                                style={{
                                    color: itemIsActive ? dialogsTextFgActive.color : dialogsTextFg.color,
                                    fontSize: 12,
                                    letterSpacing: 0.5,
                                    ...getActiveStyle(itemIsActive && (dialogsTextFgActive.editing || dialogsTextFgActive.hovered) ||
                                                        !itemIsActive && (dialogsTextFg.editing || dialogsTextFg.hovered))
                                }}
                            >{secondaryText}</div>}
                            rightIcon={
                                badgeContent ? <Badge
                                    badgeContent={badgeContent}
                                    secondary={true}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        padding: 0,
                                        margin: 10,
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
                                /> : null
                            }
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
