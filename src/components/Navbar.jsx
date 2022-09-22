import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Stopey Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/12145393/pexels-photo-12145393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>adrian</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
