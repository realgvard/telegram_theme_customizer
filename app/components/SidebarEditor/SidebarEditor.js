import React, { Component } from 'react';
import _ from 'lodash';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {
    grey100,
    grey500,
} from 'material-ui/styles/colors';

import {
    changeEditorData,
} from 'components/SidebarEditor/actions';

// Images
import TelegramIcon from './images/telegram.svg';
import GithubIcon from './images/github.svg';

// Components
import Drawer from 'material-ui/Drawer';
import ColorPicker from 'components/ColorPicker';
import UploadImage from 'components/UploadImage';
import SwitchTypeOfImage from 'components/SwitchTypeOfImage';
import { Tabs, Tab } from 'material-ui/Tabs';

// JS
import { hexToArgb, getRgbaColorFromObject } from 'libs/colorParser';

// Styles
import styles from './SidebarEditor.css';


@muiThemeable()
@CSSModules(styles)
class SidebarEditor extends Component {

    _colorPickerChange(id, elementKey, color) {
        const {
            dispatch,
        } = this.props;


        dispatch(changeEditorData(id, {
            color: getRgbaColorFromObject(color.rgb),
            key: elementKey,
            colorData: hexToArgb(color.hex, color.rgb.a)
        }));
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
                            info,
                            color,
                            defaultColor
                        }, index) => {
                            let currentEditing = <div
                                styleName="editing-block"
                            >
                                <div styleName="editing-element" >{key}</div>
                            </div>;

                            switch(type) {

                                case 'file' :
                                    return <div styleName="editing-component">

                                        <div styleName="image-input">
                                            <UploadImage label={label} id={id} key={index} />
                                        </div>

                                        <div styleName="switch-type-of-image">
                                            <SwitchTypeOfImage />
                                        </div>
                                    </div>;

                                default :
                                    return <div styleName="editing-component">

                                        <div styleName="form-group" key={index}>
                                            <div styleName="form-control-wrapper">
                                                <div styleName="control-label">{currentEditing}</div>

                                                <label styleName="form-control">
                                                    {this.refs.optionsContainer ?
                                                        <ColorPicker
                                                            color={color}
                                                            defaultColor={defaultColor}
                                                            parentContainer={this.refs.optionsContainer}
                                                            onChange={this._colorPickerChange.bind(this, id, key)}
                                                        /> : null}
                                                </label>
                                            </div>

                                            <div
                                                styleName="editing-info"
                                                style={{
                                                    color: grey500
                                                }}
                                            >
                                                {info}
                                            </div>
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
                        <div
                            styleName="social-links"
                            style={{
                                borderColor: grey100,
                                display: 'none'
                            }}
                        >
                           <div styleName="social-link">
                               <a
                                   target="blank"
                                   href="https://t.me/theme_customizer"
                                   title="Open group in Telegram"
                               >
                                    <TelegramIcon />
                               </a>
                           </div>

                            <div styleName="social-link">
                                <a
                                    target="blank"
                                    href="https://github.com/realgvard/telegram_theme_customizer"
                                    title="Open project in GitHub"
                                >
                                    <GithubIcon />
                                </a>
                            </div>
                        </div>

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
