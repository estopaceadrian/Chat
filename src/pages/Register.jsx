import React, { useState } from 'react';
import Add from '../img/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import image from '../img/trees.jpg';

const Register = () => {
  const [error, setError] = useState(' ');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {});
            navigate('/');
          } catch (error) {
            setError(error.message);

            setLoading(false);
          }
        });
      });
    } catch (error) {
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/user-disabled' ||
        error.code === 'auth/user-not-found'
      ) {
        setError(error.message);
      } else if (error.code === 'auth/wrong-password') {
        setError(error.message);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        src={image}
        alt=""
        className="absolute w-full h-full object-cover mix-blend-overlay "
      />
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-white p-8"
        >
          <h4 className="text-4xl font-bold text-center py-4 ">STPC.</h4>
          <input
            type="text"
            placeholder="Display Name"
            className="border relative bg-gray-100 p-2 w-full mt-4"
          />
          <span className="ml-2 text-pink-400 align-center">{error}</span>
          <input
            type="email"
            placeholder="Email"
            className="border relative bg-gray-100 p-2 w-full mt-4"
          />
          <span className="ml-2 text-pink-400 align-center">{error}</span>
          <input
            type="password"
            placeholder="Password"
            className="border relative bg-gray-100 p-2 w-full mt-4"
          />
          <span className="ml-2 text-pink-400 align-center">{error}</span>
          <input style={{ display: 'none' }} type="file" id="file" />
          <label
            htmlFor="file"
            className="flex relative cursor-pointer gap-2 mt-4"
          >
            <img src={Add} alt="" />
            <span className="text-indigo-600 relative hover:text-indigo-400 mt-4">
              Add an avatar
            </span>
          </label>
          <span className="ml-2 text-pink-400 align-center">{error}</span>
          <button className="border relative w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-400 text-white">
            Sign Up
          </button>
          {loading && 'Uploading and compressing the image please wait...'}

          <p className="font-light">
            You do have an account?{' '}
            <Link
              to="/login"
              className="text-indigo-600 relative hover:text-indigo-400"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
