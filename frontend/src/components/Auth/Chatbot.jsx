// Chatbot.jsx
import React, { useState } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';


function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);

  const handleNewUserMessage = (newMessage) => {
    // Handle user message here
    console.log(`New message incoming! ${newMessage}`);
    // Example response from bot
    addResponseMessage('Hello! How can I assist you?');
  };

  const handleChatToggle = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div>
      <button onClick={handleChatToggle}>{chatOpen ? 'Close Chat' : 'Open Chat'}</button>
      {chatOpen && (
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Chatbot"
          subtitle="Your virtual assistant"
        />
      )}
    </div>
  );
}

export default Chatbot;
