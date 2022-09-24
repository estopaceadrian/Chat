import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex p-2 justify-between">
      <div>
        <h2 className="text-2xl font-bold py-2 ">Chats</h2>
        <div className="ml-2 flex">
          <img
            src={currentUser.photoURL}
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <span className="font-semibold text-center py-2 ml-2">
            {currentUser.displayName}
          </span>
        </div>
      </div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <button onClick={() => signOut(auth)}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
