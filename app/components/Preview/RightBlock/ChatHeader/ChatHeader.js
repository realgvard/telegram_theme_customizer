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
import { selector } from 'libs/selector';

// Styles
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
                                fontWeight: '500',
                            }}
                        ><span
                            style={{
                                color: dialogsNameFg.element.color,
                                marginTop: 8,
                                ...dialogsNameFg.styles
                            }}
                            {...injectActionsToComponent({
                                id: dialogsNameFg.id,
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
                                ...windowActiveTextFg.styles
                            }}
                            {...injectActionsToComponent({
                                id: windowActiveTextFg.id,
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
                    ...topBarBg.styles
                }}
                iconElementRight={
                    <div>
                        <IconButton
                            style={{
                                marginTop: -6
                            }}
                            iconStyle={{
                                transform: 'rotate(90deg)',
                                ...menuIconFg.styles
                            }}
                        >
                            <div>
                                <SearchIcon
                                    color={menuIconFg.element.color}
                                    hoverColor={menuIconFgOver.element.color}
                                    {...injectActionsToComponent({
                                        id: menuIconFg.id,
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
                                ...menuIconFg.styles
                            }}
                        >
                            <div>
                                <MoreVertIcon
                                    color={menuIconFg.element.color}
                                    hoverColor={menuIconFgOver.element.color}
                                    {...injectActionsToComponent({
                                        id: menuIconFg.id,
                                        dispatch: this.props.dispatch
                                    })}
                                />
                            </div>
                        </IconButton>
                    </div>
                }
                {...injectActionsToComponent({
                    id: topBarBg.id,
                    dispatch: this.props.dispatch
                })}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        windowActiveTextFg: selector({ id: id.WINDOW_ACTIVE_TEXT_FG, key: 'windowActiveTextFg', editor: state.editor }),
        topBarBg: selector({ id: id.TOP_BAR_BG, key: 'topBarBg', editor: state.editor }),
        dialogsNameFg: selector({ id: id.DIALOGS_NAME_FG, key: 'dialogsNameFg', editor: state.editor }),
        menuIconFgOver: selector({ id: id.MENU_ICON_FG, key: 'menuIconFgOver', editor: state.editor }),
        menuIconFg: selector({ id: id.MENU_ICON_FG, key: 'menuIconFg', editor: state.editor }),
    }
};

export default connect(mapStateToProps)(CSSModules(ChatHeader, styles));
