import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export function useSocket(...args) {
  const [socket, setSocket] = useState(io(...args));

  useEffect(() => {
    return () => {
      socket.removeAllListeners();
      socket.close();
    };
  }, [socket]);

  return [socket, setSocket];
}
