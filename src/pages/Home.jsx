import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
const Home = () => {
  return (
    <div className="bg-neutral-800 p-12 flex h-screen ">
      <div className=" w-1/3 mr-5 drop-shadow-xl">
        <Sidebar />
      </div>
      <div className="w-2/3 bg-blue-100 ">
        <Chat />
      </div>
    </div>
  );
};

export default Home;
