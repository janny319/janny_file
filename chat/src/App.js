import React, { useState } from 'react';
import ChatUI from './chatting/Chatting';
import './reset.css';
import './App.css';

function App() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChat = () => {
    console.log('Toggling chat visibility');
    setIsChatVisible(prevState => !prevState);
  };

  console.log('isChatVisible:', isChatVisible);

  return (
    <>
      <div className='chat-wrap'>
        {!isChatVisible && (
            <button className='floating-btn' onClick={toggleChat}>
              <div className='speech-bubble'>도움이 필요하신가요? SKT 챗봇이 도와드려요.</div>
              <div className='btn-chatting'></div>
            </button>
        )}
        {isChatVisible && <ChatUI onEndChat={toggleChat} />}
      </div>
    </>
  );
}

export default App;
