import React, { Component } from 'react';
import _ from 'lodash';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { pink500 } from 'material-ui/styles/colors';

// Components
import Drawer from 'material-ui/Drawer';
import ColorPicker from 'components/ColorPicker';
import FileNameField from 'components/FileNameField';
import ResetButton from 'components/ResetButton';
import SaveButton from 'components/SaveButton';
import UploadImage from 'components/UploadImage';

// JS
// import optionData from 'config/optionDispatcher.config';

// Actions
import {
    setActiveElement,
    unsetActiveElement
} from './actions';

// Styles
import styles from './Editor.css';


class Editor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpened: true
        }
    }

    componentWillReceiveProps(nextProps) {

        if(_.size(nextProps.elements) > 0 && !this.state.isOpened) {
            this.setState({
                isOpened: true
            });
        } else if (_.size(nextProps.elements) === 0 && this.state.isOpened) {
            this.setState({
                isOpened: false
            });
        }
    }

    componentDidMount() {
        // this.props.dispatch(initializeData(optionData));
    }

    render() {
        const {
            isOpened
        } = this.state;

        const {
            editingElement: {
                key,
                id,
                color,
                settings = []
            }
        } = this.props;

        let controlOptions = '';
        controlOptions = settings.map(({ label, type }, index) => {
            switch(type) {
                case 'file' :
                    return <UploadImage label={label} id={id} key={index} />;
                case 'colorPicker' :
                    return <div styleName="form-group" key={index}>
                        <label styleName="control-label">{label}:</label>
                        <label styleName="form-control">
                            <ColorPicker id={id} elementKey={key} defaultColor={color} />
                        </label>
                    </div>;
            }
        })

        return (
            <Drawer
                width={300}
                open={true}
                zDepth={1}
                containerStyle={{
                    overflow: 'inherit'
                }}
            >
                <div styleName="inner-container">
                    <div styleName="detail-editor">
                        <h3 styleName="title">Detail Editor</h3>

                        <div styleName="editing-block">
                            <div styleName="editing-title">Editing:</div>
                            <div styleName="editing-element" style={{ color: pink500 }}>{key}</div>
                        </div>

                        <div styleName="options-editor">
                            {controlOptions}
                        </div>

                        <div styleName="panel-controls">
                            <div styleName="control-element">
                                <FileNameField />
                            </div>

                            <div styleName="control-element">
                                <SaveButton />
                            </div>

                            <div styleName="control-element">
                                <ResetButton />
                            </div>
                        </div>
                    </div>


                    <div styleName="bottom-block">
                        <div>Telegram Theme Customizer (alpha)</div>
                        <div>Version 0.1.5</div>
                    </div>
                </div>
            </Drawer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const element = state.editor.editingElement;

    return {
        elements: state.editor.elements,
        editingElement: {
            key: element.key,
            id: element.id,
            color: element.color,
            settings: element.settings
        }
    }
};

export default connect(mapStateToProps)(CSSModules(Editor, styles));
