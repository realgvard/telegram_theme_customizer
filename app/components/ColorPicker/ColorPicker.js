import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import { SketchPicker } from 'react-color';

import {
    changeEditorData
} from 'components/SidebarEditor/actions';

// Styles
import styles from './ColorPicker.css';


class ColorPicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayColorPicker: false,
            color: '#000000',
        };
    }

    handleDocumentClick = (e) => {
        const area = ReactDOM.findDOMNode(this.refs.SketchPicker);

        if (area &&
            this.state.displayColorPicker &&
            !area.contains(e.target)) {

            this.setState({ displayColorPicker: false })
        }
    };

    handleOpen = () => {
        setTimeout(() => {
            this.setState({ displayColorPicker: true })
        }, 0);
    };

    handleChange = (color) => {
        const {
            dispatch,
            id,
            childId,
            elementKey
        } = this.props;

        dispatch(changeEditorData(id, childId, { color: color.hex, key: elementKey }));
    };

    componentDidMount() {
        window.addEventListener('click', ::this.handleDocumentClick)
    }

    componentWillUnmount () {
        window.removeEventListener('click', ::this.handleDocumentClick)
    }

    render() {
        const {
            defaultColor
        } = this.props;

        return (
            <div styleName="container">
                <div styleName="swatch" onClick={ this.handleOpen }>
                    <div styleName="color" style={{
                        background: defaultColor
                    }} />
                </div>
                { this.state.displayColorPicker ? <div
                    styleName="popover"
                >
                    <SketchPicker
                        ref="SketchPicker"
                        width={200}
                        color={defaultColor}
                        disableAlpha={true}
                        onChange={this.handleChange}
                    />
                </div> : null }
            </div>
        );
    }
}

export default connect()(CSSModules(ColorPicker, styles));