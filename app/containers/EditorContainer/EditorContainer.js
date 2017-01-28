import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

// Components
import Preview from 'components/Preview';
import Editor from 'components/Editor';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';

// Actions
import {
    resetEditor,
    fetchElements
} from 'components/Editor/actions';
import { resetMetadata } from 'containers/App/actions';

// JS
import intialState from 'reducers/initialState';

// Styles
import styles from './EditorContainer.css';


class EditorContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stepIndex: 0,
            initialized: false,
            isEdited: false
        }
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.hasElements && !this.state.initialized) {
            this.setState({
                initialized: true
            });
        }

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

        if(!localStorage.getItem('reduxPersist:metadata') || version !== intialState.metadata.version) {
            dispatch(resetMetadata(intialState.metadata.version));
            dispatch(resetEditor());
        }
    }

    render() {
        const {
            stepIndex,
            initialized
        } = this.state;


        return (
            <div styleName="wrapper">
                <div styleName="container">
                    <div styleName="stepper">
                        <Stepper activeStep={stepIndex} connector={<ArrowForwardIcon />}>
                            <Step>
                                <StepLabel>Customize theme</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Save file of config and apply it in a Telegram</StepLabel>
                            </Step>
                        </Stepper>
                    </div>

                    <div styleName="description">
                        <strong>Telegram Theme Customizer (alpha)</strong> — editor for modification themes in telegram.
                        Just hover mouse on some of element below, and follow the next setting in the left bar.
                    </div>

                    <Editor />

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

    // console.log(count)

    return {
        isEdited: Object.keys(state.editor.data).length > 0 ? true : false,
        version: _.get(state, 'metadata.version', false),
        // hasElements: Object.keys(state.editor.elements).length > 0 ? true : false,
    }
};

export default connect(mapStateToProps)(CSSModules(EditorContainer, styles));