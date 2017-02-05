import React, { Component } from 'react';
import _ from 'lodash';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {
    grey100,
} from 'material-ui/styles/colors';

import {
    changeEditorData,
} from 'components/SidebarEditor/actions';

// Components
import Drawer from 'material-ui/Drawer';
import ColorPicker from 'components/ColorPicker';
import UploadImage from 'components/UploadImage';
import SwitchTypeOfImage from 'components/SwitchTypeOfImage';
import {Tabs, Tab} from 'material-ui/Tabs';

// Styles
import styles from './SidebarEditor.css';


@muiThemeable()
@CSSModules(styles)
class SidebarEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    _colorPickerChange(id, elementKey, color) {
        const {
            dispatch,
        } = this.props;

        dispatch(changeEditorData(id, { color: color.hex, key: elementKey }));
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.editingElement.id !== this.props.editingElement.id) {
            this.refs.Tabs.setState({
                selectedIndex: 0
            });
        }

    }

    componentDidMount() {
        this.forceUpdate();
        // this.props.dispatch(initializeData(optionData));
    }

    render() {
        const {
            version,
            editingElement: {
                collection = [],
                id
            },
            muiTheme: {
                palette
            }
        } = this.props;

        let controlOptions = <Tabs
            ref="Tabs"
            tabItemContainerStyle={{
                marginBottom: 20,
                display: 'inline-block',
                width: 'auto'
            }}
            inkBarStyle={{
                display: 'none'
            }}
        >
            {collection.map(({
                elements,
                tabName
            }) => {

                return <Tab
                         styleName="tab"
                         buttonStyle={{
                             height: 30,
                             border: '2px solid',
                             borderColor: grey100,
                             borderBottom: 'none',
                             padding: '0 20px'
                         }}
                         label={tabName}
                        >

                        {elements.map(({
                            key,
                            label,
                            type,
                            color
                        }, index) => {
                            let currentEditing = <div
                                styleName="editing-block"
                                style={{
                                    backgroundColor: grey100
                                }}
                            >
                                <div styleName="editing-title">Editing:</div>
                                <div styleName="editing-element" style={{ color: palette.accent1Color }}>{key}</div>
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
                                                {this.refs.optionsContainer ?
                                                    <ColorPicker
                                                        defaultColor={color}
                                                        parentContainer={this.refs.optionsContainer}
                                                        onChange={this._colorPickerChange.bind(this, id, key)}
                                                    /> : null}
                                            </label>
                                        </div>
                                    </div>;
                            }
                        })}
                     </Tab>
            })}
        </Tabs>;


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
                        <div
                            ref="optionsContainer"
                            styleName="control-options-block"
                        >
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
            collection: element.collection
        }
    }
};

export default connect(mapStateToProps)(SidebarEditor);
