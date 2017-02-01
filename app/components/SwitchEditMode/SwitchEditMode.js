import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

// Components
import Toggle from 'material-ui/Toggle';

// Actions
import { changeEditMode } from 'components/SidebarEditor/actions';

// Styles
import styles from './SwitchEditMode.css';


class SwitchEditMode extends Component {

    _onToggle(e, nextValue) {
        this.props.dispatch(changeEditMode(nextValue));
    }

    render() {
        const { toggled } = this.props;


        return (
            <Toggle
                label="Edit mode"
                defaultToggled={toggled}
                labelStyle={{
                    color: '#fff'
                }}
                labelPosition="right"
                onToggle={::this._onToggle}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        toggled: state.editor.editMode
    }
};

export default connect(mapStateToProps)(CSSModules(SwitchEditMode, styles));