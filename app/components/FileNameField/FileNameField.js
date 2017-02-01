import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Actions
import { changeFileName } from 'components/SidebarEditor/actions';

// Components
import TextField from 'material-ui/TextField';

// Styles
import { getActiveStyle } from 'components/Preview/cssStyles.js';
import styles from './FileNameField.css';


class FileNameField extends Component {

    _onChange(e, newValue) {
        this.props.dispatch(changeFileName(newValue));
    }

    _reset(value) {
        this.refs.FileName.input.value = value;
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.fileName !== this.refs.FileName.input.value) {

            this._reset(nextProps.fileName);
        }
    }

    render() {
        const {
            fileName,
            disabled
        } = this.props;


        return (
            <div styleName='container'>
                <div styleName="labelField">
                    Name of file
                </div>
                <TextField
                    ref="FileName"
                    underlineShow={false}
                    defaultValue={fileName}
                    disabled={disabled}
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
        disabled: Object.keys(state.editor.data).length > 0 || state.editor.backgroundData ? false : true,
        fileName: state.editor.fileName
    }
};

export default connect(mapStateToProps)(CSSModules(FileNameField, styles));