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

// Config
import * as id from 'config/idElements.config';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './Header.css';


class Header extends Component {

    render() {
        const titleBg = _.head(this.props.titleBg);


        return (
            <div
                styleName='container'
                style={{
                    background: titleBg.color,
                    ...getActiveStyle(titleBg.hovered || titleBg.editing)
                }}
                {...injectActionsToElement({
                    id: id.TITLE_BG,
                    dispatch: this.props.dispatch
                })}
            >
                <div styleName="buttons-container">
                    <div styleName="button">
                        <RemoveIcon
                            color="#ababab"
                            style={{
                                paddingTop: 4,
                                marginBottom: -14
                            }}
                        />
                    </div>
                    <div styleName="button">
                        <MinimizeIcon
                            color="#ababab"
                            style={{
                                width: 16,
                                height: 16,
                                marginTop: 2,
                                marginBottom: -8
                            }}
                        />
                    </div>
                    <div styleName="button">
                        <ClearIcon
                            color="#ababab"
                            style={{
                                width: 20,
                                height: 20,
                                marginBottom: -10
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        titleBg: _.filter(state.editor.elements, { id: id.TITLE_BG }),
    }
};

export default connect(mapStateToProps)(CSSModules(Header, styles));