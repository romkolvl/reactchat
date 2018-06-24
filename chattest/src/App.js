import React, {Component} from 'react';
import MessageList from './MessageList';

class App extends Component {

  render() {
    const messages = this.props.data;
    return (
      <div className="App">
        {/*<Title/>*/}
        <MessageList messages={messages} />
        {/*<SendMessageForm/>*/}
      </div>
    );
  }
}

export default App;
