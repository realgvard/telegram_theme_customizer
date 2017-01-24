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
import SwitchTypeOfImage from 'components/SwitchTypeOfImage';

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
            editingElement: {
                id,
                settings = []
            }
        } = this.props;

        let controlOptions = settings.map(({
            key,
            label,
            type,
            color
        }, index) => {
            // console.log(key, settings);

            let currentEditing = <div styleName="editing-block">
                                    <div styleName="editing-title">Editing:</div>
                                    <div styleName="editing-element" style={{ color: pink500 }}>{key}</div>
                                </div>;

            switch(type) {

                case 'file' :
                    return <div styleName="editing-component">
                            {currentEditing}

                            <div styleName="image-input">
                                <UploadImage label={label} id={id} key={index} />
                            </div>

                           <div styleName="switch-type-of-image">
                               <SwitchTypeOfImage />
                           </div>
                        </div>;

                case 'colorPicker' :
                    return <div styleName="editing-component">
                        {currentEditing}
                        <div styleName="form-group" key={index}>
                            <label styleName="control-label">{label}:</label>
                            <label styleName="form-control">
                                <ColorPicker id={id} elementKey={key} defaultColor={color} />
                            </label>
                        </div>
                    </div>;
            }
        });

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
            id: element.id,
            settings: element.settings
        }
    }
};

export default connect(mapStateToProps)(CSSModules(Editor, styles));
