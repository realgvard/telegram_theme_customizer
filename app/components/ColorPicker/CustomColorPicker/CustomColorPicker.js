import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import _ from 'lodash';
import muiThemeable from 'material-ui/styles/muiThemeable';

// Components
import { CirclePicker } from 'react-color';
let { Saturation } = require('react-color/lib/components/common');
let { Alpha, Hue, EditableInput } = require('react-color/lib/components/common');

import { CustomPicker } from 'react-color';
import SliderPointer from 'react-color/lib/components/slider/SliderPointer';
import PhotoshopPointerCircle from 'react-color/lib/components/photoshop/PhotoshopPointerCircle';

import Paper from 'material-ui/Paper';

// JS
import { hexToArgb } from 'libs/colorParser';

// Styles
import styles from './CustomColorPicker.scss';


@muiThemeable()
@CSSModules(styles, { allowMultiple: true })
class CustomColorPicker extends Component {


    _onChangeHandle(data) {

        Object.assign(this.props.rgb, data);

        this.props.onChange(this.props.rgb);
    }

    _onCircleChangeHandle(data) {

        this.props.onChangeCircle(data);
    }

    _getHexValue() {
        const alpha = this.props.rgb.a;

        return (alpha !== 1 ? hexToArgb(this.props.hex, alpha) : this.props.hex);
    }

    render() {
        const {
            cssStyles: {
                paper,
                saturation: {
                    widthAndHeight
                }
            },
            defaultColor,
            presetColors
        } = this.props;

        const hexColor = this._getHexValue();


        return (
            <Paper
                zDepth={1}
                style={{
                    padding: paper.padding,
                    width: paper.width
                }}
                styleName="container"
            >

                <div styleName="left-block">
                    <div
                        styleName="saturation"
                        style={{
                            height: widthAndHeight - (paper.padding * 2),
                        }}
                    >
                        <Saturation
                            {...this.props}
                            pointer={PhotoshopPointerCircle}
                        />
                    </div>

                    <div
                        styleName="alpha-container"
                    >
                        <Alpha
                            {...this.props}
                            pointer={SliderPointer}
                        />
                    </div>
                </div>

                <div styleName="right-block">
                    <div
                        styleName="hue-container"
                        style={{
                            height: widthAndHeight - (paper.padding * 2)
                        }}
                    >
                        <Hue
                            {...this.props}
                            pointer={SliderPointer}
                            direction="vertical"
                        />
                    </div>
                </div>

                <div styleName="clearfix"></div>

                <div styleName="footer">

                    <div styleName="footer-block">
                        <div styleName="initial-color">
                            {defaultColor ?
                                <CirclePicker
                                    {...this.props}
                                    colors={[defaultColor]}
                                    onChange={::this._onCircleChangeHandle}
                                />
                            : null}
                        </div>

                        <div className="hex-rgb-block">
                            <div styleName="editable-input hex-input">
                                <EditableInput
                                    label="hex"
                                    value={hexColor}
                                    {...this.props}
                                />
                            </div>

                            <div styleName="editable-input rgb-input">
                                <EditableInput
                                    label="r"
                                    value={this.props.rgb.r}
                                    {...this.props}
                                    onChange={::this._onChangeHandle}
                                />
                            </div>

                            <div styleName="editable-input rgb-input">
                                <EditableInput
                                    label="g"
                                    value={this.props.rgb.g}
                                    {...this.props}
                                    onChange={::this._onChangeHandle}
                                />
                            </div>

                            <div styleName="editable-input rgb-input">
                                <EditableInput
                                    label="b"
                                    value={this.props.rgb.b}
                                    {...this.props}
                                    onChange={::this._onChangeHandle}
                                />
                            </div>
                        </div>
                    </div>

                    {presetColors && presetColors.length > 0 ?
                        <div styleName="favorite-color">
                            <h5 styleName="small-title">Favorite colors</h5>

                            <CirclePicker
                                {...this.props}
                                colors={presetColors}
                                onChange={::this._onCircleChangeHandle}
                            />
                        </div>
                    : null}
                </div>

            </Paper>
        );
    }
}

CustomColorPicker.defaultProps = {
    cssStyles: {
        paper: {
            padding: 10,
            width: 270
        },
        saturation: {
            widthAndHeight: 252,
        }
    }
};

export default CustomPicker(CustomColorPicker);