import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import io from 'socket.io-client'

const Base_Url="http://localhost:8080/"
const socket=io(Base_Url)
function Ws(props) {
  

  const handleNewUserMessage = (newMessage) => {
    socket.emit('message',newMessage)
  };
  useEffect(() => {
      socket.on('new-message',(data)=>{
        addResponseMessage(data);

      })
  }, []);

    return (
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
         
          title="My  title"
          subtitle="And my subtitle"
        />
      </div>
    );
}


export default WS