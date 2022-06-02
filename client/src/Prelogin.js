import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export function Prelogin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('loggedIn') == 'true') {
      navigate('../home');
    }
  }, []);

  function login() {
    navigate('login');
  }
  function register() {
    navigate('register');
  }
  return (
    <div className="Prelogin">
      <header className="Prelogin-header">
          <p>Home</p>
          <button onClick={() => login()}>Login</button>
          <button onClick={() => register()}>Register</button>
      </header>
    </div>
  );
}

