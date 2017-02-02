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
import { injectActionsToComponent } from 'components/SidebarEditor/actions';

// JS
import { selector } from 'components/SidebarEditor/selector';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './ChatHeader.css';


class ChatHeader extends Component {

    render() {
        const {
            dialogsNameFg,
            menuIconFg,
            menuIconFgOver,
            topBarBg,
            windowActiveTextFg
        } = this.props;


        return (
            <AppBar
                zDepth={0}
                title={
                    <div>
                        <div
                            style={{
                                fontSize: 12,
                                letterSpacing: 0.5,
                                marginTop: 8,
                                fontWeight: 'bold',
                            }}
                        ><span
                            style={{
                                color: dialogsNameFg.element.color,
                                marginTop: 8,
                                ...getActiveStyle(dialogsNameFg)
                            }}
                            {...injectActionsToComponent({
                                id: id.DIALOGS_NAME_FG,
                                dispatch: this.props.dispatch
                            })}
                        >Eva Summer</span></div>
                        <span
                            style={{
                                color: windowActiveTextFg.element.color,
                                fontSize: 12,
                                height: 10,
                                letterSpacing: 0.5,
                                fontWidth: 100,
                                ...getActiveStyle(windowActiveTextFg)
                            }}
                            {...injectActionsToComponent({
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
                    background: topBarBg.element.color,
                    borderBottom: '1px solid #E7E7E7',
                    height: 52,
                    lineHeight: '16px',
                    ...getActiveStyle(topBarBg)
                }}
                iconElementRight={
                    <div>
                        <IconButton
                            style={{
                                marginTop: -6
                            }}
                            iconStyle={{
                                transform: 'rotate(90deg)',
                                ...getActiveStyle(menuIconFg)
                            }}
                        >
                            <div>
                                <SearchIcon
                                    color={menuIconFg.element.color}
                                    hoverColor={menuIconFgOver.element.color}
                                    {...injectActionsToComponent({
                                        id: id.MENU_ICON_FG,
                                        dispatch: this.props.dispatch
                                    })}
                                />
                            </div>
                        </IconButton>
                        <IconButton
                            style={{
                                marginTop: -6
                            }}
                            iconStyle={{
                                ...getActiveStyle(menuIconFg)
                            }}
                        >
                            <div>
                                <MoreVertIcon
                                    color={menuIconFg.element.color}
                                    hoverColor={menuIconFgOver.element.color}
                                    {...injectActionsToComponent({
                                        id: id.MENU_ICON_FG,
                                        dispatch: this.props.dispatch
                                    })}
                                />
                            </div>
                        </IconButton>
                    </div>
                }
                {...injectActionsToComponent({
                    id: id.TOP_BAR_BG,
                    dispatch: this.props.dispatch
                })}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        windowActiveTextFg: selector({ id: id.WINDOW_ACTIVE_TEXT_FG, editor: state.editor }),
        topBarBg: selector({ id: id.TOP_BAR_BG, editor: state.editor }),
        dialogsNameFg: selector({ id: id.DIALOGS_NAME_FG, editor: state.editor }),
        menuIconFgOver: selector({ id: id.MENU_ICON_FG, childId: id.MENU_ICON_FG_OVER, editor: state.editor }),
        menuIconFg: selector({ id: id.MENU_ICON_FG, editor: state.editor }),
    }
};

export default connect(mapStateToProps)(CSSModules(ChatHeader, styles));
