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

        this.HEIGHT_COLOR_PICKER = 290;

        this.state = {
            displayColorPicker: false,
            color: '#000000',
            left: 0,
            top: 0
        };
    }

    _closePicker() {
        this.setState({ displayColorPicker: false })
    }

    _handleDocumentClick(e) {
        const area = ReactDOM.findDOMNode(this.refs.SketchPicker);

        if (area &&
            this.state.displayColorPicker &&
            !area.contains(e.target)) {

            this._closePicker();
        }
    }

    _handleOpen() {
        const {
            top,
            left,
            width,
            height
        } = this.refs.swatch.getBoundingClientRect();

        let positionY = top + height;

        if((positionY + this.HEIGHT_COLOR_PICKER) > window.innerHeight) {
            // console.log('fuck', positionY + this.HEIGHT_COLOR_PICKER - window.innerHeight)
            positionY = positionY - (positionY + this.HEIGHT_COLOR_PICKER - window.innerHeight);
        }

        setTimeout(() => {


            this.setState({
                displayColorPicker: true,
                left: left + width,
                top: positionY
            });
        }, 0);
    }

    _handleChange(color) {
        const {
            dispatch,
            id,
            childId,
            elementKey
        } = this.props;

        dispatch(changeEditorData(id, childId, { color: color.hex, key: elementKey }));
    }

    componentDidMount() {
        this.props.parentContainer.addEventListener('scroll', ::this._closePicker);
        window.addEventListener('click', ::this._handleDocumentClick);
        window.addEventListener('resize', ::this._closePicker);
    }

    componentWillUnmount () {
        this.props.parentContainer.removeEventListener('scroll', ::this._closePicker);
        window.removeEventListener('click', ::this._handleDocumentClick);
        window.removeEventListener('resize', ::this._closePicker);
    }

    render() {
        const {
            defaultColor
        } = this.props;

        const {
            left,
            top
        } = this.state;


        return (
            <div styleName="container">
                <div
                    ref="swatch"
                    styleName="swatch"
                    onClick={ ::this._handleOpen }
                >
                    <div styleName="color" style={{
                        background: defaultColor
                    }} />
                </div>

                { this.state.displayColorPicker ? <div
                    styleName="popover"
                    style={{
                        left,
                        top
                    }}
                >
                    <SketchPicker
                        ref="SketchPicker"
                        width={200}
                        color={defaultColor}
                        disableAlpha={true}
                        onChange={::this._handleChange}
                    />
                </div> : null }
            </div>
        );
    }
}

export default connect()(CSSModules(ColorPicker, styles));