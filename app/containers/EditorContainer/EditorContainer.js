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
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';

// Images
import TelegramIcon from 'components/SidebarEditor/images/telegram.svg';
import GitHubIcon from 'components/SidebarEditor/images/github.svg';
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

    constructor(props) {
        super(props);

        this.state = {
            countElements: null,
            // stepIndex: 0,
            // isEdited: false
        }
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.isEdited && !this.state.isEdited) {
            this.setState({
                stepIndex: 1,
                isEdited: true
            });
        } else if (!nextProps.isEdited && this.state.isEdited) {
            this.setState({
                stepIndex: 0,
                isEdited: false
            });
        }
    }

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
            stepIndex,
        } = this.state;


        return (
            <div styleName="wrapper">
                <TopToolbarEditor />

                <div styleName="container">
                    {/*<div styleName="stepper">*/}
                        {/*<Stepper activeStep={stepIndex} connector={<ArrowForwardIcon />}>*/}
                            {/*<Step>*/}
                                {/*<StepLabel>Customize theme</StepLabel>*/}
                            {/*</Step>*/}
                            {/*<Step>*/}
                                {/*<StepLabel>Save file of config and apply it in a Telegram</StepLabel>*/}
                            {/*</Step>*/}
                        {/*</Stepper>*/}
                    {/*</div>*/}

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
                                    tooltip="Join to discuss on Telegram channel"
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

                            <div styleName="link-block">
                                <IconButton
                                    tooltip="View project on GitHub"
                                    style={{
                                    }}
                                    iconStyle={{
                                        fill: '#bbb'
                                    }}
                                    href="https://github.com/realgvard/telegram_theme_customizer"
                                    target="blank"
                                >
                                    <GitHubIcon

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
    // console.log(state.editor.elements)

    // const count = _.reduce(state.editor.elements, (result, obj, key) => {
    //     return _.isNumber(result) ? result + obj.settings.length : obj.settings.length;
    // });



    return {
        // isEdited: Object.keys(state.editor.data).length > 0 ? true : false,
        version: _.get(state, 'metadata.version', null)
    }
};

export default connect(mapStateToProps)(EditorContainer);