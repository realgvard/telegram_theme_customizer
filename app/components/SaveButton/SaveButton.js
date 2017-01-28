import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';
import JSZip from 'JSZip';
import { saveAs } from 'filesaver.js';

// Components
import RaisedButton from 'material-ui/RaisedButton';

// Styles
import styles from './SaveButton.css';


class SaveButton extends Component {

    saveAsZip(data) {
        const {
            backgroundData,
            backgroundType,
            fileName
        } = this.props;
        const detectPrefixUrl = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64),\s*/;
        const zip = new JSZip();

        zip.file("colors.tdesktop-theme", data);

        zip.file(`${backgroundType}.jpg`, backgroundData.replace(detectPrefixUrl, ''), { base64: true });

        zip.generateAsync({ type: "blob" }).then(function(content) {
            saveAs(content, `${fileName}.tdesktop-theme`);
        });
    }

    saveAsText(data) {
        const blob = new Blob([data], { type: "data:text/plain;charset=utf-8" });
        const fileName = this.props.fileName;

        saveAs(blob, `${fileName}.tdesktop-theme`);
    }

    saveFile() {
        const {
            backgroundData,
            payload
        } = this.props;
        const text = JSON.stringify(this.flushData(payload));
        const content = text.replace(/"|{|}/g, '').replace(/,/g, '\n');

        if(backgroundData) {
            this.saveAsZip(content);
        } else {
            this.saveAsText(content);
        }
    }

    flushData(data) {
        const result = {};

        _.forEach(data, (value, key) => {
            result[key] = ` ${value};`;
        });

        return result;
    }

    _onButtonClick() {
        this.saveFile();
    }

    render() {
        const {
            disabledButton
        } = this.props;

        return (
            <div styleName="container">
                <RaisedButton
                    label="Save theme (!)"
                    primary={true}
                    fullWidth={true}
                    disabled={disabledButton}
                    onClick={::this._onButtonClick}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        disabledButton: Object.keys(state.editor.data).length > 0 ||
                        state.editor.backgroundData ? false : true,
        payload: state.editor.data,
        backgroundData: state.editor.backgroundData,
        backgroundType: state.editor.backgroundType,
        fileName: state.editor.fileName
    }
};

export default connect(mapStateToProps)(CSSModules(SaveButton, styles));