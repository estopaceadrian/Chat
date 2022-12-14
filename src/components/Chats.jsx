import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({ type: 'CHANGE_USER', payload: user });
  };

  return (
    <div className="flex flex-col">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="flex m-3 bg-white rounded-lg p-2"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
              src={chat[1].userInfo.photoURL}
              alt=""
              className="w-14 h-14 rounded-full object-contain "
            />
            <div className="flex-grow   p-2">
              <span className="font-semibold text-gray-900">
                {chat[1].userInfo.displayName}
              </span>
              <p className="text-xs text-gray-400">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
