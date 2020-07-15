import { useState, useEffect } from 'react';
import { useSocket } from './useSocket';

export function useChat(url) {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  const [socket] = useSocket(url);

  useEffect(() => {
    socket.on('load-old-msgs', function(messages) {
      setMessages(
        messages.map(
          message => `${message.name}, ${message.message}, ${message.createdAt}`
        )
      );
    });

    socket.on('chat-message', data => {
      setMessages([
        ...messages,
        `${data.name}, ${data.message}, ${data.createdAt}`
      ]);
    });

    socket.on('user-connected', name => {
      setIsConnected(true);
    });

    socket.on('user-disconnected', name => {
      setIsConnected(false);
    });

    return () => socket.removeAllListeners();
  }, [socket, messages]);

  const addUser = name => socket.emit('new-user', name);
  const addMessage = message => socket.emit('send-chat-message', message);

  return {
    isConnected,
    messages,
    addUser,
    addMessage
  };
}
