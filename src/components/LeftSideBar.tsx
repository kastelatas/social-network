import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <Link to="/" className="left-sidebar_link">My Profile</Link>
      <Link to="/chats" className="left-sidebar_link">Chats</Link>
      <Link to="/friends" className="left-sidebar_link">Friends</Link>
    </div>
  );
};

export default LeftSideBar;