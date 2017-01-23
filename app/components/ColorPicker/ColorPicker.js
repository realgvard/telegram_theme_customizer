import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

// Components
import { SketchPicker } from 'react-color';

import {
    changeEditorData
} from 'components/Editor/actions';

// Styles
import styles from './ColorPicker.css';


class ColorPicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayColorPicker: false,
            color: '#000000',
            // color: {
            //     r: '241',
            //     g: '112',
            //     b: '19',
            //     a: '1',
            // }
        };
    }

    // _setColor(color) {
    //     this.setState({ color: color })
    // }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        const {
            dispatch,
            id,
            elementKey
        } = this.props;

        // this._setColor(color.hex);

        dispatch(changeEditorData(id, { color: color.hex, key: elementKey }));
    };

    // componentWillUpdate(nextProps) {
    //
    //
    //     if(this.props.defaultColor !== this.state.color) {
    //         this._setColor(this.props.defaultColor);
    //     }
    // }

    // componentDidMount() {
    //     this._setColor(this.props.defaultColor);
    // }

    render() {
        const {
            defaultColor
        } = this.props;

        return (
            <div styleName="container">
                <div styleName="swatch" onClick={ this.handleClick }>
                    <div styleName="color" style={{
                        background: defaultColor
                    }} />
                </div>
                { this.state.displayColorPicker ? <div styleName="popover">
                    <div styleName="cover" onClick={ this.handleClose }/>
                    <SketchPicker
                        width={225}
                        color={ defaultColor }
                        onChange={ this.handleChange }
                    />
                </div> : null }
            </div>
        );
    }
}

export default connect()(CSSModules(ColorPicker, styles));