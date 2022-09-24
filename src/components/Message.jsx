import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  return (
    <div className="bg-gray-100 w-3/6 m-8 rounded-tl-lg rounded-r-lg p-1 flex">
      <div className="">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="w-11 h-11 rounded-full m-3"
        />
        <span className="text-sm text-gray-400">just now</span>
      </div>
      <div className="flex">
        <div className="p-3">
          <p className="text-md text-gray-600">{message.text}</p>
          {message.img && <img src={message.image} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Message;
