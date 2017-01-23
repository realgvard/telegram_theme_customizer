import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Actions
import { changeFileName } from 'components/Editor/actions';

// Components
import TextField from 'material-ui/TextField';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './FileNameField.css';


class FileNameField extends Component {

    _onChange(e) {
        const value = e.target.value;

        this.props.dispatch(changeFileName(value));
    }

    render() {
        const {
            disabledButton,
            fileName
        } = this.props;

        return (
            <div styleName='container'>
                <div styleName="labelField">
                    Name of file
                </div>
                <TextField
                    underlineShow={false}
                    disabled={disabledButton}
                    defaultValue={fileName}
                    onChange={::this._onChange}
                    style={{
                        width: '100%',
                        fontSize: 14,
                        border: '1px solid rgb(229, 229, 229)',
                        height: 36,
                        padding: '0 15px'
                    }}
                    hintStyle={{
                        top: 5
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        disabledButton: Object.keys(state.editor.data).length > 0 || state.editor.backgroundData ? false : true,
        fileName: state.editor.fileName
    }
};

export default connect(mapStateToProps)(CSSModules(FileNameField, styles));