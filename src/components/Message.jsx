import React from 'react';

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/13623557/pexels-photo-13623557.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/6389849/pexels-photo-6389849.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
