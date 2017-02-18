import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import {
    grey100,
    grey500,
} from 'material-ui/styles/colors';

// Components
import Preview from 'components/Preview';
import SidebarEditor from 'components/SidebarEditor';
import TopToolbarEditor from 'components/TopToolbarEditor';

// Images
import TelegramIcon from 'components/SidebarEditor/images/telegram.svg';
import IconButton from 'material-ui/IconButton';

// Actions
import {
    resetEditor,
    fetchElements
} from 'components/SidebarEditor/actions';
import { resetMetadata } from 'containers/App/actions';

// JS
import baseElements from 'config/elements';
import intialState from 'reducers/initialState';

// Styles
import styles from './EditorContainer.scss';


@CSSModules(styles, { allowMultiple: true })
class EditorContainer extends Component {

    componentWillMount() {
        const {
            dispatch,
            version
        } = this.props;

        this.setState({
            countElements: baseElements.length
        });

        if(!localStorage.getItem('reduxPersist:metadata') || version !== intialState.metadata.version) {
            dispatch(resetMetadata(intialState.metadata.version));
            dispatch(resetEditor());
        }
    }

    componentDidMount() {
        var buttons = document.createElement('script');
        buttons.src = 'https://buttons.github.io/buttons.js';
        buttons.async = 'true';

        document.body.append(buttons);
    }

    render() {
        const {
            countElements,
        } = this.state;


        return (
            <div styleName="wrapper">
                <TopToolbarEditor />

                <div styleName="container">
                    <div
                        styleName="introduction"
                        style={{
                            borderColor: grey100
                        }}
                    >
                        <div styleName="links">
                            <div styleName="link-block github-icon" ref="ko">
                                    <a className="github-button"
                                       href="https://github.com/realgvard/telegram_theme_customizer"
                                       data-icon="octicon-star"
                                       data-count-href="/realgvard/telegram_theme_customizer/stargazers"
                                       data-count-api="/repos/realgvard/telegram_theme_customizer#stargazers_count"
                                       data-count-aria-label="# stargazers on GitHub"
                                       aria-label="Star realgvard/telegram_theme_customizer on GitHub">Star</a>
                            </div>

                            <div styleName="link-block">

                                <IconButton
                                    tooltip="Join to discuss group in Telegram"
                                    style={{
                                    }}
                                    iconStyle={{
                                        fill: '#bbb'
                                    }}
                                    href="https://t.me/theme_customizer"
                                    target="blank"
                                >
                                    <TelegramIcon

                                    />
                                </IconButton>
                            </div>
                        </div>
                    </div>

                    <div styleName="description">
                        <strong>Telegram Theme Customizer</strong> — editor for modification themes in telegram.
                        Just hover mouse on some of element below, and follow the next setting in the left bar.
                        Now you able to edit: <strong>{countElements}</strong> areas. <br />
                        Join to our <a target="blank" href="https://t.me/theme_customizer"><strong>group in Telegram</strong></a> to get help with your theme and don't skip the next update.
                    </div>

                    <SidebarEditor />

                    <Preview />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        version: _.get(state, 'metadata.version', null)
    }
};

export default connect(mapStateToProps)(EditorContainer);