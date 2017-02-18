import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

// Components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

// Images
import MicIcon from 'material-ui/svg-icons/av/mic';
import AttachFileIcon from 'material-ui/svg-icons/editor/attach-file';
import InsertEmoticonIcon from 'material-ui/svg-icons/editor/insert-emoticon';

// Config
import * as id from 'config/idElements.config';

// JS
import { selector } from 'libs/selector';

// Actions
import { injectActionsToComponent } from 'components/SidebarEditor/actions';

// Styles
import styles from './MessageDispatcher.css';


class MessageDispatcher extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchIsActive: false,
        }
    }

    _onFocusSearch() {
        this.setState({
            searchIsActive: true
        });
    }

    _onBlurSearch() {
        this.setState({
            searchIsActive: false
        });
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
            historyComposeAreaFg,
            menuIconFg,
            menuIconFgOver,
            historyComposeAreaBg,
            placeholderFg,
            placeholderFgActive
        } = this.props;


        return (
            <AppBar
                zDepth={0}
                title={
                    <TextField
                        ref='Search'
                        hintText={<div
                            ref='labelHintText'
                            style={{
                                cursor: 'text',
                                color: placeholderFg.element.color,
                                ...placeholderFg.styles
                            }}
                            {...injectActionsToComponent({
                                id: placeholderFg.id,
                                dispatch: this.props.dispatch
                            })}
                        >
                            Write a message...
                        </div>}
                        className={styles.searchInput}
                        style={{
                            height: 28,
                            lineHeight: '28px',
                            fontSize: 12,
                            transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',
                        }}
                        inputStyle={{
                            color: historyComposeAreaFg.element.color
                        }}
                        onFocus={::this._onFocusSearch}
                        onBlur={::this._onBlurSearch}
                        hintStyle={{
                            bottom: 0,
                            zIndex: 1,
                            width: '100%',
                            color: searchIsActive ? placeholderFgActive.element.color : placeholderFg.element.color
                        }}
                        fullWidth={true}
                        underlineShow={false}
                    />
                }
                titleStyle={{
                    color: '#999',
                    fontSize: 14,
                    height: 46,
                    lineHeight: '46px',
                }}
                style={{
                    background: historyComposeAreaBg.element.color,
                    borderTop: '1px solid #E7E7E7',
                    height: 46,
                    ...historyComposeAreaBg.styles
                }}
                iconElementLeft={
                    <IconButton
                        style={{
                            height: 'auto',
                            width: 'auto',
                            padding: 0,
                            margin: '3px 2px 0',
                            ...menuIconFg.styles
                        }}
                        iconStyle={{
                            transform: 'rotate(-145deg)'
                        }}
                    >
                        <div>
                            <AttachFileIcon
                                color={menuIconFg.element.color}
                                hoverColor={menuIconFgOver.element.color}
                                {...injectActionsToComponent({
                                    id: menuIconFg.id,
                                    dispatch: this.props.dispatch
                                })}
                            />
                        </div>
                    </IconButton>
                }
                iconElementRight={
                    <div>
                        <IconButton
                            style={{
                                height: 40,
                                width: 40,
                                padding: 0,
                                marginTop: -6,
                            }}
                            iconStyle={{
                                fill: menuIconFg.element.color,
                                ...menuIconFg.styles
                            }}
                        >
                            <div>
                                <InsertEmoticonIcon
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
                                height: 40,
                                width: 40,
                                padding: 0,
                                marginTop: -6,
                            }}
                            iconStyle={{
                                fill: menuIconFg.element.color,
                                ...menuIconFg.styles
                            }}
                        >
                            <div>
                                <MicIcon
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
                    id: historyComposeAreaBg.id,
                    dispatch: this.props.dispatch
                })}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        historyComposeAreaFg: selector({ id: id.PLACEHOLDER_FG, key: 'historyComposeAreaFg', editor: state.editor }),
        placeholderFgActive: selector({ id: id.PLACEHOLDER_FG, key: 'placeholderFgActive', editor: state.editor }),
        placeholderFg: selector({ id: id.PLACEHOLDER_FG, key: 'placeholderFg', editor: state.editor }),
        historyComposeAreaBg: selector({ id: id.HISTORY_COMPOSE_AREA_BG, key: 'historyComposeAreaBg', editor: state.editor }),
        menuIconFg: selector({ id: id.MENU_ICON_FG, key: 'menuIconFg', editor: state.editor }),
        menuIconFgOver: selector({ id: id.MENU_ICON_FG, key: 'menuIconFgOver', editor: state.editor }),
    }
};

export default connect(mapStateToProps)(CSSModules(MessageDispatcher, styles));
