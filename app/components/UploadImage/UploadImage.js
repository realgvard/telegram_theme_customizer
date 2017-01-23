import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

// Components
import RaisedButton from 'material-ui/RaisedButton';

// Images
import ImageIcon from 'material-ui/svg-icons/image/image';

// Actions
import {
    changeEditorImageData,
    setEditingElement,
} from 'components/Editor/actions';

// Styles
import styles from './UploadImage.css';


class UploadImage extends Component {

    _onChangeInput(e) {
        const {
            dispatch,
            id
        } = this.props;
        const files = e.target.files;
        const reader = new FileReader();

        reader.onload = (frEvent) => {
            dispatch(changeEditorImageData(id, { image: frEvent.target.result }));
        };

        reader.readAsDataURL(files[0]);
    }

    componentDidMount() {

    }

    render() {
        const {
            label
        } = this.props;

        return (
            <div styleName="container">
                <RaisedButton
                    label={label}
                    fullWidth={true}
                    icon={<ImageIcon />}
                    containerElement="label"
                    labelPosition="after"
                >
                    <input type="file" styleName="image-input" onChange={::this._onChangeInput} />
                </RaisedButton>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {

    }
};

export default connect(mapStateToProps)(CSSModules(UploadImage, styles));