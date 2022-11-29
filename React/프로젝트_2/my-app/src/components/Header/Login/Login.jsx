import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <li className="profile-img">
        <Link to="/">
          <img src="./assets/profile.jpg" alt="My Page" />
        </Link>
      </li>
      <li>
        <Link to="/" className="button">
          <img src="./assets/icon-modify-white.svg" alt="" />
          <span>Write</span>
        </Link>
      </li>
      <li>
        <button className="button white">
          <img src="./assets/icon-logout.svg" alt="" />
          <span>Logout</span>
        </button>
    </li>
    </>
  )
}
