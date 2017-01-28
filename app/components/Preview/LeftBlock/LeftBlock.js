import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import UserList from 'components/Preview/LeftBlock/UserList';
import TextField from 'material-ui/TextField';

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

    _onHintTextClick() {
        this.refs.Search.input.focus();
    }

    componentDidMount() {
        this.refs.labelHintText.addEventListener('click', ::this._onHintTextClick, false);
    }

    componentWillUnmount() {
        this.refs.labelHintText.removeEventListener('click', this._onHintTextClick);
    }

    render() {
        const {
            searchIsActive
        } = this.state;

        const {
            filterInputBorderFg,
            placeholderFgActive,
            placeholderFg,
            dialogsBg,
            menuIconFg,
            menuIconFgOver,
            filterInputInactiveBg
        }  = this.props;


        return (
            <div
                styleName='left-block'
                style={{
                    background: dialogsBg.element.color,
                    ...getActiveStyle(dialogsBg)
                }}
                {...injectActionsToElement({
                    id: dialogsBg.id,
                    dispatch: this.props.dispatch
                })}
            >
                <AppBar
                    zDepth={0}
                    style={{
                        background: 'transparent',
                        height: 52
                    }}
                    iconElementLeft={
                        <IconButton
                            style={{
                                marginTop: -4
                            }}
                            iconStyle={{
                                ...getActiveStyle(menuIconFg)
                            }}
                            {...injectActionsToElement({
                                id: menuIconFg.id,
                                dispatch: this.props.dispatch
                            })}
                        >
                            <div>
                                <MenuIcon
                                    color={menuIconFg.element.color}
                                    hoverColor={menuIconFgOver.element.color}
                                />
                            </div>
                        </IconButton>
                    }
                >
                    <div
                        styleName="search-input-wrapper"
                        style={{
                            ...getActiveStyle(filterInputInactiveBg),
                            outlineOffset: 0
                        }}
                        {...injectActionsToElement({
                            id: filterInputInactiveBg.id,
                            dispatch: this.props.dispatch
                        })}
                    >
                        <TextField
                            ref='Search'
                            hintText={<span
                                ref='labelHintText'
                                style={{
                                    cursor: 'text',
                                    ...getActiveStyle(placeholderFg)
                                }}
                                {...injectActionsToElement({
                                    id: placeholderFg.id,
                                    dispatch: this.props.dispatch
                                })}
                            >
                                Search
                            </span>}
                            className={styles.searchInput}
                            style={{
                                height: 28,
                                lineHeight: '28px',
                                fontSize: 12,
                                width: 'calc(100% - 4px)',
                                transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',
                                borderColor: searchIsActive ? filterInputBorderFg.element.color : '',
                                background: searchIsActive ? '#fff' : filterInputInactiveBg.element.color
                            }}
                            inputStyle={{
                                paddingLeft: 14
                            }}
                            onFocus={::this._onFocusSearch}
                            onBlur={::this._onBlurSearch}
                            hintStyle={{
                                bottom: 0,
                                left: 14,
                                zIndex: 1,
                                color: searchIsActive ? placeholderFgActive.element.color : placeholderFg.element.color
                            }}
                            fullWidth={true}
                            underlineShow={false}
                        />
                    </div>
                </AppBar>

                <UserList />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        filterInputBorderFg: selector({ id: id.FILTER_INPUT_INACTIVE_BG, childId: id.FILTER_INPUT_BORDER_FG, editor: state.editor }),
        placeholderFgActive: selector({ id: id.PLACEHOLDER_FG, childId: id.PLACEHOLDER_FG_ACTIVE, editor: state.editor }),
        placeholderFg: selector({ id: id.PLACEHOLDER_FG, editor: state.editor }),
        filterInputInactiveBg: selector({ id: id.FILTER_INPUT_INACTIVE_BG, editor: state.editor }),
        menuIconFg: selector({ id: id.MENU_ICON_FG, editor: state.editor }),
        menuIconFgOver: selector({ id: id.MENU_ICON_FG, childId: id.MENU_ICON_FG_OVER, editor: state.editor }),
        dialogsBg: selector({ id: id.DIALOGS_BG, editor: state.editor })
    }
};

export default connect(mapStateToProps)(CSSModules(LeftBlock, styles));