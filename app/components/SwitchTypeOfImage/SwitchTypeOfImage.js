import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

// Components
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

// Actions
import { changeBackgroundType } from 'components/SidebarEditor/actions';

// Styles
import styles from './SwitchTypeOfImage.css';


class SwitchTypeOfImage extends Component {

    _onChangeGroup(e, value) {
        this.props.dispatch(changeBackgroundType(value));
    }


    render() {
        const {
            label
        } = this.props;

        return (
            <RadioButtonGroup
                name="shipSpeed"
                defaultSelected="background"
                onChange={::this._onChangeGroup}
            >
                <RadioButton
                    value="background"
                    label="Background"
                />
                <RadioButton
                    value="tiled"
                    label="Tiled"
                    style={{
                        marginTop: 5
                    }}
                />
            </RadioButtonGroup>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {

    }
};

export default connect(mapStateToProps)(CSSModules(SwitchTypeOfImage, styles));