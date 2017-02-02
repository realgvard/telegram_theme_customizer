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
                        background: palette.accent2Color,
                        color: '#fff',
                        padding: '0 20px'
                    }}
                >
                    <ToolbarGroup firstChild={true} />

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
                    <div styleName="dialog-field">
                        <FileNameField />
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
        editingElement: {
            id: element.id,
            settings: element.settings
        }
    }
};

export default connect(mapStateToProps)(TopToolbarEditor);
