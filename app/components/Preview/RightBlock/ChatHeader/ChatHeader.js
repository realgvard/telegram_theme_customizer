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
import * as id from 'config/idElements.config';

// Actions
import { injectActionsToElement } from 'components/Editor/actions';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './ChatHeader.css';


class ChatHeader extends Component {

    render() {
        const dialogsNameFg = _.head(this.props.dialogsNameFg);
        const menuIconFg = _.head(this.props.menuIconFg);
        const topBarBg = _.head(this.props.topBarBg);
        const windowActiveTextFg = _.head(this.props.windowActiveTextFg);

        return (
            <AppBar
                zDepth={0}
                title={
                    <div>
                        <div
                            style={{
                                fontSize: 12,
                                letterSpacing: 0.5,
                                height: 10,
                                marginTop: 8,
                                fontWeight: 'bold',
                            }}
                        ><span
                            style={{
                                color: dialogsNameFg.color,
                                marginTop: 8,
                                ...getActiveStyle(dialogsNameFg.editing || dialogsNameFg.hovered)
                            }}
                            {...injectActionsToElement({
                                id: id.DIALOGS_NAME_FG,
                                dispatch: this.props.dispatch
                            })}
                        >Eva Summer</span></div>
                        <span
                            style={{
                                color: windowActiveTextFg.color,
                                fontSize: 12,
                                height: 10,
                                letterSpacing: 0.5,
                                fontWidth: 100,
                                position: 'relative',
                                bottom: -5,
                                ...getActiveStyle(windowActiveTextFg.editing || windowActiveTextFg.hovered)
                            }}
                            {...injectActionsToElement({
                                id: id.WINDOW_ACTIVE_TEXT_FG,
                                dispatch: this.props.dispatch
                            })}
                        >online</span>
                    </div>
                }
                showMenuIconButton={false}
                titleStyle={{
                    height: 52,
                    lineHeight: 'inherit',
                }}
                style={{
                    background: topBarBg.color,
                    borderBottom: '1px solid #E7E7E7',
                    height: 52,
                    ...getActiveStyle(topBarBg.editing || topBarBg.hovered)
                }}
                iconElementRight={
                    <div>
                        <IconButton
                            style={{
                                marginTop: -6
                            }}
                            iconStyle={{
                                fill: menuIconFg.color,
                                transform: 'rotate(90deg)',
                                ...getActiveStyle(menuIconFg.editing || menuIconFg.hovered)
                            }}
                        >
                            <SearchIcon
                                {...injectActionsToElement({
                                    id: id.MENU_ICON_FG,
                                    dispatch: this.props.dispatch
                                })}
                            />
                        </IconButton>
                        <IconButton
                            style={{
                                marginTop: -6
                            }}
                            iconStyle={{
                                fill: menuIconFg.color,
                                ...getActiveStyle(menuIconFg.editing || menuIconFg.hovered)
                            }}
                        >
                            <MoreVertIcon
                                {...injectActionsToElement({
                                    id: id.MENU_ICON_FG,
                                    dispatch: this.props.dispatch
                                })}
                            />
                        </IconButton>
                    </div>
                }
                {...injectActionsToElement({
                    id: id.TOP_BAR_BG,
                    dispatch: this.props.dispatch
                })}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        windowActiveTextFg: _.filter(state.editor.elements, { id: id.WINDOW_ACTIVE_TEXT_FG }),
        topBarBg: _.filter(state.editor.elements, { id: id.TOP_BAR_BG }),
        dialogsNameFg: _.filter(state.editor.elements, { id: id.DIALOGS_NAME_FG }),
        menuIconFg: _.filter(state.editor.elements, { id: id.MENU_ICON_FG }),
    }
};

export default connect(mapStateToProps)(CSSModules(ChatHeader, styles));
