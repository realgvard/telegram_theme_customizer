import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

// Components
import ChatHeader from 'components/Preview/RightBlock/ChatHeader';
import Chat from 'components/Preview/RightBlock/Chat';
import MessageDispatcher from 'components/Preview/RightBlock/MessageDispatcher';

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
                <ChatHeader />

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
