import React, { Component } from 'react';

class MessageList extends Component {

  render(){
    const messages = this.props.messages;
    console.log(messages)
    return (
      <ul className="message-list">
        {
          messages.map(message =>
            <li key={message.id}>
              <div>
                {message.senderId}
              </div>
              <div>
                {message.text}
              </div>
            </li>
          )
        }
      </ul>
    );
  }
}

export default MessageList;
