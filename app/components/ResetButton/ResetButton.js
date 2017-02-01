import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

// Components
import RaisedButton from 'material-ui/RaisedButton';

// Actions
import {
    resetEditor
} from 'components/SidebarEditor/actions';

// Styles
import styles from './ResetButton.css';


class ResetButton extends Component {

    _onButtonClick() {
        this.props.dispatch(resetEditor());
    }

    render() {
        const {
            disabledButton
        } = this.props;

        return (
            <RaisedButton
                label="Reset"
                disabled={disabledButton}
                onClick={::this._onButtonClick}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        disabledButton: Object.keys(state.editor.data).length > 0 || state.editor.backgroundData ? false : true
    }
};

export default connect(mapStateToProps)(CSSModules(ResetButton, styles));