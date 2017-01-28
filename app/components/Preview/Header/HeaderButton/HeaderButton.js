import React, { Component } from 'react';
import reactCSS, { hover } from 'reactcss';
import ReactDOM from 'react-dom';


class HeaderButton extends Component {

    // _onHintTextClick() {
    //     const component = ReactDOM.findDOMNode(this.refs.ButtonComponent);
    //
    //     console.dir(component)
    //     // component.mouseenter();
    // }
    //
    // componentDidMount() {
    //     this.refs.container.addEventListener('mouseenter', ::this._onHintTextClick, false);
    // }
    //
    // componentWillUnmount() {
    //     this.refs.container.removeEventListener('mouseenter', this._onHintTextClick);
    // }

    render() {
        const ButtonComponent = this.props.component;
        const styles = reactCSS({
            'hover': {
                button: {
                    background: this.props.backgroundColor,
                },
            },
        }, this.props, this.state);

        const {
            className,
            style,
            iconStyle,
            ownProps
        } = this.props;


        return (
            <div
                ref="container"
                className={className}
                style={{
                    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',
                    ...style,
                    ...styles.button
                }}
            >
                <ButtonComponent
                    ref="ButtonComponent"
                    style={iconStyle}
                    {...ownProps}
                />
            </div>
        );
    }
}

export default hover(HeaderButton);
