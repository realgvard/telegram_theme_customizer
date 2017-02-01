import React, { Component } from 'react';
import _ from 'lodash';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {
    grey100,
} from 'material-ui/styles/colors';

// Components
import Drawer from 'material-ui/Drawer';
import ColorPicker from 'components/ColorPicker';
import UploadImage from 'components/UploadImage';
import SwitchTypeOfImage from 'components/SwitchTypeOfImage';

// Styles
import styles from './SidebarEditor.css';


@muiThemeable()
@CSSModules(styles)
class SidebarEditor extends Component {

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
            version,
            editingElement: {
                settings = []
            },
            muiTheme: {
                palette
            }
        } = this.props;

        const parentId = this.props.editingElement.id;

        let controlOptions = settings.map(({
            id,
            key,
            label,
            type,
            color
        }, index) => {
            let currentEditing = <div styleName="editing-block" style={{
                    backgroundColor: grey100
                }}>
                    <div styleName="editing-title">Editing:</div>
                    <div styleName="editing-element" style={{ color: palette.accent2Color }}>{key}</div>
                </div>;

            switch(type) {

                case 'file' :
                    return <div styleName="editing-component">
                            {currentEditing}

                            <div styleName="image-input">
                                <UploadImage label={label} id={parentId} childId={id} key={index} />
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
                                <ColorPicker id={parentId} childId={id} elementKey={key} defaultColor={color} />
                            </label>
                        </div>
                    </div>;
            }
        });


        return (
            <Drawer
                width={320}
                open={true}
                zDepth={1}
                containerStyle={{
                    overflow: 'inherit'
                }}
            >
                <div styleName="inner-container">
                    <div
                        styleName="title-block"
                        style={{
                            borderColor: grey100
                        }}
                    >
                        <h3 styleName="title">Detail Editor</h3>
                    </div>

                    <div styleName="options-block">
                        <div styleName="control-options-block">
                            {controlOptions}
                        </div>
                    </div>


                    <div styleName="bottom-block">
                        <div>Telegram Theme Customizer (alpha)</div>
                        <div>Version {version}</div>
                    </div>
                </div>
            </Drawer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const element = state.editor.editingElement;

    return {
        version: state.metadata.version,
        elements: state.editor.elements,
        editingElement: {
            id: element.id,
            settings: element.settings
        }
    }
};

export default connect(mapStateToProps)(SidebarEditor);
