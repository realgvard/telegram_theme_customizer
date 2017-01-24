import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import UserList from 'components/Preview/LeftBlock/UserList';

// Actions
import { injectActionsToElement } from 'components/Editor/actions';

// JS
import { selector } from 'components/Editor/selector';

// Config
import * as id from 'config/idElements.config';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './LeftBlock.css';


class LeftBlock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchIsActive: false,
        }
    }

    _onFocusSearch() {
        this.setState({
            searchIsActive: true
        })
    }

    _onBlurSearch() {
        this.setState({
            searchIsActive: false
        })
    }

    render() {
        const {
            searchIsActive
        } = this.state;

        const {
            hoveredElementCount,
            dialogsBg,
            menuIconFg,
            filterInputInactiveBg
        }  = this.props;


        return (
            <div
                styleName='left-block'
                style={{
                    background: dialogsBg.element.color,
                    ...getActiveStyle(dialogsBg.state.hovered || dialogsBg.state.editing)
                }}
                {...injectActionsToElement({
                    id: id.DIALOGS_BG,
                    editCondition: hoveredElementCount === 1,
                    dispatch: this.props.dispatch
                })}
            >
                <AppBar
                    zDepth={0}

                    style={{
                        background: 'transparent',
                        height: 52
                    }}
                    iconStyleLeft={{
                    }}
                    iconElementLeft={
                        <IconButton
                            style={{
                                marginTop: -4
                            }}
                            iconStyle={{
                                fill: menuIconFg.element.color,
                                ...getActiveStyle(menuIconFg.state.editing || menuIconFg.state.hovered)
                            }}
                            {...injectActionsToElement({
                                id: id.MENU_ICON_FG,
                                dispatch: this.props.dispatch
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                    }
                >
                    <input type="text"
                           styleName="search-input"
                           placeholder="Search"
                           style={{
                               borderColor: searchIsActive ? '#43A8E6' : '',
                               background: searchIsActive ? '#fff' : filterInputInactiveBg.element.color,
                               ...getActiveStyle(filterInputInactiveBg.state.editing || filterInputInactiveBg.state.hovered)
                           }}
                           onFocus={::this._onFocusSearch}
                           onBlur={::this._onBlurSearch}
                           {...injectActionsToElement({
                               id: id.FILTER_INPUT_INACTIVE_BG,
                               dispatch: this.props.dispatch
                           })}
                    />
                </AppBar>
                <UserList />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        filterInputInactiveBg: selector({ id: id.FILTER_INPUT_INACTIVE_BG, editor: state.editor }),
        menuIconFg: selector({ id: id.MENU_ICON_FG, editor: state.editor }),
        dialogsBg: selector({ id: id.DIALOGS_BG, editor: state.editor }),
        hoveredElementCount: state.editor.hoveredElementCount
    }
};

export default connect(mapStateToProps)(CSSModules(LeftBlock, styles));