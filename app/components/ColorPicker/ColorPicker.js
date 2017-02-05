import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import { SketchPicker, Compact, Swatch } from 'react-color';

import {
    changeEditorData,
    setFavoriteColor
} from 'components/SidebarEditor/actions';

// Styles
import styles from './ColorPicker.css';


@CSSModules(styles)
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
        this._invokeFavoriteColor();

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
            positionY = positionY - (positionY + this.HEIGHT_COLOR_PICKER - window.innerHeight);
        }

        setTimeout(() => {
            this.setState({
                displayColorPicker: true,
                left: left + width,
                top: positionY
            });

            this._setFocus();
        }, 0);
    }

    _invokeFavoriteColor() {
        const color = this.props.defaultColor;

        const isActive = this.state.displayColorPicker;

        if(isActive) {

            this.props.dispatch(setFavoriteColor(color));
        }
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

    _setFocus() {
        const component = ReactDOM.findDOMNode(this.refs.SketchPicker);

        component.querySelector('input:first-child').focus();
    }

    componentDidMount() {
        this.props.parentContainer.addEventListener('scroll', ::this._closePicker);
        window.addEventListener('click', ::this._handleDocumentClick, true);
        window.addEventListener('resize', ::this._closePicker);
    }

    componentWillUnmount () {
        this.props.parentContainer.removeEventListener('scroll', ::this._closePicker);
        window.removeEventListener('click', ::this._handleDocumentClick);
        window.removeEventListener('resize', ::this._closePicker);
    }

    render() {
        const {
            defaultColor,
            favoriteColors
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
                        presetColors={favoriteColors}
                        onChange={::this._handleChange}
                    />
                </div> : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favoriteColors: state.editor.favoriteColors
    }
};

export default connect(mapStateToProps)(ColorPicker);