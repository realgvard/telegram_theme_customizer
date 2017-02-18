import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import Paper from 'material-ui/Paper';
import CustomColorPicker from './CustomColorPicker';

// Actions
import {
    changeEditorData,
    setFavoriteColor
} from 'components/SidebarEditor/actions';

// JS
import { getParsedColor } from 'libs/colorParser';

// Styles
import styles from './ColorPicker.css';


@CSSModules(styles, { allowMultiple: true })
class ColorPicker extends Component {

    constructor(props) {
        super(props);

        this.HEIGHT_COLOR_PICKER = 400;

        this.state = {
            displayColorPicker: false,
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
        const position = this.props.position;

        if(position === 'fixed') {
            const {
                top,
                left,
                width,
                height
            } = this.refs.swatch.getBoundingClientRect();


            let positionY = top + height;

            if ((positionY + this.HEIGHT_COLOR_PICKER) > window.innerHeight) {
                positionY = positionY - (positionY + this.HEIGHT_COLOR_PICKER - window.innerHeight);
            }

            this._setPosition(left + width, positionY)
        } else {
            const swatch = this.refs.swatch;
            const {
                width,
                height
            } = swatch.getBoundingClientRect();

            this._setPosition(swatch.offsetLeft + width, swatch.offsetTop + height)
        }
    }

    _invokeFavoriteColor() {
        const color = this.props.color;

        const isActive = this.state.displayColorPicker;

        if(isActive) {

            this.props.dispatch(setFavoriteColor(color));
        }
    }

    _setPosition(x, y) {
        setTimeout(() => {
            this.setState({
                displayColorPicker: true,
                left: x,
                top: y
            });
        }, 0);
    }

    componentDidMount() {
        const { parentContainer } = this.props;

        if(parentContainer) {
            parentContainer.addEventListener('scroll', ::this._closePicker);
        }

        window.addEventListener('click', ::this._handleDocumentClick, true);
        window.addEventListener('resize', ::this._closePicker);
    }

    componentWillUnmount () {
        const { parentContainer } = this.props;

        if(parentContainer) {
            parentContainer.removeEventListener('scroll', ::this._closePicker);
        }

        window.removeEventListener('click', ::this._handleDocumentClick);
        window.removeEventListener('resize', ::this._closePicker);
    }

    render() {
        const {
            position,
            className,
            onChange,
            watchWidth,
            defaultColor,
            favoriteColors
        } = this.props;

        const {
            left,
            top
        } = this.state;

        const color = getParsedColor(this.props.color) === defaultColor ? defaultColor : this.props.color;


        return (
            <div styleName={`container ${className}`}>
                <div
                    ref="swatch"
                    styleName="swatch"
                    style={{
                        width: watchWidth
                    }}
                    onClick={ ::this._handleOpen }
                >
                    <Paper
                        zDepth={1}
                        styleName="color"
                        style={{
                            background: color
                        }}
                    >
                    </Paper>
                </div>

                { this.state.displayColorPicker ? <div
                    styleName="popover"
                    style={{
                        left,
                        top,
                        position
                    }}
                >

                    <CustomColorPicker
                        ref="SketchPicker"
                        color={color}
                        defaultColor={getParsedColor(defaultColor)}
                        presetColors={favoriteColors}
                        onChange={onChange}
                        onChangeCircle={onChange}
                    />
                </div> : null}
            </div>
        );
    }
}

ColorPicker.defaultProps = {
    onChange: () => {},
    color: '#ff00ff',
    position: 'fixed',
    className: '',
    watchWidth: '100%'
};

const mapStateToProps = (state) => {
    return {
        favoriteColors: state.editor.favoriteColors
    }
};

export default connect(mapStateToProps)(ColorPicker);