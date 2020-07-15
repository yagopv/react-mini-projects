import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSocket } from '../hooks/useSocket';
import { useChat } from '../hooks/useChat';
import { UserForm } from './UserForm';

export function Chat(url) {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const { isConnected, messages, addUser, addMessage } = useChat(
    'http://localhost:4200'
  );

  if (!user) {
    return (
      <UserForm
        onUserNameSelected={user => {
          setUser(user);
          addUser(user);
        }}
      />
    );
  }

  if (messages.length === 0) {
    return <span>Connecting to the chat server ...</span>;
  }

  return (
    <section>
      <ul>
        {messages.map(message => (
          <li>{message}</li>
        ))}
      </ul>

      <div id="message-container"></div>

      {isConnected && <p>Connected</p>}
      {!isConnected && <p>Not connected</p>}

      <div id="send-container">
        <input
          type="text"
          id="message-input"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button
          id="send-button"
          onClick={() => {
            addMessage(message);
            setMessage('');
          }}
        >
          Send
        </button>
      </div>
    </section>
  );
}
