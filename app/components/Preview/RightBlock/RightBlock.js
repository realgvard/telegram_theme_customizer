import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

// Components
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import SearchIcon from 'material-ui/svg-icons/action/search';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Chat from 'components/Preview/Chat';
import MessageDispatcher from 'components/Preview/MessageDispatcher';

// Styles
import styles from './RightBlock.css';


class RightBlock extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const {
            searchIsActive
        } = this.state;

        return (
            <div styleName='right-block'>
                <AppBar
                    zDepth={0}
                    title={
                        <div>
                            <div style={{
                                color: '#000',
                                fontSize: 12,
                                letterSpacing: 0.5,
                                height: 10,
                                marginTop: -10,
                                fontWeight: 'bold'
                            }}>Eva Summer</div>
                            <div style={{
                                color: '#43A8E6',
                                fontSize: 12,
                                height: 10,
                                letterSpacing: 0.5,
                                fontWidth: 100,
                                marginTop: 10
                            }}>online</div>
                        </div>
                    }
                    showMenuIconButton={false}
                    titleStyle={{
                        height: 52,
                        lineHeight: '52px',
                    }}
                    style={{
                        background: 'transparent',
                        borderBottom: '1px solid #E7E7E7',
                        height: 52
                    }}
                    iconElementRight={
                        <div>
                            <IconButton
                                style={{
                                    marginTop: -6
                                }}
                                iconStyle={{
                                    fill: '#A8A8A8',
                                    transform: 'rotate(90deg)'
                                }}
                            >
                                <SearchIcon />
                            </IconButton>
                            <IconButton
                                style={{
                                    marginTop: -6
                                }}
                                iconStyle={{
                                    fill: '#A8A8A8'
                                }}
                            >
                                <MoreVertIcon />
                            </IconButton>

                            {/*<IconMenu*/}
                            {/*iconButtonElement={*/}
                            {/*<IconButton*/}
                            {/*iconStyle={{*/}
                            {/*fill: '#A8A8A8'*/}
                            {/*}}*/}
                            {/*><MoreVertIcon /></IconButton>*/}
                            {/*}*/}
                            {/*targetOrigin={{horizontal: 'right', vertical: 'top'}}*/}
                            {/*anchorOrigin={{horizontal: 'right', vertical: 'top'}}*/}
                            {/*>*/}
                            {/*<MenuItem primaryText="View profile" />*/}
                            {/*<MenuItem primaryText="Enable notification" />*/}
                            {/*<MenuItem primaryText="Search for message" />*/}
                            {/*<MenuItem primaryText="Delete conversation" />*/}
                            {/*<MenuItem primaryText="Clear history" />*/}
                            {/*<MenuItem primaryText="Block user" />*/}
                            {/*</IconMenu>*/}
                        </div>
                    }
                />

                <Chat />

                <MessageDispatcher />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
};

export default connect(mapStateToProps)(CSSModules(RightBlock, styles));
