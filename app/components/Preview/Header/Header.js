import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Actions
import { injectActionsToElement } from 'components/Editor/actions';

// Components

// Images
import RemoveIcon from 'material-ui/svg-icons/content/remove';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import MinimizeIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';

// JS
import { selector } from 'components/Editor/selector';

// Config
import * as id from 'config/idElements.config';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './Header.css';


class Header extends Component {

    render() {
        const {
            titleBg,
            titleButtonFg
        } =  this.props;


        return (
            <div
                styleName='container'
                style={{
                    background: titleBg.element.color,
                    ...getActiveStyle(titleBg.state.hovered || titleBg.state.editing)
                }}
                {...injectActionsToElement({
                    id: id.TITLE_BG,
                    dispatch: this.props.dispatch
                })}
            >
                <div styleName="buttons-container">
                    <div
                        styleName="button"
                        style={{
                            ...getActiveStyle(titleButtonFg.state.hovered || titleButtonFg.state.editing)
                        }}
                    >
                        <RemoveIcon
                            color={titleButtonFg.element.color}
                            style={{
                                paddingTop: 4,
                                marginBottom: -14
                            }}
                            {...injectActionsToElement({
                                id: id.TITLE_BUTTON_FG,
                                dispatch: this.props.dispatch
                            })}
                        />
                    </div>
                    <div
                        styleName="button"
                        style={{
                            ...getActiveStyle(titleButtonFg.state.hovered || titleButtonFg.state.editing)
                        }}
                    >
                        <MinimizeIcon
                            color={titleButtonFg.element.color}
                            style={{
                                width: 16,
                                height: 16,
                                marginTop: 2,
                                marginBottom: -8,
                            }}
                            {...injectActionsToElement({
                                id: id.TITLE_BUTTON_FG,
                                dispatch: this.props.dispatch
                            })}
                        />
                    </div>
                    <div
                        styleName="button"
                        style={{
                            ...getActiveStyle(titleButtonFg.state.hovered || titleButtonFg.state.editing)
                        }}
                    >
                        <ClearIcon
                            color={titleButtonFg.element.color}
                            style={{
                                width: 20,
                                height: 20,
                                marginBottom: -10
                            }}
                            {...injectActionsToElement({
                                id: id.TITLE_BUTTON_FG,
                                dispatch: this.props.dispatch
                            })}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        titleButtonFg: selector({ id: id.TITLE_BUTTON_FG, editor: state.editor }),
        titleBg: selector({ id: id.TITLE_BG, editor: state.editor }),
    }
};

export default connect(mapStateToProps)(CSSModules(Header, styles));