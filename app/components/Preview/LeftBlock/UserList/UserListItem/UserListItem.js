import React, { Component } from 'react';
import reactCSS, { hover } from 'reactcss';


class UserListItem extends Component {

    render() {
        const ListItemComponent = this.props.component;
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
                className={className}
                style={{
                    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1)',
                    ...style,
                    ...styles.button
                }}
            >
                <ListItemComponent
                    ref="ButtonComponent"
                    style={iconStyle}
                    {...ownProps}
                />
            </div>
        );
    }
}

export default hover(UserListItem);
