import React, { useState } from 'react';
import { QuestionCircleOutlined,CloseOutlined } from '@ant-design/icons';

import ChatBot from 'react-simple-chatbot';

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState([]);

  const handleEnd = (values) => {
    // Check if user data is already logged
    if (userData.length === 0) {
      // Logging the data that the user enters
      console.log('User Data:', values);

      // Setting user data
      setUserData(values);
    }
  };

  const handleUserInput = (input) => {
    // Log user input
    console.log('User Input:', input);
    // Return true to validate input
    return true;
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const steps = [
    {
      id: '1',
      message: 'Hello! How can I assist you today?',
      trigger: 'response1',
    },
    {
      id: 'response1',
      user: true,
      trigger: 'response2',
      validator: handleUserInput,
    },
    {
      id: 'response2',
      message: 'Thank you for your message! We will get back to you shortly.',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: 'response3',
      validator: handleUserInput,
    },
    {
      id: 'response3',
      message: 'Response 2',
      trigger: '3',
    },
    {
      id: '3',
      user: true,
      trigger: 'response4',
      validator: handleUserInput,
    },
    {
      id: 'response4',
      message: 'Response 3',
      trigger: '4',
    },
    {
      id: '4',
      user: true,
      trigger: 'response5',
      validator: handleUserInput,
    },
    {
      id: 'response5',
      message: 'Response 4',
      trigger: '5',
    },
    {
      id: '5',
      user: true,
      trigger: 'response6',
      validator: handleUserInput,
    },
    {
      id: 'response6',
      message: 'Response 5',
      trigger: '6',
    },
    {
      id: '6',
      user: true,
      trigger: 'response7',
      validator: handleUserInput,
    },
    {
      id: 'response7',
      message: 'Response 6',
      trigger: '7',
    },
    {
      id: '7',
      user: true,
      trigger: 'response8',
      validator: handleUserInput,
    },
    {
      id: 'response8',
      message: 'Response 7',
      trigger: 'end',
    },
    {
      id: 'end',
      message: 'Thank you for chatting with us!',
      end: true,
    },
  ];

  return (
    <div>
      {isOpen ? (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '9999' }}>
          <ChatBot
            steps={steps}
            handleEnd={handleEnd}
          />
        </div>
      ) : (
        
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '9999' }}>
  {isOpen && (
    <div style={{ position: 'relative' }}>
      <CloseOutlined onClick={toggleChatbot} style={{ position: 'absolute', top: '-30px', right: '5px', fontSize: '24px', cursor: 'pointer', zIndex: '1001' }} />
      <ChatBot
        steps={steps}
        handleEnd={handleEnd}
      />
    </div>
  )}
  {!isOpen && (
    <QuestionCircleOutlined onClick={toggleChatbot} style={{ fontSize: '24px', cursor: 'pointer' }} />
  )}
</div>

      )}
    </div>
  );
};

export default SimpleChatbot;
