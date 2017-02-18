import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {
    lightBlue800,
    greenA700,
} from 'material-ui/styles/colors';

// Components
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import ColorPicker from 'components/ColorPicker';
import {
    Toolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from 'material-ui/Toolbar';
import FileNameField from 'components/FileNameField';
import ResetButton from 'components/ResetButton';
import SaveButton from 'components/SaveButton';
import SwitchEditMode from 'components/SwitchEditMode';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

// Actions
import {
    changeEditBorderColor
} from 'components/SidebarEditor/actions';

// Icons
import Logo from './logo.svg';

// JS
import { getRgbaColorFromObject } from 'libs/colorParser';

// Styles
import styles from './TopToolbarEditor.css';


@muiThemeable()
@CSSModules(styles, { allowMultiple: true })
class TopToolbarEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dialogIsOpen: false
        };
    }

    _colorPickerChange(color) {
        const rgba = getRgbaColorFromObject(color.rgb);

        this.props.dispatch(changeEditBorderColor(rgba));
    }

    handleOpen() {
        this.setState({
            dialogIsOpen: true
        });
    }

    handleClose = () => {
        this.setState({
            dialogIsOpen: false
        });
    };

    render() {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];

        const {
            editBorderColor,
            muiTheme: {
                palette
            }
        } = this.props;

        const {
            dialogIsOpen
        } = this.state;

        return (
            <div>
                <Toolbar
                    style={{
                        background: palette.accent1Color,
                        color: '#fff',
                        padding: '0 20px'
                    }}
                >
                    <ToolbarGroup>
                        <div styleName="logo">
                            <Logo />
                        </div>

                        <span styleName="logo-description">Theme Customizer</span>
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <div
                            styleName="control-block"
                            title="Open dialog with settings"
                        >
                            <SettingsIcon
                                color="#fff"
                                onClick={::this.handleOpen}
                                className={styles.settingsIco}
                            />
                        </div>

                        <ToolbarSeparator
                            style={{
                                background: '#fff'
                            }}
                        />

                        <div styleName="control-block">
                            <SaveButton />
                        </div>

                        <div styleName="control-block">
                            <ResetButton />
                        </div>

                        <div styleName="control-block">
                            <SwitchEditMode />
                        </div>

                    </ToolbarGroup>
                </Toolbar>

                <Dialog
                    title="Settings of theme"
                    actions={actions}
                    modal={false}
                    contentStyle={{
                        width: 500
                    }}
                    open={dialogIsOpen}
                    onRequestClose={this.handleClose}
                >
                    <div styleName="dialog-field column-5">
                        <FileNameField />
                    </div>

                    <div styleName="dialog-field column-4">
                        <div styleName="title-color-picker">
                            Preview hover/border border color:
                        </div>

                        <div styleName="color-picker">
                            <ColorPicker
                                watchWidth={100}
                                position="absolute"
                                onChange={::this._colorPickerChange}
                                defaultColor='#e95e5e'
                                color={editBorderColor}
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const element = state.editor.editingElement;

    return {
        version: state.metadata.version,
        elements: state.editor.elements,
        editBorderColor: state.editor.editBorderColor,
        editingElement: {
            id: element.id,
            settings: element.settings
        }
    }
};

export default connect(mapStateToProps)(TopToolbarEditor);
