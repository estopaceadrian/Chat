import React, { useContext } from 'react';
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="flex flex-col flex-grow">
      <div className="flex w-full h-14 mt-2 justify-between  ">
        <div className="flex items-center">
          <div className="p-4">
            <img
              src={data.user.photoURL}
              alt=""
              className="w-11 h-11 object-fill rounded-full"
            />
          </div>
          <div className="p-2">
            <div className="font-semibold">{data.user.displayName}</div>
          </div>
        </div>
        <div className="flex p-3">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
