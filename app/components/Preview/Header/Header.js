import React, { Component } from 'react';
import reactCSS, { hover } from 'reactcss';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Actions
import { injectActionsToComponent } from 'components/SidebarEditor/actions';

// Components
import HeaderButton from './HeaderButton';

// Images
import RemoveIcon from 'material-ui/svg-icons/content/remove';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import MinimizeIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';

// JS
import { selector } from 'libs/selector';

// Config
import * as id from 'config/idElements.config';

// Styles
import styles from './Header.css';


class Header extends Component {

    render() {
        const {
            titleBg,
            titleButtonBgOver,
            titleButtonFgOver,
            titleButtonFg,
            titleButtonCloseFg,
            titleButtonCloseFgOver,
            titleButtonCloseBgOver
        } =  this.props;


        return (
            <div
                styleName='container'
                style={{
                    background: titleBg.element.color,
                    ...titleBg.styles
                }}
                {...injectActionsToComponent({
                    id: titleBg.id,
                    dispatch: this.props.dispatch
                })}
            >
                <div styleName="buttons-container">
                    <HeaderButton
                        component={RemoveIcon}
                        style={titleButtonFg.styles}
                        iconStyle={{
                            paddingTop: 4,
                            marginBottom: -14,
                        }}
                        className={styles.button}
                        backgroundColor={titleButtonBgOver.element.color}
                        ownProps={{
                            color: titleButtonFg.element.color,
                            hoverColor: titleButtonFgOver.element.color,
                            ...injectActionsToComponent({
                                id: titleButtonFg.id,
                                dispatch: this.props.dispatch
                            })
                        }}
                    />

                    <HeaderButton
                        component={MinimizeIcon}
                        style={titleButtonFg.styles}
                        iconStyle={{
                            width: 16,
                            height: 16,
                            marginTop: 2,
                            marginBottom: -8,
                        }}
                        className={styles.button}
                        backgroundColor={titleButtonBgOver.element.color}
                        ownProps={{
                            color: titleButtonFg.element.color,
                            hoverColor: titleButtonFgOver.element.color,
                            ...injectActionsToComponent({
                                id: titleButtonFg.id,
                                dispatch: this.props.dispatch
                            })
                        }}
                    />

                    <HeaderButton
                        component={ClearIcon}
                        style={titleButtonCloseFg.styles}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            marginBottom: -10
                        }}
                        className={styles.button}
                        backgroundColor={titleButtonCloseBgOver.element.color}
                        ownProps={{
                            color: titleButtonCloseFg.element.color,
                            hoverColor: titleButtonCloseFgOver.element.color,
                            ...injectActionsToComponent({
                                id: titleButtonCloseFg.id,
                                dispatch: this.props.dispatch
                            })
                        }}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        titleButtonCloseFg: selector({ id: id.TITLE_BUTTON_CLOSE_FG, key: 'titleButtonCloseFg', editor: state.editor }),
        titleButtonCloseFgOver: selector({ id: id.TITLE_BUTTON_CLOSE_FG, key: 'titleButtonCloseFgOver', editor: state.editor }),
        titleButtonCloseBgOver: selector({ id: id.TITLE_BUTTON_CLOSE_FG, key: 'titleButtonCloseBgOver', editor: state.editor }),
        titleButtonBgOver: selector({ id: id.TITLE_BUTTON_FG, key: 'titleButtonBgOver', editor: state.editor }),
        titleButtonFgOver: selector({ id: id.TITLE_BUTTON_FG, key: 'titleButtonFgOver', editor: state.editor }),
        titleButtonFg: selector({ id: id.TITLE_BUTTON_FG, key: 'titleButtonFg', editor: state.editor }),
        titleBg: selector({ id: id.TITLE_BG, key: 'titleBg', editor: state.editor }),
    }
};

export default connect(mapStateToProps)(CSSModules(Header, styles));