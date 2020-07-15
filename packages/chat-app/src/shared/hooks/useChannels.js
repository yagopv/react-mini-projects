import { useEffect, useState, useMemo } from 'react';
import firebase from 'firebase/app';
import { useFirebase } from '../context/firebase-context';
import { useDebounce } from './useDebounce';
import { slugify } from '../utils';

export function useChannels() {
  const [channels, setChannels] = useState([]);
  const [myChannels, setMyChannels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { user, db } = useFirebase();
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    const unsubscribe = db.collection('channels').onSnapshot((snapshot) => {
      const docs = [];
      snapshot.forEach((doc) => {
        docs.push(doc.id);
      });
      setChannels(docs);
    });

    db.collection('channels')
      .where('members', 'array-contains', user.uid)
      .onSnapshot((snapshot) => {
        const docs = [];
        snapshot.forEach((doc) => {
          docs.push(doc.id);
        });
        setMyChannels(docs);
      });

    return () => unsubscribe();
  }, []);

  const filteredChannels = useMemo(() => {
    if (debouncedSearchTerm.length <= 3) {
      return [];
    }

    return channels.filter((channel) =>
      channel.startsWith(debouncedSearchTerm)
    );
  }, [debouncedSearchTerm]);

  const addChannel = (value) => {
    if (value.length < 5) {
      return;
    }

    const slug = slugify(value);

    return db
      .collection('channels')
      .doc(slug)
      .set({
        name: value,
        members: [user.uid],
      });
  };

  const addMeAsMember = (channel) => {
    return db
      .collection('channels')
      .doc(channel)
      .update({
        members: firebase.firestore.FieldValue.arrayUnion(user.uid),
      });
  };

  return {
    myChannels,
    filteredChannels,
    setSearchTerm,
    addChannel,
    addMeAsMember,
  };
}
