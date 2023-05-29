import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export const Login = () => {
  const auth = useAuth()
  return (
    <>
      {auth.user
        ?
        <div className="bg-gray-700 flex justify-center items-center h-screen ">
          <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8">
            <p className="text-white text-lg">Ya tienes una sesión iniciada</p>
            <a href='/'>Ve al home</a>
          </div>
        </div>
        :
        <LoginForm />
      }
    </>
  )
};
