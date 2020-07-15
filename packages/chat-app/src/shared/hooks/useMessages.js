import { useState, useEffect } from 'react';
import { useFirebase } from '../context/firebase-context';

export function useMessages(channelName) {
  const [messages, setMessages] = useState();
  const { db, auth } = useFirebase();
  const { uid, displayName, photoURL, email } = auth.currentUser;

  useEffect(() => {
    if (channelName) {
      db.collection('channels')
        .doc(channelName)
        .collection('messages')
        .onSnapshot((snapshot) => {
          const m = [];
          snapshot.forEach(function (doc) {
            m.push({ id: doc.id, ...doc.data() });
          });
          setMessages(m);
        });
    }
  }, [db, channelName]);

  const addMessage = (channelName, value) => {
    if (!value) {
      return;
    }
    console.log(auth.currentUser);
    return db
      .collection('channels')
      .doc(channelName)
      .collection('messages')
      .add({
        message: value,
        createdAt: Date.now(),
        author: {
          uid,
          displayName: displayName || email,
          avatar: photoURL,
        },
      });
  };

  return { addMessage, messages, setMessages };
}
