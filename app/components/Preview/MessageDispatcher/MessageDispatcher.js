import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

// Components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

// Images
import MicIcon from 'material-ui/svg-icons/av/mic';
import AttachFileIcon from 'material-ui/svg-icons/editor/attach-file';
import InsertEmoticonIcon from 'material-ui/svg-icons/editor/insert-emoticon';

// Styles
import styles from './MessageDispatcher.css';


class MessageDispatcher extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }


    render() {

        return (
            <AppBar
                zDepth={0}
                title='Write a message...'
                titleStyle={{
                    color: '#999',
                    fontSize: 14,
                    height: 46,
                    lineHeight: '46px',
                }}
                style={{
                    background: 'transparent',
                    borderTop: '1px solid #E7E7E7',
                    height: 46
                }}
                iconElementLeft={
                    <IconButton
                        style={{
                            height: 40,
                            width: 40,
                            padding: 0,
                            marginTop: -6
                        }}
                        iconStyle={{
                            fill: '#A8A8A8',
                            transform: 'rotate(-145deg)'
                        }}
                    >
                        <AttachFileIcon />
                    </IconButton>
                }
                iconElementRight={
                    <div>
                        <IconButton
                            style={{
                                height: 40,
                                width: 40,
                                padding: 0,
                                marginTop: -6
                            }}
                            iconStyle={{
                                fill: '#A8A8A8'
                            }}
                        >
                            <InsertEmoticonIcon />
                        </IconButton>
                        <IconButton
                            style={{
                                height: 40,
                                width: 40,
                                padding: 0,
                                marginTop: -6
                            }}
                            iconStyle={{
                                fill: '#A8A8A8'
                            }}
                        >
                            <MicIcon />
                        </IconButton>
                    </div>
                }
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
};

export default connect(mapStateToProps)(CSSModules(MessageDispatcher, styles));
