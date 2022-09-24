import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import image from '../img/login.jpg';

const Login = () => {
  const [err, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center ">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-white p-4 shadow-lg shadow-gray-200 "
        >
          <h2 className="text-4xl font-bold text-center py-6 ">STPC.</h2>
          <input
            type="email"
            placeholder="Email"
            className="flex flex-col p-2 w-full mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="flex flex-col p-2 w-full"
          />

          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-400 text-white">
            Sign In
          </button>
          {err && <span style={{ color: 'red' }}>Something went wrong</span>}

          <p>
            You don't have an account?{' '}
            <Link to="/register" className="text-indigo-600">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
