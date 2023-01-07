import React from 'react';
import SVG from "react-inlinesvg";
import LogoIcon from '../assets/img/logo.svg'

const Logo = () => {
  return (
    <div className="logo">
      <SVG src={LogoIcon} />
      <span className="text">ICE</span>
    </div>
  );
};

export default Logo;